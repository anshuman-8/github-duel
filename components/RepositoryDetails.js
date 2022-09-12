import React from 'react';

export default function RepositoryDetails({data}) {

    let totalScore=0;

  const repoCard = (name,score) => {
    return (
        <div className="flex flex-row justify-between py-3 px-10 ml-4 lg:w-[27rem] rounded-xl duration-75 hover:bg-gray-900">
        <div  className="">
          {name}
        </div>
        <div>
          {score.toFixed(2)}
        </div>
      </div>
    );
  };


  return (
    <div className='hidden md:block'>
       <div className="text-3xl mt-5 text-slate-100 mb-1 ml-2">Repository Scores: </div>

        <div  className="z-10 lg:w-[30rem] shadow bg-gray-800 border-gray-700 rounded-lg mb-5">
       
        <ul className="overflow-y-auto py-1 h-48 text-gray-200" >

            {Object.entries(data).map(repoNode  => {

              totalScore+=repoNode[1];

                return (<div key={repoNode[0].toString()+repoNode[1].toString()}>
                  <li >
                  {repoCard(repoNode[0].toString(),repoNode[1])}
                  </li>
                    </div>
                )
            })}

       </ul>
            <div  className="flex flex-row justify-between px-10 items-center p-3 font-medium text-white  border-t  border-gray-600  bg-gray-700 hover:bg-gray-900 ">
            <div  className="mr-10 tracking-wide ">
              Total  Repository  Score :
            </div>
        <div>
          {totalScore.toFixed(2)}
        </div>
            </div >
        </div>
    </div>
  )
}
