import React from 'react';
import { ListOfFavs } from '../components/ListOfFavs';
import { useGetFavorites } from '../hooks/useGetFavorites';
import { Layout } from '../components/Layout';

export default () => {
  const { data, loading, error } = useGetFavorites();

  if (error) {
    return <h2>Error interno </h2>;
  }
  if (loading) {
    return <h2>Cargando...</h2>;
  }

  return (
    <Layout title='Tus favoritos' subtitle='Aquí puedes encontrar tus favoritos'>
      <h1>Favs</h1>
      <ListOfFavs favs={data.favs} />
    </Layout>
  );
};
