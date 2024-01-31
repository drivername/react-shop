import React, { useEffect, useState } from 'react'
import s from '../styles/components/CommentsProduct.module.scss'
import { Link, SubmitFunction, useSubmit } from 'react-router-dom'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faWrench } from '@fortawesome/free-solid-svg-icons';

interface CommentsPropsType{
    idProduct:number,
    isLogin:boolean,
    userWhichIsLoged:{
        email:string,
        firstName:string,
        id:null|number,
        lastName:string,
        refreshValue:number,
        value:boolean
    }
    comments:{
        author:{
            firstName:string,
            id:number
        }
        authorId:number,
        content:string,
        createdAt:string,
        dislike:number,
        id:number,
        productId:number,
        updatedAt:string
    }[],
    deleteComment:SubmitFunction
}

function CommentsProduct(props:CommentsPropsType) {
    const [comment,setComment]=useState('')
    const [editComment,setEditComment]=useState('')
    const [edit,setEdit]=useState({eidt:false,id:0})
    const [displayCommentOptions,setDisplayCommentOptions]=
    useState({display:false,whichCommentId:0,status:'close'})
    const submit=useSubmit()
 
    let productId=props.idProduct
    let comments=props.comments
    let userWhichIsLoged=props.userWhichIsLoged
    let isLogin=props.isLogin

console.log(edit)
    return (
    <article className={s.container}>
    <h3>Comments!</h3>
  <section className={s.allComents}>
    {comments.length<1?<p className={s.noCommentsInfo}>This product doesnt have any comment!</p>:null}
    {comments.map((e: any,i: any,arr: any)=>{
      
        let time=e.updatedAt.slice(0,10).concat(' ').concat(e.updatedAt.slice(11,19))
        
       return (
        <div className={s.singleComment} key={e.id}>
         
        <p  className={s.whoWrite}>{e.author.firstName}<em className={s.updated}>{time}
        
        </em>
          {isLogin&&userWhichIsLoged.id==Number(e.author.id)?<>
          <div className={s.options} 
          style={{display:displayCommentOptions.display&&displayCommentOptions.whichCommentId===e.id?'inline-block':'none'}}>
          <button onClick={()=>{
           submit({commentId:e.id,whatAction:'DELETE-COMMENT'},{method:'post',action:``})
          }}> <FontAwesomeIcon className={s.icon} icon={faTrash} />
          </button>
          <button 
          id={e.id} 
          onClick={(event:any)=>{
            if(edit.eidt===false){
              setEdit({eidt:true,id:Number(e.id)})
              setEditComment(e.content)
            }
            if(edit.eidt===true){
              setEdit({eidt:false,id:0})
            }
           

          }}
          className={s.buttonEdit}
          ><FontAwesomeIcon  className={s.icon} icon={faPen}></FontAwesomeIcon>
          </button>
          </div>
          <button
          id='optionComment'
           className={s.optionInComment}
            onClick={(event)=>{
              
              if(displayCommentOptions.whichCommentId===e.id&&displayCommentOptions.status==='open'){
                setDisplayCommentOptions({display:false,whichCommentId:0,status:'close'})
                return
              }
              setDisplayCommentOptions({display:true,whichCommentId:e.id,status:'open'})
              
              }}>
          <FontAwesomeIcon className={s.icon} icon={faWrench} />
          </button></>
          :null}</p>
        
        {edit.eidt&&edit.id==e.id?
        <div>
          <textarea 
          value={editComment}
           onChange={(e)=>setEditComment(e.target.value)} 
           className={s.textarea_editedComment}/>
           <button onClick={()=>{
            setEdit({eidt:false,id:0})
            submit({content:editComment,commentId:e.id,whatAction:'UPDATE-COMMENT'},{method:'post',action:''})
           }}>Save</button>

        </div>:
        <p className={s.content}>{e.content}</p>}
    </div>
       )
    })}
    </section>  
  {isLogin?  <section className={s.addComment}>
    <p className={s.author}><Link to='/'>{userWhichIsLoged.firstName}</Link></p>
    <textarea value={comment} onChange={(e)=>{setComment(e.target.value)}}>
        </textarea>
        <button
         onClick={()=>{
         setComment('')
         submit({content:comment,productId:
         `${productId}`,authorId:`${userWhichIsLoged.id}`,whatAction:'ADD-COMMENT'},
         {method:'post',action:''})}}>Add
         </button>
        </section>  :null}

 

</article>
  )
}

export default CommentsProduct