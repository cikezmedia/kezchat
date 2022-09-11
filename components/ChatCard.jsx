import React from 'react';
import Image from 'next/image';

const ChatCard = () => {
  return (
    <>
      <div className='flex flex-row pr-28 gap-2'>
        <div className='flex flex-row space-x-4'>
          <div className='flex shrink-0 rounded-full w-10 h-10'>
            <Image
              src='https://images.pexels.com/photos/13524012/pexels-photo-13524012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              width={40}
              height={40}
              alt=''
              className='rounded-full object-cover cursor-pointer'
            />
          </div>
          <div className='bg-mainPurple text-white p-3 font-normal rounded-tr-3xl rounded-b-3xl'>
            <p className=''>
              Lorem, ipsum dolor Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Aperiam commodi ab, quis praesentium,
              reprehenderit at recusandae possimus facere quos earum 🔥🔥🔥🔥
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatCard;
