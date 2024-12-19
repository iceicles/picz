import React from 'react';
import computerImage from './computer-1.jpeg';

export const ImageContainer = () => {
  const noImages = false;
  // apply styles if no images are available
  const noImagesStyle = 'justify-items-center content-center';
  return (
    <>
      <section
        className={`imageContainer w-full h-[80vh] ${
          noImages ? noImagesStyle : ''
        }`}
      >
        {noImages ? (
          <div className={noImagesStyle}>
            Nothing for now. Upload an image you want public 😇{' '}
          </div>
        ) : (
          <>
            <div className='flex flex-col items-center justify-center'>
              <img src={computerImage} alt='computer-1' width={300} />
              <h1>Some Title Here</h1>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <img src={computerImage} alt='computer-1' width={300} />
              <h1>Some Title Here</h1>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <img src={computerImage} alt='computer-1' width={300} />
              <h1>Some Title Here</h1>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <img src={computerImage} alt='computer-1' width={300} />
              <h1>Some Title Here</h1>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <img src={computerImage} alt='computer-1' width={300} />
              <h1>Some Title Here</h1>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <img src={computerImage} alt='computer-1' width={300} />
              <h1>Some Title Here</h1>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <img src={computerImage} alt='computer-1' width={300} />
              <h1>Some Title Here</h1>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <img src={computerImage} alt='computer-1' width={300} />
              <h1>Some Title Here</h1>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <img src={computerImage} alt='computer-1' width={300} />
              <h1>Some Title Here</h1>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <img src={computerImage} alt='computer-1' width={300} />
              <h1>
                Some Title Here Some Title Here Some Title HereSome Title Here
                Some Title Here Some Title Here
              </h1>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <img src={computerImage} alt='computer-1' width={300} />
              <h1>Some Title Here</h1>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <img src={computerImage} alt='computer-1' width={300} />
              <h1>Some Title Here</h1>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <img src={computerImage} alt='computer-1' width={300} />
              <h1>Some Title Here</h1>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <img src={computerImage} alt='computer-1' width={300} />
              <h1>Some Title Here</h1>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <img src={computerImage} alt='computer-1' width={300} />
              <h1>Some Title Here</h1>
            </div>
          </>
        )}
      </section>
    </>
  );
};
