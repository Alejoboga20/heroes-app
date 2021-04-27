import { mount } from 'enzyme';
import React from 'react';
import { AuthContext } from '../../../components/auth/AuthContext';
import LoginScreen from '../../../components/login/LoginScreen';
import { types } from '../../../components/types/types';

describe('LoginScreen Tests', () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: { logged: false }
  };

  const historyMock = {
    replace: jest.fn()
  };

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <LoginScreen history={historyMock} />
    </AuthContext.Provider>
  );

  test('should display properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should dispatch and navigate', () => {
    const handleClick = wrapper.find('button').prop('onClick');
    handleClick();

    expect(contextValue.dispatch).toHaveBeenCalled();
    expect(historyMock.replace).toHaveBeenCalledWith('/');

    localStorage.setItem('lastPath', '/dc');
    handleClick();
    expect(historyMock.replace).toHaveBeenCalledWith('/dc');
  });
});
