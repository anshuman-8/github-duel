 // src/Context/UserState.js
 import { useState } from "react";
 import UserInfoContext from "./UserInfoContext";

//  const user1Data={
//      "name":"Anshuman",
//      "age":19,
//      "color":"blue"
//  }

//  const user2Data={}

 const UserInfoState=({children})=>{
 
     const [user1,setUser1]=useState(null);
     const [user2,setUser2]=useState(null);    

     const resetInfoData=()=>{
            setUser1(null);
            setUser2(null);
     }

     return (
         <UserInfoContext.Provider value = {{user1,setUser1,user2,setUser2,resetInfoData}}>
             {children}
         </UserInfoContext.Provider>
         )
     }

 export default UserInfoState;
 