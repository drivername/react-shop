import React, { Dispatch, useEffect, useState } from 'react'
import  s from'../styles/Nav.module.scss'
import { Link, NavLink, useLoaderData } from 'react-router-dom'
import axios from 'axios'
import { useAppDispatch, useAppSelector } from '../redux/hook'
import { setUserLoginStatus } from '../redux/slices/isLoginSlice'
import { UnknownAction } from 'redux'
import UserNav from './UserNav'

interface isLoged{
  msg:string,
  status:number
}


export default function Nav() {
  const [data,setData]=useState<any>(false)
  const dispatch=useAppDispatch()
  const isLoged=useAppSelector((state)=>state.isLogin.value)
 
 useEffect(()=>{
  async function checkIfUserIsloged(setData:any){
    try{
     const data=await axios.get('http://localhost:3001/auth/checkIFuserIsLoged',{
       withCredentials:true
     })
   
     
    if(data.status===200){
    
      setData(data.data)
      dispatch(setUserLoginStatus(true))
     
    }

    }catch(e){

    }
   }
   checkIfUserIsloged(setData)
  

 },[isLoged])
 


  return (
    <div className={s.container}>
      
        <div className={s.auth_pak}>
        
         {isLoged?<>
          <button className="btn btn-primary"><NavLink to={'logout'} className={s.linkStyle}>Logout</NavLink></button>
         </>:<>
         <button className="btn btn-primary"><NavLink to={'create-account'} className={s.linkStyle}>CreateAccount</NavLink></button>
            <button className="btn btn-primary"><NavLink to={'login'} className={s.linkStyle}>Login</NavLink></button>
         </>}
                   
        </div>
        <Link to={'/'} className={isLoged?s.home_isLogin:s.home_isLogout}>
          <h1 className='display-4'>Home Page</h1>
          <em className={s.em_welcome_by_name}>{isLoged?`Hello ${data.firstName}`:null}</em>
          </Link>
        <div className={isLoged?s.userNav_isLogin:s.userNav_isLogout}>{isLoged?<UserNav/>:null}</div>
    </div>
  )
}
