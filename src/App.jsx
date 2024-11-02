import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Form from './Components/Form'
import ReadUser from './Components/ReadUser'
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Update from './Components/Update'

function App() {
  const router = createBrowserRouter (
    [
      {
      path : "/",
      element : (
        <>
        <Navbar/>
        <Form/>
        </>
      )
    },

    {
      path : "/read",
      element : (
        <>
        <Navbar/>
        <ReadUser/>
        </>
      )
    },

    {
      path : "/edit/:id",
      element : (
        <>
        <Navbar/>
        <Update/>
        </>
      )
    }
  ]
  )

  return (
    <RouterProvider router={router}/>
  )
}

export default App
