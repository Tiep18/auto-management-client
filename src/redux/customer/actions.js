import { createAsyncThunk } from '@reduxjs/toolkit'
import customerService from '../../api/customerService'
import { notification } from 'antd'

export const getAllCustomerThunk = createAsyncThunk(
  'customer/getAllCustomer',
  async (payload, thunkAPI) => {
    try {
      const data = await customerService.getAllCustomers(payload)
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
