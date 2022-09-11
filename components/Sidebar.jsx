import React from 'react';
import { Message, Search } from './';

const Sidebar = () => {
  return (
    <>
      <Search />
      <div className='flex flex-col pt-6 gap-7 rounded-bl-xl rounded-br-xl dark:bg-gray-100 overflow-y-auto scrollbar-hide h-[640px] md:h-[700px] lg:h-[540px] p-6'>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
    </>
  );
};

export default Sidebar;
