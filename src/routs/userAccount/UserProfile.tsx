import React, { useState } from 'react'
import makePostRequest from '../../axios/common/makePostRequest'
import makeGetRequest from '../../axios/common/makeGetRequest'
import { useLoaderData } from 'react-router-dom'
import s from '../../styles/user/UserProfile.module.scss'
import { useReducer } from 'react';

interface userState{
    firstName:boolean
    lastName:boolean
    email:boolean
}
let initial:userState={
    firstName:false,
    lastName:false,
    email:false
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
        default:{
            return {...state}
        }
    }
}


function UserProfile() {
    const [state,dispatch]=useReducer(reducerState,initial)
    const dataLoader:any=useLoaderData()
    const [input,setInput]=useState({
        firstName:dataLoader.firstName,
        lastName:dataLoader.lastName,
        email:dataLoader.email
    })
    const handleInputValue=(e:any)=>{
        if(e.target.id==='firstName')setInput({...input,firstName:e.target.value})     
        if(e.target.id==='lastName')setInput({...input,lastName:e.target.value})     
        if(e.target.id==='email')setInput({...input,email:e.target.value})     
   
    }
    console.log(input)
  return (
    <div className={s.container}>
        <div className={s.userBox}>
            <label>Name</label>
          <div className={s.firstName}> {state.firstName?<input type='text' id='firstName' value={input.firstName} onChange={(e)=>{handleInputValue(e)}}/>:<p>{dataLoader.firstName}</p>}<button onClick={()=>dispatch({type:'firstName'})}>Edit</button></div>  
          <label>surname</label>
          <div className={s.lastName}> {state.lastName?<input type='text' id='lastName' value={input.lastName} onChange={(e)=>{handleInputValue(e)}}/>:<p>{dataLoader.lastName}</p>}<button onClick={()=>dispatch({type:'lastName'})}>Edit</button></div> 
          <label>email</label>
          <div className={s.email}> {state.email?<input type='text' id='email' value={input.email} onChange={(e)=>{handleInputValue(e)}}/>:<p>{dataLoader.email}</p>}<button onClick={()=>dispatch({type:'email'})}>Edit</button></div> 
        <label>Amount of money on account!</label>
        <p className={s.amount_of_money}>{dataLoader.money_on_account}</p>
        <label>password</label>
        <div className={s.password}> {state.firstName?<input type='text' id='firstName' value={input.firstName} onChange={(e)=>{handleInputValue(e)}}/>:<p>password</p>}<button onClick={()=>dispatch({type:'firstName'})}>Edit</button></div>  

        </div>
    </div>
  )
}

export default UserProfile

export async function loader(){
    return await makeGetRequest('http://localhost:3001/user/panel')
}