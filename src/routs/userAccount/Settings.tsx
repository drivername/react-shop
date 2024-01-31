import React, { useEffect, useState } from 'react'
import makePostRequest from '../../axios/common/makePostRequest'
import makeGetRequest from '../../axios/common/makeGetRequest'
import { useActionData, useLoaderData, useNavigate, useNavigation, useSubmit } from 'react-router-dom'
import s from '../../styles/user/Settings.module.scss'
import { useReducer } from 'react';
import check, { checkPassword } from '../../common/ValidationSchema'
import { useAppDispatch } from '../../redux/hook'
import { refreshNav } from '../../redux/slices/isLoginSlice'
interface userState{
    firstName:boolean
    lastName:boolean
    email:boolean,
    password:boolean
}
let initial:userState={
    firstName:false,
    lastName:false,
    email:false,
    password:false
}

function reducerState(state:any,action:any){
    switch (action.type){
        case 'firstName':{
            return {...state,firstName:!state.firstName}
        }
        case 'lastName':{
            return {...state,lastName:!state.lastName}
        }
        case 'email':{
            return {...state,email:!state.email}
        }
        case 'password':{
            return {...state,password:!state.password}
        }
        default:{
            return {...state}
        }
    }
}

const validationForm={
    firstName:{
        shortValue:'You have provide minimum 3 characters!'
    }
}


function Settings() {
    const [state,dispatch]=useReducer(reducerState,initial)
    const dataLoader:any=useLoaderData()
    const actionData:any=useActionData()
    const submit=useSubmit()
    const dispatchRedux=useAppDispatch()
   
    const [input,setInput]=useState({
        firstName:dataLoader.firstName,
        lastName:dataLoader.lastName,
        email:dataLoader.email,
        password:'',
        repeatPassword:''
    })

    const [passData,setPassData]=useState({
        focusPassword:false,
        blurPassword:false,
        focusRepeatPassword:false,
        blurRepeatPassword:false
    })
    const handleInputValue=(e:any)=>{
        if(e.target.id==='firstName')setInput({...input,firstName:e.target.value})     
        if(e.target.id==='lastName')setInput({...input,lastName:e.target.value})     
        if(e.target.id==='email')setInput({...input,email:e.target.value})     
        if(e.target.id==='password')setInput({...input,password:e.target.value})     
        if(e.target.id==='repeatPassword')setInput({...input,repeatPassword:e.target.value})     
   
    }
    const handleEditAndSubmitBtn=(e:any,whatAction:any)=>{
       
      
        if(e.target.textContent==='Edit'||e.target.textContent==='Change')dispatch({type:e.target.id})
        if(e.target.textContent==='Save'){
            dispatch({type:e.target.id})
            submit({...input,action:whatAction,whatIsChange:e.target.id},{method:'post',action:'/user/settings'})
        }
    }

useEffect(()=>{
    if(actionData!=undefined){
        if(actionData.status===201){
            dispatchRedux(refreshNav({}))
        }
    }
})
  return (
    <div className={s.container}>
        <div className={s.userBox}>
            <label className='form-label'>Name:</label>
            {state.firstName&&check(input.firstName,5,10,false).status?<em>{check(input.firstName,5,10,false).msg}</em>:null}
          <div className={s.firstName}>
             {state.firstName?
             <input type='text'
              id='firstName'
               value={input.firstName}
                onChange={(e)=>{handleInputValue(e)}}
                onBlur={()=>dispatch({type:'firstName'})}
                />
             :<p>{dataLoader.firstName}</p>}
             <button id='firstName' disabled={state.firstName&&check(input.firstName,5,10,false).status?true:false}
              onClick={(e)=>handleEditAndSubmitBtn(e,'not_password_change')}>
                {state.firstName?'Save':'Edit'}</button></div>  
          
          <label className='form-label'>Surname:</label>
          {state.lastName&&check(input.lastName,3,20,false).status?
          <em>{check(input.lastName,3,20,false).msg}</em>:null}
          <div className={s.lastName}>
             {state.lastName?
             <input type='text'
              id='lastName'
               value={input.lastName}
                onChange={(e)=>{handleInputValue(e)}}/>:
                <p>{dataLoader.lastName}</p>}
                <button id='lastName' 
                disabled={state.lastName&&check(input.lastName,3,20,false).status?true:false} 
                onClick={(e)=>handleEditAndSubmitBtn(e,'not_password_change')}>{state.lastName?'Save':'Edit'}</button></div> 
          
          <label className='form-label'>email:</label>
          {state.email&&check(input.email,5,20,true).status?
          <em>{check(input.email,5,20,true).msg}</em>:null}
          <div className={s.email}>
             {state.email?
             <input type='text'
              id='email'
               value={input.email}
                onChange={(e)=>{handleInputValue(e)}}/>:
                <p>{dataLoader.email}</p>}<button
                 disabled={state.email&&check(input.email,5,20,true).status} 
                  id='email' onClick={(e)=>handleEditAndSubmitBtn(e,'not_password_change')}>{state.email?'Save':'Edit'}</button></div> 
        
        <label className='form-label'>Money</label>
        <div className={s.amount_of_money}><p >{dataLoader.money_on_account}</p><button>deposit</button></div>
                
        <label>Password:</label>
        {actionData!=undefined&&actionData.msg==='password-changed'?<em>changed!</em>:null}
        {passData.focusRepeatPassword&&input.password!=input.repeatPassword?<em>Password has to be identical</em>:null}
        {input.password.length<3&&passData.blurPassword?<em>Password has to have minimum 3 characters</em>:null}
        {input.password.length>20&&passData.focusRepeatPassword?<em>Password has to have maxiumum 20 characters</em>:null}
        <div className={s.password}>{state.password?
        <div className={s.inputPak}>
            <input id='password'
             onChange={(e)=>handleInputValue(e)} 
             type='password'
             onFocus={()=>setPassData({...passData,focusPassword:true})}
             onBlur={()=>setPassData({...passData,blurPassword:true})}
            
             />
            <label>Repeat password</label>
            <input 
            onFocus={(e)=>{setPassData({...passData,focusRepeatPassword:true})}}
            onBlur={(e)=>setPassData({...passData,blurRepeatPassword:true})}
            id='repeatPassword' onChange={(e)=>handleInputValue(e)} type='password'/>
               
        </div>:<p>***********</p>}
        <button id='password' disabled={state.password&&input.password.length<3||input.password!=input.repeatPassword?true:false} 
        onClick={(e)=>{handleEditAndSubmitBtn(e,'password_change')}}>{state.password?'Save':'Change'}</button>
       
        </div>
        
        
        </div>
       
    </div>
  )
}

export default Settings

export async function loader({request}:any){
   
    return await makeGetRequest('http://localhost:3001/user/panel')
}
export async function action({request}:any){
   
    let formData=await request.formData()
    let dto=Object.fromEntries(formData)
  
    return await makePostRequest('http://localhost:3001/user/settings',dto)
}



   
