import {useState} from 'react';
import {motion} from "framer-motion";
import "../CSS/Projects.css";
import "../CSS/About.css";
import ProjectFolders from './Project-folders';
import ProjectCard from './Project-cards';
import ProjectsData from "./project-data";

function projects(props){


    return (
        <motion.div
       key={screen.width >=1030 ? props.isVisible : null}
            initial={{opacity : 0.5}}
            animate={{opacity : 1}}
            transition={{duration : 0.6}}
         className="projects-container">
            <div className="projects-sections-container">
                <div className="projects-first-section"> 
                <div>
                        <nav className="about-dropdown-nav">
                            <motion.p
                            initial={{opacity : 0 , y : "20%"}}
                            animate={{opacity : 1 , y : 0 }}
                            transition={{duration : 0.8 , delay : 0.3}}
                            >// skills & tools</motion.p>
                        </nav>
                        <ProjectFolders />
                    </div>
                </div>
                <div className="projects-second-section">
                <div className="projects-info">
                        <nav>
                            <motion.p
                            initial={{opacity : 0 , y : "20%"}}
                            animate={{opacity : 1 , y : 0 }}
                            transition={{duration : 0.8 , delay : 0.3}}
                            >// projects</motion.p>
                        </nav>
                    
                        <motion.div
                        initial={{opacity : 0 , filter : "saturate(0%)" , y : "20px"}}
                        animate={{opacity : 1 , filter : "saturate(100%)", y : 0 }}
                        transition={{duration : 0.6 , delay : 1 , ease : "easeInOut"}}
                         className="projects-info-content">
                             {ProjectsData.map((project , index) => {
                                return <ProjectCard name={project.name} img={project.img} projectInfo={project.projectInfo} index={index + 1} projectLink={project.projectLink} />
                             })}
                        </motion.div>
                    </div>
                 </div>
            </div>
        </motion.div>
    );
}

export default projects;