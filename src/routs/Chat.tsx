import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import s from '../styles/Chat.module.scss'
const socket=io('http://localhost:3001',{ transports : ['websocket'] })
function Chat() {
  const [msg,setMsg]=useState('')
  const [id,setId]=useState(0)
  const [msgReceive,setMsgReceive]=useState<any>([])
    const dataUser=useAppSelector((state)=>state.isLogin)
   const sendMessage=(data:any)=>{
socket.emit('message',{content:msg,sender:dataUser.id,sendeEmial:dataUser.email,roomId:id})
   }
 
useEffect(()=>{
socket.on('cos',(data):void=>{
  console.log(data,'ta co przyszła')
setMsgReceive((prev:any)=>[...prev,data])

})

return () => {
  socket.off("cos");
};
},[socket])



  return (
    <div className={s.container}>Chat
      <div className={s.windowChat}>
    {msgReceive.map((el:any)=>{
      
      return (
        <p>{el.content}</p>
      )
    })}
      </div>
      <textarea value={msg} onChange={(e)=>{
        setMsg(e.target.value)
      }}></textarea>
      <input value={id} onChange={(e)=>{
        setId(Number(e.target.value))
      }} type='number'></input>
      <button onClick={()=>sendMessage(msg)}>Send</button>
    </div>
  )
}

export default Chat