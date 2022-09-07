import axios from 'axios';
import {useContext} from "react";
import userInfoContext from '../context/UserInfo/UserInfoContext';


export default async ( username ,TOKEN) => {
  try{
    const {user1,setUser1,setUser2} = useContext(userInfoContext);
    const res=await axios({
      method: "get",
      url: `https://api.github.com/users/${username}`,
      headers: {
        Authorization: `token ${TOKEN}`,
      },
    });
    // console.log("resData: ",res.data);
    // console.log("itsData: ",res)
    if(user1===null){
      setUser1(res.data);
    }else{
      setUser2(res.data);
    }
    const data=res.data;
    // console.log("itsData: ",data)
    return data;
  }catch(err){
    // console.log(err.response.statusText);
    return (err.response)
  }

  
   
      
     
};


