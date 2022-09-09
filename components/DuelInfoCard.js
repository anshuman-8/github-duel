import React, { useEffect } from "react";
import userRepo from "../fetcher/userRepo";
// import RepoInfoContext from "../context/RepoData/RepoDataContext";
import ProfileCard from "./ProfileCard";
import ProfileDetails from "./ProfileDetails";
import RepositoryDetails from "./RepositoryDetails";

function DuelInfoCard(props) {
  const { TOKEN } = props;
  // const data=props.data;

  const data = {
    avatarUrl:
      "https://avatars.githubusercontent.com/u/90995338?u=5e5c565506f9c339bc6be531b68ca7e63c2b3f4a&v=4",
    bio: "",
    location: "India",
    company: null,
    createdAt: "2021-09-19T02:28:58Z",
    email: "",
    id: "MDQ6VXNlcjkwOTk1MzM4",
    isCampusExpert: false,
    login: "anshuman-8",
    name: "Anshuman swain",
    twitterUsername: "Anshuman_8_",
    websiteUrl: null,
    followers: {
      totalCount: 13,
    },
    pullRequests: {
      totalCount: 14,
    },
    organizations: {
      totalCount: 0,
    },
  };

  useEffect(() => {
    console.log(data);
    userRepo(data.login, TOKEN);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-around w-[90%]">
      <div>
      <ProfileCard />
     <RepositoryDetails/>
     <ProfileDetails/>
      </div>
        <div className="h-40 bg-gray-800 rounded-lg flex flex-row px-10 items-center text-white my-10">
          <div className="px-3 text-3xl">23423</div>
          <div className="px-3">he</div>
          <div className="px-3 text-3xl">23423</div>
        </div>
      <div>
      <ProfileCard/>
     <RepositoryDetails/>
     <ProfileDetails/>
      </div>
    
     
    </div>
  );
}

export default DuelInfoCard;
