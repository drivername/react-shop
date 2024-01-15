import axios from "axios";
import refreshJwtToken from "./refreshJwtToken";

export default async function makePostRequest(path:string,dto:any){
 
    try{
        const response=await axios.post(path,dto,{
            withCredentials:true
        })
       console.log(response,'response')
        return response.data
    }catch(e:any){
        console.log(e,'co siedzieje')
        //when jwt token expired and try refresh token
        if(e.response.data.status===401){
            let refreshResult=await refreshJwtToken()
            if(refreshResult===true){
                const response=await axios.post(path,dto,{
                    withCredentials:true
                })
                return response.data
            }
            throw  {msg:'refresh-token-expired',status:403}
           
        }
        else if(e.response.status===400){
            throw {msg:'Validation problem',status:400}
        }
        throw {msg:'something-went-wrong',status:403}
    }
}