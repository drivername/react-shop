import axios from 'axios'
import React, { useEffect } from 'react'
import { NavigateFunction, useLoaderData, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../redux/app.hook'
import { setLoginStatus } from '../redux/slices/isLogin.slice'

interface dataFetchedFromServer{
    id:number,
    createdAt:string,
    updatedAt:string,
    email:string,
    lastName:string,
    firstName:string
}

export default function UserPanel() {
    const navigate=useNavigate()
  
    const data=useLoaderData() as dataFetchedFromServer|null
    const dispatch=useAppDispatch()
    if(data!=null){
        dispatch(setLoginStatus(true))
    }
   useEffect(()=>{
    //Null is retrun when:refresh token is expired,
    if(!data)navigate('/login')
   
   })


  return (
   <>
    <h1>Hello {data?.firstName}</h1>
    <h2>{data?.lastName}</h2>
    <h3>{data?.email}</h3>
    
   
   </>
  )
}
