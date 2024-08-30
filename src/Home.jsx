import React, { useState } from 'react'
import "./styles/Style.css";
import { Navbar } from './components/Navbar'
import { TopContainer } from "./components/TopContainer"
import { MyProjects } from './components/MyProjects'
import { Skills } from './components/Skills'
import { CallToAction } from './components/CallToAction';
import { MobileNav } from './components/MobileNav';

export const Home = () => {
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
            <TopContainer />
            <MyProjects />
            <Skills />
            <CallToAction/>
          </div>
        </div>
      </main>

    </div>
  )
}
