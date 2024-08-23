import React from 'react'
import "./styles/Home.css";
import { Navbar } from './components/Navbar'
import { TopContainer } from "./components/TopContainer"
import { MyProjects } from './components/MyProjects'
import { Skills } from './components/Skills'

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
          </div>
        </div>
      </main>

    </div>
  )
}
