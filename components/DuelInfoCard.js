import React, {useContext } from "react";
import Image from 'next/image';
import UserInfoContext from '../context/UserInfo/UserInfoContext';
import RepoDataContext from '../context/RepoData/RepoDataContext';
import ProfileCard from "./ProfileCard";
import netScore from "../functions/netScore";
import ProfileDetails from "./ProfileDetails";
import repoScore from '../functions/repoScore';
import RepositoryDetails from "./RepositoryDetails";


function DuelInfoCard() {
  // const { TOKEN } = props;
  const {user1,user2} = useContext(UserInfoContext);
  const {userRepo1,userRepo2} = useContext(RepoDataContext);
  const repo1data=repoScore(userRepo1);
  const repo2data=repoScore(userRepo2);
  const user1Score=netScore(repo1data,user1);
  const user2Score=netScore(repo2data,user2);

  const battleIcon="https://img.icons8.com/ios-filled/50/000000/battle.png";



  return (
    <div>
     <div className="flex flex-col lg:flex-row justify-around w-[90%] mx-auto">
      <div className={(user1Score>user2Score)?"border-cyan-500 drop-shadow-2xl border-4 rounded-3xl p-4 my-2":" p-4 my-2"}>
      <ProfileCard key="user1" data={user1} />
     <RepositoryDetails key="user1repo" data={repo1data} />
     <ProfileDetails key="user1info" data={user1} />


      </div>
      <div className="text-white text-2xl h-10 pl-24 md:hidden">Total Score</div>
        <div className="h-40 bg-gray-800 rounded-lg flex flex-row px-10 items-center text-white mb-10 lg:my-10">
          <div className={(user1Score>user2Score)?"px-3 text-3xl h-10 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500":"px-3 text-2xl"}>{user1Score}</div>
          {/* <div className="px-3 ">{(user1Score<user2Score)?"<":">"}</div> */}
          <Image src={battleIcon} alt="|" width="65px" height="65px"/>
          <div className={(user1Score<user2Score)?"px-3 text-3xl h-10 mx-1 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500":"px-3 text-2xl"}>{user2Score}</div>
        </div>


      <div className={(user1Score<user2Score)?"border-cyan-500 border-4 rounded-3xl drop-shadow-2xl p-4 my-2":" p-4 my-2"}>
      <ProfileCard key="user2" data={user2} />
     <RepositoryDetails key="user2repo" data={repo2data} />
     <ProfileDetails key="user2info" data={user2} />
      </div>

    </div>
    </div>
   
  );
}

export default DuelInfoCard;


// dummy data Example
  // const data = {
  //   avatarUrl:
  //     "https://avatars.githubusercontent.com/u/90995338?u=5e5c565506f9c339bc6be531b68ca7e63c2b3f4a&v=4",
  //   bio: "",
  //   location: "India",
  //   company: null,
  //   createdAt: "2021-09-19T02:28:58Z",
  //   email: "",
  //   id: "MDQ6VXNlcjkwOTk1MzM4",
  //   isCampusExpert: false,
  //   login: "anshuman-8",
  //   name: "Anshuman swain",
  //   twitterUsername: "Anshuman_8_",
  //   websiteUrl: null,
  //   followers: {
  //     totalCount: 13,
  //   },
  //   pullRequests: {
  //     totalCount: 14,
  //   },
  //   organizations: {
  //     totalCount: 0,
  //   },
  // };
