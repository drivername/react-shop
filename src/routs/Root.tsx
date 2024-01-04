import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import '../styles/Root.scss'
import Nav from '../components/Nav'
import { Outlet, useLoaderData, useLocation } from 'react-router-dom'
import axios from 'axios'


function Root() {

const data:any=useLoaderData()
let isLoged=false

console.log(data,'data')
if(data!==null){
isLoged=true
}

  return (
    <div className='mainContainer'> 
    <nav className='nav'>
    <Nav isLoged={isLoged}></Nav>
    </nav>
    <main className='main'>
 <Outlet/>
 
    </main>
    <footer></footer>
    </div>
  )
}



export default Root
