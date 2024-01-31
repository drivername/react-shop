import axios from 'axios'
import React, { useEffect } from 'react'
import { NavigateFunction,
   Outlet, redirect, useLoaderData, useNavigate, useRouteError } from 'react-router-dom'
import s from '../../styles/user/UserPanle.module.scss'
import makeGetRequest from '../../axios/common/makeGetRequest'




export default function UserPanel() {


 


  return (
   <div className={s.container}>
  
    <Outlet/>
   </div>
  )
}

