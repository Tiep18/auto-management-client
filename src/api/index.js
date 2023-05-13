import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
})

axiosInstance.interceptors.request.use(function (request) {
  // TODO: mock access token
  const token =
    'Bearer ' +
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDU3NWMwODk4ZmVkYjY1MDEzZDY0ZjAiLCJ1c2VybmFtZSI6ImFkbWluMSIsImlhdCI6MTY4Mzk4NTI0OCwiZXhwIjoxNjgzOTg4ODQ4fQ.GM0WoJZbWLKfLIcE34zGfzqdIktBtG3Li7hEjfWuRDA'
  request.headers.Authorization = token
  return request
})

axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error?.response?.data || error)
  }
)
export default axiosInstance
