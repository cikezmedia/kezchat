import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { BsImages } from 'react-icons/bs';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Register = () => {
  const [err, setErr] = useState('');
  const [hide, setHide] = useState(true);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const togglePassword = () => {
    setHide(!hide);
  };

  //console.log(watch('fullname'));

  const submitForm = (data) => {
    router.push('/login');
  };

  return (
    <>
      <Head>
        <title>Kezchat - Create a free account</title>
        <meta
          name='description'
          content='Free Live Chat Designed by @CikezMedia'
        />
        <link rel='shortcut icon' href='/favicon.png' />
      </Head>

      <div className='bg-mainLight dark:bg-mainBlack'>
        <div className='flex h-screen justify-center flex-col gap-6 mx-auto p-6 items-center max-w-lg'>
          <Image src='/favicon.png' alt='logo' width={54} height={54} />
          {err && <span className='text-red-500'>{err}</span>}
          <div className='w-full p-6 rounded-lg border border-gray-300 bg-white items-center'>
            <div className='flex flex-col gap-2 items-center mx-auto'>
              <h2 className='text-2xl font-quicksand font-bold text-mainPurple'>
                KezChat
              </h2>
              <span className='text-gray-600'>Register a free account</span>
            </div>
            <form
              className='pt-8 space-y-4'
              onSubmit={handleSubmit(submitForm)}
            >
              <input
                type='text'
                {...register('fullname', {
                  required: {
                    value: true,
                    message: 'Name is required',
                  },
                  minLength: {
                    value: 6,
                    message: 'Minimum of 6 characters is required',
                  },
                  maxLength: {
                    value: 15,
                    message: 'Name is too long',
                  },
                })}
                className='w-full bg-gray-100 p-2.5 rounded-md placeholder:pl-1 border-2 text-mainPurple outline-none focus:border-mainPurple'
                placeholder='your name'
              />
              {errors?.fullname && (
                <span className='text-red-500 text-xs font-light'>
                  {errors.fullname.message}
                </span>
              )}
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
              <div className='relative'>
                <input
                  type={hide ? 'password' : 'text'}
                  {...register('password', {
                    required: {
                      value: true,
                      message: 'Password is required',
                    },
                    minLength: {
                      value: 6,
                      message: 'Minimum of 6 characters is required',
                    },
                  })}
                  className='w-full bg-gray-100 p-2.5 rounded-md placeholder:pl-1 border-2 text-mainPurple outline-none focus:border-mainPurple'
                  placeholder='your password'
                />
                <span className='absolute top-4 cursor-pointer right-4'>
                  {hide ? (
                    <FaEye
                      onClick={togglePassword}
                      className='w-4 h-4 text-mainPurple'
                    />
                  ) : (
                    <FaEyeSlash
                      onClick={togglePassword}
                      className='w-4 h-4 text-mainPurple'
                    />
                  )}
                </span>
              </div>
              {errors?.password && (
                <span className='text-red-500 text-xs font-light'>
                  {errors.password.message}
                </span>
              )}
              <input
                type='file'
                id='fileupload'
                {...register('avatar', {
                  required: {
                    value: true,
                    message: 'Avatar is required',
                  },
                })}
                className='hidden'
              />
              <label
                className='flex flex-row items-center space-x-2 cursor-pointer pb-3'
                htmlFor='fileupload'
              >
                <BsImages className='w-6 h-6 text-mainPurple' />
                <span className='text-mainPurple font-normal'>
                  upload avatar
                </span>
                {errors?.avatar && (
                  <span className='text-red-500 text-xs font-light'>
                    {errors.avatar.message}
                  </span>
                )}
              </label>

              <span className='text-xs text-gray-500 tracking-tight mt-4 leading-loose'>
                By creating a free account, you have agreed not to be abusive to
                other users.
              </span>
              <div className='flex flex-col pt-4 pb-3 items-center mx-auto'>
                <button className='p-1.5 px-5 text-white font-seminbold bg-mainPurple rounded-lg'>
                  Continue
                </button>
              </div>
              <span className='flex flex-col text-sm items-center text-center text-gray-500'>
                <span>
                  Already a member?
                  <Link href='/login'>
                    <a className='pl-2 text-mainPurple'>Login here </a>
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

export default Register;
