import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth/authSlice'
import customerSlice from './customer/customerSlice'
import notificationSlice from './notification/notificationSlice'
import serviceSlice from './service/serviceSlice'

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    customer: customerSlice.reducer,
    service: serviceSlice.reducer,
    notifi: notificationSlice.reducer,
  },
})

export default store
