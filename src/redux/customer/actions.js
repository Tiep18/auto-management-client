import { createAsyncThunk } from '@reduxjs/toolkit'
import customerService from '../../api/customerService'
import { notification } from 'antd'
import { updateQuery } from './customerSlice'

export const getAllCustomerThunk = createAsyncThunk(
  'customer/getAllCustomer',
  async (payload, thunkAPI) => {
    try {
      const { page, search, limit } = thunkAPI.getState().customer
      thunkAPI.dispatch(updateQuery({ search }))
      const data = await customerService.getAllCustomers(
        payload || { page, search, limit }
      )
      return data
    } catch (err) {
      thunkAPI.rejectWithValue(err.message)
    }
  }
)

export const getCustomerDetails = createAsyncThunk(
  'customer/getCustomerDetails',
  async (id, thunkAPI) => {
    try {
      const data = await customerService.getCustomerById(id)
      return data
    } catch (err) {
      thunkAPI.rejectWithValue(err.message)
    }
  }
)

export const updateCustomerThunk = createAsyncThunk(
  'customer/updateCustomer',
  async (payload, thunkAPI) => {
    try {
      await customerService.updateCustomer(payload.id, payload.data)
      return thunkAPI.dispatch(getCustomerDetails(payload.id))
    } catch (err) {
      thunkAPI.rejectWithValue(err.message)
    }
  }
)

export const deleteCustomerThunk = createAsyncThunk(
  'customer/deleteCustomer',
  async (id, thunkAPI) => {
    try {
      await customerService.deleteCustomer(id)
      const { page, search, limit } = thunkAPI.getState().customer
      return thunkAPI.dispatch(getAllCustomerThunk({ page, search, limit }))
    } catch (err) {
      thunkAPI.rejectWithValue(err.message)
    }
  }
)

// export const updateQueryThunk = createAsyncThunk(
//   'customer/updateQuery',
//   async ({ page, limit, search }, thunkAPI) => {
//     const currentState = thunkAPI.getState().customer
//     thunkAPI.dispatch(
//       updateQuery({
//         page: page || currentState.page,
//         limit: limit || currentState.limit,
//         search: search || currentState.search,
//       })
//     )

//   }
// )
