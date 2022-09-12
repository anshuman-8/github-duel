import Image from "next/image";
import React, {useEffect} from "react";
import userInfo from '../fetcher/userInfo';
import { useState, useContext } from "react";
import { GitHubIcon } from "../Assets/icons";
import UserInfoContext from '../context/UserInfo/UserInfoContext';

function ProfileInput({ user}) {
    const {user1,setUser1,setUser2} = useContext(UserInfoContext);
    const [verified, setVerified] = useState(false);
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState(0);
    const [userDataLoading, setUserDataLoading] = useState(false);

  const fetchUserData=async (username)=>{
    console.log("username: ", username);
    setUserDataLoading(true);
    const data= await userInfo(username);
    // console.log("data: ",data)
    if(data.statusText==="Not Found"){
        setVerified(false);
        setUserData();
    }
    else{
        setUserData(data);
         await setData(data);
         setVerified(true);
    }
    setUserDataLoading(false);
  };


  const setData=async(data)=>{
    if(user===1){
      await setUser1(data);
    }else{
      await setUser2(data);
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
    //   console.log(username)
      if(username.trim()!=="")fetchUserData(username);
    //   UserInfoFetcher({userId: username})
    }, 1500)
    return () => clearTimeout(delayDebounceFn)
  }, [username])


  const profileSpinner=()=>{
    return(
      <div role="status" className="m-3 flex justify-center">
        <svg className="  inline w-6 h-6 animate-spin text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
      </div>
    )
  };


  return (
    <div className="lg:mx-20">
      <div className="w-full scale-90 lg:scale-110 max-w-sm bg-gray-800 rounded-lg border border-gray-700 shadow-md py-3 px-4">
    <div className="flex flex-col items-center pb-10">
      <div>
        {!verified ? (
          <div className="my-4">

            { userDataLoading?<div className="">
                 {profileSpinner()}
              </div>:<></>}

            <label
              htmlFor="base-input"
              className="block mb-2 font-medium text-gray-300 pt-1">
              Enter the GitHub username
            </label>
          </div>
        ) : (<>
          { userDataLoading?<div className="">
                 {profileSpinner()}
              </div>:<div className="my-4 flex flex-col items-center justify-center">
            <Image
              className="mb-3 rounded-full shadow-lg"
              src={userData.avatarUrl}
              alt="github profile"
              height="96"
              width="96"
            />
            <h5 className="mb-1 text-xl font-medium text-white ">
              <a href={`https://github.com/${userData.login}`}>{userData.name}</a>
            </h5>
            <span className="text-sm text-gray-400">{userData.login}</span>
          </div>}
          </>)}
      </div>

      <div className="mb-6">
        <div className="relative mx-4">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <GitHubIcon />
          </div>
          <input
            type="text"
            id="base-input"
            // disabled={!active}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-gray-700 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-10"
          />
        </div>{
        ( userData!==0 && verified===false)?
             <label
             htmlFor="base-input"
             className={`block mb-2 text-sm font-medium text-red-500 py-1 px-2`}
           >
             User not found
           </label>:<></>
        }
      </div>
    </div>
  </div>
    
    </div>
  );
}

export default ProfileInput;
