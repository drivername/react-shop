import axios from 'axios'
import React, { useEffect } from 'react'
import { NavigateFunction,
   Outlet, redirect, useLoaderData, useNavigate, useRouteError } from 'react-router-dom'
import s from '../../styles/user/UserPanle.module.scss'
import makeGetRequest from '../../axios/common/makeGetRequest'




export default function UserPanel() {
  const navigate=useNavigate()
 let dataUser:any=useLoaderData()

 


  return (
   <div className={s.container}>
  
    <Outlet/>
   </div>
  )
}

export async function loader(){
  return await makeGetRequest('http://localhost:3001/user/panel')
}