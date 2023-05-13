import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth/authSlice'
import notificationSlice from './notification/notificationSlice'

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    notifi: notificationSlice.reducer,
  },
})

export default store
