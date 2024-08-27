import React from 'react'

export const ProjectCards = (props) => {
  const { projectImg, projectName, role, projectDsc, stack } = props;

  return (
    <div className='project-card'>
      <div className="img-div">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <img className='project-img' src={projectImg} alt="" />
        </a>
      </div>
      <h3>{projectName}</h3>
      <small className='role'>Role: {role}</small>
      <p className='desc'>{projectDsc}</p>
      <p className="stack">{stack}</p>
    </div>
  )
}
