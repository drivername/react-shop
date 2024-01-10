
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


import UserPanel from './routs/userAccount/UserPanel';
import mainUserData from './axios/userData/mainUserData';
import Logout from './routs/Logout';
import login from './axios/login';
import { Provider } from 'react-redux';
import Login from './routs/Login';
import ErrorPage from './routs/ErrorPage';
import createAccount from './axios/createAccount';
import logout from './axios/logout';
import { store } from './redux/store';
import MyProducts from './routs/userAccount/MyProducts';
import MyProduct from './axios/userData/MyProducts';



const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>} errorElement={<ErrorPage/>}>
      <Route path='login' element={<Login/>} action={login}/>


      <Route path='user' element={<UserPanel/>} loader={mainUserData}/>
      <Route index path='user/myProducts' element={<MyProducts/>} loader={MyProduct}/>

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



