import Head from 'next/head';
import { Messages, Navbar } from '../components';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const { currentUser } = useContext(AuthContext);
  const router = useRouter();

  if (!currentUser) {
    router.push('/login');
  }

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

      <div className='dark:bg-mainBlack bg-lightBlue'>
        <div className='flex lg:h-screen justify-center flex-col mx-auto lg:max-w-5xl'>
          <div className='w-full lg:rounded-lg lg:border border-gray-400 bg-white'>
            <Navbar />
            <Messages />
          </div>
        </div>
      </div>
    </>
  );
}
