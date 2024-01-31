import React, { useRef, useState } from 'react'
import s from '../../styles/user/SellProduct.module.scss'
import { Field, Form, Formik } from 'formik'
import TextInput from '../../Forms/TextInput'
import TextArea from '../../Forms/TextArea'
import { Link, useActionData, useNavigation, useSubmit } from 'react-router-dom'
import * as Yup from 'yup';
import { CategoryOfProduct } from '../../common/Enums'
import makePostRequest from '../../axios/common/makePostRequest'
import FileUpload from '../../Forms/FileUpload'
import axios from 'axios'

function SellProducts() {
  const fileRef=useRef<any>(null)
  const submit=useSubmit()
  let actionData:any=useActionData()
  const navigation=useNavigation()
  if(actionData===undefined)actionData={msg:'not-data-yet',status:403}
 console.log(navigation.state,'what it is')
  return (
    <div className={s.container}>
      <Formik 
      initialValues={
        {
          name_of_product:'',
          price:'',
          description:'',
          quantity:'',
          category:'1',
          files:'',
         

        }
      }
      validationSchema={
        Yup.object({
          files: Yup.mixed()
            .test("is-file-too-big", "File exceeds 10MB", () => {
              let valid = true;
              const files = fileRef?.current?.files;
              if (files) {
                const fileArr = Array.from(files);
                fileArr.forEach((file:any) => {
                  const size = file.size / 1024 / 1024;
                  if (size > 10) {
                    valid = false;
                  }
                });
              }
              return valid;
            })
            .test(
              "is-file-of-correct-type",
              "File is not of supported type",
              () => {
                let valid = true;
                const files = fileRef?.current?.files;
                if (files) {
                  const fileArr = Array.from(files);
                  fileArr.forEach((file:any) => {
                    const type = file.type.split("/")[1];
                    const validTypes = [
                      "zip",
                      "xml",
                      "xhtml+xml",
                      "plain",
                      "svg+xml",
                      "rtf",
                      "pdf",
                      "jpeg",
                      "png",
                      "jpg",
                      "ogg",
                      "json",
                      "html",
                      "gif",
                      "csv"
                    ];
                    if (!validTypes.includes(type)) {
                      valid = false;
                    }
                  });
                }
                return valid;
              }
            )
        })
      }
      onSubmit={(values,actions)=>{
       
        submit(values,{method:'post',action:'/product/sell',encType:'multipart/form-data'})
       
      }}>
        {({values,setFieldValue})=>(
          <Form> 
            <TextInput label='Name of your product' name='name_of_product' id='name_of_product'/>
            <TextInput label='What a price' name='price' id='price' type='number' step='0.01'/>
            <TextArea label='Give description of your products' name='description' id='description'/>
            <TextInput label='How many of  this you want put on market?' type='number' name='quantity' id='quantity'/>
            <input type='file' name='files' id='files' onChange={(e)=>{
              setFieldValue('files',e.target.files![0])
            }}/>
         
            <label htmlFor='category'></label>
            <Field as='select' name='category' id='category'>
            <option value={CategoryOfProduct.RTV}>RTV</option>
              <option value={CategoryOfProduct.AGD}>AGD</option>
              <option value={CategoryOfProduct.CLOTHS}>Cloths</option>
              <option value={CategoryOfProduct.TOOLS}>Tool</option>
              <option value={CategoryOfProduct.BOOKSPAPER}>Books/Papers</option>

            </Field>
            <button disabled={navigation.state!='idle'?true:false} type='submit'>{navigation.state!='idle'?'Submiting...':'Save'}</button>
          </Form>
        )}

          
      </Formik>
      
     <Link to={'/'}> {actionData.status===200?<h3 className={s.text_info}>You added item on market</h3>:null}</Link>
      </div>
  )
}

export async function action({request}:any){
  const formData=await request.formData()
  

  const dto=Object.fromEntries(formData)
  console.log(dto,'what is dto')
  dto.price=Number(dto.price)
  dto.quantity=Number(dto.quantity)
  dto.category=Number(dto.category)
console.log(dto)

  const response=await axios.post('http://localhost:3001/product/putProductsOnMarket',dto,{
    withCredentials:true,
    headers:{
      "Content-Type":"multipart/form-data"
    }
  })
  return response.data
}


export default SellProducts