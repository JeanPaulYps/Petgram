import React from 'react';
import { ImgWrapper, Img, Button } from './styles';
import { MdFavoriteBorder } from 'react-icons/md';

const PhotoCard = ({ id, likes = 0, src }) => {
  return (
    <article>
      <a href={`detail/${id}`}>
        <ImgWrapper>
          <Img srC={src} />
        </ImgWrapper>
      </a>

      <Button>
        <MdFavoriteBorder size='32px' />
        {likes} likes!
      </Button>
    </article>
  );
};

export { PhotoCard };
