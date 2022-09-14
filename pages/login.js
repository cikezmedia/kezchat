import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import LoadImg from '../public/loading.gif';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { useRouter } from 'next/router';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

const Login = () => {
  const [err, setErr] = useState('');
  const [hide, setHide] = useState(true);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (currentUser) {
      router.push('/');
    }
  }, []);

  const togglePassword = () => {
    setHide(!hide);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = async (data, event) => {
    event.preventDefault();
    const { email, password } = data;
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/');
    } catch (error) {
      setErr('Login failed, please try again.');
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Kezchat - Account login</title>
        <meta
          name='description'
          content='Free Live Chat Designed by @CikezMedia'
        />
        <link rel='shortcut icon' href='/favicon.png' />
      </Head>

      <div className='dark:bg-mainBlack bg-lightBlue'>
        <div className='flex h-screen justify-center flex-col gap-6 mx-auto p-6 items-center max-w-lg'>
          <Image src='/favicon.png' alt='logo' width={54} height={54} />
          <div className='w-full p-6 rounded-lg border border-gray-300 bg-white items-center'>
            <div className='flex flex-col gap-2 items-center mx-auto'>
              <h2 className='text-2xl font-quicksand font-bold text-mainPurple'>
                KezChat
              </h2>
              <span className='text-gray-600'>Login to your account</span>
              {err && <span className='text-red-500'>{err}</span>}
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
              <div className='flex flex-row justify-between items-center mx-auto'>
                <div className='flex flex-row cursor-pointer space-x-2 items-center'>
                  <input
                    type='checkbox'
                    id='member'
                    className='w-4 accent-mainPurple h-4'
                  />
                  <label
                    htmlFor='member'
                    className='text-sm text-gray-500 cursor-pointer'
                  >
                    remember me
                  </label>
                </div>
                <Link href='/forgot'>
                  <a className='text-mainPurple text-sm'>Reset password</a>
                </Link>
              </div>
              <div className='flex flex-col pt-4 pb-3 items-center mx-auto'>
                <button
                  type='submit'
                  className='p-2 px-5 text-white font-semibold bg-mainPurple rounded-lg'
                >
                  {loading ? (
                    <span className='flex p-1'>
                      <Image src={LoadImg} width={20} height={20} />
                    </span>
                  ) : (
                    'Continue'
                  )}
                </button>
              </div>
              <span className='flex flex-col text-sm items-center text-center text-gray-500'>
                <span>
                  New member?
                  <Link href='/register'>
                    <a className='pl-2 text-mainPurple'>Register here</a>
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

export default Login;
