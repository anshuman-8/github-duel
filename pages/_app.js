import Head from 'next/head'
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
        <title>GitHub Duel</title>
        <link rel="icon" href="favicon.ico" />
        <meta name="title" content="GutHub Duel"/>
        <meta name="description" content="This site compares your GitHub Profile to your friends, and analyses and tells your GitHub profile score too."/>
        <meta name="keywords" content="GitHub, Repository Compare, Profile score, "/>
        <meta name="robots" content="index, follow"/>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="English"/>
        <meta name="author" content="anshuman-8"></meta>

        <meta property="og:title" content="GitHub Duel"/>
        <meta property="og:site_name" content="Github Duel"/>
        <meta property="og:url" content="https://githubduel.vercel.app/"/>
        <meta property="og:description" content="This site compares your GitHub Profile to your friends, and analyses and tells your GitHub profile score too."/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="og-image.png"/>
      </Head>
  <Component {...pageProps} />
   </>
  )
}

export default MyApp
