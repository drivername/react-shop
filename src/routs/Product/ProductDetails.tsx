import React, { useState } from 'react'
import s from '../../styles/user/ProductDetails.module.scss'
import { Link, useLoaderData, useParams, useSubmit } from 'react-router-dom'
import productImg from '../../public/product.png'
import { Field, Form, Formik } from 'formik'
import makePostRequest from '../../axios/common/makePostRequest'
import { CategoryOfProduct } from '../../common/Enums'
import makeGetRequest from '../../axios/common/makeGetRequest'
import axios from 'axios'
interface elementType{
    name_of_product:string,
    id:number,
    createdAt:string,
    updatedAt:string
    description:string
    quantity:number
    price:number,
    categoryId:number|string
    category:string

}
function ProductDetails() {
    let element:any=useLoaderData()
    const param=useParams()
    const [edit,setEdit]=useState(false)
    const submit=useSubmit()
    console.log(element,'data from loader')
  return (
    <div className={s.container}>
      <h1>Siema</h1>
      <button onClick={()=>{setEdit(!edit)}}>Edit</button>
      <Link to={'/myProducts'}><button>Return</button></Link>
      {!edit?  <div className={s.productBox}>
            <p className={s.name_of_product}>{element.name_of_product}</p>
            <img className={s.img} src={element.img_url}/>
            <p className={s.description}>{element.description}</p>
            <p>Quantity:{element.quantity}</p>
            <p>Price:{element.price}</p>
            <p>Category:{element.category.name_of_category}</p>
            
        </div>:<Formik
          initialValues={{
            name_of_product:element.name_of_product,
            description:element.description,
            quantity:`${element.quantity}`,
            price:`${element.price}`,
            category:`${element.categoryId}`,
            file:'',
          }}
          onSubmit={(values)=>{ 
            console.log(values)
            setEdit(!edit)
            submit({id:`${element.id}`,actualImg:element.img_url,...values},{method:'post',action:`product/details/${param.id}`,encType:'multipart/form-data'})

          }}
        >
          {({values,handleSubmit,setFieldValue})=>(
              <Form>
              <div className={s.productBoxes}>
                    <label htmlFor='name_of_product'>Name of Product</label>
                   <Field name='name_of_product' id='name_of_product'/>
                   <label htmlFor='image'>Image</label>
                   <input  type='file' id='image' onChange={(e)=>{setFieldValue('file',e.target.files![0])}}/>
                   <label htmlFor='description'>Description</label>
                   <Field as='textarea' name='description' id='description' />
                   <label htmlFor='quantity'>Quantity</label>
                   <Field type='number' name='quantity' id='quantity'/>
                   <label htmlFor='price'>Price</label>
                   <Field type='number' name='price' id='price'/>
                   <label htmlFor='category'>Category</label>
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
  console.log(dto,'what it is dto')
  if(dto.file===''){
    dto.file=null
  }
 

  const response=await axios.post('http://localhost:3001/product/editProduct',dto,{
    withCredentials:true,
    headers:{
      "Content-Type":"multipart/form-data"

    }
  
  })
  return response.data

 

}
export async function loader({params}:any){
 console.log(params)
  return await makeGetRequest('http://localhost:3001/product/myProductDetails',params)
}

export default ProductDetails


