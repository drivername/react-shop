import React from 'react'
import s from '../styles/user/User.module.scss'
import defaultImg from '../public/product.png'
import { Link } from 'react-router-dom'
function User({dataUser}:any) {
    console.log(dataUser)
  return (
    <div className={s.container}>
        <p className={s.firstName}>{dataUser.firstName}</p>
        <p className={s.lastName}>{dataUser.lastName}</p>
        <p className={s.email}>{dataUser.email}</p>
        <img  className={s.img} src={dataUser.img_url===null?defaultImg:dataUser.img_url}/>
       <Link to={{pathname:'/writeMessage'}} state={{dataUser}}> <button>Send</button></Link>
        <button>Follow</button>

    </div>
  )
}

export default User