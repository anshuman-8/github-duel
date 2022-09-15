import Image from 'next/image'
import { useState } from "react";
import { DuelInput } from '../components'
import { GitHubIconBlack } from '../Assets/icons';
import battleSword from '../Assets/images/battleSword.png';
import UserInfoState from '../context/UserInfo/UserInfoState';
import RepoDataState from '../context/RepoData/RepoDataState';


export default function Home() {
  const [alert, setAlert] = useState(true);
  return (
    <div className="bg-slate-600 min-h-screen min-w-screen">
      {/* <Head>
        <title>GitHub Duel</title>
        <meta name="Github Profile comparator" content="Compare GitHub profiles with your friends and know who has a better maintained GitHub profile " />
        <link rel="icon" href="favicon.ico" />
      </Head> */}
      
    <UserInfoState>
      <RepoDataState>

        <header className='mb-12 lg:pt-3'>
          {
            alert?
            <div className="container bg-amber-600 mb-2 flex items-center text-white text-sm font-bold px-4 py-3 lg:hidden relative" role="alert">
                <svg width="20" height="20" fill="currentColor" className="w-4 h-4 mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1216 1344v128q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64v-384h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h384q26 0 45 19t19 45v576h64q26 0 45 19t19 45zm-128-1152v192q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-192q0-26 19-45t45-19h256q26 0 45 19t19 45z">
                    </path>
                </svg>
                <p>
                    This site works better on Larger Screen!
                </p>
                <button className="absolute top-0 bottom-0 right-0 px-4 py-3 hover:bg-amber-700" onClick={()=>setAlert(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="h-6 w-6 text-white" viewBox="0 0 1792 1792">
                        <path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z">
                        </path>
                    </svg>
                </button>
            </div>
            :<div className='pt-3'></div>            
          }

         <div className="text-white py-2 px-4 text-4xl text-center flex flex-row justify-center space-x-3">
          <div className='px-2'>GitHub</div> 
          <Image src={battleSword} height="20px" width="37px" alt='|'/>
          <div className='pr-7'>Duel</div>
         </div>
        </header>

        <div className='z-50'>
          <button onClick={()=> window.open("https://github.com/anshuman-8/github-duel", "_blank")} className="mr-5 inline fixed bottom-5 right-5 lg:bottom-10 lg:right-7 cursor-pointer shadow-md hover:shadow-xl hover:scale-110 hover:bg-slate-500 rounded-3xl">
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


