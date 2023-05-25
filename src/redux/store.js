import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth/authSlice'
import customerSlice from './customer/customerSlice'
import carSlice from './car/carSlice'
import notificationSlice from './notification/notificationSlice'

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    customer: customerSlice.reducer,
    car: carSlice.reducer,
    notifi: notificationSlice.reducer,
  },
})

export default store
