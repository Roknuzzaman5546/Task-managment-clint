import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import Authprovider from './Components/Authentication/Authprovider';
import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register';
import Dashbord from './Components/Main/Dashbord';
import Profile from './Components/Dashbord/Profile';
import Privet from './Components/Privet/Privet';
import Userdetails from './Components/Main/Userdetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: "/details",
        element: <Userdetails></Userdetails>
      }
    ]
  },
  {
    path: "/dashbord",
    element: <Dashbord></Dashbord>,
    children: [
      {
        path: "profile",
        element: <Privet><Profile></Profile></Privet>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>,
)
