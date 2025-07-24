import React from 'react'
import './Contact.css'
import email from './assets/email.png'
import git from './assets/github.png'
import linkedin from './assets/linkedin.png'


const Contact = () => {
  return (
    <>
    <div className="contact">
      <h2 className='h21'>Contact Me</h2>
      <div className='contactflex'>
        <div>
        <img src={email} className='imgcontact'/>
        <p> Email: <a href="mailto:ridhisharma00777@gmail.com" className='color'>ridhisharma00777@gmail.com</a></p></div>
        <div>
        <img src={git}  className='imgcontact'/>
      <p>GitHub: <a href="https://github.com/ridhisharma0077" target="_blank" className='color'>github.com/ridhisharma0077</a></p></div>
      <div>
      <img src={linkedin}  className='imgcontact'/>
      <p>LinkedIn: <a href="https://linkedin.com/in/ridhisharma0077" target="_blank" className='color'>linkedin.com/in/ridhisharma0077</a></p></div>
      </div>
    </div>
    </>
  )
}

export default Contact