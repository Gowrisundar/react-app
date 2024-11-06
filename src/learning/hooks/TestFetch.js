import React from 'react'
import useFetch from './useFetch'

const TestFetch = (props) => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const{loading,error,data=[]} = useFetch(url)
    if(error) return <h5>Error WhileLoading</h5>
    if(loading) return <h4 className='bg-warning'>dataloading</h4>
  return (
    <div className="bg-dark text-light">
    <h4>data from CustomHook</h4>
    <ul>{data?.map(user=>(
            <li key={user.id}>{user.username} - {user.email}</li>
        ))}</ul>
    </div>
  )
}

export default TestFetch
