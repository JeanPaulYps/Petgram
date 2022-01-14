import { useApolloClient } from '@apollo/client';
import React, { createContext, useState, useEffect } from 'react';

const Context = createContext();

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token');
  });

  const value = {
    isAuth,
    activateAuth: token => {
      setIsAuth(true);
      window.sessionStorage.setItem('token', token);
    },
    removeAuth: () => {
      setIsAuth(false);
      window.sessionStorage.removeItem('token');
      useEffect(() => {
        const apolloClient = useApolloClient();
        apolloClient.resetStore();
      }, [isAuth]);
    }
  };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

export {
  Provider,
  Context
};
