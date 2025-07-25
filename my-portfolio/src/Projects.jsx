import React from 'react'
import './Project.css'

const Projects = () => {
  return (
  <>
  <div className="projects">
      <h2 className='h21'>My Projects</h2>
      <div className="project-card">
  <h2 className='spam'>🍰 Sugar & Sip – <i>Bakery Website</i></h2>
  <p><strong className='spam'>Tech Stack:</strong> React.js, HTML5, CSS3</p>
  <p>
    <strong className='spam'>Sugar & Sip</strong> is a responsive bakery website built using <strong>React.js</strong>. It’s designed to capture the charm and warmth of a real-world bakery, showcasing products and brand identity through a clean and engaging interface. The website features multiple sections that simulate an actual bakery's online presence.
  </p>
  <ul>
    <li>🧁 <strong>Home:</strong> Beautiful hero section with bakery vibe and tagline</li>
    <li>🍩 <strong>Menu:</strong> Product list with styled cards and pricing</li>
    <li>🎂 <strong>About:</strong> Story of the bakery and its values</li>
    <li>📞 <strong>Contact:</strong> Contact form and social media links</li>
    <li>📱 <strong>Responsive design:</strong> Works perfectly across devices</li>
  </ul>
  <p> 
        <a href="https://github.com/ridhisharma0077/project-frontend" target="_blank" className='link'>GitHub</a>
  </p>
</div>
      <div className="project-card">
        <h2 className='spam'>To-Do App (Coming Soon)</h2>
        <p>A simple task manager using React and localStorage.</p>
      </div>
    </div>
  </>
  )
}

export default Projects