import React from 'react'
import { Link } from 'react-router-dom'

export const CallToAction = () => {
  return (
    <div className='call-to-action'>
        <h2>Whats Next?</h2>
        <div className="action-text">
          <p>Do you need a beautiful, responsive and fully functional website? Let's work together! 
            Click the button below and let's bring your dreams to reality.
          </p>
          <Link className='get-in-touch' to="/contact">
            <button>Get in touch</button>
          </Link>
        </div>
    </div>
  )
}
