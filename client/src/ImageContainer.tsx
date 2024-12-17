import React from 'react';

export const ImageContainer = () => {
  const noImages = true;
  // apply styles if no images are available
  const noImagesStyle = 'justify-items-center content-center';
  return (
    <>
      <section
        className={`imageContainer w-full h-[80vh] ${
          noImages ? noImagesStyle : ''
        }`}
      >
        <div className={noImagesStyle}>
          Nothing for now. Upload an image you want public 😇{' '}
        </div>
      </section>
    </>
  );
};
