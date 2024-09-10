import React, { useState } from 'react'
import Logo from "../assets/logo.png"
import { Link, useLocation } from 'react-router-dom'

export const Navbar = ({isActive}) => {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme(!theme)
  }

  const location = useLocation();



  return (
    <div className={isActive ? "active nav-bar": "nav-bar"}>
      <div className="nav-heading">
        <img src={Logo} alt="" />
        <p>Ekemini Christopher</p>
        <small>Frontend Developer</small>
        <div className="nav-socials">
          <a href="https://github.com/kemichris" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/kemichris/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a>
          <a href="https://www.instagram.com/kemi_chris1/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a>
        </div>
      </div>

      <div className="nav-content">

        <Link className={`link ${location.pathname === "/" ? "active" : ""}`} to="/"><i class="fa-solid fa-house icon"></i> HomePage</Link>
        <Link className={`link ${location.pathname === "/about" ? "active" : ""}`} to="/about"><i class="fa-solid fa-user"></i> About</Link>
        <Link className={`link ${location.pathname === "/projects" ? "active" : ""}`} to="/projects"><i class="fa-solid fa-briefcase"></i> Projects</Link>
        <Link className={`link ${location.pathname === "/contact" ? "active" : ""}`} to="/contact"><i class="fa-solid fa-envelope"></i> Contact</Link>
      </div>

      <div className="theme-switcher">
        <button onClick={toggleTheme}> {theme ? <i class="fa-solid fa-moon"></i> : <i class="fa-solid fa-bahai"></i>}</button>


      </div>


    </div>
  )
}
