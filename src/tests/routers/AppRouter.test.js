import React from 'react';
import { mount } from 'enzyme';
import AppRouter from '../../routers/AppRouter';
import { AuthContext } from '../../components/auth/AuthContext';

describe('AppRouter Tests', () => {
  const contextValue = { dispatch: jest.fn(), user: { logged: false } };

  test('should show login if not authenticated', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should show marvel component if authenticated', () => {
    const contextValue = {
      dispatch: jest.fn(),
      user: { logged: true, name: 'Test' }
    };
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );
    expect(wrapper.find('.navbar').exists()).toBe(true);
  });
});
