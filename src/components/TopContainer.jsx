import React from 'react'

export const TopContainer = () => {
  return (
    <div className='top-container'>
        <div className="available">
          <div className="active-circle"></div>
          <p>Available for work</p>
        </div>

        <div className="welcome">
          <h1>Hello, I am Ekemini.</h1>
          <p>A frontend web developer</p>
        </div>

        <div className="short-abt">
          <p>I discovered a love for software development while learning about blockchain development. 
            I wanted to be a builder, not just a user. So, I started with frontend development to understand the basics. 
            Since then, I've loved every process and bringing concepts to life with code.
          </p>
        </div>

        <div className="top-buttons">
          <a href="http://" target="_blank" rel="noopener noreferrer">
          <button className='download-btn'><i class="fa-solid fa-download"></i> Download Resume</button>
          </a>
          <button className='copy-btn'><i class="fa-solid fa-copy"></i> Copy email</button>
        </div>
    </div>
  )
}
