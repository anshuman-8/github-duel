export default (repoData,userData)=>{
    // const issues=data.issues.totalCount;
    // const following=data.following.totalCount;

    let totalScore=0;
    let repoScore=0;

    Object.entries(repoData).forEach(repoNode=>{
        repoScore+=repoNode[1];
    })

        const pullReq=parseFloat(userData.pullRequests.totalCount);
        const repoContributed=parseFloat(userData.repositoriesContributedTo.totalCount);
        const followers=parseFloat(userData.followers.totalCount);
        const web=userData.websiteUrl===null?0:1;
        const bio=(userData.bio===null)?0:1;
        const twitter=userData.twitterUsername===null?0:1;

       
        totalScore=repoScore+(pullReq * 0.5)+(repoContributed * 1)+(followers * 0.3)+(web * 0.2)+(bio * 0.2)+(twitter * 0.2);

    
    return totalScore.toFixed(2);
}