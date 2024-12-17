import React from 'react';
import { API_URL } from './constants';

export const Form = () => {
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const res = await fetch(API_URL + 'albums');
    const data = await res.json();
    console.log(data);
  };

  return (
    <>
      <section className='mr-24'>
        <form
          onSubmit={onSubmitHandler}
          className='flex flex-col gap-y-6 min-width-[300px]'
        >
          <label htmlFor='title'>
            Title:
            <input type='text' name='title' />
          </label>
          <label htmlFor='image'>
            <i className='text-red-400'>
              *Upload an image with size less than 1MB
            </i>
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
