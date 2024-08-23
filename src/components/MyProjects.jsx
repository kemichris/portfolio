import React from 'react'
import { Link } from 'react-router-dom'
import assetBridge from "../assets/assetBridge.png"
import { ProjectCards } from './ProjectCards'

export const MyProjects = () => {
  return (
    <div className='my-projects'>
        <h2>My Works</h2>
        <div className="work-cards">
            <ProjectCards projectImg={assetBridge} projectName="Asset Bridge" projectDsc="Revolutionizing dining with augmented reality (AR), by offering a seamless experience to view, order, and pay for food through a single mobile app, eliminating traditional hassles and enhancing efficiency." />
            <ProjectCards projectImg={assetBridge} projectName="Asset Bridge" projectDsc="Revolutionizing dining with augmented reality (AR), by offering a seamless experience to view, order, and pay for food through a single mobile app, eliminating traditional hassles and enhancing efficiency." />
            <ProjectCards projectImg={assetBridge} projectName="Asset Bridge" projectDsc="Revolutionizing dining with augmented reality (AR), by offering a seamless experience to view, order, and pay for food through a single mobile app, eliminating traditional hassles and enhancing efficiency." />
            <ProjectCards projectImg={assetBridge} projectName="Asset Bridge" projectDsc="Revolutionizing dining with augmented reality (AR), by offering a seamless experience to view, order, and pay for food through a single mobile app, eliminating traditional hassles and enhancing efficiency." />
        </div>
        <div className='see-all'>
        <Link className='see-all-link' to="/Project"> See all works</Link>
        </div>
        
        
    </div>
  )
}
