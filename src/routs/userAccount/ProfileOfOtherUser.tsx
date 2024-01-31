import React from 'react'
import s from '../../styles/user/ProfileOfOtherUser.module.scss'
import makeGetRequest from '../../axios/common/makeGetRequest'
function ProfileOfOtherUser() {
  return (
    <div>ProfileOfOtherUser</div>
  )
}


export async function loader({params}:any){
    
    const response=await makeGetRequest('http://localhost:3001/user/findParticularUser',params)
    console.log(response)
    return response
}

export default ProfileOfOtherUser