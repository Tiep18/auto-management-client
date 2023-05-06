import { createAsyncThunk } from '@reduxjs/toolkit'
import authService from '../../api/authService'

export const logInThunk = createAsyncThunk(
  'auth/login',
  async ({ username, password }, thunkAPI) => {
    try {
      const data = await authService.logIn({ username, password })
      sessionStorage.setItem('_at', data.accessToken)
      sessionStorage.setItem('_rt', data.refeshToken)

      const user = await authService.getProfile()
      return user
    } catch (error) {
      thunkAPI.rejectWithValue(error.response)
    }
  }
)