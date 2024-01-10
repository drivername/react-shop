import axios from "axios";

export default async function logout(){
  
    try{
        const logout=await axios.get('http://localhost:3001/auth/logout',{
            withCredentials:true
        })
      console.log(logout)
        return logout
    }
    catch(e){
       //It will invoke when  already are logout
       
        return e
       
    }

}