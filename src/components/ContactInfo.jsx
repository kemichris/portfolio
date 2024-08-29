import React from 'react'

export const ContactInfo = () => {
    const copyEmail = () => {
        navigator.clipboard.writeText("ekeminichristopher123@gmail.com")
        alert("email copied")
    }

    return (
        <div className='contact-info'>
            <div className="contact-info-flex">
                <div className="">
                    <p>Email</p>
                    <small>kemichris@gmail.com</small>
                </div>
                <div className="">
                    <p>Phone</p>
                    <small>+234 8174 08 6706</small>
                </div>
            </div>
            <div className="quick-actions">
                <a href="https://" target="_blank" rel="noopener noreferrer">
                    <button className='download-btn'><i class="fa-brands fa-whatsapp"></i> Whatsapp</button>
                </a>
                <button className='copy-btn' onClick={copyEmail}><i class="fa-solid fa-copy"></i> Copy email</button>
            </div>
        </div>



    )
}
