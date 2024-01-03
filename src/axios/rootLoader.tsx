import axios from "axios";

export default async function rootLoader(){
 try{
    const checkIfUserIsloged=await axios.get('http://localhost:3001/user/panel',{
        withCredentials:true
    })
  
    return checkIfUserIsloged.data
 }catch(e){
    
    return null
 }

}