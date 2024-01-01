import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import '../styles/Root.scss'
import Nav from '../components/Nav'
import { Outlet, useLocation } from 'react-router-dom'
import axios from 'axios'

function Root(props:any) {
const loc=useLocation()
  useEffect(()=>{
    console.log(loc.state)
  
   
  })
  return (
    <>
    <nav className='nav'>
    <Nav></Nav>
    </nav>
    <main className='main'>
      <h1>{loc.state?loc.state.message:null}</h1>
 <Outlet/>
 
    </main>
    <footer></footer>
    </>
  )
}



export default Root
