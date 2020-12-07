import React, { useState } from 'react'
import { FaLinkedin, FaGithub, FaMoon, FaRegMoon } from 'react-icons/fa'

import ProjectCard from '../components/ProjectCard'
import SafeLink from '../components/SafeLink'
import projects from '../projects'
import { useEffect } from 'react'

function App() {

    const defaulfTheme = {
        bg: '#f9f9f9',
        bgLighter: '#ffffff',
        borderColor: '#00000040',
        colorText: '#000000',
    }

    const darkTheme = {
        bg: '#212121',
        bgLighter: '#333333',
        borderColor: '#ffffff40',
        colorText: '#ffffff',
    }

    function store(key, item) {
        localStorage.setItem(`@guilhermebalog/${key}`, JSON.stringify(item))
    }

    function getFromStorage(key) {
        return JSON.parse(localStorage.getItem(`@guilhermebalog/${key}`))
    }

    const [theme, setTheme] = useState(defaulfTheme)
    const [isDarkThemeChecked, setIsDarkThemeChecked] = useState(false)

    useEffect(() => {
        const storedTheme = getFromStorage('theme')
        if (storedTheme) {
            setTheme(storedTheme)
        }

        const storedChecked = getFromStorage('checked')
        if (storedChecked) {
            setIsDarkThemeChecked(storedChecked)
        }
    }, [])

    useEffect(() => {
        store('theme', theme)

        Object.keys(theme).forEach(key => {
            document.body.style.setProperty(transformKey(key), theme[key])
        })

        function transformKey(key) {
            return '--' + key.replace(/([A-Z])/g, "-$1").toLowerCase()
        }
    }, [theme])

    useEffect(() => store('checked', isDarkThemeChecked), [isDarkThemeChecked])

    return (
        <div id="App">
            <header>
                <img src="/profile-picture.png" alt="Guilherme Balog Gardino" />
                <div className="title">
                    <h1>Guilherme Balog Gardino</h1>
                    <h2>Software Developer</h2>
                    <div className="social-links">
                        <div className="social-media">
                            <SafeLink href="https://www.linkedin.com/in/guilherme-balog-gardino-233ab2186">
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
                            isDarkThemeChecked ? setTheme(defaulfTheme) : setTheme(darkTheme)
                            setIsDarkThemeChecked(!isDarkThemeChecked)
                        }}
                        checked={isDarkThemeChecked}
                        id="theme"
                    />
                    <label htmlFor="theme">
                        {(() => {
                            if (isDarkThemeChecked)
                                return <FaMoon size="35" color={theme.colorText} />
                            else
                                return <FaRegMoon size="35" color={theme.colorText} />
                        })()}
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
                    {projects.web.map(project => (<ProjectCard key={project.name} project={project} iconColor={theme.colorText} />))}
                </div>
            </section>

            <section>
                <h3>Node Projects</h3>
                <p>
                    These projects are more complex, using Node.js, ReactJS, and more.
                    <strong> Note: </strong>some of these projects are't online, but you can check the source code.
                </p>

                <div className="projects">
                    {projects.node.map(project => (<ProjectCard key={project.name} project={project} iconColor={theme.colorText} />))}
                </div>
            </section>
        </div>
    )
}

export default App
