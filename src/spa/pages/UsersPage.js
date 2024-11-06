import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { HomeButton } from '../components/HomeButton'

const UsersPage = () => {
    const navigate = useNavigate()
    const location = useLocation()
    console.log(`Location: ${location.pathname}`)
    

    const handleClick = (userId) => {
        navigate(`/users/${userId}`) //localhost:3000/users/123
    }

  return (
    <div className="bg-warning">
        <h3>Users Page</h3>
        <Outlet/>
        <button className="user-link" onClick={() => handleClick("123")}>
            View user Profile #123
        </button> 
        <HomeButton/>
    </div>
  )
}

export default UsersPage