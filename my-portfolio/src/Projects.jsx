import React from 'react'
import './Project.css'

const Projects = () => {
  return (
  <>
  <div className="projects">
      <h2 className='h21'>My Projects</h2>
      <div className="project-card">
        <h3 className='spam'>Bakery Website</h3>
        <p>Responsive React-based UI for a bakery store. Built using HTML, CSS, and JavaScript.</p>
        <a href="https://github.com/ridhisharma0077/project-frontend" target="_blank" className='link'>GitHub</a>
      </div>
      <div className="project-card">
        <h3 className='spam'>To-Do App (Coming Soon)</h3>
        <p>A simple task manager using React and localStorage.</p>
      </div>
    </div>
  </>
  )
}

export default Projects