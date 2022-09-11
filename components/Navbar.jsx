import Image from 'next/image';
import React, { useState } from 'react';
import {
  BiPhoneCall,
  BiMessageSquareDetail,
  BiUser,
  BiLogOutCircle,
} from 'react-icons/bi';

const Navbar = () => {
  const [hide, setHide] = useState(false);

  const toggleHide = () => {
    setHide(!hide);
  };
  return (
    <>
      <div className='grid grid-cols-3 items-center pr-6 pl-6 pt-6 pb-6 dark:bg-lightCard lg:rounded-t-lg'>
        <div className='relative flex flex-row items-center space-x-3'>
          <Image
            src='https://images.pexels.com/photos/13524012/pexels-photo-13524012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            width={50}
            height={50}
            alt=''
            onClick={toggleHide}
            className='items-center rounded-full object-cover cursor-pointer'
          />
          <span className='hidden lg:block font-semibold text-lg font-quicksand text-mainBlack dark:text-white'>
            Sherry Brighton
          </span>
          {hide && (
            <div className='flex flex-col gap-3 w-48 border-2 border-white rounded-lg absolute top-16 bg-mainPurple z-10 p-3 -left-4 text-white font-quicksand font-medium'>
              <span className='font-bold text-lg'>Emmanuel Joeno</span>
              <div className='flex flex-row items-center space-x-2 cursor-pointer '>
                <BiUser className='w-[18px] h-[18px]' />
                <span className='font-semibold'>Edit Profile</span>
              </div>
              <div className='flex flex-row items-center space-x-2 cursor-pointer '>
                <BiLogOutCircle className='w-[18px] h-[18px]' />
                <span className='font-semibold'>Logout</span>
              </div>
            </div>
          )}
        </div>

        <div className='flex flex-row place-content-center'>
          <span className='text-2xl text-mainPurple dark:text-white md:text-3xl font-quicksand font-bold'>
            KezChat
          </span>
        </div>

        <div className='flex flex-row items-center place-content-end space-x-4'>
          <BiPhoneCall className='w-6 h-6 text-gray-500 dark:text-white cursor-pointer' />
          <BiMessageSquareDetail className='w-6 h-6 text-gray-500 dark:text-white cursor-pointer' />
        </div>
      </div>
    </>
  );
};

export default Navbar;
