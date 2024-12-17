import React from 'react';

export const Form = () => {
  return (
    <>
      <section className='mr-24'>
        <form className='flex flex-col gap-y-6 min-width-[300px]'>
          <label htmlFor='title'>
            Title:
            <input type='text' name='title' />
          </label>
          <label htmlFor='image'>
            Upload an image with size less than 1MB
            <input type='file' name='image' />
          </label>
          <label>
            <input type='submit' />
          </label>
        </form>
      </section>
    </>
  );
};
