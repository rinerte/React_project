// src/services/userService.js
import apiClient from '../api/apiClient'

export const getUsers = async () => {
  try {
    const response = await apiClient.get('/users')
    return response.data
  } catch (error) {
    throw error
  }
}

export const getUserById = async (id) => {
  try {
    const response = await apiClient.get(`/users/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

// Add more user-related API calls here
