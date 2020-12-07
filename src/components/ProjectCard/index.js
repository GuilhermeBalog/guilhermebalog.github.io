import React from 'react'
import { FaGithub } from 'react-icons/fa'

import SafeLink from '../SafeLink'

import styles from './style.module.css'

function ProjectCard({ project, iconColor }) {
    return (
        <div className={styles["project-card"]}>
            <a href={project.homepage}>
                <img src={project.image} alt={project.name} className={styles["project-image"]} />
                <h4>{project.name}</h4>
            </a>
            <p className={styles["project-description"]}>
                {project.description}
            </p>
            <p className={styles["project-language"]}>
                {project.languages}
            </p>

            <SafeLink href={project.repo_url}>
                <p className={styles["project-repo"]}>
                    <FaGithub size={16} color={iconColor || '#000'} className={styles["icon"]} />
                    Repositorie
                </p>
            </SafeLink>
        </div>
    )
}

export default ProjectCard
