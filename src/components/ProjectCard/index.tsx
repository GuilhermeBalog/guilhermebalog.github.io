import React, { useContext } from 'react';
import { FaGithub, FaGlobeAmericas } from 'react-icons/fa';
import { ThemeContext } from 'styled-components';

import SafeLink from '../SafeLink';
import { Container } from './style';

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
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const { colors } = useContext(ThemeContext);

  return (
    <Container>
      <a href={project.homepage}>
        <img
          src={project.image}
          alt={project.name}
          className="projectImage"
          loading="lazy"
        />
        <h4>{project.name}</h4>
      </a>
      <p className="projectDescription">{project.description}</p>
      <p className="projectLanguage">{project.languages}</p>

      <div className="projectFooter">
        {project.homepage && project.homepage !== project.repo_url && (
          <a href={project.homepage}>
            <p className="projectLink">
              <FaGlobeAmericas size={18} color={colors.text} className="icon" />
              Acesse
            </p>
          </a>
        )}

        <SafeLink href={project.repo_url}>
          <p className="projectLink">
            <FaGithub size={18} color={colors.text} className="icon" />
            Código fonte
          </p>
        </SafeLink>
      </div>
    </Container>
  );
};

export default ProjectCard;
