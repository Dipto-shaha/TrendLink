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
          element:<AddProduct></AddProduct>
      },
      {
        path:'/branddetails/:brand',
        element:<BrandDetails></BrandDetails>
      },
      {
        path:'/productDetails/:_id',
        element:<ProductDetails></ProductDetails>
      },
      {
        path:'/updateProduct/:_id',
        element:<UpdateProduct></UpdateProduct>
      },
      {
        path:'/mycart',
        element:<MyCart></MyCart>
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
