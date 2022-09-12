import React from 'react';

function ProfileCard({data}) {


  return (
    <div >
       <div className="w-full mb-5 mx-auto max-w-sm  rounded-lg border shadow-md bg-gray-800 border-gray-700 px-10 lg:w-[35rem]">
        
        <div className="flex flex-col items-center pb-10">
          <img
            className="mb-3 mt-3 w-[10rem] h-[10rem] rounded-full shadow-lg"
            src={data.avatarUrl}
            alt="Bonnie image"/>
          <a href={`https://github.com/${data.login}`} className="mb-1 text-2xl hover:underline font-medium text-white">
            {data.name}
          </a>
          <span className="text-sm text-gray-200 my-1">
            {data.login}
          </span>
          <span className="text-sm text-gray-400">
             Location :
            <span className="text-sm text-gray-200 mx-1">
              {data.location}
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
