import React from 'react';
import { PhotoCard } from '../PhotoCard';
import { gql, useQuery } from '@apollo/client';

const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id:ID!) {
    photo(id:$id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, { variables: { id } });

  if (error) {
    return <h2>Error interno </h2>;
  }

  if (loading) {
    return <h2>Cargando...</h2>;
  }

  return (
    <PhotoCard {...data.photo} />
  );
};
