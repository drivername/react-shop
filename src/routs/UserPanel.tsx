import React from 'react'
import { useAppSelector } from '../redux/hook'

export default function UserPanel() {
    const userData=useAppSelector((state)=>state.isLogin.jwtExpire)
  return (
   <>
    <h1>Welcome on User Panel</h1>
    <h4>{userData}</h4>
   </>
  )
}
