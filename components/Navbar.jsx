import Image from 'next/image';
import React, { useState } from 'react';
import { BiPhoneCall, BiMessageSquareDetail } from 'react-icons/bi';
import { FiMoreVertical } from 'react-icons/fi';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Navbar = () => {
  return (
    <div className='relaive'>
      <div className='fixed mx-auto z-10 justify-center xl:top-32 lg:top-0 max-w-5xl w-full items-center'>
        <div className='grid grid-cols-3 items-center pr-6 pl-6 pt-6 pb-6 bg-white dark:bg-lightCard xl:rounded-t-lg'>
          <div className='relative flex flex-row items-center space-x-3'>
            <Image
              src='https://images.pexels.com/photos/13524012/pexels-photo-13524012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              width={50}
              height={50}
              alt=''
              className='items-center rounded-full object-cover cursor-pointer'
            />
            <span className='hidden lg:block font-semibold text-lg font-quicksand text-mainBlack dark:text-white'>
              Sherry Brighton
            </span>
          </div>

          <div className='flex flex-row place-content-center'>
            <span className='text-2xl text-mainPurple dark:text-white md:text-3xl font-quicksand font-bold'>
              KezChat
            </span>
          </div>

          <div className='flex flex-row items-center place-content-end space-x-4'>
            <BiPhoneCall className='w-6 h-6 text-gray-500 dark:text-white cursor-pointer' />
            <BiMessageSquareDetail className='w-6 h-6 text-gray-500 dark:text-white cursor-pointer' />
            <button onClick={() => signOut(auth)}>
              <FiMoreVertical className='w-6 h-6 text-gray-500 dark:text-white cursor-pointer' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
