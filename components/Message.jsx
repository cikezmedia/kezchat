import Image from 'next/image';
import React from 'react';

const Message = () => {
  return (
    <>
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row items-center space-x-4'>
          <Image
            src='https://images.pexels.com/photos/13524012/pexels-photo-13524012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            width={50}
            height={50}
            alt=''
            className='flex flex-col items-center rounded-full object-cover cursor-pointer'
          />
          <div className='flex flex-col'>
            <span className='text-mainPurple font-semibold font-quicksand'>
              Emilia Bones
            </span>
            <p className='text-gray-600 text-sm'>Lorem ipsum ipsum... </p>
          </div>
        </div>
        <span className='text-gray-600 text-sm font-poppins'>now</span>
      </div>
    </>
  );
};

export default Message;