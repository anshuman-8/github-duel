import React,{useEffect} from 'react';
import repoScore from '../functions/repoScore';

export default function RepositoryDetails({data}) {
    // let repoNodeList=[]


    // console.log("this is the repo score: ",data)

    let totalScore=0;
    // useEffect(() => {
    // // console.log(data);
    // console.log("sending this to repo node: ",data)
    // repoNodeList = repoScore(data);
    // }, []);

  const repoCard = (name,score) => {
    return (
        <div className="flex items-center flex-row justify-between py-3 px-10 ml-4 lg:w-[27rem] dark:scale-110 duration-75 dark:hover:text-white">
        <div  className="">
          {name}
        </div>
        <div>
          {score}
        </div>
      </div>
    );
  };


  return (
    <div>
       <div className="text-3xl mt-5 text-slate-100 mb-1 ml-2">Repository Scores: </div>

        <div  className="z-10 lg:w-[30rem] bg-white  shadow dark:bg-gray-800 dark:border-gray-700 rounded-r-lg mb-5">
       
        <ul className="overflow-y-auto py-1 h-48 text-gray-700 dark:text-gray-200" >
            {Object.entries(data).map(repoNode  => {
              console.log("345: ",repoNode[1])
              totalScore+=repoNode[1];
                return (<>{
                  <li key={repoNode[0]}>
                  {repoCard(repoNode[0].toString(),repoNode[1])}
                  </li>
                }</>
                   
                );
            })}
            {/* {repoCard("anshuasfdf",34)}
            {repoCard("anshuasfdf",34.5)}{repoCard("anshuasfdf",45.32)}{repoCard("anshuasfdf",4.45)}{repoCard("anshuasfdf",345)} */}
        </ul>
            <div  className="flex flex-row justify-between px-10 items-center p-3 text-sm font-medium text-white bg-gray-50 border-t border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-900 ">
            <div  className="mr-10">
          Total Score :
            </div>
        <div>
          {totalScore}
        </div>
            </div >
        </div>
    </div>
  )
}
