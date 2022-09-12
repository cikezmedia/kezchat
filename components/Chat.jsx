import React from 'react';
import { ChatCard, ChatCardLeft, Input } from './';

const Chat = () => {
  return (
    <>
      <div className='relative'>
        <div className='flex p-5 scrollbar-hide flex-col gap-4 overflow-auto pb-16 lg:pb-4 pt-28 lg:pt-4 lg:h-[35rem]'>
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
          <ChatCard />
          <ChatCard />
          <ChatCardLeft />
        </div>
        <Input />
      </div>
    </>
  );
};

export default Chat;
