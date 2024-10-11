// src/api/apiClient.js
import axios from 'axios'

const baseURL = import.meta.env.DEV
  ? '/api'
  : import.meta.env.VITE_API_BASE_URL

const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add a request interceptor (optional)
apiClient.interceptors.request.use(
  (config) => {
    // Modify config before sending request, e.g., add auth token
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Add a response interceptor (optional)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally
    if (error.response.status === 401) {
      // e.g., redirect to login
    }
    return Promise.reject(error)
  }
)

export default apiClient
