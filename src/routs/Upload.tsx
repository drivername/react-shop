import axios from 'axios'
import React, { useState } from 'react'
import { useSubmit } from 'react-router-dom'

function Upload() {
    const [files,setFile]=useState<any>("")
    let submit=useSubmit()
   
  return (
    <div>
        <form method='post' onSubmit={(e)=>{
            e.preventDefault()
            submit({files:files},{method:'post',action:'/upload',encType:'multipart/form-data'})
            

        }}>
            <input type='file' onChange={(e)=>{
                
                setFile(e.target.files![0])
            }}/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
export async function action({request}:any){
   let formData=await request.formData()
   let dto=Object.fromEntries(formData)

  console.log(dto)
    const send=await axios.post('http://localhost:3001/interaction/upload',dto,{
        withCredentials:true,
        headers:{
            "Content-Type":"multipart/form-data"
        }

    })
    return send.data
}

export async function loader(){
    const send=await axios.get('http://localhost:3001/interaction/upload',{
        withCredentials:true,
        headers:{
            "Content-Type":"multipart/form-data"
        }

    })
    return send.data
}
export default Upload