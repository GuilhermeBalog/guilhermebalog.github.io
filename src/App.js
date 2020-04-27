import React from 'react'

import './App.css'

import profilePicture from './profile-picture.png'

import ProjectCard from './components/ProjectCard'
import projects from './projects'

function App() {
    return (
        <div id="App">
            <header>
                <img src={profilePicture} alt="Guilherme Balog Gardino" />
                <div className="title">
                    <h1>Guilherme Balog Gardino</h1>
                    <h2>Software Developer</h2>
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
                    {projects.web.map(project => (<ProjectCard key={project.name} project={project} /> ))}
                </div>
            </section>

            <section>
                <h3>Node Projects</h3>
                <p>
                    These projects are more complex, using Node.js, ReactJS, and more.
                    <strong>Note: </strong>some of these projects are't online, but you can check the source code.
                </p>

                <div className="projects">
                    { projects.node.map(project => (<ProjectCard key={project.name} project={project} /> )) }
                </div>
            </section>
        </div>
    )
}

export default App
