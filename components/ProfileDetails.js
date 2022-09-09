import React from 'react';


function ProfileDetails({data}) {
  console.log("The data is: ", data);
  return (
    <div>
    <div className="text-3xl mt-5 text-slate-100">Profile Details: </div>
    <div className="divide-y-4 divide-slate-400/25">
    <div className="overflow-y-auto py-1 text-gray-700 lg:text-xl dark:text-gray-200 my-5">
    <div className="flex flex-row justify-between px-10 my-2 hover:bg-slate-500 rounded-lg">
      <div className="">
        Contributions
      </div>
      <div className="text-gray-300 lg:text-2xl">
        nal
      </div>
    </div>
    <div className="flex flex-row justify-between px-10 my-2 hover:bg-slate-500 rounded-lg">
      <div className="">
        Pull Request
      </div>
      <div className="text-gray-300 lg:text-2xl">
        {data.pullRequests.totalCount}
      </div>
    </div>
    <div className="flex flex-row justify-between px-10 my-2 hover:bg-slate-500 rounded-lg">
      <div className="">
        Issues
      </div>
      <div className="text-gray-300 lg:text-2xl">
      nal
      </div>
    </div>
    <div className="flex flex-row justify-between px-10 my-2 hover:bg-slate-500 rounded-lg">
      <div className="">
        Repository Contributed to
      </div>
      <div className="text-gray-300 lg:text-2xl">
          {data.repositoriesContributedTo.totalCount}
      </div>
      </div>
    </div>

    {/* ------------------------------------------------------- */}

    <div className="overflow-y-auto py-1 h-48 text-gray-700 lg:text-xl dark:text-gray-200 my-5">
    <div className="flex flex-row justify-between px-10 my-2 hover:bg-slate-500 rounded-lg">
      <div className="">
        Followers
      </div>
      <div className="text-gray-300 lg:text-2xl">
        {data.followers.totalCount}
      </div>
    </div>
    <div className="flex flex-row justify-between px-10 my-2 hover:bg-slate-500 rounded-lg">
      <div className="">
        Website
      </div>
      <div className="text-gray-300 lg:text-xl">
        {data.websiteUrl!==null?<a href={data.websiteUrl} className="hover:underline">{data.websiteUrl}</a>:"null"}
      </div>
    </div>
    <div className="flex flex-row justify-between px-10 my-2 hover:bg-slate-500 rounded-lg">
      <div className="">
        Social Link
      </div>
      <div className="text-gray-300 lg:text-xl">
      {data.twitterUsername!==null?<a href={`https://twitter.com/${data.twitterUsername}`} className="hover:underline">{data.twitterUsername}</a>:"null"}
      </div>
    </div>
    </div>
    </div>
   
    </div>
  )
}

export default ProfileDetails
