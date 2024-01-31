import React, { useState } from 'react'
import { Link, useActionData, useLoaderData, useNavigate, useSubmit } from 'react-router-dom'
import s from '../styles/Home.module.scss'
import productImg from '../public/product.png'
import { Form,Field, Formik, useFormik } from 'formik'
import { CategoryOfProduct } from '../common/Enums'
import makePostRequest from '../axios/common/makePostRequest'
import makeGetRequest from '../axios/common/makeGetRequest'



function Home() {
  const navigate=useNavigate()
  let homeLoader:any=useLoaderData()
  let homeAction:any=useActionData()
  if(homeAction===undefined)homeAction=homeLoader

console.log(homeLoader[0].img_url,'what it is?')


  
  
  const submit=useSubmit()
  
  return (
    <div className={s.container}>
        <h1>Welcome on our store page!</h1>
        <nav className={s.navHome}>
          <Formik
          initialValues={{
            searchValue:'',
            category:'1',
          }}
          onSubmit={(values)=>{

            submit(values,{method:'post',action:'/'})
          }}
          >
           {()=>(
             <Form> 
             <Field type='search' name='searchValue' id='searchValue'/> 
            
            
             <Field as='select' name='category' id='category'>
             <option  value={0}>All</option>
             <option  value={CategoryOfProduct.RTV}>RTV</option>
             <option value={CategoryOfProduct.AGD}>AGD</option>
             <option value={CategoryOfProduct.CLOTHS}>Cloths</option>
             <option value={CategoryOfProduct.TOOLS}>Tool</option>
             <option value={CategoryOfProduct.BOOKSPAPER}>Books/Papers</option>

             </Field>
             <button type='submit'>Search</button>
           
            
           </Form>
           )}
           
          </Formik>
          
     
        </nav>
        <div className={s.itemsDisplay}>
        {homeAction.map((e: any,i: any,arr: any)=>{
          console.log(e.img_url,"img?")
            return (
            <div key={e.name_of_product} className={s.boxItem}>
              <p className={s.name_of_product}>{e.name_of_product}</p>
              <img src={e.img_url} className={s.img} alt={e.img_url}/>
              <p className={s.price}>Now only: {e.price}</p>
              <p className={s.description}>{e.description}</p>
              <button className={s.btn}><Link to={`/details/${arr[i].id}`}>Check</Link></button>
            </div>
            )
          })}

        </div>
   
    </div>
  )
}

export default Home

export async function action({request}:any){
  const formData=await request.formData()
  let dto=Object.fromEntries(formData)
  dto.categoryId=Number(dto.category)
  delete dto.category
  console.log(dto,'what it is')
  return await makePostRequest('http://localhost:3001/user/search',dto)
  
}

export async function loader(){
  return await makeGetRequest('http://localhost:3001/user/search')
}