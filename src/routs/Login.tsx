import {  Form,Formik, replace, useField, useFormik } from 'formik'
import React, { useEffect, useRef, useState } from 'react'
import { Link, useActionData, useLoaderData, useNavigate, useNavigation, useSubmit } from 'react-router-dom'
import { useAppDispatch } from '../redux/hook'
import { setUserLoginStatus } from '../redux/slices/isLoginSlice'




interface loginData{
  email:string,
  password:string
}




export default function Login() {
 
let actionData:any=useActionData() 
if(actionData===undefined){actionData={msg:'No data yet',status:422}}
console.log(actionData,'actionData')

const submit=useSubmit()
 const emailRef=useRef<HTMLInputElement|null>(null)
 const passRef=useRef<HTMLInputElement|null>(null)
 const navigate=useNavigate()
//By this i can take information in what state my action is
 const navigation=useNavigation()
 const dispatch=useAppDispatch()

useEffect(()=>{

  if(actionData.status==200){
    dispatch(setUserLoginStatus(true))
    navigate('/user')
  }


},[actionData])

 


  return (
    <div>
      <Formik
      initialValues={{
        email:'',
        password:''
      }}
      onSubmit={(values,actions)=>{
     
        
       submit(values,{method:'post',action:'login'})
      
      }}
    
      >
 {({values,handleChange})=>{
  return (
    <Form >
    <div>
      <label htmlFor='email'>Write yout email!</label>
      <input
       type='text'
        id='email'
         name='email'
          className='email_input'
           ref={emailRef}
           onChange={handleChange}
           value={values.email}
      />
    </div>
    <div>
      <label htmlFor='password'>Write yout email!</label>
      <input
       type='password'
        id='password'
         name='password'
          className='password'
           ref={passRef}
           onChange={handleChange}
           value={values.password}
           />

    </div>
<button type='submit' disabled={navigation.state==='submitting'?true:false}>
  {navigation.state==='submitting'?'Loading':'Login'}
</button>
    </Form>
  )

 }}
      </Formik>

   
    </div>
  )
}

