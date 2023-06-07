import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth/authSlice'
import customerSlice from './customer/customerSlice'
import carSlice from './car/carSlice'
import orderSlice from './order/orderSlice'
import notificationSlice from './notification/notificationSlice'
import serviceSlice from './service/serviceSlice'

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    customer: customerSlice.reducer,
    service: serviceSlice.reducer,
    car: carSlice.reducer,
    order: orderSlice.reducer,
    notifi: notificationSlice.reducer,
  },
})

export default store
