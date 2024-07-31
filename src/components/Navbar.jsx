import React from 'react'
import Logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='nav-bar'>
        <div className="nav-heading">
          <img src={Logo} alt="" />
          <p>Ekemini Christopher</p>
          <small>Frontend Developer</small>
          <div className="nav-socials">
            <a href="https://github.com/kemichris" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>
            <a href="https://github.com/kemichris" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/kemichris" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a>
          </div>
        </div>

        <div className="nav-content">
          <Link to="/"><i class="fa-solid fa-house"></i> HomePage</Link>
          <Link to="/about"><i class="fa-solid fa-user"></i> About</Link>
          <Link to="/projects"><i class="fa-solid fa-briefcase"></i> Projects</Link>
          <Link to="/contact"><i class="fa-solid fa-envelope"></i> Contact</Link>
        </div>

        <div className="theme-switcher">
          <i class="fa-solid fa-moon"></i>
          <i class="fa-solid fa-bahai"></i>
        </div>


    </div>
  )
}
