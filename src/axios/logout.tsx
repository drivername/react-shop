import axios from "axios";

export default async function LogoutHandler(){
   
    try{
        const logout=await axios.post('http://localhost:3001/auth/logout',null,{
            withCredentials:true
        })
      console.log(logout)
        return logout
    }
    catch(e){
       //It will invoke when  already are logout
       
        return null
       
    }

}