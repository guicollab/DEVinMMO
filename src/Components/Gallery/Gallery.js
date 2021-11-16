import React from "react";
import { StyledFigure, StyledGalleryScreen } from "./Gallery.style";

const Gallery = ({ images }) => {
  const [imageGame, setImageGame] = React.useState(images[0].image);

  return (
    <StyledFigure>
      <img src={imageGame} alt='' />
      <StyledGalleryScreen>
        {images.map((img) => {
          const { id, image } = img;
          return (
            <img
              style={{ border: imageGame === image ? "4px solid #27296d" : "" }}
              key={id}
              src={image}
              alt=''
              onClick={() => setImageGame(image)}
            />
          );
        })}
      </StyledGalleryScreen>
    </StyledFigure>
  );
};

export default Gallery;
