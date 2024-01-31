import React, { useState } from 'react'
import makePostRequest from '../../axios/common/makePostRequest'
import makeGetRequest from '../../axios/common/makeGetRequest'
import { useLoaderData } from 'react-router-dom'
import s from '../../styles/user/UserProfile.module.scss'
import { useReducer } from 'react';
import User from '../../components/User'






function UserProfile() {
  
    const dataLoader:any=useLoaderData()
 
  
    console.log(dataLoader)
  return (
    <div className={s.container}>
        <div>
          <User dataUser={dataLoader}/>
          
        </div>
     
    </div>
  )
}

export default UserProfile

export async function loader(){
    return await makeGetRequest('http://localhost:3001/user/panel')
}