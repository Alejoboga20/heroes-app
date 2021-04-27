import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter, Route } from 'react-router';
import SearchScreen from '../../../components/search/SearchScreen';

describe('SearchScreen Tests', () => {
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
});
