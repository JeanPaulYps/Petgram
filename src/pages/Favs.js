import React from 'react';
import { ListOfFavs } from '../components/ListOfFavs';
import { useGetFavorites } from '../hooks/useGetFavorites';

export const Favs = () => {
  const { data, loading, error } = useGetFavorites();

  if (error) {
    return <h2>Error interno </h2>;
  }
  if (loading) {
    return <h2>Cargando...</h2>;
  }

  return (
    <>
      <h1>Favs</h1>
      <ListOfFavs favs={data.favs} />
    </>
  );
};
