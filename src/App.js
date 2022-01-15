import React, { useContext, Suspense } from 'react';
import { GlobalStyle } from './styles/GlobalStyles';

import { Logo } from './components/Logo';

import { Router, Redirect } from '@reach/router';
import { Navbar } from './components/NavBar';

import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { User } from './pages/User';
import { NotRegisteredUser } from './pages/NotRegistredUser';
import { Context } from './Context';
import { NotFound } from './pages/NotFound';

const Favs = React.lazy(() => import('./pages/Favs'));

const App = () => {
  const { isAuth } = useContext(Context);
  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
        {!isAuth && <Redirect noThrow from='/user' to='/login' />}
        {isAuth && <Redirect noThrow from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <Navbar />
    </Suspense>
  );
};

export { App };
