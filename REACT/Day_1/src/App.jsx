import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'
import ClassName from './components/ClassName';
import FunctionalComponent from './components/FunctionalComponent';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {


  return (
    <>
      <BrowserRouter>
      <ClassName></ClassName>
      <FunctionalComponent></FunctionalComponent>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
     <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App
