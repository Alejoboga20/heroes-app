import React from 'react';
import { mount } from 'enzyme';
import HeroScreen from '../../../components/heroes/HeroScreen';
import { MemoryRouter, Route } from 'react-router';

describe('HeroScreen Tests', () => {
  const historyMock = {
    length: 10,
    goBack: jest.fn(),
    push: jest.fn()
  };

  test('should display Redirect components with no url', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero']}>
        <HeroScreen history={historyMock} />
      </MemoryRouter>
    );
    expect(wrapper.find('Redirect').exists()).toBe(true);
  });

  test('should show a hero if paramet exists', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route path='/hero/:heroId' component={HeroScreen} />
      </MemoryRouter>
    );
    expect(wrapper.find('.row').exists()).toBe(true);
  });

  test('should return to previous screen with push', () => {
    const historyMock = {
      length: 1,
      goBack: jest.fn(),
      push: jest.fn()
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route
          path='/hero/:heroId'
          component={(props) => <HeroScreen history={historyMock} />}
        />
      </MemoryRouter>
    );

    wrapper.find('button').prop('onClick')();
    expect(historyMock.push).toHaveBeenCalled();
    expect(historyMock.goBack).not.toHaveBeenCalled();
  });

  test('should return to previous screen with goBack', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route
          path='/hero/:heroId'
          component={(props) => <HeroScreen history={historyMock} />}
        />
      </MemoryRouter>
    );

    wrapper.find('button').prop('onClick')();
    expect(historyMock.push).not.toHaveBeenCalled();
    expect(historyMock.goBack).toHaveBeenCalled();
  });

  test('should call Redirect if hero does not exist', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider123123123']}>
        <Route
          path='/hero/:heroId'
          component={(props) => <HeroScreen history={historyMock} />}
        />
      </MemoryRouter>
    );

    expect(wrapper.text()).toBe('');
  });
});
