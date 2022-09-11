import React from 'react'
import Link from 'next/link'
import Head from 'next/head';

function Error404() {
  return (
    <div className='h-screen bg-slate-600 text-white '>
       <Head>
      <title>404 - GitHub Duel </title>
      <meta name="Github Profile comparator" content="Compare GitHub profiles with your friends and know who has a better maintained GitHub profile " />
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <div className='items-center h-1/2 justify-center flex flex-col'>
        <h1 className='text-7xl'>404</h1>
        <h2 className='text-4xl mb-14'>Page Not Found</h2>
        <Link href="/" ><a className='hover:bg-slate-800 p-3 rounded-xl hover:underline bg-slate-700'>Back to Home</a></Link>
      </div>
    </div>
  )
}

export default Error404;
