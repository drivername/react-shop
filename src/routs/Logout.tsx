import React, { useEffect } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../redux/app.hook'
import { setLoginStatus } from '../redux/slices/isLogin.slice'
import { setUserData } from '../redux/slices/userData.slice'

export default function Logout() {
    const navigate=useNavigate()
    const data:any=useLoaderData()
    const dispatch=useAppDispatch()
console.log('WYKONAL SIE LOGOUT')
    useEffect(()=>{
      
      if(data==null){
        dispatch(setLoginStatus(false))
        dispatch(setUserData(null))
          navigate('/')
      }

      if(data.data.msg==='refresh-toke-delete'){
            dispatch(setLoginStatus(false))
            dispatch(setUserData(null))
            navigate('/')
        }
       
    })
  return (
    <div>Logout</div>
  )
}
