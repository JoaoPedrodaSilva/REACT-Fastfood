import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png'

const Navbar = () => {
  return (
    <nav>
      <Link to='/'>
        <img src={logo} alt="" />
      </Link>
      <ul className='nav-list'>
        <li className='nav-list-item'>
          <Link to='plates' className='nav-link'>
            Plates
          </Link>
        </li>
        <li className='nav-list-item'>
          <Link to='reviews' className='nav-link'>
            Reviews
          </Link>
        </li>
        <li className='nav-list-item'>
          <Link to='about' className='nav-link'>
            About
          </Link>
        </li>
        <li className='nav-list-item'>
          <Link to='contact' className='nav-link'>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar