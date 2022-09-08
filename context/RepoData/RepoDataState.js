 // src/Context/UserState.js
 import { useState } from "react";
 import RepoDataContext from "./RepoDataContext";

//  const user1Data={
//      "name":"Anshuman",
//      "age":19,
//      "color":"blue"
//  }

//  const user2Data={}

 const RepoDataState=({children})=>{
 
     const [userRepo1,setuserRepo1]=useState(null);
     const [userRepo2,setuserRepo2]=useState(null);    

     const resetInfoData=()=>{
        setuserRepo1(null);
        setuserRepo2(null);
     }

     return (
         <RepoDataContext.Provider value = {{userRepo1,setuserRepo1,userRepo2,setuserRepo2,resetInfoData}}>
             {children}
         </RepoDataContext.Provider>
         )
     }

 export default RepoDataState;
 