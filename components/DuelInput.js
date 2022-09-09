import { useState, useContext } from "react";
import Image from 'next/image'
import UserInfoContext from '../context/UserInfo/UserInfoContext';
import RepoDataContext from '../context/RepoData/RepoDataContext';
import ProfileInput from './ProfileInput'
import DuelInfoCard from "./DuelInfoCard";
import userRepo from "../fetcher/userRepo";
import LoadingRing from "../Assets/DoubleRingLoading.gif";

function DuelInput({TOKEN}) {
  // const [secActive, setSecActive] = React.useState(false);
  const {user1,user2} = useContext(UserInfoContext);
  const {userRepo1,setuserRepo1,userRepo2,setuserRepo2} = useContext(RepoDataContext);
  const [duel,setDuel]=useState(false);
  const [loading,setLoading]=useState(false);



  const handleDuel=async()=>{
    console.log("handleDuel");
    console.log(user1);
    console.log(user2);
    
    if(user1===null || user2===null){
      alert("Please enter both Usernames");
      return;
    }
    if(user1.login===user2.login){
      alert("Please enter different usernames");
      return;
    }
    setLoading(true);

    const repoUser1=await userRepo(user1.login,TOKEN);
    await setuserRepo1(repoUser1);
    const repoUser2=await userRepo(user2.login,TOKEN);
    await setuserRepo2(repoUser2);
    // console.log("repo data: ",repoUser1);
    setDuel(true);
    setLoading(false);

  };

  return (
    <>{loading?
      <Image src={LoadingRing} alt="Fetching data..."  width="350px"
    height="300px"/> 
    :<div className="">{duel?<DuelInfoCard/>:
      <div className='flex flex-col items-center w-full'>
    <div className='flex flex-col my-10 mx-2 lg:flex-row lg:justify-around lg:items-center'>
      <ProfileInput active={true} TOKEN={TOKEN} />
      <ProfileInput active={true} TOKEN={TOKEN}/>
    </div>
    <button className="w-20 font-medium rounded-lg text-sm px-5 py-2.5 my-10 mr-2 mb-2 bg-gray-800 text-white border-gray-300 hover:bg-gray-700 hover:border-gray-600 active:bg-gray-900 ring-1 ring-slate-500" onClick={handleDuel}>
      Duel
    </button>
    {/* <DuelInfoCard /> */}
    </div>
    }</div>}</>
    
  )
}

export default DuelInput

