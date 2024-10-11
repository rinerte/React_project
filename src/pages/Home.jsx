// src/pages/Home.jsx
import React, { useEffect, useState } from 'react'
import { getUsers } from '../services/userService'

const Home = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers()
        console.log('Users data:', data);
        setUsers(data)
      } catch (err) {
        setError(err.message || 'Error fetching users')
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id} className="mb-2">
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
