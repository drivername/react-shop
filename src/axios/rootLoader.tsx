import axios from "axios";

export default async function rootLoader(){
 
 try{
    const checkIfUserIsloged=await axios.get('http://localhost:3001/auth/checkIFuserIsLoged',{
        withCredentials:true
    })
   
    return {msg:'ok',status:200}
 }catch(e){
   
    return {msg:'Unauthorize',status:404}
 }

}