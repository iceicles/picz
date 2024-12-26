import React, { FC } from 'react';

interface IForm {
  onSubmitHandler: () => void;
  onImageChangeHandler: () => void;
  onTitleChangeHandler: () => void;
  title: string;
}

export const Form: FC<IForm> = ({
  onSubmitHandler,
  onImageChangeHandler,
  onTitleChangeHandler,
  title,
}) => {
  return (
    <>
      <section className='xl:mr-24 w-[350px]'>
        <form
          onSubmit={onSubmitHandler}
          className='flex flex-col gap-y-6 min-width-[300px]'
        >
          <label htmlFor='title'>
            Title:
            <input
              type='text'
              name='title'
              value={title}
              onChange={onTitleChangeHandler}
            />
          </label>
          <label htmlFor='image'>
            <i className='text-red-400 py-2'>
              *Upload an image with size less than 1MB
            </i>
            <input type='file' name='image' onChange={onImageChangeHandler} />
          </label>
          <label>
            <input type='submit' value='Upload' />
          </label>
        </form>
      </section>
    </>
  );
};
