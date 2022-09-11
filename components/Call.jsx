import React, { useState } from 'react';
import { AiOutlineAudio } from 'react-icons/ai';
import { BiPhoneCall, BiVideo } from 'react-icons/bi';
import { HiOutlinePhoneMissedCall } from 'react-icons/hi';
import { BsTranslate } from 'react-icons/bs';

const Call = () => {
  const [show, setShow] = useState(false);
  const toggleIcon = () => {
    setShow(!show);
  };
  return (
    <>
      <div className='relative'>
        <button
          onClick={toggleIcon}
          className='absolute bottom-4 w-10 h-10 bg-mainYellow rounded-full right-2'
        >
          <span className='flex-col flex items-center mx-auto'>
            <AiOutlineAudio className='w-6 h-6' />
          </span>
        </button>
        {show && (
          <div className='flex flex-col absolute right-4 bottom-16 rounded-lg bg-mainYellow p-4 gap-3'>
            <div className='flex flex-row items-center space-x-2'>
              <BiPhoneCall className='w-5 h-5' />
              <span className='font-medium'>Voice Call</span>
            </div>
            <div className='flex flex-row items-center space-x-2'>
              <BiVideo className='w-5 h-5' />
              <span className='font-medium'>Video Call</span>
            </div>
            <div className='flex flex-row items-center space-x-2'>
              <HiOutlinePhoneMissedCall className='w-5 h-5' />
              <span className='font-medium'>Group Call</span>
            </div>
            <div className='flex flex-row items-center space-x-2'>
              <BsTranslate className='w-5 h-5' />
              <span className='font-medium'>Translate</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Call;
