import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import { Route,Routes } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/projects' element={<Projects/>}/>
    <Route path='/contact' element={<Contact/>}/>
  </Routes>
    </>
  )
}

export default App
