import React from 'react';
import { Sidebar, Chats } from './';

const Messages = () => {
  return (
    <>
      <div className='grid grid-cols-3 pt-6 space-x-10'>
        <div className='col-span-3 lg:col-span-1'>
          <Sidebar />
        </div>
        <div className='hidden lg:block col-span-2 bg-lightBlue'>
          <Chats />
        </div>
      </div>
    </>
  );
};

export default Messages;
