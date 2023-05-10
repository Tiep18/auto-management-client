import { createSlice } from '@reduxjs/toolkit'
import { logInThunk } from './actions'

const initialState = {
  isLoading: false,
  currentUser: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(logInThunk.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(logInThunk.fulfilled, (state, action) => {
      state.isLoading = false
      state.currentUser = action.payload
    })
    builder.addCase(logInThunk.rejected, (state) => {
      state.isLoading = false
      state.currentUser = null
    })
  },
})

export default authSlice
