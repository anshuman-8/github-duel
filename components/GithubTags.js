import React from 'react';

function GithubTags({data}) {
    const tags=[];
    if(data.isCampusExpert)tags.push("Campus Expert");
    if(data.isBountyHunter)tags.push("Bounty Hunter");
    if(data.isDeveloperProgramMember)tags.push("Developer Program Member");
    if(data.isGitHubStar)tags.push("GitHub Star");

  return (
    <div className= "hidden md:block lg:w-[30rem] py-1">
      {
        tags.map((tag)=>{
            return(
                <div className='text-white mx-2 inline bg-emerald-900 px-2 py-2 my-1 rounded-xl'>{tag}</div>
            )
        })
      }
    </div>
  )
}

export default GithubTags
