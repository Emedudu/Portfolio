import React, { useState } from "react";
import './projectize.css';

const Project=({name,details})=>{
    const [projectText,setProjectText]=useState(name);
    
    const handleClick=()=>{
        details.completed?
        window.location=details.siteLink :
        setProjectText('not completed')
    }
    return(
        <div className="p-3 col-10 col-sm-6 col-lg-3" 
        onMouseEnter={()=>{setProjectText(details.description)}}
        onMouseLeave={()=>{setProjectText(name)}}
        onClick={handleClick}>    
            <div className="card">
                <img className="card-img-top" src={details.image} alt="Card image cap" width="128" height="128"/>
                <div className="card-body">
                    <p className="projectChild">{projectText}</p>
                    <a href={details.codeLink}>Link to Code</a>         
                </div>
            </div>
        </div>
    )
}
const Projectize = ({projects})=>{
    return(
        <div className="row">
            {Object.entries(projects).map((project,i)=>{
            return(<Project key={i} name={project[0]} details={project[1]}/>)})}
        </div>
    )

    
}

export default Projectize