import React from 'react'
import '../styles/Nav.scss'
import { Link } from 'react-router-dom'
export default function Nav() {
  return (
    <div className='container'>
        <h1>Welcome on our page!</h1>
        <div className='auth_pak'>
            <button><Link to={'create-account'}>CreateAccount</Link></button>
            <button><Link to={'login'}>Login</Link></button>
            <button><Link to={'/'}>Home</Link></button>
            <button><Link to={'user'}>User Panel</Link></button>
        </div>
    </div>
  )
}
