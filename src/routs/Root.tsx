import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import '../styles/Root.scss'
import Nav from '../components/Nav'
import { Outlet, useLoaderData, useLocation } from 'react-router-dom'
import axios from 'axios'
import { useAppDispatch, useAppSelector } from '../redux/app.hook'
import { setLoginStatus } from '../redux/slices/isLogin.slice'
import { setUserData } from '../redux/slices/userData.slice'

function Root(props:any) {
const loc=useLocation()
const data:any=useLoaderData()
const loginStatus=useAppSelector((state)=>state.isLogin.value)
const dispatch=useAppDispatch()

console.log("ROOT")

useEffect(()=>{
 if(data!=null){
  dispatch(setLoginStatus({boolean:true,from:'Root'}))
 }
})
  return (
    <div className='mainContainer'> 
    <nav className='nav'>
    <Nav></Nav>
    </nav>
    <main className='main'>
      <h1>{loc.state?loc.state.message:null}</h1>
 <Outlet/>
 
    </main>
    <footer></footer>
    </div>
  )
}



export default Root
