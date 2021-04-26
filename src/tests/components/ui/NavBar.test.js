import React from 'react';
import { mount } from 'enzyme';
import { AuthContext } from '../../../components/auth/AuthContext';
import NavBar from '../../../components/ui/NavBar';
import { MemoryRouter, Router } from 'react-router';
import { types } from '../../../components/types/types';

describe('NavBar tests', () => {
  const historyMock = {
    push: jest.fn(),
    replace: jest.fn(),
    location: {},
    listen: jest.fn(),
    createHref: jest.fn()
  };

  const contextValue = {
    dispatch: jest.fn(),
    user: { logged: true, name: 'Test' }
  };

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter>
        <Router history={historyMock}>
          <NavBar />
        </Router>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  afterEach(() => jest.clearAllMocks());

  test('should display properly', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe('Test');
  });

  test('should call logout and use history', () => {
    wrapper.find('button').prop('onClick')();
    expect(contextValue.dispatch).toHaveBeenCalledWith({ type: types.logout });
    expect(historyMock.replace).toHaveBeenCalledWith('/login');
  });
});
