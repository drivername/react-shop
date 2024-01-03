import axios from "axios";

export default async function mainUserData(){
    try{
        const userData=await axios.get('http://localhost:3001/user/panel',{
            withCredentials:true
        })
        const response=userData.data
      
       return response

    }catch(e:any){
        //if token expired
        if(e.response.status==403){
           
           try{
           
            //then check if refresh token is valid
             const refresh=await axios.post('http://localhost:3001/auth/refresh',null,{
                withCredentials:true
             })
            //if is valid
             if(refresh.status===200){
               
                //token is valid and again I fetch data about user
                try{
                    const userData=await axios.get('http://localhost:3001/user/panel',{
                        withCredentials:true
                    })
                    const response=userData.data
                  
                   return response
                }catch(e){
                    console.log(e,'jaki problem')
                    return null
                }
             }
             
           }
           catch(e){
            //When refresh token is expired too
            //Then page will be redirect to login
            console.log(e,'refresh token nie wazny')
                return null
           }
        }
    
        
    }

}

