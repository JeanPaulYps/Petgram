import React from 'react';
import { ListOfCategories } from './components/ListOfCategories';
import { ListOfPhotoCards } from './components/ListOfPhotoCards';
import { Logo } from './components/Logo';
import { GlobalStyle } from './styles/GlobalStyles';
import { PhotoCardWithQuery } from './components/container/PhotoCardWithQuery';

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail');
  console.log(detailId);
  return (
    <div>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <> <ListOfCategories /> <ListOfPhotoCards categoryId={1} /> </>
      }
    </div>
  );
};

export { App };
