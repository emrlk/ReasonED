'use client';

import { sendEmail } from '@/utils/send-email';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

//From https://medium.com/@abilsavio/email-contact-form-using-nextjs-app-router-60c29fe70644
const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-5 py-5'>
        <label
          htmlFor='name'
          className='mb-3 block text-base font-bold text-white'
        >
          Full Name
        </label>
        <input
          type='text'
          id='name'
          name='name' // Add name attribute for better autofill support
          autoComplete='name' // Set autocomplete attribute
          placeholder='Full Name'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('name', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='email'
          className='mb-3 block text-base font-bold text-white'
        >
          Email Address
        </label>
        <input
          type='email'
          id='email'
          name='email' // Add name attribute for better autofill support
          autoComplete='email' // Set autocomplete attribute
          placeholder='example@domain.com'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('email', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='message'
          className='mb-3 block text-base font-bold text-white'
        >
          Message
        </label>
        <textarea
          id='message'
          name='message' // Add name attribute for better autofill support
          autoComplete='message' // Set autocomplete attribute
          rows={4}
          placeholder='Type your message'
          className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('message', { required: true })}
        ></textarea>
      </div>
      <div>
        <button className='hover:shadow-form rounded-md bg-purple hover:bg-purple-shades-700 py-3 px-8 text-base font-semibold text-white outline-none'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Contact;
