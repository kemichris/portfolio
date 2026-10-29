import { NavLink } from "react-router-dom";
import { useState } from "react";

import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";


// import { Button } from "../common/Button";

// import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

  const navLinkClass = ({ isActive }) =>
    isActive ? "text-white font-semibold" : "text-muted hover:text-white";

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[80%] rounded-2xl bg-bg/74 border border-line backdrop-blur-lg hadow-lg shadow-black/22 flex items-center justify-between px-4 z-1000 ">
        <p className="text-text my-2">EC</p>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-4 md:items-center text-sm py-2">
          <li>
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/skills" className={navLinkClass}>
              Skills
            </NavLink>
          </li>

          <li>
            <NavLink to="/project" className={navLinkClass}>
              Project
            </NavLink>
          </li>
        
            <NavLink to="/contact" className='py-2 px-4 font-semibold bg-blue hover:bg-blue-hover rounded text-text' >
              Let's talk
            </NavLink>
        </ul>

        {/* Desktop Right */}

        {/* Mobile Menu Button */}
        <button className="rounded-md p-2 text-text lg:hidden md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiOutlineXMark size={24} /> : <HiOutlineBars3 size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {/* <MobileMenu open={menuOpen} onClose={closeMenu} /> */}
    </>
  );
}
