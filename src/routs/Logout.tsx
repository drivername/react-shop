import React, { useEffect } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'


export default function Logout() {
    const navigate=useNavigate()
    const data:any=useLoaderData()

console.log(data,'WYKONAL SIE LOGOUT')
    useEffect(()=>{
      
      if(data==null){
        console.log('wykonuje się?')
          return navigate('/')
      }

      if(data.data.msg==='refresh-toke-delete'){
         
             return navigate('/')
        }
       
    })
  return (
    <div>Logout</div>
  )
}
