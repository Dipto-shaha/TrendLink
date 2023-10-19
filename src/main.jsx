import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navber from './component/Navber';
import Home from './component/Home';
import AddProduct from './component/privateRoute/AddProduct';
import Context from './Context';
import ErrorPage from './ErrorPage';
import BrandDetails from './component/BrandDetails';
import ProductDetails from './component/privateRoute/ProductDetails';
import UpdateProduct from './component/privateRoute/UpdateProduct';
import MyCart from './component/privateRoute/MyCart';
import Login from './Login';
import Signin from './Signin';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navber></Navber>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home> 
      },
      {
          path:'/addproduct', 
          element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path:'/branddetails/:brand',
        element:<BrandDetails></BrandDetails>
      },
      {
        path:'/productDetails/:_id',
        element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>
      },
      {
        path:'/updateProduct/:_id',
        element:<PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>
      },
      {
        path:'/mycart',
        element:<PrivateRoute><MyCart></MyCart></PrivateRoute>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signin',
        element:<Signin></Signin>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
  </React.StrictMode>,
)
