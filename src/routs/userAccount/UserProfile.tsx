import React, { useState } from 'react'
import makePostRequest from '../../axios/common/makePostRequest'
import makeGetRequest from '../../axios/common/makeGetRequest'
import { useLoaderData } from 'react-router-dom'
import s from '../../styles/user/UserProfile.module.scss'
import { useReducer } from 'react';






function UserProfile() {
  
    const dataLoader:any=useLoaderData()
    const [input,setInput]=useState({
        firstName:dataLoader.firstName,
        lastName:dataLoader.lastName,
        email:dataLoader.email,
        password:''
    })
  
    console.log(input)
  return (
    <div className={s.container}>
        
     
    </div>
  )
}

export default UserProfile

export async function loader(){
    return await makeGetRequest('http://localhost:3001/user/panel')
}