import React from 'react'
import './About.css'
import Navbar from './Navbar'

const About = () => {
  return (
   <>
  <div className="about">
      <h2 className='h21'>About Me</h2>
      <p>
        Hello! I'm <strong className='spam'>Ridhi Sharma</strong>, a passionate and creative Frontend Developer
        with a focus on building modern, responsive, and user-friendly web interfaces using React.js.
        I enjoy crafting clean, elegant designs and transforming ideas into interactive digital
        experiences.
      </p>

      <p>
        My journey started with HTML, CSS, and JavaScript, and I quickly fell in love with React.
        Since then, I’ve been exploring the ecosystem, building personal projects like a Bakery
        website, and continuously learning to improve my skills.
      </p>

      <p>
        I’m now learning the MERN stack to enhance my backend knowledge and become a more complete
        developer. I'm also interested in UI/UX design and love experimenting with animations,
        layouts, and user flow to make websites not just functional, but delightful.
      </p>

      <h3 className='spam'>💻 Tech Stack</h3>
      <ul>
        <li><strong >Frontend:</strong> React.js, JavaScript (ES6), HTML5, CSS3, Bootstrap</li>
        <li><strong >Backend (Learning):</strong> Node.js, Express.js, MongoDB</li>
        <li><strong >Tools:</strong> Git, GitHub, VS Code, Postman, Netlify</li>
      </ul>

      <h3 className='spam'>🎯 Goals</h3>
      <ul>
        <li>Build real-world full stack web apps using MERN</li>
        <li>Contribute to open-source frontend projects</li>
        <li>Master responsive design and accessibility</li>
        <li>Work with a team that values clean code and creativity</li>
      </ul>

      <h3 className='spam'>💡 Fun Facts</h3>
      <ul>
        <li>I'm obsessed with pixel-perfect UIs 😍</li>
        <li>I love cooking and trying out new recipes 👩‍🍳</li>
        <li>Music keeps me focused while coding 🎧</li>
      </ul>
    </div>
   </>
  )
}

export default About