import React from 'react'
import { useNavigate } from 'react-router-dom'

export const HomeButton = () => {
    let navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }

  return (
    <div>
        <button className="btn btn-warning" onClick={handleClick}>GoTo HomePage
        </button>


    </div>
  )
}
