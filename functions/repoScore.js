export default (repoNodes) => {

  const repoScoreData = {};

  repoNodes.forEach((repo) => {
    
    const {
      name,
      stargazerCount,
      forkCount,
      pullRequestTemplates,
      pullRequests,
      licenseInfo,
      description,
      codeOfConduct,
      issueTemplates,
      objectMaster,
      objectMain
    } =  repo;

    let score = stargazerCount * 0.3 + forkCount * 0.5;

    // checks repository health
    if (codeOfConduct !== null) score++;

    if (licenseInfo !== null) score++;

    if (pullRequestTemplates.length !== 0) score++;

    if (objectMaster!==null){
      score ++;
    }else if(objectMain!==null){
      score ++;
    }  //for readme.md

    if(pullRequests.totalCount!==0){
      score+=pullRequests.totalCount*0.2;
    };

    if (issueTemplates.length !== 0) score++;

    if (description !== null) score++;

    repoScoreData[name] = score;
  });
  console.log(repoScoreData);
  const repoList=Object.entries(repoScoreData).sort((a,b)=>(a[1] > b[1] ? -1 : 1));
  console.log("List n",repoList)
  return repoList;

};


