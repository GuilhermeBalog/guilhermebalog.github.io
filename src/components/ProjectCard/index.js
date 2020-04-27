import React from 'react'
import { FaGithub } from 'react-icons/fa'

import SafeLink from '../SafeLink'

import './style.css'

function ProjectCard({ project }){
    return (
        <div className="project-card">
            <SafeLink href={project.homepage}>
                <img src={project.image} alt={project.name} className="project-image" />
                <h4>{project.name}</h4>
            </SafeLink>
            <p className="project-description">{project.description}</p>
            <p className="project-language">{project.languages}</p>
            
            <SafeLink href={project.repo_url}>
                <p className="project-repo">
                    <FaGithub size={16} color="#000" className="icon" />
                    Repositorie
                </p>
            </SafeLink>
        </div>
    )
}

export default ProjectCard