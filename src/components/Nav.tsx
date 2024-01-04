import React, { useEffect } from 'react'
import '../styles/Nav.scss'
import { Link } from 'react-router-dom'




export default function Nav({isLoged}:{isLoged:boolean}) {
  console.log(isLoged)
  return (
    <div className='containerNavComponent'>
      
        <div className='auth_pak'>
         
         {isLoged?<>
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
