import React, {useEffect} from "react";
import { useState } from "react";
import { GitHubIcon } from "../Assets/icons";
import userInfo from '../fetcher/userInfo';

function ProfileInput({ active,TOKEN }) {
//   const [isActive, setActive] = useState(active);
  const [verified, setVerified] = useState(false);
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState(0);

  const fetchUserData=async (username)=>{
    console.log("username: ", username);
    const data= await userInfo(username,TOKEN);
    if(data.statusText==="Not Found"){
        setVerified(false);
    }
    else{
        setVerified(true);
        setUserData(data);
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
    //   console.log(username)
      if(username.trim()!=="")fetchUserData(username);
    //   UserInfoFetcher({userId: username})
    }, 1000)
    return () => clearTimeout(delayDebounceFn)
  }, [username])

  return (
    <div><div className="w-full scale-90 lg:scale-110 max-w-sm bg-gray-800 rounded-lg border border-gray-700 shadow-md py-3 px-4">
    <div className="flex flex-col items-center pb-10">
      <div>
        {!verified ? (
          <div className="my-4">
            <label
              htmlFor="base-input"
              className="block mb-2 font-medium text-gray-900 dark:text-gray-300 pt-1"
            >
              Enter the GitHub username
            </label>
          </div>
        ) : (
          <div className="my-4 flex flex-col items-center justify-center">
            <img
              className="mb-3 w-24 h-24 rounded-full shadow-lg"
              src={userData.avatar_url}
              alt="github profile"
            />
            <h5 className="mb-1 text-xl font-medium text-white ">
              {userData.name}
            </h5>
            <span className="text-sm text-gray-400">{userData.login}</span>
          </div>
        )}
      </div>

      <div className="mb-6">
        <div className="relative mx-4">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <GitHubIcon />
          </div>
          <input
            type="text"
            id="base-input"
            disabled={!active}
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
