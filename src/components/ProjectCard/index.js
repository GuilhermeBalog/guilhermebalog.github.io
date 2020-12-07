import React from 'react'
import { FaGithub } from 'react-icons/fa'

import SafeLink from '../SafeLink'

import styles from './style.module.css'

function ProjectCard({ project, iconColor }) {
    return (
        <div className={styles.projectCard}>
            <a href={project.homepage}>
                <img src={project.image} alt={project.name} className={styles.projectImage} />
                <h4>{project.name}</h4>
            </a>
            <p className={styles.projectDescription}>
                {project.description}
            </p>
            <p className={styles.projectLanguage}>
                {project.languages}
            </p>

            <SafeLink href={project.repo_url}>
                <p className={styles.projectRepo}>
                    <FaGithub size={16} color={iconColor || '#000'} className={styles.icon} />
                    Repository
                </p>
            </SafeLink>
        </div>
    )
}

export default ProjectCard
