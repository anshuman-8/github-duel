import Head from 'next/head'
import Image from 'next/image'
import { DuelInput } from '../components'
import battleSword from '../Assets/images/battleSword.png';
import UserInfoState from '../context/UserInfo/UserInfoState';
import RepoDataState from '../context/RepoData/RepoDataState';



export default function Home() {
  return (
    <div className="bg-slate-600 min-h-screen ">
      <Head>
        <title>GitHub Duel</title>
        <meta name="Github Profile comparator" content="Compare GitHub profiles with your friends and know who has a better maintained GitHub profile " />
        <link rel="icon" href="/github-duel/favicon.ico" />
      </Head>
      
    <UserInfoState>
      <RepoDataState>
      <header className="text-white py-2 px-4 mb-12 text-4xl text-center flex flex-row justify-center space-x-3">
      <div className='px-2'>GitHub</div> 
      <Image src={battleSword} height="20px" width="37px" alt='|'/>
      <div className='pr-7'>Duel</div>
      </header>
      <main className=''>
        <DuelInput/>
      </main>

      <footer className="">
      
      </footer>
      </RepoDataState>
    </UserInfoState>
    
    </div>
  )

}

// export async function getStaticProps() {

//   // const TOKEN= await (process.env.REACT_APP_TOKEN);
//   const TOKEN= await (process.env.NEXT_PUBLIC_TOKEN);
//   return {
//       props : {
//           TOKEN,
//       }
//   }
 
// }


