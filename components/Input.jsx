import React from 'react';
import { BsFillEmojiLaughingFill } from 'react-icons/bs';
import { RiSendPlane2Fill } from 'react-icons/ri';

const Input = () => {
  return (
    <>
      <div className='relative'>
        <form className='w-[98%] p-1 absolute rounded-full border border-gray-300 bg-gray-100 lg:ml-2'>
          <div className='flex flex-row items-center'>
            <input
              className='w-full outline-none pr-4 rounded-full pl-3 bg-gray-100 text-gray-600'
              placeholder='message...'
            />
            <button className='flex items-center p-2 rounded-full text-white right-6 bg-lightCard'>
              <RiSendPlane2Fill className='text-white w-5 h-5' />
            </button>
          </div>
          <div className='absolute cursor-pointer bottom-2 -left-9 pl-1 rounded-full'>
            <BsFillEmojiLaughingFill className='text-mainPurple w-7 h-7' />
          </div>
        </form>
      </div>
    </>
  );
};

export default Input;
