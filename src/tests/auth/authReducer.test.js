import { authReducer } from '../../components/auth/authReducer';
import { types } from '../../components/types/types';

describe('authReducer Tests', () => {
  const userName = 'Test';
  const initialState = { logged: false };

  const loginAction = {
    type: types.login,
    payload: {
      userName
    }
  };

  const logoutAction = { type: types.logout };

  test('should return default state', () => {
    const defaultState = authReducer(initialState, {});
    expect(defaultState).toEqual(initialState);
  });

  test('should authenticate and put userName', () => {
    const authenticatedUser = authReducer(initialState, loginAction);
    expect(authenticatedUser).toEqual({ userName, logged: true });
  });

  test('should remove userName and log out', () => {
    const notAuthenticatedUser = authReducer(initialState, logoutAction);
    expect(notAuthenticatedUser).toEqual({ logged: false });
  });
});
