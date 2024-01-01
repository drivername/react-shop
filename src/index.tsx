import React from 'react';
import ReactDOM from 'react-dom/client';


import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routs/Root';
import CreateAccount from './routs/CreateAccount';
import { store } from './redux/store';
import { Provider } from 'react-redux'
import Login from './routs/Logi';
import UserPanel from './routs/UserPanel';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path:'create-account',
        element:<CreateAccount/>, 
      },
      {
        path:'login',
        element:<Login/>
      },{
        path:'user',
        element:<UserPanel/>
      }
    ]
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>
  </Provider>
);


reportWebVitals();
