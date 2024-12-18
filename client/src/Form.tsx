import React, { useEffect, useState } from 'react';
import { API_URL } from './constants';

export const Form = () => {
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const res = await fetch(API_URL + 'albums');
    const data = await res.json();
    console.log(data);
  };

  const onChangeHandler = async (e) => {
    const imageFile = e.target.files[0];

    const formData = new FormData();
    // server requires image property from req.files (req.files.image)
    formData.append('image', imageFile);

    try {
      const res = await fetch(API_URL + 'albums/uploads', {
        method: 'POST',
        body: formData,
      });
      // if the response is not OK, throw an error with the server's response
      if (!res.ok) {
        const errorData = await res.json(); // get the error response
        throw new Error(JSON.stringify(errorData)); // throw the error as a stringified object
      }

      const data = await res.json();
      console.log('data - ', data);
    } catch (error) {
      // parse the stringified error to access the original error properties
      const errorResponse = JSON.parse(error.message);
      console.log('Error in POST request - ', errorResponse.msg); // Now you can access `msg`
    }
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
            <input type='file' name='image' onChange={onChangeHandler} />
          </label>
          <label>
            <input type='submit' />
          </label>
        </form>
      </section>
    </>
  );
};
