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
    const [newConversation,setNewConversation]=useState(false)
    const [conversation,setConversation]=useState<any>([])
    const [chatRoom,setChatRoom]=useState()
    const [chat,setChat]=useState([])
    const [refresh,setRefresh]=useState(false)
 
    const location=useLocation()
    const data=location.state
    const userLoged=useAppSelector((state)=>state.isLogin)
    const sendMessage=()=>{
        socket.emit(!newConversation?'startNewConversation':'message',
        {
            content:textArea,
            receiver:receiver,
            sender:userLoged.id,
            topic:topic,
            roomId:chatRoom

        })
        setNewConversation(true)
           }


useEffect(()=>{
    socket.on('startNewConversation',(data:any):void=>{
    console.log(data)
    })
    socket.on('first',(data:any):void=>{
      console.log(data)
setConversation(data)


      })
      socket.on('answer',(data:any):void=>{
        console.log(data)
        })

        socket.on('cos',(data:any):void=>{
          console.log(data,'co to')
          setChat(data)
          console.log(chat,'chat')
          })


   
      
      return () => {
        socket.off("startNewConversation");
        socket.off("first");
        socket.off("cos");
      };


    },[socket])
useEffect(()=>{
 
    socket.emit('onJoin',{userLoged})
      
      return () => {
        socket.off("onJoin");
      };
},[userLoged])
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
               <div className={s.messages}>
                {chat.map((el)=>{
                  return(
                    <p>{el?el['content']:null}</p>
                  )
                })}
               </div>
        <textarea className={s.textarea}
         onChange={(e)=>{setTextArea(e.target.value)}}/>

       
        <button className={s.btnSend}  onClick={()=>{sendMessage()}}>Send</button>
 
       </div>
       <div className={s.conversationBox}>
     {conversation.map((el:any)=>{
      return(
        <div onClick={()=>{
          setChatRoom(el.roomId)
          setTopic(el.topic)
          setReceiver(el.receiverId)
          setNewConversation(true)
          socket.emit('donowaldRoom',chatRoom)
        }} className={s.singleChat}>Message{el.roomId}</div>
      )
     })}
       </div>
    </div>
  )
}

export default WriteMessage