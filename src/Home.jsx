import React from 'react'
import "./styles/Style.css";
import { Navbar } from './components/Navbar'
import { TopContainer } from "./components/TopContainer"
import { MyProjects } from './components/MyProjects'
import { Skills } from './components/Skills'
import { CallToAction } from './components/CallToAction';

export const Home = () => {
  return (
    <div>
      <main>
        <div className="main-flex">
          <Navbar />
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
