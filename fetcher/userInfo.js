import axios from 'axios';


export default async ( username ,TOKEN) => {
  try{
    const res=await axios({
      method: "get",
      url: `https://api.github.com/users/${username}`,
      headers: {
        Authorization: `token ${TOKEN}`,
      },
    });
    // console.log("resData: ",res.data);
    // console.log("itsData: ",res)
    const data=res.data;
    // console.log("itsData: ",data)
    return data;
  }catch(err){
    // console.log(err.response.statusText);
    return (err.response)
  }

  
   
      
     
};


