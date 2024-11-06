import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import './SpaApp.css'
import AboutPage from './pages/AboutPage'
const SpaApp = () => {
  return (
    <div className='App'>SpaApp
    <h1>Usermanagement System In react</h1>
    <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="about" element={<AboutPage/>}></Route>
    </Routes>
    </div>
  )
}

export default SpaApp