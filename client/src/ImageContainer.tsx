import React from 'react';

export const ImageContainer = ({ albumData }) => {
  const noDataStyle = 'justify-items-center content-center';

  const imageAlt = (image) => {
    const arr = image.split('/');
    return arr[arr.length - 1];
  };

  return (
    <>
      <section
        className={`imageContainer w-full h-[80vh] ${
          !albumData.length ? noDataStyle : ''
        }`}
      >
        {albumData && !albumData.length ? (
          <div className={noDataStyle}>
            Nothing for now. Upload an image you want public 😇{' '}
          </div>
        ) : (
          <>
            {albumData.map((album) => (
              <div
                key={album._id}
                className='flex flex-col items-center justify-center'
              >
                <img
                  src={`http://localhost:4000${album.image}`}
                  alt={imageAlt(album.image)}
                  width={300}
                />
                <h1>{album.title}</h1>
              </div>
            ))}
          </>
        )}
      </section>
    </>
  );
};
