import React from 'react';
import { Message, Search } from './';

const Sidebar = () => {
  return (
    <>
      <div className='pl-6 pr-6'>
        <Search />
      </div>
      <div className='flex flex-col pt-6 gap-7  dark:bg-gray-100 overflow-y-auto scrollbar-hide h-[680px] md:h-[780px] lg:h-[540px] p-4 pb-6 border-t border-gray-300 mt-6'>
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
