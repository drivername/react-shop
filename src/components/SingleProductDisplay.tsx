import React, { useEffect, useRef } from 'react'
import s from '../styles/common/SingleProductDisplay.module.scss'
import ProductType from '../common/ProductType'
import { date } from 'yup'
import img from '../public/product.png'
function SingleProductDisplay({productData,width,height}:{productData:ProductType,width:number,height:number},) {
 const container=useRef<HTMLDivElement>(null)
console.log(productData,'what it is')
 useEffect(()=>{
        container.current!.style.width=`${width}%`
        container.current!.style.height=`${height}%`

 })

  return (
    <div className={s.container} ref={container}>
        <p className={s.name_of_product}>{productData.name_of_product}</p>
        <img className={s.img} src={productData.img_url} />
        <p className={s.price}>Price: {productData.price}</p>
        <p className={s.description}>{productData.description}</p>

    </div>
  )
}

export default SingleProductDisplay


