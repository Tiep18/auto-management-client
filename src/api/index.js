import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
})

axiosInstance.interceptors.request.use(
  function (config) {
    const accessToken = sessionStorage.getItem('_at')
    config.headers.Authorization = 'Bearer ' + accessToken
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

const getAccessToken = async () => {
  const refeshToken = sessionStorage.getItem('_rt')
  sessionStorage.setItem('_at', refeshToken)
  try {
    const newAccessToken = await axiosInstance.post('/api/auth/refesh')
    return newAccessToken
  } catch (error) {
    console.log('Failed to get access token', error)
  }
}

axiosInstance.interceptors.response.use(
  function (response) {
    return response.data
  },
  async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const originalRequest = error.config
    if (
      error.response.status === 401 &&
      error.response.data === 'Invalid token'
    ) {
      const token = await getAccessToken()
      if (token) {
        sessionStorage.setItem('_at', token.newAccessToken)
        originalRequest.headers[
          'Authorization'
        ] = `Bearer ${token.newAccessToken}`
        return axiosInstance(originalRequest)
      }
    }
    return Promise.reject(error)
  }
)
export default axiosInstance
