import React, { useState } from 'react'
import s from '../../styles/user/ProductDetails.module.scss'
import { useLoaderData, useParams, useSubmit } from 'react-router-dom'
import productImg from '../../public/product.png'
import { Field, Form, Formik } from 'formik'
import makePostRequest from '../../axios/common/makePostRequest'
import { CategoryOfProduct } from '../../common/Enums'
interface elementType{
    name_of_product:string,
    id:number,
    createdAt:string,
    updatedAt:string
    description:string
    quantity:number
    price:number,
    categoryId:number|string

}
function ProductDetails() {
    let dataLoader:any=useLoaderData()
    const param=useParams()
    const [edit,setEdit]=useState(false)
    const submit=useSubmit()
  console.log(param)
    let element:elementType=dataLoader.find((e:any)=>e.id==param.id)
if(element.categoryId===1)element.categoryId='RTV'
if(element.categoryId===2)element.categoryId='AGD'
if(element.categoryId===3)element.categoryId='Cloths'
if(element.categoryId===4)element.categoryId='Tools'
if(element.categoryId===5)element.categoryId='Books/Paper'
  
    
  return (
    <div className={s.container}>
      <button onClick={()=>{setEdit(!edit)}}>Edit</button>
      {!edit?  <div className={s.productBox}>
            <p className={s.name_of_product}>{element.name_of_product}</p>
            <img className={s.img} src={productImg}/>
            <p className={s.description}>{element.description}</p>
            <p>Quantity:{element.quantity}</p>
            <p>Price:{element.price}</p>
            <p>Category:{element.categoryId}</p>
            
        </div>:<Formik
          initialValues={{
            name_of_product:element.name_of_product,
            description:element.description,
            quantity:`${element.quantity}`,
            price:`${element.price}`,
            category:''
          }}
          onSubmit={(values)=>{ 
            console.log(values)
            setEdit(!edit)
            submit({id:`${element.id}`,...values},{method:'post',action:`user/details/${param.id}`})

          }}
        >
          {({values,handleSubmit})=>(
              <Form>
              <div className={s.productBoxes}>
                   <Field name='name_of_product' id='name_of_product'/>
                   <img src={productImg}></img>
                   <Field as='textarea' name='description' id='description' />
                   <Field type='number' name='quantity' id='quantity'/>
                   <Field type='number' name='price' id='price'/>
                   <Field as='select' type='text' name='category' id='category'>
                   <option value={CategoryOfProduct.RTV}>RTV</option>
              <option value={CategoryOfProduct.AGD}>AGD</option>
              <option value={CategoryOfProduct.CLOTHS}>Cloths</option>
              <option value={CategoryOfProduct.TOOLS}>Tool</option>
              <option value={CategoryOfProduct.BOOKSPAPER}>Books/Papers</option>

                   </Field>
                    <button type='submit'>Save</button>
               </div>
              </Form>
          )}

        </Formik>
     }
        

    </div>
  )
}


export async function action({request}:any){
  let formData=await request.formData()
  let dto=Object.fromEntries(formData)
  dto.quantity=Number(dto.quantity)
  dto.price=Number(dto.price)
  dto.id=Number(dto.id)
  dto.category=Number(dto.category)

  return await makePostRequest('http://localhost:3001/user/editProduct',dto)

}

export default ProductDetails


