import axios from "axios";
import refreshJwtToken from "./refreshJwtToken";
import { error } from "console";

export default async function makeGetRequest(path:string){

   try{
    const response=await axios.get(path,{withCredentials:true})
    return response.data
   }

   catch(e:any){
    console.log(e,'co tu sie dzieje?')
        if(e.response.data.status===401){
            let refreshResult=await refreshJwtToken()
            if(refreshResult===true){
                const response=await axios.get(path,{withCredentials:true})
                return response.data
            }
            throw  {msg:'refresh-token-expired',status:403}
           
        }
        if(e.response.data.status===404){
            throw  {msg:'something-went-wrong-with-searching-user-in-db',status:403}
        }
            
        throw  new Error('Error')
        
    }
        
      

        

}