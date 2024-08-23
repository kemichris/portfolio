import React from 'react'

export const ProjectCards = (props) => {
  const { projectImg, projectName, projectDsc } = props;

  return (
    <div className='project-card'>
      <div className="img-div">
        <img src={projectImg} alt="" />
      </div>
      <h3>{projectName}</h3>
      <p>{projectDsc}</p>
    </div>
  )
}
