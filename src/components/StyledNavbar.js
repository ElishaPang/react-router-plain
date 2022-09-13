import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='navbar'>
            <NavLink to="/" className={({ isActive }) => isActive ? 'link active' : 'link'} > Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="products">Product</NavLink>
            <NavLink to="login">Login</NavLink>
        </nav>
    )
}

export default Navbar