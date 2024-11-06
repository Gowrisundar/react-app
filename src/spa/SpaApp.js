import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import './SpaApp.css'
import AboutPage from './pages/AboutPage'
import UserProfilePage from './pages/UserProfilePage'
import UsersPage from './pages/UsersPage'
import LazyPage from './pages/LazyPage'

const SpaApp = () => {
  return (
    <div className='App'>
    <h1>Usermanagement System In react</h1>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="about" element={<AboutPage/>}/>
        <Route path="users" element={<UsersPage/>}>
        <Route path=":id" element={<UserProfilePage/>}/>
        </Route>
        <Route path="lazy" element={<LazyPage/>}/>
    </Routes>
    </div>
  )
}

export default SpaApp