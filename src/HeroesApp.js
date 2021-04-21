import React, { useReducer } from 'react';
import { AuthContext } from './components/auth/AuthContext';
import { authReducer } from './components/auth/authReducer';
import AppRouter from './routers/AppRouter';

const init = () =>
  JSON.parse(localStorage.getItem('user')) || { logged: false };

const HeroesApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};

export default HeroesApp;
