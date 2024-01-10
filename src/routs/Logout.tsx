import React, { useEffect } from 'react'
import { redirect, useLoaderData, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../redux/hook'
import { setUserLoginStatus } from '../redux/slices/isLoginSlice'


export default function Logout() {
    const navigate=useNavigate()
    const data:any=useLoaderData()
    const dispatch=useAppDispatch()
useEffect(()=>{
  if(data.status==200){
    dispatch(setUserLoginStatus(false))
    navigate('/')
  }
  navigate('/')
},[])
 

 
       
 
  return (
    <div>Logout</div>
  )
}
