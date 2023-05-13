import axiosInstance from '.'

const authService = {
  logIn: async ({ username, password }) =>
    axiosInstance.post('/api/auth/login', { username, password }),
  getProfile: async () => axiosInstance.get('/api/auth/profile'),
}
export default authService
