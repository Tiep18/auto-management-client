import axiosInstance from '.'

export default {
  logIn: async ({ username, password }) =>
    axiosInstance.post('/auth/login', { username, password }),
  register: async ({ username, password, fullName }) =>
    axiosInstance.post('/auth/register', { username, password, fullName }),
  getProfile: async () => axiosInstance.get('/auth/profile'),
}
