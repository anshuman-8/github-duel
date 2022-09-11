export default (repoData,userData)=>{
    
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
        const contributions=parseFloat(userData.contributionsCollection.contributionCalendar.totalContributions);
        const issues=parseFloat(userData.contributionsCollection.totalIssueContributions);
        const orgs=parseFloat(userData.organizations.totalCount);
        const isCampusExpert=userData.isCampusExpert?1:0;
        const isBountyHunter=userData.isBountyHunter?1:0;
        const isDeveloperProgramMember=userData.isDeveloperProgramMember?1:0;
        const isGitHubStar=userData.isGitHubStar?1:0;


       
        totalScore=repoScore+(pullReq * 0.5)+(repoContributed * 1)+(followers * 0.3)+(web * 0.2)+(bio * 0.2)+(twitter * 0.2) + (contributions * 0.05) + (issues * 0.1) + (orgs * 0.5) + (isCampusExpert * 2) + (isBountyHunter * 1) + (isDeveloperProgramMember * 1) + (isGitHubStar * 1);  

    
    return totalScore.toFixed(2);
}