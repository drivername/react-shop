import axios from "axios"

export default async function createAccount({request}:any){
    const formData=await request.formData()
    const dto=Object.fromEntries(formData)
    
    try{

        const create=await axios.post('http://localhost:3001/auth/signup',dto,{
            withCredentials:true
        })
        if(create.data.accountCreated===true){
            return {msg:'Account create successful',status:201}
        }
    }
    catch(e){
        return 'cos'
    }

}