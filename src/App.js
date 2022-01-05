import React from 'react';
import { Logo } from './components/Logo';
import { GlobalStyle } from './styles/GlobalStyles';
import { PhotoCardWithQuery } from './components/container/PhotoCardWithQuery';
import { Home } from './pages/Home';

import { Router } from '@reach/router';

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail');
  return (
    <div>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <Router>
            <Home path='/' />
            <Home path='/pet/:id' />
          </Router>
      }
    </div>
  );
};

export { App };
