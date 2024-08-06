import React from 'react'
import { Link } from 'react-router-dom'
import assetBridge from "../assets/assetBridge.png"
import { ProjectCards } from './ProjectCards'

export const MyProjects = () => {
  return (
    <div className='my-projects'>
        <h2>My Works</h2>
        <div className="work-cards">
            <ProjectCards projectImg={assetBridge} projectName="Asset Bridge" projectDsc="kasfksdjk" />

        </div>
        
        <Link to="/Project"> See all works</Link>
    </div>
  )
}
