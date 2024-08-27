import React from 'react'

import { Navbar } from './components/Navbar'
import { AboutTop } from './components/AboutTop'
import { Skills } from './components/Skills'

export const About = () => {
  return (
    <main>
    <div className="main-flex">
     <Navbar/>
      <div className="main-content">
        <AboutTop/>
        <Skills/>
      </div>
    </div>
  </main>
  )
}
