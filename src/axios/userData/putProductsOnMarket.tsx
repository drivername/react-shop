import makePostRequest from "../common/makePostRequest";

export default async function putProductsOnMarket({request}:any){
    const formData=await request.formData()
    const dto=Object.fromEntries(formData)
    dto.price=Number(dto.price)
    dto.quantity=Number(dto.quantity)
    dto.category=Number(dto.category)
  
    return await makePostRequest('http://localhost:3001/user/putProductsOnMarket',dto)
}