import axios from 'axios'
import React, { useEffect } from 'react'
import { NavigateFunction, redirect, useLoaderData, useNavigate, useRouteError } from 'react-router-dom'




export default function UserPanel() {
  const navigate=useNavigate()
 let dataUser:any=useLoaderData()

 


  return (
   <div className='container'>

    <h1>Hello</h1>
    <p>{dataUser.firstName}</p>
    <p>{dataUser.secondName}</p>
    <p>{dataUser.id}</p>
    <p>{dataUser.createdAt}</p>
    
   
   </div>
  )
}
