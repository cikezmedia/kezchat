import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Forgot = () => {
  const [err, setErr] = useState('');
  const [hide, setHide] = useState(true);
  const router = useRouter();

  const togglePassword = () => {
    setHide(!hide);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    console.log(data);
    router.push('/');
  };

  return (
    <>
      <Head>
        <title>Kezchat - Forgot Password</title>
        <meta
          name='description'
          content='Free Live Chat Designed by @CikezMedia'
        />
        <link rel='shortcut icon' href='/favicon.png' />
      </Head>

      <div className='bg-mainLight dark:bg-mainBlack'>
        <div className='home flex flex-col gap-6 mx-auto p-6 items-center max-w-lg'>
          <Image src='/favicon.png' width={54} height={54} />
          {err && <span className='text-red-500'>{err}</span>}
          <div className='w-full p-6 rounded-lg border border-gray-300 bg-white items-center'>
            <div className='flex flex-col gap-2 items-center mx-auto'>
              <h2 className='text-2xl font-quicksand font-bold text-mainPurple'>
                KezChat
              </h2>
              <span className='text-gray-600'>Reset your password</span>
            </div>
            <form
              className='pt-8 space-y-4'
              onSubmit={handleSubmit(submitForm)}
            >
              <input
                type='email'
                {...register('email', {
                  required: {
                    value: true,
                    message: 'Email is required',
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Enter a valid email',
                  },
                })}
                className='w-full bg-gray-100 p-2.5 rounded-md placeholder:pl-1 border-2 text-mainPurple outline-none focus:border-mainPurple'
                placeholder='your email'
              />
              {errors?.email && (
                <span className='text-red-500 text-xs font-light'>
                  {errors.email.message}
                </span>
              )}

              <div className='flex flex-col pt-4 pb-4 items-center mx-auto'>
                <button className='p-1.5 px-5 text-white font-seminbold bg-mainPurple rounded-lg'>
                  Reset Password
                </button>
              </div>
              <span className='flex flex-col text-sm items-center text-center text-gray-500'>
                <span>
                  Remember password?
                  <Link href='/login'>
                    <a className='pl-2 text-mainPurple'>Login here</a>
                  </Link>
                </span>
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgot;
