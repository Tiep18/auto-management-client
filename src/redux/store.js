import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth/authSlice'
import customerSlice from './customer/customerSlice'

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    customer: customerSlice.reducer,
  },
})

export default store
