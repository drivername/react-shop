import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate=useNavigate()
  return (
    <div>
        <h1>Welcome on our page!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae modi ullam eaque sequi harum magni cum odio tempore voluptate accusamus aperiam placeat, ab earum quia, fuga asperiores dolore, excepturi accusantium.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae modi ullam eaque sequi harum magni cum odio tempore voluptate accusamus aperiam placeat, ab earum quia, fuga asperiores dolore, excepturi accusantium.</p>
   
    </div>
  )
}

export default Home