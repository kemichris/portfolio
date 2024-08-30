import React, {useState} from 'react'

import { Navbar } from './components/Navbar'
import { AboutTop } from './components/AboutTop'
import { Skills } from './components/Skills'
import { MobileNav } from './components/MobileNav'

export const About = () => {
  const [isActive, setISActive] = useState(true);

  const toggle = ()=> {
    setISActive(!isActive)
  }
  return (
    <div>
      <header>
        <MobileNav toggleMenu={toggle}/>
      </header>
      <main>
      <div className="main-flex">
      <Navbar isActive={isActive} />
        <div className="main-content">
          <AboutTop />
          <Skills />
        </div>
      </div>
    </main>
    </div>
    
  )
}
