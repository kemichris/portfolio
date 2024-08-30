import React from 'react'
import Logo from "../assets/logo.png"

export const MobileNav = ({toggleMenu}) => {


    return (
        <div className='mobile-nav'>
            <div>
                <img src={Logo} alt="Logo" />
                <i class="fa-solid fa-bars-staggered" onClick={toggleMenu}></i>
            </div>

        </div>
    )
}
