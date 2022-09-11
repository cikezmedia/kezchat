import React from 'react';
import { FiSearch } from 'react-icons/fi';

const Search = () => {
  return (
    <>
      <form className='relative flex flex-col  pb-6'>
        <input
          className='text-gray-400 p-2 bg-gray-100 rounded-xl border border-gray-300 placeholder:pl-2 focus:border-mainPurple outline-none'
          placeholder='Search...'
        />
        <FiSearch className='absolute right-3 top-2.5 text-gray-500 w-5 h-5' />
      </form>
    </>
  );
};

export default Search;
