import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from '../Layout/MainLayout';
import Home from '../pages/Home/Home';
import Menu from '../pages/Menu/Menu';
import Order from '../pages/Order/Order';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import PrivateRoute from './PrivateRoute';
import Secret from '../shared/Secret';
import Dashboard from '../Layout/Dashboard';
import Cart from '../pages/Dashboard/Cart/Cart';
import AllUsers from '../pages/Dashboard/AllUsers/AllUsers';
import AddItems from '../pages/Dashboard/AddItems/AddItems';
import AdminRoute from './AdminRoute';
import ManageItems from '../pages/Dashboard/ManageItems/ManageItems';
import UpdateItem from '../pages/Dashboard/UpdateItem/UpdateItem';
import Payment from '../pages/Dashboard/Payment/Payment';
import PaymentHistory from '../pages/Dashboard/PaymentHistory/PaymentHistory';


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'menu',
          element:<Menu></Menu>
        },
        {
          path:'order/:category',
          element:<Order></Order>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'register',
          element:<Register></Register>
        },
        {
          path:'secret',
          element:<PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        // normal user routes
       
        {
          path:'cart',
          element:<Cart></Cart>
        },
        {
          path:'payment',
          element:<Payment></Payment>
        },
        {
          path: 'paymentHistory',
          element: <PaymentHistory></PaymentHistory>
        },
        // admin routes
        {
          path:'addItems',
          element:<AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path:'manageItems',
          element:<AdminRoute><ManageItems></ManageItems></AdminRoute>

        },
        {
          path:'updateItem/:id',
          element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
        }
        ,
        {
          path:'users',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        }
      ]
    }
  ]);

export default router;