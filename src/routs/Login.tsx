import { Form, Formik, replace, useFormik } from 'formik'
import React, { useState } from 'react'
import TextInput from '../Forms/TextInput'
import PasswordInput from '../Forms/PasswordInput'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



interface loginData{
  email:string,
  password:string
}

export const loginUser=async(values:loginData,navigate:any,actions:any)=>{

  try{
    const login=await axios.post("http://localhost:3001/auth/signin",values,{
      withCredentials:true
    })
  
    if(login.status==200){
  
      navigate('/user')
    }

  }catch(e:any){
    if(e.response.status==401){
      actions.resetForm()
      
      console.log('PASSWORD INCCORECT')

    }
  }
 
 
}


export default function Login() {

 
  const navigate=useNavigate()

  return (
    <div>
      <Formik
      initialValues={{
        email:'',
        password:''
      }}
      onSubmit={(values,actions)=>{
        loginUser(values,navigate,actions)
      }}
    
      >
        <Form>
        <TextInput
         label='Your Email'
         name='email'
         type='text'
         placeholder='Write your name'
        />
        <PasswordInput
        label="Password"
        name='password'
        type='password'
        />
<button type='submit'>Login</button>
        </Form>
      </Formik>

   
    </div>
  )
}
