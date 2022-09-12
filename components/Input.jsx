import React from 'react';
import { BsFillEmojiLaughingFill } from 'react-icons/bs';
import { RiSendPlane2Fill } from 'react-icons/ri';
import { CgAttachment } from 'react-icons/cg';

const Input = () => {
  return (
    <>
      <div className=' mr-0.5'>
        <div className='hidden lg:block relative bg-lightCard p-1 pl-2 pr-2 rounded-br-lg -top-0'>
          <form className='flex flex-row items-center space-x-3'>
            <CgAttachment className='text-white w-7 h-7' />
            <input
              className='w-full outline-none pr-4 p-2 rounded-full pl-3 bg-gray-100 text-gray-600'
              placeholder='message...'
            />
            <button className='flex items-center p-2 rounded-full right-6 bg-white'>
              <RiSendPlane2Fill className='text-lightCard w-5 h-5' />
            </button>
          </form>
        </div>
      </div>

      <div className='absolute lg:hidden'>
        <div className='fixed right-0 bg-lightCard p-2 w-full bottom-0'>
          <form className='flex flex-row items-center space-x-3'>
            <CgAttachment className='text-white w-7 h-7' />
            <input
              className='w-full outline-none pr-4 p-2 rounded-full pl-3 bg-gray-100 text-gray-600'
              placeholder='message...'
            />
            <button className='flex items-center p-2 rounded-full right-6 bg-white'>
              <RiSendPlane2Fill className='text-lightCard w-5 h-5' />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Input;
