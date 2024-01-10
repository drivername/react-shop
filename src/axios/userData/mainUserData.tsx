import axios from "axios";
import refreshJwtToken from "../common/refreshJwtToken";
import makeGetRequest from "../common/makeGetRequest";

export default async function mainUserData(){

       return await makeGetRequest('http://localhost:3001/user/panel')
  
        
    }



