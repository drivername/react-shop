import makeGetRequest from "../common/makeGetRequest";

export default async function MyProducts(){
    return await makeGetRequest('http://localhost:3001/user/myProducts')
}