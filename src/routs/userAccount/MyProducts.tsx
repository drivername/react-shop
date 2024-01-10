import React from 'react'
import { NavLink, useLoaderData } from 'react-router-dom'
import s from '../../styles/user/MyProducts.module.scss'
function MyProducts() {
let loaderData=useLoaderData()
console.log(loaderData)

  return (
    <div className={s.container}>
       <NavLink to={'/user/myProducts/sell'}><button>Sell Products</button></NavLink>
        

    </div>
  )
}

export default MyProducts