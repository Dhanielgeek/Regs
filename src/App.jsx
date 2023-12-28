import React from 'react';
import Register from './Components/Register';
import Login from './Components/Login'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const Router = createBrowserRouter([
  {
    path : '/',
    element : <Login/>
  },
  {
    path : '/register',
    element: <Register/>
  }
])

const App = () => {
  return (
    <>
    <RouterProvider router={Router}/>
    </>
  );
}

export default App;
