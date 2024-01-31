import React from 'react'
import s from'../styles/UserNav.module.scss'
import { NavLink } from 'react-router-dom'

function UserNav() {
  return (
    <nav className={s.container}>
        <NavLink to={'user'}><button>User</button></NavLink>
        <NavLink to={'myProducts'}><button>MyProducts</button></NavLink>
        <NavLink to={'/product/sell'}><button>Sell Products</button></NavLink>
        <NavLink to={'/user/settings'}><button>Settings</button></NavLink>
    </nav>
  )
}

export default UserNav