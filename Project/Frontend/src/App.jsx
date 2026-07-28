import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import AddBlog from './components/AddBlog'
import Home from './components/Home'
import EditBlog from './components/EditBlog'
import ShowBlog from './components/ShowBlogs'

const App = () => {
  return (
    <>

      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/add' element={<AddBlog></AddBlog>} />
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/edit/:id' element={<EditBlog></EditBlog>}></Route>
          <Route path='/:id' element={<ShowBlog></ShowBlog>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

