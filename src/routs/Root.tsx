import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import s from '../styles/Root.module.scss'
import Nav from '../components/Nav'
import { BrowserRouter, Link, Outlet, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements, useLoaderData, useLocation } from 'react-router-dom'
import axios from 'axios'





function Root(props:any) {

return (

<div className={s.container}>
  <nav className={s.nav}>
  <Nav/>

  </nav>
  <main className={s.main}>
    <Outlet/>
  </main>
<footer className={s.footer}></footer>
</div>


)
 





 
}



export default Root
