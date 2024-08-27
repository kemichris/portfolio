import React from 'react'

export const AboutTop = () => {

  const copyEmail = () => {
    navigator.clipboard.writeText("ekeminichristopher123@gmail.com")
    alert("email copied")
  }

  return (
    <div className='top-container'>
      <div className="welcome">
        <h1>Ekemini Christopher</h1>
        <p>Frontend developer</p>
      </div>

      <div className="short-abt">
        <p>My name is Ekemini Christopher, but I am mostly called Kemi Chris for short. 
            I am a fast-rising and innovative frontend developer, I translate beautiful 
            designs into neat reusable codes that are responsive and accessible across all devices. 
            Since my involvement in this industry I have dedicated my time to learning and continuous 
            practice in other to improve continuously and advance in this industry, as this has helped 
            me provide efficient solution to challenges.
        </p>
      </div>

      <div className="top-buttons">
        <a href="https://tinyurl.com/arcvyru7" target="_blank" rel="noopener noreferrer">
          <button className='download-btn'><i class="fa-solid fa-download"></i> Download Resume</button>
        </a>
        <button className='copy-btn' onClick={copyEmail}><i class="fa-solid fa-copy"></i> Copy email</button>
      </div>
    </div>
  )
}
