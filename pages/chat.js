import Head from 'next/head';
import { Messages, Navbar } from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Chat with friends</title>
        <meta
          name='description'
          content='Free Live Chat Designed by @CikezMedia'
        />
        <link rel='shortcut icon' href='/favicon.png' />
      </Head>

      <div className='bg-mainBlack'>
        <div className='flex lg:h-screen justify-center flex-col gap-6 mx-auto lg:max-w-5xl'>
          <div className='w-full lg:rounded-lg lg:border border-gray-300 bg-white'>
            <Navbar />
            <Messages />
          </div>
        </div>
      </div>
    </>
  );
}
