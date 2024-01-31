
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
import CreateAccount ,{action as actionCreate} from './routs/CreateAccount';
import './index.scss'


import UserPanel, { loader as loaderUser } from './routs/userAccount/UserPanel';

import Logout from './routs/Logout';

import { Provider } from 'react-redux';
import Login, { action as actionLogin } from './routs/Login';
import ErrorPage from './routs/ErrorPage';

import logout from './axios/logout';
import { store } from './redux/store';
import MyProducts, { loader as loaderMyProducts } from './routs/Product/MyProducts';

import SellProducts, { action as actionSellProduct } from './routs/Product/SellProducts';

import Home, { action as actionHome, loader as loaderHome } from './routs/Home';


import ProductDetails, { action as actionProductDetails, loader as loaderProductDetails } from './routs/Product/ProductDetails';
import UserProfile, { loader as loaderProfile } from './routs/userAccount/UserProfile';
import Settings, { action as actionSettings, loader as loaderSettings } from './routs/userAccount/Settings';
import ParticularProduct, { action as actionParticularProduct, loader as loaderParticularProduct } from './routs/ParticularProduct';
import Upload, { action as actionUpload, loader as loaderUpload } from './routs/Upload';
import Chat from './routs/Chat';
import ProfileOfOtherUser, { loader as loaderOtherUser } from './routs/userAccount/ProfileOfOtherUser';


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>} errorElement={<ErrorPage/>}>

      <Route  path='/' element={<Home/>} loader={loaderHome}  action={actionHome}/>
     
      <Route  path='/chat' element={<Chat/>} />
      <Route  path='/upload' element={<Upload/>} loader={loaderUpload}  action={actionUpload}/>
      <Route path='login' element={<Login/>} action={actionLogin}/>
      <Route path='/details/:productId' element={<ParticularProduct/>} 
      loader={loaderParticularProduct}
      action={actionParticularProduct
      }
      />

<Route  path='/myProducts' element={<MyProducts/>} loader={loaderMyProducts}/>
<Route  path='product/details/:id' element={<ProductDetails/>} loader={loaderProductDetails} action={actionProductDetails}/>
<Route  path='/product/sell' element={<SellProducts/>} action={actionSellProduct} />
      <Route path='user' element={<UserPanel/>} >
     
      <Route index  path='/user' element={<UserProfile/>} loader={loaderProfile}/>
      <Route  path='settings' element={<Settings/>} loader={loaderSettings} action={actionSettings}/>
      <Route  path='/user/:id' element={<ProfileOfOtherUser/>} loader={loaderOtherUser} />
      </Route>
     
      

      <Route path='create-account' element={<CreateAccount/>} action={actionCreate}/>
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



