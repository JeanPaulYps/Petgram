import React from 'react';
import { PhotoCard } from '../PhotoCard';
import { useGetPhotos } from '../../hooks/useGetPhotos';

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useGetPhotos(categoryId);

  if (error) {
    return <h2>Error interno </h2>;
  }
  if (loading) {
    return <h2>Cargando...</h2>;
  }

  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
};
