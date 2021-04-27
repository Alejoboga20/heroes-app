import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter, Route } from 'react-router';
import SearchScreen from '../../../components/search/SearchScreen';

describe('SearchScreen Tests', () => {
  const historyMock = {
    push: jest.fn()
  };

  const q = 'noHeroName';

  test('should display properly with default values', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <Route path='/search' component={SearchScreen} />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.alert-info').text()).toBe('Search a Hero');
  });

  test('should show query result [batman] and input set', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <Route path='/search' component={SearchScreen} />
      </MemoryRouter>
    );

    expect(wrapper.find('input').prop('value')).toBe('batman');
  });

  test('should show an error if no hero is found', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[`/search?q=${q}`]}>
        <Route path='/search' component={SearchScreen} />
      </MemoryRouter>
    );

    expect(wrapper.find('.alert-danger').text()).toBe(
      `There is no hero with ${q}`
    );
  });

  test('should call history push', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <Route
          path='/search'
          component={() => <SearchScreen history={historyMock} />}
        />
      </MemoryRouter>
    );

    wrapper.find('input').simulate('change', {
      target: {
        name: 'searchText',
        value: 'batman'
      }
    });

    wrapper.find('form').prop('onSubmit')({ preventDefault() {} });

    expect(historyMock.push).toHaveBeenCalledWith('?q=batman');
  });
});
