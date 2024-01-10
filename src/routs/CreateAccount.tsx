import React, { useEffect, useRef } from 'react'
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import s from '../styles/CreateAccount.module.scss'
import TextInput from '../Forms/TextInput';
import EmailInput from '../Forms/EmailInput';
import PasswordInput from '../Forms/PasswordInput';
import { useFormikContext } from 'formik';
import { Link, redirect, useActionData, useNavigate, useSubmit } from 'react-router-dom';


interface CreatedUser{
    accountCreated:boolean
    jwtExp:number
    
}




 

export default function CreateAccount() {
  let actionData:any=useActionData()
  if(actionData===undefined)actionData={msg:'Not data yet',status:422}
   const navigate=useNavigate()
   const submit=useSubmit()

   

      return (
       <div className={s.container}>
        <Formik
        initialValues={{ firstName: '', lastName: '', email: '',password:'',confirmPassword:'' }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
          password: Yup.string()
          .required('Password is required')
          .min(3, 'Password must be at least 8 characters'),
        confirmPassword: Yup.string()
          .required('Please confirm your password')
          .oneOf([Yup.ref('password')], 'Passwords must match')
        })}
        onSubmit={(values,actions) => {
            actions.resetForm()
            submit(values,{method:'post',action:'/create-account'})
        }}
      >
        {({values,handleChange})=>{
          return (
            <Form>
             <TextInput label='Write your name' name='firstName'/>
             <TextInput label='Write your second name' name='lastName'/>
             <EmailInput label='Write your email' name='email'/>
             <PasswordInput label='Provide your password' name='password'/>
             <PasswordInput label='Repeat your password' name='confirmPassword'/>

             <button type='submit'>Submit</button>
           </Form>
          )
        }}
         
        </Formik>
        <Link to={'/'}><h3 className='info_about_created'>{actionData.status===201?`Account created, you can login or navigate to main page`:null}</h3></Link>
               </div>
       
      );
    };
