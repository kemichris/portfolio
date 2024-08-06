import React from 'react'
import { Navbar } from './components/Navbar'
import {TopContainer} from "./components/TopContainer"
import { MyProjects } from './components/MyProjects'
import { Skills } from './components/Skills'

export const Home = () => {
  return (
    <div>
      <Navbar />
      <TopContainer />
      <MyProjects/>
      <Skills/>
    </div>
  )
}
