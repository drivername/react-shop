import axios from 'axios'
import React, { useEffect } from 'react'

const  fetchUserData=async()=>{
    const userData=await axios.get('http://localhost:3001/user/panel',{
        withCredentials:true
    })
    const response=userData.data
   console.log(userData)

}
export default function UserPanel() {
    
 useEffect(()=>{
    fetchUserData()
 })
  return (
   <>
    <h1>Welcome on User Panel</h1>
   
   </>
  )
}
