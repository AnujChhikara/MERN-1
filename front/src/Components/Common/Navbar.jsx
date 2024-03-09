import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../store/auth'

function Navbar() {
  
  const{isLoggedIn} = useAuth()
  return (
    <div className='flex pt-10 px-20 mb-20 justify-between'>
        <h1 className='text-3xl font-bold'>
            Anuj Chhikara
        </h1>
        <div className='flex space-x-2 text-xl '>

        
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/service">Services</NavLink>
        {
          isLoggedIn ? <NavLink to='/logout'>Logout</NavLink> : (
            <>
            <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink></>
          )
        }
        
        
     
     
        </div>
    </div>
  )
}

export default Navbar