import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

function about() {
  return (
    <div className="bg-slate-600 min-h-screen ">
    <Head>
      <title>GitHub Duel - How Scoring Works </title>
      <meta name="Github Profile comparator" content="Compare GitHub profiles with your friends and know who has a better maintained GitHub profile " />
      <link rel="icon" href="/github-duel/favicon.ico" />
    </Head>
    <Link href='/'><a className='hover:underline text-slate-200 mx-10 py-10 text-xl' >Back to Home</a></Link>
    
    <header className=''>
      <h1 className='mx-10 py-10 text-5xl text-white'>How does it score Profile? </h1>
    </header>
    <main className='text-white'>
      <div className='mx-10 pt-10 mb-10'>
     
      </div>
    </main>
  
  </div>
  )
}

export default about
