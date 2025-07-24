import React from 'react'
import './Home.css'
import image from './assets/myimg.jpg'
import resume from './assets/Ridhi_Sharma_Resume.pdf'
import git from './assets/github.png'
import mobile from './assets/mobile.png'
import linkedin from './assets/linkedin.png'
import email from './assets/email.png'
const Home = () => {
  return (
    <>
    <div className="home">
        {/* <img src={image} className="image" alt="myimg"/> */}
      <div className="home-content">
        <div className="home-text">
          <h1 className='h1'>Hello, I'm <span className="highlight">Ridhi Sharma</span> 👋</h1>
          <h2 className='h2'>Frontend React Developer</h2>

          <p className='p' >
            I specialize in building modern, responsive web applications using React.js.
            I'm passionate about clean UI, accessible design, and turning ideas into user-friendly interfaces.
          </p>

          <p className='p'>
            Currently learning the <strong>MERN stack</strong> to become a full stack developer.
          </p>

          <p className='p'>
            I'm open to internships or junior developer opportunities where I can grow, contribute, and learn more.
          </p>
 <a href={resume} download>
              <button className="btn primary download">Download Resume</button>
            </a>
          {/* <div className="home-buttons">
            <a href="https://github.com/ridhisharma0077" target="_blank">
              <button className="btn outline">GitHub</button>
            </a>
            <a href="https://linkedin.com/in/ridhisharma0077" target="_blank">
              <button className="btn outline">LinkedIn</button>
            </a>
          </div> */}
        </div>

        {/* Right side: Image */}
        <div className="home-image">
          <img src={image} className="image" alt="Ridhi Sharma" />
        </div>
            <div className="home-buttons">
            {/* <a href="https://github.com/ridhisharma0077" target="_blank">
              <img src={git} className="btn outline"/>
            </a>
            <a href="https://linkedin.com/in/ridhisharma0077" target="_blank">
              <img src={linkedin} className="btn outline"/>
            </a> */}
          </div>
      </div>

      {/* Mini Contact CTA */}
      <div className="home-contact">
        <h3>📬 Let's Connect!</h3>
        <p>Have an opportunity or want to collaborate? I'd love to hear from you.</p>
        <div className="home-buttons">
          <a href="mailto:ridhisharma00777@gmail.com">
            <img src={email} className="btn outline"/>
          </a>
           <a href="https://github.com/ridhisharma0077" target="_blank">
              <img src={git} className="btn outline"/>
            </a>
            <a href="https://linkedin.com/in/ridhisharma0077" target="_blank">
              <img src={linkedin} className="btn outline"/>
            </a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home