import { createAsyncThunk } from '@reduxjs/toolkit'

export const registerThunk = createAsyncThunk(
  'user/register',
  async ({ fullName, username, password }, thunkAPI) => {
    try {
    } catch (error) {}
  }
)
