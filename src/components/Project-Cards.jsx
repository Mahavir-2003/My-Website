import {useRef , useState} from 'react';
import "../CSS/Project-Cards.css";


function ProjectCard(props){

        return(
            <div
             className="projects-card">
                 <p><span>project {props.index}</span><span>&nbsp;// {props.name} </span></p>
                 <div className="card-container">
                    <img src={props.img} alt="image" />
                    <div className="card-info">
                        <div><p>{props.projectInfo}</p></div>
                        <div><a href={props.projectLink} target="_blank">view-project</a></div>
                    </div>
                 </div>
            </div>
        );
}

export default ProjectCard;