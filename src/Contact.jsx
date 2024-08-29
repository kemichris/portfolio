import React from 'react'
import "./styles/Style.css";
import { Navbar } from './components/Navbar'
import { ContactInfo } from './components/ContactInfo'

export const Contact = () => {
    return (
        <div>
            <main>
                <div className="main-flex">
                    <Navbar />
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

                            </form>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}
