import React, { useEffect } from "react";
import userRepo from "../fetcher/userRepo";
import RepoInfoContext from "../context/RepoData/RepoDataContext";

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

  const repoCard = (name) => {
    return (
        <li>
        <a href="#" class="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
          <img class="mr-2 w-6 h-6 rounded-full" src="https://xsgames.co/randomusers/assets/avatars/male/77.jpg" alt="Jese image"/>
          {name}
        </a>
      </li>
    );
  };


  return (
    <div>
      <div className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 px-10 lg:w-[35rem]">
        <div className="flex justify-end px-4 pt-4">
          <button
            id="dropdownButton"
            data-dropdown-toggle="dropdown"
            className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
            type="button"
          >
            <span className="sr-only">Open dropdown</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center pb-10">
          <img
            className="mb-3 w-24 h-24 rounded-full shadow-lg"
            src="https://xsgames.co/randomusers/assets/avatars/male/77.jpg"
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Pura Naam
          </h5>
          <span className="text-sm text-gray-300 dark:text-gray-200 my-1">
            puraUserId
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Location :
            <span className="text-sm text-gray-300 dark:text-gray-200">
              {" "}
              India,Kerlal
            </span>
          </span>
        </div>
      </div>
      <div  class="z-10 lg:w-[30rem] bg-white  shadow dark:bg-gray-700 rounded-r-lg">
  <ul class="overflow-y-auto py-1 h-48 text-gray-700 dark:text-gray-200" >
    <li>
      <a href="#" class="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
        <img class="mr-2 w-6 h-6 rounded-full" src="https://xsgames.co/randomusers/assets/avatars/male/77.jpg" alt="Jese image"/>
        Jese Leos
      </a>
    </li>
    {repoCard("anshuasfdf")}
    {repoCard("anshuasfdf")}{repoCard("anshuasfdf")}{repoCard("anshuasfdf")}{repoCard("anshuasfdf")}
  </ul>
  <div  class="flex items-center p-3 text-sm font-medium text-blue-600 bg-gray-50 border-t border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-blue-500 hover:underline">
      <svg class="mr-1 w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path></svg>
      Add new user
  </div>
    </div>
    </div>
  );
}

export default DuelInfoCard;
