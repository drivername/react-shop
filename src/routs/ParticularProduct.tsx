import React, { useState } from 'react'
import makeGetRequest from '../axios/common/makeGetRequest'
import makePostRequest from '../axios/common/makePostRequest'
import { Link, useLoaderData, useSubmit } from 'react-router-dom'
import SingleProductDisplay from '../components/SingleProductDisplay'
import ProductType from '../common/ProductType'
import s from '../styles/ParticularProduct.module.scss'
import { useAppSelector } from '../redux/hook'
import CommentsProduct from '../components/CommentsProduct'

function ParticularProduct() {
    const [comment,setComment]=useState('')
    const loaderData:any=useLoaderData()
    const submit=useSubmit()
    let productData:ProductType=loaderData.findProduct
    let userData:any=loaderData.findProduct.user
    let comments=loaderData.findComment
    const isLogin=useAppSelector((state)=>state.isLogin.value)
    const userWhichIsLoged=useAppSelector((state)=>state.isLogin)
  

  return (
    <div className={s.container}>
        <div className={s.ownerInfo}>
            <p>Who sell:<Link to={`/user/${userData.id}`}>{userData.firstName}</Link></p>
        </div>
       
       <CommentsProduct
        idProduct={productData.id}
         isLogin={isLogin}
          userWhichIsLoged={userWhichIsLoged}
          comments={comments}
          deleteComment={submit}
          />
        <div className={s.productComponent}>
            <SingleProductDisplay productData={productData} width={100} height={100}/>
            </div>
        </div>
  )
}



export async function loader({params}:any){
  
    params.productId=Number(params.productId)
 
    return await makePostRequest('http://localhost:3001/user/searchParticularProduct',params)
    
}
export async function action({request}:any){
        let formData=await request.formData()
        let dto=Object.fromEntries(formData)
        if(dto.whatAction==='ADD-COMMENT'){
          console.log('TO SIE WYKINUJE?')
          let houers=new Date().toString().slice(16,25)
          const year = new Date().getFullYear();
          const month =new Date().getMonth() + 1; // Adding 1 to get the actual month
          const day =new Date().getDate();
          const datatime=`${year}-${month<10?`0${month}`:`${month}`}-${day<10?`0${day}`:`${day}`}T${houers}`
          let IsoData=new Date().toISOString()
          dto.updatedAt=IsoData
          dto.productId=Number(dto.productId)
          dto.authorId=Number(dto.authorId)
          dto.dislike=0
          dto.like=0  
      return await makePostRequest('http://localhost:3001/comments/addCommentToProduct',dto)
        }
        if(dto.whatAction==='DELETE-COMMENT'){
          console.log(dto,'what it is dto')
          dto.commentId=Number(dto.commentId)
          return await makePostRequest('http://localhost:3001/comments/deleteCommentFromProduct',{commentId:dto.commentId})
        }
        if(dto.whatAction==='UPDATE-COMMENT'){
          console.log(dto,'what it is dto')
          delete dto.whatAction
          dto.commentId=Number(dto.commentId)
          return await makePostRequest('http://localhost:3001/comments/updateComment',dto)
        }
 
}


export default ParticularProduct