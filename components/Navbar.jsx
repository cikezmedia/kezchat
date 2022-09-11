import Image from 'next/image';
import React, { useState } from 'react';
import {
  BiPhoneCall,
  BiMessageSquareDetail,
  BiMessageSquareEdit,
} from 'react-icons/bi';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

const Navbar = () => {
  const [hide, setHide] = useState(false);

  const toggleHide = () => {
    setHide(!hide);
  };
  return (
    <>
      <div className='flex flex-row items-center justify-between'>
        <div className='flex flex-row items-center space-x-3'>
          <span className='text-xl text-mainPurple md:text-2xl font-quicksand font-bold'>
            KezChat
          </span>
        </div>
        <div className='flex flex-row items-center space-x-4'>
          <BiPhoneCall className='w-6 h-6 text-gray-500 cursor-pointer' />
          <BiMessageSquareDetail className='w-6 h-6 text-gray-500 cursor-pointer' />
          {/* <HiOutlineCalendar className='w-6 h-6 text-gray-500 cursor-pointer' /> */}
          <div className='relative flex flex-row mx-auto items-center'>
            <Image
              src='https://images.pexels.com/photos/13524012/pexels-photo-13524012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              width={50}
              height={50}
              alt=''
              onClick={toggleHide}
              className='items-center rounded-full object-cover border-2 p-2 border-mainYellow cursor-pointer'
            />
            <button onClick={toggleHide}>
              {hide ? (
                <RiArrowUpSLine className='w-6 h-6 text-gray-500 cursor-pointer mt-2' />
              ) : (
                <RiArrowDownSLine className='w-6 h-6 text-gray-500 cursor-pointer mt-2' />
              )}
            </button>

            {hide && (
              <div className='flex flex-col gap-3 w-48 border-2 border-white rounded-lg absolute top-16 right-2 bg-mainBlack z-10 p-3 text-white font-quicksand font-medium'>
                <span className=''>Emmanuel Joeno</span>
                <span className=''>Edit Profile</span>
                <span className='text-red-500'>Logout</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
