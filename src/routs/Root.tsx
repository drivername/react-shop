import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import '../styles/Root.scss'
import Nav from '../components/Nav'
import { Outlet } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../redux/hook'
import isLogin from '../redux/slices/isLogin'
function Root(props:any) {
  const user=useAppSelector((state)=>state.user)
  const jwt=useAppSelector((state)=>state.isLogin)
  const dispatch=useAppDispatch()
  useEffect(()=>{
    console.log(user)
    console.log(jwt)
    const jwtExpire=jwt.jwtExpire
    const currentTimestampInMillis = new Date().getTime();
    console.log(jwtExpire,'<--jwt',currentTimestampInMillis,'<--- now')
  })
  return (
    <>
    <nav className='nav'>
    <Nav></Nav>
    </nav>
    <main className='main'>
 <Outlet/>
 
    </main>
    <footer></footer>
    </>
  )
}



export default Root
