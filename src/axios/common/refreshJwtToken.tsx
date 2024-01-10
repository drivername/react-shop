import axios from "axios";

export default async function refreshJwtToken(){
        try{
            const refresh=await axios.post('http://localhost:3001/auth/refresh',null,{
                withCredentials:true
             })
             console.log(refresh.data,'co to jest?')
             if(refresh.data.status===200){
                return true
             }

        }catch(e:any){
            if(e.response.data.msg==='refresh token expired'){
                return {msg:'refresh-token-expired',status:403}
            }
            return {msg:'something-went-wrong',status:403}
          
        }

}