import React, { useContext } from 'react';
import { FaLinkedin, FaGithub, FaMoon, FaRegMoon, FaSun } from 'react-icons/fa';

import projects from '../../public/projects.json';
import education from '../../public/education.json';
import workExperience from '../../public/workExperience.json';

import ProjectCard from '../components/ProjectCard';
import SafeLink from '../components/SafeLink';
import Education from '../components/Education';
import Work from '../components/Work';
import ProfilePicture from '../components/ProfilePicture';
import { Header } from '../styles/Header';
import { Section } from '../styles/Section';
import { Projects } from '../styles/Projects';
import { ThemeSwitchContext } from '../contexts/ThemeSwitchContext';
import { Main } from '../styles/Main';
import { ThemeContext } from 'styled-components';

function Home() {
  const { toggleTheme } = useContext(ThemeSwitchContext);
  const theme = useContext(ThemeContext);

  return (
    <Main>
      <Header>
        <ProfilePicture />

        <div className="title">
          <h1>Guilherme Balog Gardino</h1>
          <h2>Desenvolvedor de Software</h2>

          <div className="social-links">
            <div className="social-media">
              <SafeLink href="https://www.linkedin.com/in/guilhermebalog/">
                <FaLinkedin size="25" color={theme.colors.text} />
                <span>LinkedIn</span>
              </SafeLink>
            </div>

            <div className="social-media">
              <SafeLink href="https://github.com/GuilhermeBalog">
                <FaGithub size="25" color={theme.colors.text} />
                <span>Github</span>
              </SafeLink>
            </div>
          </div>
        </div>

        <div className="check-group">
          <input
            type="checkbox"
            id="theme"
            checked={theme.title == 'dark'}
            onChange={toggleTheme}
          />

          <label htmlFor="theme">
            {theme.title == 'light' ? (
              <FaRegMoon size="35" color={theme.colors.text} />
            ) : (
              <FaSun size="35" color={theme.colors.text} />
            )}
          </label>
        </div>
      </Header>

      <Section>
        <h3>Sobre mim</h3>
        <p>
          Olá! Meu nome é <strong>Guilherme Balog Gardino</strong> e sou
          desenvolvedor de software em São Paulo, Brasil. Trabalho
          principalmente como programador <i>fullstack</i> usando Node.js e
          React.js, mas gosto muito de experimentar diferentes ferramentas e
          linguagens e com elas construir projetos inusitados.
        </p>
      </Section>

      <Section>
        <h3>Projetos web</h3>
        <p>
          Esses projetos são páginas estáticas, usando APIs de terceiros, alguns
          frameworks e um pouco de JavaScript puro também
        </p>

        <Projects>
          {projects.web.map(project => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </Projects>
      </Section>

      <Section>
        <h3>Projetos Node</h3>
        <p>
          Estes projetos são um pouco mais complexos, usando Node.js, React e
          mais. Alguns deles não estão no ar, mas o código está disponível de
          forma <i>open source</i>.
        </p>

        <Projects>
          {projects.node.map(project => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </Projects>
      </Section>

      <Section>
        <h3>Experiência profissional</h3>
        {workExperience.map((work, i) => (
          <Work work={work} key={i} />
        ))}
      </Section>

      <Section>
        <h3>Formação</h3>
        {education.map((formation, i) => (
          <Education formation={formation} key={i} />
        ))}
      </Section>
    </Main>
  );
}

export default Home;
