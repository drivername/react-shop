import axios from "axios";
import makeGetRequest from "./common/makeGetRequest";

export default async function homeLoader(){
    return await makeGetRequest('http://localhost:3001/user/search')
}