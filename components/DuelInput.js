import Link from 'next/link';
import Image from 'next/image'
import ProfileInput from './ProfileInput'
import DuelInfoCard from "./DuelInfoCard";
import userRepo from "../fetcher/userRepo";
import { useState, useContext } from "react";
import EclipseRingLoading from "../Assets/EclipseRingLoading.gif";
import UserInfoContext from '../context/UserInfo/UserInfoContext';
import RepoDataContext from '../context/RepoData/RepoDataContext';


function DuelInput() {
  // const [secActive, setSecActive] = React.useState(false);
  const {user1,user2,resetInfoData} = useContext(UserInfoContext);
  const {setuserRepo1,setuserRepo2,resetRepoData} = useContext(RepoDataContext);
  const [duel,setDuel]=useState(false);
  const [loading,setLoading]=useState(false);


  const anotherDuel=()=>{
    resetInfoData();
    resetRepoData();
    setDuel(false);
  };


  const handleDuel=async()=>{
    // console.log(user1);
    // console.log(user2);
    
    if(user1===null || user2===null){
      alert("Please enter both Usernames");
      return;
    }
    if(user1.login===user2.login){
      alert("Please enter different usernames");
      return;
    }
    setLoading(true);

    const repoUser1=await userRepo(user1.login);
    await setuserRepo1(repoUser1);
    const repoUser2=await userRepo(user2.login);
    await setuserRepo2(repoUser2);
  
    setDuel(true);
    setLoading(false);

  };


  return (
    <>{loading?<div className='grid place-items-center h-screen -mt-20'>
      <Image src={EclipseRingLoading} alt="Fetching data..."  width="200px" height="200px"/>
    </div>
       
    :<div className="">{
        duel?<div>
          <button onClick={anotherDuel} className="px-5 py-3 rounded-md text-white -mt-4 bg-slate-500 hover:bg-slate-700 mx-28 mb-4">Another Duel</button>
          <DuelInfoCard/>
          </div>
          : <div className='flex flex-col items-center w-full'>
              <div className='flex flex-col mt-20 mb-10 mx-2 lg:flex-row lg:justify-around lg:items-center'>
                <ProfileInput user={1}  />
                <ProfileInput user={2} />
              </div>
              <button className="w-28 font-medium rounded-lg text-2xl px-5 py-2.5 my-10 mr-2 mb-2 bg-gray-800 text-white border-gray-300 hover:bg-gray-700 hover:border-gray-600 active:bg-gray-900 ring-1 ring-slate-500 shadow-xl" onClick={handleDuel}>
                Duel
              </button>
              <Link href='/about'><a className='text-blue-600 lg:text-stone-200 hover:text-blue-500 text-lg my-5 lg:my-10 underline'>How does the Scoring works?</a></Link>
            </div>
    }
    </div>}</>
    
  )
}

export default DuelInput

