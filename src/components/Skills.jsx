import React from 'react'
import { SkillsCard } from './SkillsCard'
import javaScripImg from "../assets/Javascript logo.png";
import reactImg from "../assets/image 4.png"
import htmlImg from "../assets/HTML logo.png"
import cssImg from "../assets/CSS logo.png"
import boostrapImg from "../assets/Bootstrap logo.png"
import solidityImg from "../assets/Solidity logo.png"
import nextJsImg from "../assets/Nextjs logo.png"
import problemImg from "../assets/Rectangle 3.png"
import teamImg from "../assets/image 1.png"
import criticalImg from "../assets/image 2.png"
import timeImg from "../assets/image 3.png"

export const Skills = () => {
  return (
    <div>
        <h2>My Skills and Technologies</h2>
        <div className="skills-flex">
            <SkillsCard languageImg={javaScripImg} languageName="Javascrips" />
            <SkillsCard languageImg={reactImg} languageName="React" />
            <SkillsCard languageImg={htmlImg} languageName="HTML" />
            <SkillsCard languageImg={cssImg} languageName="CSS" />
            <SkillsCard languageImg={boostrapImg} languageName="Bootstrap" />
            <SkillsCard languageImg={solidityImg} languageName="Solidy" />
            <SkillsCard languageImg={nextJsImg} languageName="NextJS" />
            <SkillsCard languageImg={problemImg} languageName="Problem solving" />
            <SkillsCard languageImg={teamImg} languageName="Teamwork" />
            <SkillsCard languageImg={criticalImg} languageName="Critical Thinkng" />
            <SkillsCard languageImg={timeImg} languageName="Time Management" />

        </div>
    </div>
  )
}
