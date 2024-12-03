import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider  
} from "react-router-dom";
import Login from "./pages/login";
import RegisterS from "./pages/sign_up_s";
import RegisterT from "./pages/sign_up_t";
import Home from "./pages/home";
import Nav from "./components/nav";


const router=createBrowserRouter(
  [
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/registerS",
      element:<RegisterS />
    },
    {
      path:"/registerT",
      element:<RegisterT />
    },
    {
      path:"/Login",
      element:<Login />
    },
    {
      path:"*",
      element:<h1>404 Not Found</h1>
    }
  ]
)

function App() {
  return (
    <>
      <Nav/>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
