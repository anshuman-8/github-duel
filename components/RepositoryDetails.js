import React from 'react'

export default function RepositoryDetails() {

  const repoCard = (name) => {
    return (
        <div className="flex items-center flex-row justify-between py-3 px-10 ml-4 lg:w-[27rem] dark:scale-110 duration-75 dark:hover:text-white">
        <div  className="">
          {name}
        </div>
        <div>
          56
        </div>
      </div>
    );
  };


  return (
    <div>
       <div className="text-3xl mt-5 text-slate-100 mb-1 ml-2">Repository Scores: </div>

        <div  className="z-10 lg:w-[30rem] bg-white  shadow dark:bg-gray-800 dark:border-gray-700 rounded-r-lg mb-5">
       
        <ul className="overflow-y-auto py-1 h-48 text-gray-700 dark:text-gray-200" >
            {repoCard("anshuasfdf")}
            {repoCard("anshuasfdf")}{repoCard("anshuasfdf")}{repoCard("anshuasfdf")}{repoCard("anshuasfdf")}
        </ul>
            <div  className="flex items-center p-3 text-sm font-medium text-white bg-gray-50 border-t border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-900 ">
            Add new user
            </div >
        </div>
    </div>
  )
}
