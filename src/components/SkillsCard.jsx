import React from 'react'

export const SkillsCard = (props) => {
    const {languageImg, languageName} = props;

  return (
    <div className='skills-card'>
        <img src={languageImg} alt="" />
        <h4>{languageName}</h4>
    </div>
  )
}
