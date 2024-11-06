import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <div className='navigation bg-secondary'>
        <Link className="link" to="/">Home</Link>|
        <Link className="link" to="about">About Us</Link>|
        <Link className="link" to="users">Users</Link>|
        <Link className="link" to="lazy">Profile of Bofa</Link>
    </div>
  )
}
