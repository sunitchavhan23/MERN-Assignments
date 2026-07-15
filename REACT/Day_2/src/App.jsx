import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Props_Ex from './components/Props_Ex';
import Condiional1 from './components/Condiional1';
import Conditional2 from './components/Conditional2';
import Conditional3 from './components/Conditional3';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
        </Routes>
        <Props_Ex name='Sunit' age={23}></Props_Ex><br />
        <Condiional1 isLoggedIn={true}></Condiional1><br />
        <Conditional2 isLoggedIn={false}></Conditional2><br />
        <Conditional3 isLoggedIn='Loading'></Conditional3><br />
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
