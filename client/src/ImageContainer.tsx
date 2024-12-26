import React, { FC } from 'react';
import { Trash2 } from 'lucide-react';

interface IImageContainer {
  albumData: [{ _id: number; image: string; title: string }];
  onDeleteHandler: (id: number) => void;
  isLoading: boolean;
}

// TODO: add a loading state - when we refresh and there's images, the text 'nothing for now'
// briefly shows.. need to make sure there's a loading state when there's no data yet
export const ImageContainer: FC<IImageContainer> = ({
  albumData,
  onDeleteHandler,
  isLoading,
}) => {
  const noDataStyle = 'justify-items-center content-center';
  // const SERVER_URL_TLD = import.meta.env.VITE_API_URL_TLD;

  // image alt attribute
  /* const imageAlt = (image) => {
    const arr = image.split('/');
    return arr[arr.length - 1];
  }; */

  return (
    <>
      <section
        className={` ${
          !albumData.length
            ? `imageContainerNoImages ${noDataStyle}`
            : 'imageContainer'
        }`}
      >
        {isLoading && (
          <div className={`${noDataStyle} text-2xl`}>Loading...</div>
        )}
        {albumData && albumData.length ? (
          <>
            {albumData.map((album) => (
              <div
                key={album._id}
                className='flex flex-col items-center justify-center mb-6 xl:mb-0'
              >
                <img src={album.image} alt='album image' width={350} />
                <div className='flex gap-2 pt-2'>
                  <h1 className='text-center'>{album.title}</h1>
                  <Trash2
                    onClick={() => onDeleteHandler(album._id)}
                    className='cursor-pointer'
                  />
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className={`${noDataStyle} text-2xl`}>
            <i>Currently empty. Start by uploading an image</i>
          </div>
        )}
      </section>
    </>
  );
};
