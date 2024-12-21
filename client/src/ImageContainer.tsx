import React from 'react';

export const ImageContainer = ({ albumData }) => {
  const noDataStyle = 'justify-items-center content-center';

  // image alt attribute
  const imageAlt = (image) => {
    const arr = image.split('/');
    return arr[arr.length - 1];
  };

  return (
    <>
      <section
        className={` ${
          !albumData.length
            ? `imageContainerNoImages ${noDataStyle}`
            : 'imageContainer'
        }`}
      >
        {albumData && !albumData.length ? (
          <div className={`${noDataStyle} text-2xl`}>
            Nothing for now. Start by uploading an image 😇{' '}
          </div>
        ) : (
          <>
            {albumData.map((album) => (
              <div
                key={album._id}
                className='flex flex-col items-center justify-center mb-6 xl:mb-0'
              >
                <img
                  src={`http://localhost:4000${album.image}`}
                  alt={imageAlt(album.image)}
                  width={300}
                />
                <>
                  <h1 className='text-center'>{album.title}</h1>
                  <button className='border border-solid rounded p-1'>
                    Delete
                  </button>
                </>
              </div>
            ))}
          </>
        )}
      </section>
    </>
  );
};
