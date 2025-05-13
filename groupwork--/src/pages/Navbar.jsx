import React from 'react'

const Navbar = () => {
  return (
    <div>
    <nav className='navbar'>
        <ul className='nav-links'>
            <li><a href="/">Return</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
        </ul>
    </nav>
    </div>
  )
}

export default Navbar
