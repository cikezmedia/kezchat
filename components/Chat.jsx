import React from 'react';
import { ChatCard, ChatCardLeft } from './';

const Chat = () => {
  return (
    <>
      <div className='flex  h-[calc(100%)] '>
        <div className='flex p-5 scrollbar-hide flex-col gap-4 overflow-auto h-[560px]'>
          <ChatCard />
          <ChatCardLeft />
          <ChatCard />
          <ChatCardLeft />
          <ChatCardLeft />
          <ChatCardLeft />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCardLeft />
        </div>
      </div>
    </>
  );
};

export default Chat;
