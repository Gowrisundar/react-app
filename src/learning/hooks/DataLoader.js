import React, {useEffect,useState} from 'react'

const DataLoader = () => {
const url = 'https://jsonplaceholder.typicode.com/users'
const[users,setUsers] = useState([])
useEffect( () => {
    fetch(url).then(response => response.json()).then(data => setUsers(data))
})

  return (
    <div className='bg-info'>
        <ul>{users.map(user=>(
            <li key={user.id}>{user.username} - {user.email}</li>
        ))}</ul>
    </div>
  )
}

export default DataLoader