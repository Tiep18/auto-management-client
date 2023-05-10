import axiosInstance from '.'

const authService = {
  logIn: async ({ username, password }) =>
    await axiosInstance.post('/api/auth/login', { username, password }),
  getProfile: async () => await axiosInstance.get('/api/auth/profile'),
}

export default authService
