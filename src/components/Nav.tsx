import React, { useEffect } from 'react'
import '../styles/Nav.scss'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../redux/app.hook'



export default function Nav() {
  const loginStatus=useAppSelector((state)=>state.isLogin.value)
  const userData=useAppSelector((state)=>state.userData.data)
  console.log(loginStatus, 'nav')
 useEffect(()=>{

 })
  return (
    <div className='containerNavComponent'>
      
        <div className='auth_pak'>
           {loginStatus?<>
            <h5>Welcome</h5>
            <button className="btn btn-primary"><Link to={'logout'} className='linkStyle'>Logout</Link></button>
           </>:<>
           <button className="btn btn-primary"><Link to={'create-account'} className='linkStyle'>CreateAccount</Link></button>
            <button className="btn btn-primary"><Link to={'login'} className='linkStyle'>Login</Link></button>

           
           </>}
           
            
    
        </div>
        <Link to={'/'} className='home'><h1 className='display-4'>Home Page</h1></Link>
    </div>
  )
}
