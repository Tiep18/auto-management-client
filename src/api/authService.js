import axiosInstance from '.'

export default {
  logIn: async ({ username, password }) =>
    axiosInstance.post('/api/auth/login', { username, password }),
  getProfile: async () => axiosInstance.get('/api/auth/profile'),
}
