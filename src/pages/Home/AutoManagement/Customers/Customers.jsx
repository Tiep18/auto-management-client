import { Button } from 'antd'
import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import CreateNewCustomer from './CreateNewCustomer'
import ListCustomer from './ListCustomer'

const Customers = () => {
  return (
    <>
      <Routes>
        <Route path="/create-new-customer" element={<CreateNewCustomer />} />
        <Route path="/customers/:id" element={<div>123</div>} />
        <Route path="/" element={<ListCustomer />} />
      </Routes>
    </>
  )
}

export default Customers
