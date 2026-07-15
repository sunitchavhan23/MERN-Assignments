import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <h2>Navigation Bar</h2>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About us</NavLink>
      <NavLink to='/contact'>Contact Us</NavLink>
    </div>
  )
}

export default Navbar
