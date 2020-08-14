import React, { useState } from 'react'
import { FaLinkedin, FaGithub, FaMoon, FaRegMoon } from 'react-icons/fa'

import './App.css'

import profilePicture from './profile-picture.png'

import ProjectCard from './components/ProjectCard'
import SafeLink from './components/SafeLink'
import projects from './projects'
import { useEffect } from 'react'

function App() {
    function getStyle(style){
        return getComputedStyle(document.body).getPropertyValue(style)
    }

    const defaulfTheme = {
        bg: getStyle('--bg'),
        bgLighter: getStyle('--bg-lighter'),
        borderColor: getStyle('--border-color'),
        colorText: getStyle('--color-text'),
        icon: FaRegMoon,
    }

    const darkTheme = {
        bg: '#212121',
        bgLighter: '#333333',
        borderColor: '#ffffff40',
        colorText: '#ffffff',
        icon: FaMoon,
    }

    const [theme, setTheme] = useState(defaulfTheme)

    useEffect(() => {
        Object.keys(theme).forEach(key => {
            document.body.style.setProperty(transformKey(key), theme[key])
        })

        function transformKey(key){
            return '--' + key.replace(/([A-Z])/g, "-$1").toLowerCase()
        }
    }, [theme])

    return (
        <div id="App">
            <header>
                <img src={profilePicture} alt="Guilherme Balog Gardino" />
                <div className="title">
                    <h1>Guilherme Balog Gardino</h1>
                    <h2>Software Developer</h2>
                    <div className="social-links">
                        <div className="social-media">
                            <SafeLink href="https://www.linkedin.com/in/guilherme-balog-gardino-233ab2186">
                                <FaLinkedin size="25" color={theme.colorText} />
                            </SafeLink>
                        </div>
                        <div className="social-media">
                            <SafeLink href="https://github.com/GuilhermeBalog">
                                <FaGithub size="25" color={theme.colorText} />
                            </SafeLink>
                        </div>
                    </div>
                </div>
                <div className="check-group">
                    <input 
                        type="checkbox" 
                        onChange={e => e.target.checked? setTheme(darkTheme) : setTheme(defaulfTheme)} 
                        id="theme"
                    />
                    <label htmlFor="theme">
                        <theme.icon size="35" color={theme.colorText} />
                    </label>
                </div>
            </header>

            <section>
                <h3>About me</h3>
                <p>Hello! My name is <strong>Guilherme Balog Gardino</strong> and I am a software developer based in São Paulo, Brazil.</p>
            </section>

            <section>
                <h3>Web Projects</h3>
                <p>Each project here is a static page, using APIs, frameworks and pure JavaScript too.</p>   

                <div className="projects">
                    {projects.web.map(project => (<ProjectCard key={project.name} project={project} iconColor={theme.colorText} /> ))}
                </div>
            </section>

            <section>
                <h3>Node Projects</h3>
                <p>
                    These projects are more complex, using Node.js, ReactJS, and more.
                    <strong> Note: </strong>some of these projects are't online, but you can check the source code.
                </p>

                <div className="projects">
                    { projects.node.map(project => (<ProjectCard key={project.name} project={project} iconColor={theme.colorText} /> )) }
                </div>
            </section>
        </div>
    )
}

export default App
