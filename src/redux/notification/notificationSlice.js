import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  type: null,
  description: '',
}

const notificationSlice = createSlice({
  name: 'notif',
  initialState: initialState,
  reducers: {
    success: (state, action) => {
      state.type = 'success'
      state.description = action.payload
    },
    error: (state, action) => {
      state.type = 'error'
      state.description = action.payload
    },
  },
})

export const { success, error } = notificationSlice.actions

export default notificationSlice
