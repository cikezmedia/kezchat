import React from 'react';
import Head from 'next/head';
import { Navbar, Chats } from '../components';

const Start = () => {
  return (
    <>
      <Head>
        <title>Start Chat</title>
        <meta
          name='description'
          content='Free Live Chat Designed by @CikezMedia'
        />
        <link rel='shortcut icon' href='/favicon.png' />
      </Head>

      <div className='relative'>
        <div className='dark:bg-mainBlack bg-lightBlue'>
          <div className='flex lg:h-screen justify-center flex-col mx-auto lg:max-w-5xl'>
            <div className='w-full lg:rounded-lg lg:border border-gray-400 bg-white'>
              <Navbar />
              <div className='bg-lightBlue lg:mt-16 lg:rounded-br-lg space-x-10'>
                <Chats />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Start;
