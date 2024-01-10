import axios from "axios";
import { redirect} from "react-router-dom";

export default async function login({request}:any){
    const formData=await request.formData()
    const dto=Object.fromEntries(formData)
    //prove navigation information
    

   
    try{
        const login=await axios.post('http://localhost:3001/auth/signin',dto,{
            withCredentials:true
        })
        if(login.status===200){
        
            return {msg:'Login Successful',status:200}
          
        }
    }
    catch(e:any){
        console.log(e.response.status,'czym jest error')
        if(e.response.status===401){
            
            return {msg:'Unauthorized',status:403}
        }
        if(e.response.status===422){
            return {msg:'Validation problem',status:403}
        }
        if(e.response.status===403){
            return {msg:'Account like this not exist!',status:403}
        }
        
        return {msg:'Error with login',status:403}
    }
}