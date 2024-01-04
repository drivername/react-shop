import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';


import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routs/Root';
import CreateAccount from './routs/CreateAccount';


import Login, { loginUser } from './routs/Login';
import UserPanel from './routs/UserPanel';
import axios from 'axios';
import mainUserData from './axios/mainUserData';
import Logout from './routs/Logout';
import LogoutHandler from './axios/logout';
import rootLoader from './axios/rootLoader';

import Home from './routs/Home';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    loader:async({request})=>{
      const url = new URL(request.url);
      
      console.log(url,'what it is')
     return  rootLoader()
    
     
    },
   
    children:[
      {
        path:'/',
        element:<Home/>, 
      },
      {
        path:'create-account',
        element:<CreateAccount/>, 
      },
      {
        path:'login',
        element:<Login/>,
        
      },{
        path:'user',
        element:<UserPanel/>,
        
      
      },
      {
        path:'logout',
        element:<Logout/>,
        loader:LogoutHandler
      }
    ]
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  
 
       <RouterProvider router={router} />
    
 
 
);


reportWebVitals();
