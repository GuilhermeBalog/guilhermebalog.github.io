import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaMoon, FaRegMoon } from 'react-icons/fa';

import ProjectCard from '../components/ProjectCard';
import SafeLink from '../components/SafeLink';
import projects from '../../projects.json';
import formations from '../../formations.json';
import FormationCard from '../components/FormationCard';

function App() {
  const defaultTheme = {
    bg: '#f9f9f9',
    bgLighter: '#ffffff',
    borderColor: '#00000040',
    colorText: '#000000'
  };

  const darkTheme = {
    bg: '#212121',
    bgLighter: '#333333',
    borderColor: '#ffffff40',
    colorText: '#ffffff'
  };

  function store(key, item) {
    localStorage.setItem(`@guilhermebalog/${key}`, JSON.stringify(item));
  }

  function getFromStorage(key) {
    return JSON.parse(localStorage.getItem(`@guilhermebalog/${key}`));
  }

  const [theme, setTheme] = useState(defaultTheme);
  const [isDarkThemeChecked, setIsDarkThemeChecked] = useState(false);

  useEffect(() => {
    const storedTheme = getFromStorage('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }

    const storedChecked = getFromStorage('checked');
    if (storedChecked) {
      setIsDarkThemeChecked(storedChecked);
    }
  }, []);

  useEffect(() => {
    store('theme', theme);

    Object.keys(theme).forEach(key => {
      document.body.style.setProperty(transformKey(key), theme[key]);
    });

    function transformKey(key) {
      return '--' + key.replace(/([A-Z])/g, '-$1').toLowerCase();
    }
  }, [theme]);

  useEffect(() => store('checked', isDarkThemeChecked), [isDarkThemeChecked]);

  return (
    <div id="App">
      <header>
        <img src="/profile-picture.png" alt="Guilherme Balog Gardino" />
        <div className="title">
          <h1>Guilherme Balog Gardino</h1>
          <h2>Desenvolvedor de Software</h2>

          <div className="social-links">
            <div className="social-media">
              <SafeLink href="https://www.linkedin.com/in/guilhermebalog/">
                <FaLinkedin size="25" color={theme.colorText} />
                <span>LinkedIn</span>
              </SafeLink>
            </div>

            <div className="social-media">
              <SafeLink href="https://github.com/GuilhermeBalog">
                <FaGithub size="25" color={theme.colorText} />
                <span>Github</span>
              </SafeLink>
            </div>
          </div>
        </div>
        <div className="check-group">
          <input
            type="checkbox"
            onChange={() => {
              isDarkThemeChecked ? setTheme(defaultTheme) : setTheme(darkTheme);
              setIsDarkThemeChecked(!isDarkThemeChecked);
            }}
            checked={isDarkThemeChecked}
            id="theme"
          />
          <label htmlFor="theme">
            {(() => {
              if (isDarkThemeChecked)
                return <FaMoon size="35" color={theme.colorText} />;
              else return <FaRegMoon size="35" color={theme.colorText} />;
            })()}
          </label>
        </div>
      </header>

      <section>
        <h3>Sobre mim</h3>
        <p>
          Olá! Meu nome é <strong>Guilherme Balog Gardino</strong> e sou um
          desenvolvedor de software em São Paulo, Brasil.
        </p>
        {/* <p>Hello! My name is <strong>Guilherme Balog Gardino</strong> and I am a software developer based in São Paulo, Brazil.</p> */}
      </section>

      <section>
        <h3>Formação</h3>
        {/* <div className="projects"> */}
        {formations.map((formation, i) => (
          <FormationCard formation={formation} key={i} />
        ))}
        {/* </div> */}
      </section>

      <section>
        <h3>Projetos web</h3>
        <p>
          Esses projetos são páginas estáticas, usando APIs de terceiros, alguns
          frameworks e um pouco de JavaScript puro também
        </p>
        {/* <p>Each project here is a static page, using APIs, frameworks and pure JavaScript too.</p> */}

        <div className="projects">
          {projects.web.map(project => (
            <ProjectCard
              key={project.name}
              project={project}
              iconColor={theme.colorText}
            />
          ))}
        </div>
      </section>

      <section>
        <h3>Projetos Node</h3>
        <p>
          Estes projetos são um pouco mais complexos, usando Node.js, React e
          mais. Alguns deles não estão no ar, mas o código está disponível de
          forma <i>open source</i>.
        </p>
        {/* <p>
                    These projects are more complex, using Node.js, ReactJS, and more.
                    <strong> Note: </strong>some of these projects are't online, but you can check the source code.
                </p> */}

        <div className="projects">
          {projects.node.map(project => (
            <ProjectCard
              key={project.name}
              project={project}
              iconColor={theme.colorText}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
