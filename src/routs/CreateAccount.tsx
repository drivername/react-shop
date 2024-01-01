import React, { useRef } from 'react'
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/CreateAccount.scss'
import TextInput from '../Forms/TextInput';
import EmailInput from '../Forms/EmailInput';
import PasswordInput from '../Forms/PasswordInput';
import axios from 'axios';
import { redirect, useNavigate } from 'react-router-dom';


interface CreatedUser{
    accountCreated:boolean
    jwtExp:number
    
}




  const handlePost=async(values:any,navigate:any,emailConstraint:any)=>{

    try{
        const response=await axios.post('http://localhost:3001/auth/signup',values,{
            withCredentials:true
        })
        const response2=response.data
        console.log(response,"co to takiego?")
        if(response2.accountCreated==true){
            navigate('/',{state:{message:"Your account was created, now you can sign in"}})
        }
     
    }catch(e:any){
        console.log(e,"gdzie to mam miejsce")
        if(e.response.status==409){
            console.log('wykonalo sie?')
            emailConstraint.current!.value=''
            emailConstraint.current!.placeholder='Accpunt with this email exist'
            emailConstraint.current!.style.backgroundColor="red"
            setTimeout(()=>{
                emailConstraint.current!.style.backgroundColor="white"
                emailConstraint.current!.placeholder='Write another email'
            },2000)
            
        }
    }
 } 

export default function CreateAccount() {
   const navigate=useNavigate()
    const emailConstraint=useRef<HTMLInputElement|null>(null)
   
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
            
           handlePost(values,navigate,emailConstraint)
      
            
           
        
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
             ref={emailConstraint}
            
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
