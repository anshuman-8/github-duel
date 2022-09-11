import React from 'react';


function ProfileDetails({data}) {

  const dataRow = (label, value) => {
    return (
    <div className="flex flex-row justify-between px-10 my-2 hover:bg-slate-500 rounded-lg">
    <div className="">
      {label}
    </div>
    <div className="text-gray-300 lg:text-2xl">
      {value}
    </div>
  </div>
    );
  };

  return (
    <div className='hidden lg:block'>
    <div className="text-3xl mt-5 text-slate-100">Profile Details: </div>
    <div className="divide-y-4 divide-slate-400/25">
      <div className="overflow-y-auto py-1 text-gray-700 lg:text-xl dark:text-gray-200 my-5">

        {dataRow("Contributions", data.contributionsCollection.contributionCalendar.totalContributions)}
        
        {dataRow("Pull Requests", data.pullRequests.totalCount)}
      
        {dataRow("Issues", data.contributionsCollection.totalIssueContributions)}

        {dataRow("Repository Contributed to", data.repositoriesContributedTo.totalCount)}

      </div>

      {/* ------------------------------------------------------- */}

      <div className="overflow-y-auto py-1 h-48 text-gray-700 lg:text-xl dark:text-gray-200 my-5">

        {dataRow("Followers", data.followers.totalCount)}

        <div className="flex flex-row justify-between  px-10 my-2 hover:bg-slate-500 rounded-lg">
          <div className="">
            Website
          </div>
          <div className="text-gray-300 max-w-[330px] text-right lg:text-xl">
            {data.websiteUrl!==null?<a href={data.websiteUrl} className="hover:underline">{data.websiteUrl}</a>:"null"}
          </div>
        </div>
  
        {dataRow("Social Link", data.twitterUsername!==null?<a href={`https://twitter.com/${data.twitterUsername}`} className="hover:underline">{data.twitterUsername}</a>:"null")}
      </div>
    </div>
   
    </div>
  )
}

export default ProfileDetails
