import { Form, Formik, replace } from 'formik'
import React from 'react'
import TextInput from '../Forms/TextInput'
import PasswordInput from '../Forms/PasswordInput'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


interface loginData{
  email:string,
  password:string
}

const loginUser=async(values:loginData,navigate:any)=>{
  const login=await axios.post("http://localhost:3001/auth/signin",values,{
    withCredentials:true
  })
  const response=login.status
  if(response==201){
    navigate('/user')
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
      onSubmit={(values)=>{
        loginUser(values,navigate)
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
