import React from 'react';
import { Sidebar, Chats } from './';

const Messages = () => {
  return (
    <div className='relative'>
      <div className='flex flex-col fixed max-w-5xl w-full top-24 lg:top-24 xl:top-56'>
        <div className='grid grid-cols-3'>
          <div className='col-span-3 lg:col-span-1'>
            <Sidebar />
          </div>
          <div className='hidden lg:block col-span-2 bg-lightBlue lg:rounded-br-lg space-x-10'>
            <Chats />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
