import React, { useEffect,useContext } from "react";
import userRepo from "../fetcher/userRepo";
import UserInfoContext from '../context/UserInfo/UserInfoContext';
import RepoDataContext from '../context/RepoData/RepoDataContext';
import ProfileCard from "./ProfileCard";
import ProfileDetails from "./ProfileDetails";
import RepositoryDetails from "./RepositoryDetails";
import repoScore from '../functions/repoScore';
import netScore from "../functions/netScore";

function DuelInfoCard() {
  // const { TOKEN } = props;
  const {user1,user2} = useContext(UserInfoContext);
  const {userRepo1,userRepo2} = useContext(RepoDataContext);
  const repo1data=repoScore(userRepo1);
  const repo2data=repoScore(userRepo2);
  const user1Score=netScore(repo1data,user1);
  const user2Score=netScore(repo2data,user2);
  console.log("this is the user1 score: ",user1Score);

  // const data=props.data;

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

  // useEffect(() => {
  //   console.log(data);
  //   userRepo(data.login, TOKEN);
  // }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-around w-[90%] mx-auto">
      <div className={(user1Score>user2Score)?"border-cyan-500 border-4 rounded-3xl p-4 my-2":" p-4 my-2"}>
      <ProfileCard key="user1" data={user1} />
     <RepositoryDetails key="user1repo" data={repo1data} />
     <ProfileDetails key="user1info" data={user1} />


      </div>
        <div className="h-40 bg-gray-800 rounded-lg flex flex-row px-10 items-center text-white my-10">
          <div className={(user1Score>user2Score)?"px-3 text-3xl h-10 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500":"px-3 text-2xl"}>{user1Score}</div>
          {/* <div className="px-3 ">{(user1Score<user2Score)?"<":">"}</div> */}
          <img src="https://img.icons8.com/glyph-neue/64/000000/battle.png"/>
          <div className={(user1Score<user2Score)?"px-3 text-3xl h-10 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500":"px-3 text-2xl"}>{user2Score}</div>
        </div>


      <div className={(user1Score<user2Score)?"border-cyan-500 border-4 rounded-3xl p-4 my-2":" p-4 my-2"}>
      <ProfileCard key="user2" data={user2} />
     <RepositoryDetails key="user2repo" data={repo2data} />
     <ProfileDetails key="user2info" data={user2} />
      </div>

    </div>
  );
}

export default DuelInfoCard;
