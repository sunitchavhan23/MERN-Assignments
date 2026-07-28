import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import AddCourse from './components/AddCourse'
import Home from './components/Home'
import ShowCourse from './components/ShowCourse'
import EditCourse from './components/EditCourse'

const App = () => {

  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <Navbar search={search} setSearch={setSearch} />

      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/add" element={<AddCourse />} />
        <Route path="/show/:id" element={<ShowCourse />} />
        <Route path="/edit/:id" element={<EditCourse />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App