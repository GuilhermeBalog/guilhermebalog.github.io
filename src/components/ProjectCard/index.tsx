import React from 'react';
import { FaGithub, FaGlobeAmericas } from 'react-icons/fa';

import SafeLink from '../SafeLink';

import styles from './style.module.css';

interface Project {
  name: string;
  description: string;
  languages: string;
  homepage: string;
  repo_url: string;
  image: string;
}

interface Props {
  project: Project;
  iconColor: string;
}

const ProjectCard: React.FC<Props> = ({ project, iconColor }) => {
  return (
    <div className={styles.projectCard}>
      <a href={project.homepage}>
        <img
          src={project.image}
          alt={project.name}
          className={styles.projectImage}
        />
        <h4>{project.name}</h4>
      </a>
      <p className={styles.projectDescription}>{project.description}</p>
      <p className={styles.projectLanguage}>{project.languages}</p>

      <div className={styles.projectFooter}>
        {project.homepage && project.homepage !== project.repo_url && (
          <a href={project.homepage}>
            <p className={styles.projectLink}>
              <FaGlobeAmericas
                size={18}
                color={iconColor || '#000'}
                className={styles.icon}
              />
              Acesse
            </p>
          </a>
        )}

        <SafeLink href={project.repo_url}>
          <p className={styles.projectLink}>
            <FaGithub
              size={18}
              color={iconColor || '#000'}
              className={styles.icon}
            />
            Código fonte
          </p>
        </SafeLink>
      </div>
    </div>
  );
};

export default ProjectCard;
