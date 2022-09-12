import Head from 'next/head'
import Image from 'next/image'
import { DuelInput } from '../components'
import { GitHubIconBlack } from '../Assets/icons';
import battleSword from '../Assets/images/battleSword.png';
import UserInfoState from '../context/UserInfo/UserInfoState';
import RepoDataState from '../context/RepoData/RepoDataState';


export default function Home() {
  return (
    <div className="bg-slate-600 min-h-screen ">
      <Head>
        <title>GitHub Duel</title>
        <meta name="Github Profile comparator" content="Compare GitHub profiles with your friends and know who has a better maintained GitHub profile " />
        <link rel="icon" href="favicon.ico" />
      </Head>
      
    <UserInfoState>
      <RepoDataState>

        <header className='mb-12 pt-3'>
         <div className="text-white py-2 px-4 text-4xl text-center flex flex-row justify-center space-x-3">
          <div className='px-2'>GitHub</div> 
          <Image src={battleSword} height="20px" width="37px" alt='|'/>
          <div className='pr-7'>Duel</div>
         </div>
        </header>

        <div className='z-20'>
          <button onClick={()=> window.open("https://github.com/anshuman-8/github-duel", "_blank")} className="mr-5 inline fixed bottom-5 right-5 lg:bottom-10 lg:right-10 cursor-pointer shadow-md hover:shadow-xl hover:scale-110 hover:bg-slate-500 rounded-3xl">
              <GitHubIconBlack/>
          </button>
          
         </div>

      <main className='text-white'>
        <DuelInput/>
      </main>

      <footer className="">
      
      </footer>
      </RepoDataState>
    </UserInfoState>
    
    </div>
  )

}


