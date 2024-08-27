import React from 'react'
import "./styles/Style.css";
import { Navbar } from './components/Navbar'
import { ProjectCards } from './components/ProjectCards';
import assetBridge from "./assets/assetBridge.png";

export const Projects = () => {
    return (
        <main>
            <div className="main-flex">
                <Navbar />
                <div className="main-content">
                    <h1>Projects</h1>
                    <p>Showcase of Innovative projects that i have done</p>

                    <div className="work-cards">
                        <ProjectCards
                            projectImg={assetBridge}
                            projectName="Asset Bridge"
                            role="Frontend"
                            projectDsc="Revolutionizing dining with augmented reality (AR), by offering a seamless experience to view, 
                            order, and pay for food through a single mobile app, eliminating traditional hassles and enhancing efficiency."
                            stack="HTML | CSS | Javascript"
                        />

                    </div>
                </div>
            </div>
        </main>
    )
}
