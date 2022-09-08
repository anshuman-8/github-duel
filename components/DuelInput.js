import { useState, useContext } from "react";
import UserInfoContext from '../context/UserInfo/UserInfoContext';
import ProfileInput from './ProfileInput'

function DuelInput({TOKEN}) {
  // const [secActive, setSecActive] = React.useState(false);
  const {user1,user2} = useContext(UserInfoContext);


  const handleDuel=()=>{
    console.log("handleDuel");
    console.log(user1);
    console.log(user2);
    if(user1===null || user2===null){
      alert("Please enter both Usernames");
    }
  };

  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col my-10 mx-2 lg:flex-row lg:justify-around lg:items-center'>
        <ProfileInput active={true} TOKEN={TOKEN} />
        <ProfileInput active={true} TOKEN={TOKEN}/>
      </div>
      <button className="w-20 font-medium rounded-lg text-sm px-5 py-2.5 my-10 mr-2 mb-2 bg-gray-800 text-white border-gray-300 hover:bg-gray-700 hover:border-gray-600 active:bg-gray-900 ring-1 ring-slate-500" onClick={handleDuel}>
        Duel
      </button>
    </div>
  )
}

export default DuelInput
