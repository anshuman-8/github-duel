import React from 'react'

function ProfileDetails() {
  return (
    <div>
      
    <div className="text-3xl mt-5 text-slate-100">Profile Details: </div>
    <div className="divide-y-4 divide-slate-400/25">
    <div className="overflow-y-auto py-1 text-gray-700 lg:text-xl dark:text-gray-200 my-5">
    <div className="flex flex-row justify-between px-10 my-2">
      <div className="">
        Contributions
      </div>
      <div className="text-gray-300 lg:text-2xl">
        34
      </div>
    </div>
    <div className="flex flex-row justify-between px-10 my-2">
      <div className="">
        Pull Request
      </div>
      <div className="text-gray-300 lg:text-2xl">
        34
      </div>
    </div>
    <div className="flex flex-row justify-between px-10 my-2">
      <div className="">
        Issues
      </div>
      <div className="text-gray-300 lg:text-2xl">
        34
      </div>
    </div>
    <div className="flex flex-row justify-between px-10 my-2">
      <div className="">
        Repository Contributed to
      </div>
      <div className="text-gray-300 lg:text-2xl">
        34
      </div>
      </div>
    </div>

    {/* ------------------------------------------------------- */}

    <div className="overflow-y-auto py-1 h-48 text-gray-700 lg:text-xl dark:text-gray-200 my-5">
    <div className="flex flex-row justify-between px-10 my-2">
      <div className="">
        Followers
      </div>
      <div className="text-gray-300 lg:text-2xl">
        34
      </div>
    </div>
    <div className="flex flex-row justify-between px-10 my-2">
      <div className="">
        Website
      </div>
      <div className="text-gray-300 lg:text-xl">
        True
      </div>
    </div>
    <div className="flex flex-row justify-between px-10 my-2">
      <div className="">
        Social Link
      </div>
      <div className="text-gray-300 lg:text-xl">
        True
      </div>
    </div>
    </div>
    </div>
   
    </div>
  )
}

export default ProfileDetails
