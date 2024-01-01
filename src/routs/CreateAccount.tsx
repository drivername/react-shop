import React from 'react'
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/CreateAccount.scss'
import TextInput from '../Forms/TextInput';
import EmailInput from '../Forms/EmailInput';
import PasswordInput from '../Forms/PasswordInput';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../redux/hook';
import { saveUserData } from '../redux/slices/UserSlice';
import { changeLoginStatus, setExpireJwtTokenTime } from '../redux/slices/isLogin';

interface CreatedUser{
    accountCreated:boolean
    jwtExp:number
    
}




  const handlePost=async(values:any,dispatch:any)=>{

    try{
        const response=await axios.post('http://localhost:3001/auth/signup',values,{
            withCredentials:true
        })
        const response2:CreatedUser=response.data
     
        if(response2.accountCreated===true){
            console.log(response2)
            const expireTime=response2.jwtExp
            dispatch(setExpireJwtTokenTime(expireTime))
        
        }
    }catch(e){
        console.log(e)
    }
 } 

export default function CreateAccount() {
   const navigate=useNavigate()
   const dispatch=useAppDispatch() 
   
      return (
        <Formik
        initialValues={{ firstName: '', lastName: '', email: '',password:'',repeatPassword:'' }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
            
            handlePost(values,dispatch)
            navigate('/')
           
        
        }}
      >
         <Form>
            <TextInput
            label='Your name'
            name='firstName'
            type='text'
            placeholder='Write your name'
             />
               <TextInput
            label='Your second name'
            name='lastName'
            type='text'
            placeholder='Write your name'
             />
             <EmailInput
             label='Email'
             name='email'
             type='email'
             placeholder='write your email'
             />
             <PasswordInput
             label="Password"
             name='password'
             type='password'
             />
               <PasswordInput
             label="Repeat Password"
             name='repeatPassword'
             type='password'
             />
               <button type="submit">Submit</button>
        </Form>
         
        </Formik>
        
      );
    };
