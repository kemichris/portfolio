import React from 'react'
import { SkillsCard } from './SkillsCard'
import javaScripImg from "../assets/Javascript logo.png";
import reactImg from "../assets/image 4.png"

export const Skills = () => {
  return (
    <div>
        <h2>My Skills and Technologies</h2>
        <div className="skills-flex">
            <SkillsCard languageImg={javaScripImg} languageName="Javascrips" />
            <SkillsCard languageImg={reactImg} languageName="React" />
        </div>
    </div>
  )
}
