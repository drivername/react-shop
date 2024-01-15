import makeGetRequest from "./common/makeGetRequest";
import makePostRequest from "./common/makePostRequest";

export default async function homeAction({request}:any){
    const formData=await request.formData()
    let dto=Object.fromEntries(formData)
    dto.categoryId=Number(dto.category)
    delete dto.category
    console.log(dto,'what it is')
    return await makePostRequest('http://localhost:3001/user/search',dto)
}