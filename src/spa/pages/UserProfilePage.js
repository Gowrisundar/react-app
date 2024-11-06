import React from 'react'
import { useParams } from 'react-router-dom'

const UserProfilePage = () => {
    const {id} = useParams()

    // useEffect(() => {
    //     //const {loading, error, data=[]} = useFetch(url+id)
    // })
  return (
    <div className="bg-primary text-warning">
        <h4>Profile of #{id}</h4>
        <h2>Gowri Sundar</h2>
    </div>
  )
}

export default UserProfilePage