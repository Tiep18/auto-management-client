import CreateNewOrder from './OrderForm.jsx'
import OrderDetail from './OrderDetail.jsx'
import ListOrder from './ListOrder.jsx'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const Orders = () => {
  return (
    <>
      <Routes>
        <Route path="/create-new-order" element={<CreateNewOrder />} />
        <Route path="/:id" element={<OrderDetail />} />
        <Route path="/" element={<ListOrder />} />
      </Routes>
    </>
  )
}

export default Orders
