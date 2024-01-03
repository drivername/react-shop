import { Form, Formik, replace, useFormik } from 'formik'
import React, { useState } from 'react'
import TextInput from '../Forms/TextInput'
import PasswordInput from '../Forms/PasswordInput'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../redux/app.hook'
import { setLoginStatus } from '../redux/slices/isLogin.slice'


interface loginData{
  email:string,
  password:string
}

const loginUser=async(values:loginData,navigate:any,setMsg:any,actions:any,dispatch:any)=>{

  try{
    const login=await axios.post("http://localhost:3001/auth/signin",values,{
      withCredentials:true
    })
  
    if(login.status==200){
      dispatch(setLoginStatus(true))
      navigate('/user')
    }

  }catch(e:any){
    if(e.response.status==401){
      actions.resetForm()
      setMsg(true)
      console.log('PASSWORD INCCORECT')

    }
  }
 
 
}


export default function Login() {
  const dispatch=useAppDispatch()
  const [msg,setMsg]=useState()
  const navigate=useNavigate()

  return (
    <div>
      <Formik
      initialValues={{
        email:'',
        password:''
      }}
      onSubmit={(values,actions)=>{
        loginUser(values,navigate,setMsg,actions,dispatch)
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

    <h4>{msg?"Pleas provide correct credentials":null}</h4>
    </div>
  )
}
