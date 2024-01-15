
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,

  createRoutesFromElements,

  Route,

  RouterProvider,
  useLoaderData,
} from "react-router-dom";
import Root from './routs/Root';
import CreateAccount from './routs/CreateAccount';
import './index.scss'


import UserPanel, { loader as loaderUser } from './routs/userAccount/UserPanel';

import Logout from './routs/Logout';

import { Provider } from 'react-redux';
import Login, { action as actionLogin } from './routs/Login';
import ErrorPage from './routs/ErrorPage';
import createAccount from './axios/createAccount';
import logout from './axios/logout';
import { store } from './redux/store';
import MyProducts from './routs/userAccount/MyProducts';
import MyProduct from './axios/userData/MyProducts';
import SellProducts from './routs/userAccount/SellProducts';
import putProductsOnMarket from './axios/userData/putProductsOnMarket';
import Home, { action as actionHome, loader as loaderHome } from './routs/Home';

import homeLoader from './axios/homeLoader';
import ProductDetails, { action as actionProductDetails } from './routs/userAccount/ProductDetails';
import UserProfile, { loader as loaderProfile } from './routs/userAccount/UserProfile';



const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>} errorElement={<ErrorPage/>}>

      <Route  path='/' element={<Home/>} loader={loaderHome}  action={actionHome}/>
      <Route path='login' element={<Login/>} action={actionLogin}/>


      <Route path='user' element={<UserPanel/>} >
      <Route  path='myProducts' element={<MyProducts/>} loader={MyProduct}/>
      <Route index  path='/user' element={<UserProfile/>} loader={loaderProfile}/>
      <Route  path='sell' element={<SellProducts/>} action={putProductsOnMarket} />
      <Route  path='details/:id' element={<ProductDetails/>} loader={MyProduct} action={actionProductDetails}/>
      </Route>
     
      

      <Route path='create-account' element={<CreateAccount/>} action={createAccount}/>
      <Route path='logout' element={<Logout/>} loader={logout}/>

    </Route>
  )
)



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
<RouterProvider router={router}/>
</Provider>
);



