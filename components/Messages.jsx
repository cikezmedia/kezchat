import React from 'react';
import { Sidebar } from './';

const Messages = () => {
  return (
    <>
      <div className='grid grid-cols-3 pt-6 space-x-10'>
        <div className='col-span-3 lg:col-span-1'>
          <Sidebar />
        </div>
        <div className='hidden lg:block col-span-2 bg-mainLight'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
          fugiat, sit sed consequuntur voluptas hic repudiandae possimus. Facere
          est neque temporibus repellat commodi, expedita, aliquam ullam
          aliquid, aperiam reiciendis ipsum.
        </div>
      </div>
    </>
  );
};

export default Messages;
