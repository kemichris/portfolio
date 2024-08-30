import React, {useState} from 'react'
import "./styles/Style.css";
import { Navbar } from './components/Navbar'
import { ProjectCards } from './components/ProjectCards';
import { MobileNav } from './components/MobileNav';
import assetBridge from "./assets/assetBridge.png";

export const Projects = () => {
    const [isActive, setISActive] = useState(true);

    const toggle = () => {
        setISActive(!isActive)
    }
    return (
        <div>
            <header>
                <MobileNav toggleMenu={toggle} />
            </header>

            <main>
                <div className="main-flex">
                    <Navbar isActive={isActive} />
                    <div className="main-content">
                        <h1>Projects</h1>
                        <p className='showcase'>Showcase of Innovative projects that i have done</p>

                        <div className="work-cards">
                            <ProjectCards
                                projectImg={assetBridge}
                                projectName="Asset Bridge"
                                role="Frontend"
                                projectDsc="Revolutionizing dining with augmented reality (AR), by offering a seamless experience to view, 
                            order, and pay for food through a single mobile app, eliminating traditional hassles and enhancing efficiency."
                                stack="HTML | CSS | Javascript"
                            />
                            <ProjectCards
                                projectImg={assetBridge}
                                projectName="Asset Bridge"
                                role="Frontend"
                                projectDsc="Revolutionizing dining with augmented reality (AR), by offering a seamless experience to view, 
                            order, and pay for food through a single mobile app, eliminating traditional hassles and enhancing efficiency."
                                stack="HTML | CSS | Javascript"
                            />
                            <ProjectCards
                                projectImg={assetBridge}
                                projectName="Asset Bridge"
                                role="Frontend"
                                projectDsc="Revolutionizing dining with augmented reality (AR), by offering a seamless experience to view, 
                            order, and pay for food through a single mobile app, eliminating traditional hassles and enhancing efficiency."
                                stack="HTML | CSS | Javascript"
                            />

                            <ProjectCards
                                projectImg={assetBridge}
                                projectName="Asset Bridge"
                                role="Frontend"
                                projectDsc="Revolutionizing dining with augmented reality (AR), by offering a seamless experience to view, 
                            order, and pay for food through a single mobile app, eliminating traditional hassles and enhancing efficiency."
                                stack="HTML | CSS | Javascript"
                            />
                            <ProjectCards
                                projectImg={assetBridge}
                                projectName="Asset Bridge"
                                role="Frontend"
                                projectDsc="Revolutionizing dining with augmented reality (AR), by offering a seamless experience to view, 
                            order, and pay for food through a single mobile app, eliminating traditional hassles and enhancing efficiency."
                                stack="HTML | CSS | Javascript"
                            />

                            <ProjectCards
                                projectImg={assetBridge}
                                projectName="Asset Bridge"
                                role="Frontend"
                                projectDsc="Revolutionizing dining with augmented reality (AR), by offering a seamless experience to view, 
                            order, and pay for food through a single mobile app, eliminating traditional hassles and enhancing efficiency."
                                stack="HTML | CSS | Javascript"
                            />
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
        </div>

    )
}
