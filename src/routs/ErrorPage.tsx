import React from 'react'
import Nav from '../components/Nav'
import { Outlet, useRouteError } from 'react-router-dom'
import s from '../styles/Error.module.scss'
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ErrorPage() {
    const error:any=useRouteError()
    console.log(error)
  return (
  <div className={s.container}>
    <nav>
        <Nav/>
    </nav>
    <main>
        <h1>Error occured!</h1>
        {error.msg==='refresh-token-expired'?<>
        <h1>You have to login to your account</h1>
        <div className={s.boxIcon}><FontAwesomeIcon className={s.icon} icon={faBell} /></div>
        </>:null}
      
    </main>
    </div>
  )
}

export default ErrorPage