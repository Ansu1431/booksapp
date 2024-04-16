import React from 'react'
import './style.css'
import { IoMenu } from "react-icons/io5";
const Navbar = () => {
  return (
    <nav >

        <h1 className='nav-heading'>BOOKS</h1>
    {/* <img src="123.jpg" height="80px" width="100pt" className="logo"/> */}
    <div className="nav-menu-icon">
        <IoMenu size={24}/>
    </div>
    <ul id="sidemenu">
    <li><a href="/explore">
            Explore
            </a></li>
        <li><a href="/">
            Home
            </a></li>
        <li><a href="#about">
            About
            </a></li>
        <li><a href="#services">
            Services
            </a></li>
        <li><a href="#Trending one's">
            Trending one's
            </a></li>
        <li><a href="#contact">
            Contact
            </a></li>
        <i className="fas fa-times" onclick="closemenu()"></i>
    </ul>
    {/* <i className="fa-solid fa-bars" onclick="openmenu()"></i> */}
</nav>
  )
}

export default Navbar