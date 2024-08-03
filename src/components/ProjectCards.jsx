import React from 'react'

export const ProjectCards = (props) => {
    const {projectImg, projectName, projectDsc } = props;

  return (
    <div className='project-card'>
        <img src={projectImg} alt="" />
        <h3>{projectName}</h3>
        <p>{projectDsc}</p>
    </div>
  )
}
