import React from 'react'
import s from '../../styles/user/ProfileOfOtherUser.module.scss'
import makeGetRequest from '../../axios/common/makeGetRequest'
import User from '../../components/User'
import { useLoaderData } from 'react-router-dom'
function ProfileOfOtherUser() {
  const dataLoader=useLoaderData()
  return (
    <div>
      <User dataUser={dataLoader}/>
    </div>
  )
}


export async function loader({params}:any){
    
    const response=await makeGetRequest('http://localhost:3001/user/findParticularUser',params)
    console.log(response)
    return response
}

export default ProfileOfOtherUser