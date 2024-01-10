import React from 'react'
import Nav from '../components/Nav'
import { Outlet, useRouteError } from 'react-router-dom'

function ErrorPage() {
    const error:any=useRouteError()
    console.log(error)
  return (
  <>
    <nav>
        <Nav/>
    </nav>
    <main>
        <h1>Error occured!</h1>
        <h2>{error.msg}</h2>
      
    </main></>
  )
}

export default ErrorPage