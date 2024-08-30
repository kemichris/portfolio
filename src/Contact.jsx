import React, { useState } from 'react'
import "./styles/Style.css";
import { Navbar } from './components/Navbar'
import { ContactInfo } from './components/ContactInfo'
import { MobileNav } from './components/MobileNav';

export const Contact = () => {
    const [isActive, setISActive] = useState(true);

    const toggle = () => {
        setISActive(!isActive)
    }
    return (
        <div>
            <header>
                <MobileNav toggleMenu={toggle} />
            </header>

            <main>
                <div className="main-flex">
                    <Navbar isActive={isActive} />
                    <div className="main-content">
                        <h1>Contact</h1>
                        <p className='contact-p'>Feel free to reach out personally, let's discuss your project ideas!</p>

                        <ContactInfo />

                        <div className="contact-form">
                            <p>Have a Project in mind? Let's Work Together!</p>
                            <form action="">
                                <div className="form">
                                    <input type="text" name="" placeholder='Name' id="" />
                                    <input type="email" name="" placeholder='Email' id="" />
                                </div>
                                <textarea name="" id="" placeholder='Your Message'></textarea>
                                <button type='submit'>Send Message</button>

                            </form>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}
