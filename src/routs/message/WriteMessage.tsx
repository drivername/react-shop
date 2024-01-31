import React, { useEffect, useState } from 'react'
import s from '../../styles/messages/WriteMessage.module.scss'
import { useLocation } from 'react-router-dom'
import { io } from 'socket.io-client'
import { useAppSelector } from '../../redux/hook'
const socket=io('http://localhost:3001',{ transports : ['websocket'] })
function WriteMessage() {
    const [receiver,setReceiver]=useState<any>(null)
    const [textArea,setTextArea]=useState('')
    const [topic,setTopic]=useState('')
    const location=useLocation()
    const data=location.state
    const userLoged=useAppSelector((state)=>state.isLogin)
    const sendMessage=()=>{
        socket.emit('message',
        {
            content:textArea,
            receiver:data.dataUser.id,
            sender:userLoged.id,
            topic:topic

            
        })
           }


useEffect(()=>{
    socket.on('cos',(data:any):void=>{
    console.log(data)
    })
    
    return () => {
      socket.off("cos");
    };
    },[socket])
useEffect(()=>{
    socket.emit('onJoin',{content:textArea,
        receiver:data.dataUser.id,
        sender:userLoged.id,
        topic:topic})
      
      return () => {
        socket.off("cos");
      };
},[])
  return (
    <div className={s.container}>
       <div className={s.messageBox}>
   
   <div className={s.inputPakRecepient}>
    <p className={s.p}  >Recepient:</p>
    <input
     value={receiver}
      className={s.input}
       type='text'
       onChange={(e)=>{setReceiver(e.target.value)}}
       />
        
     
    </div>
        <div className={s.inputPakTopic}>
            <p className={s.p}>Topic:</p>
            <input
              className={s.input}
              value={topic}
              onChange={(e)=>{setTopic(e.target.value)}}
               type='text'/>
               </div>
        <textarea className={s.textarea}
         onChange={(e)=>{setTextArea(e.target.value)}}/>

       
        <button className={s.btnSend}  onClick={()=>{sendMessage()}}>Send</button>
 
       </div>
    </div>
  )
}

export default WriteMessage