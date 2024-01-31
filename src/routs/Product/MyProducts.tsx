import React, { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLoaderData } from 'react-router-dom'
import s from '../../styles/user/MyProducts.module.scss'
import productImg from '../../public/product.png'
import makeGetRequest from '../../axios/common/makeGetRequest'
type sortProductsType='price-descending'|'price-ascending'|'quantity-descending'|'quantity-ascending'|'default'

function MyProducts() {
let loaderData:any=useLoaderData()
const [data,setData]=useState(true)
const [orderBy,setOrderBy]=useState<sortProductsType>('default')

console.log(loaderData,'loaderData')

  return (
    <div className={s.container}>
    
       <main className={s.main}>
        <h3>On Market</h3>
        <table>
        <tr>
          <th className={s.emptyCell}></th>
          <th>Name of item</th>
          <th>Price</th>
          <th>Owned Quantity</th>
          <th>Comments</th>
        </tr>
       
          {loaderData.map((el: any,i: any,arr: any)=>{
            if(orderBy==='default'){

            }
            else if(orderBy==='price-ascending'){
              arr.sort((a: { price: number },b: { price: number })=>a.price-b.price)
            }
            else if(orderBy==='price-descending'){
              arr.sort((a: { price: number },b: { price: number })=>b.price-a.price)
            }
            else if(orderBy==='quantity-ascending'){
              arr.sort((a: { quantity: number },b: { quantity: number })=>a.quantity-b.quantity)
            }
            else if(orderBy==='quantity-descending'){
              arr.sort((a: { quantity: number },b: { quantity: number })=>b.quantity-a.quantity)
            }
            

              return (
                <tr>
                <td>{i+1}</td>
                <td><Link to={`/product/details/${arr[i].id}`}>{arr[i].name_of_product}</Link></td>
                <td>{arr[i].price}</td>
                <td>{arr[i].quantity}</td>
                <td>{arr[i].commentaboutproduct.length}</td>
                </tr>
              )
            
           
          })}
        
        </table>
          <select onChange={(e)=>{
           
            if(e.target.value==='price-ascending')setOrderBy('price-ascending')
            if(e.target.value==='price-descending')setOrderBy('price-descending')
            if(e.target.value==='quantity-ascending')setOrderBy('quantity-ascending')
            if(e.target.value==='quantity-descending')setOrderBy('quantity-descending')
          }}>
            <option value={'price-ascending'}>Sort by lowest price</option>
            <option value={'price-descending'}>Sort by highest price</option>
            <option value={'quantity-ascending'}>Sort by lowest quantity</option>
            <option value={'quantity-descending'}>Sort by highest quantity</option>
          </select>
     
       </main>
        

    </div>
  )
}

export async function loader({params}:any){
  console.log(params)
  return await makeGetRequest('http://localhost:3001/product/myProducts')
}

export default MyProducts