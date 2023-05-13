import { Button } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom'

const ListCustomer = () => {
  return (
    <>
      <NavLink to="create-new-customer">
        <Button type="primary" className="font-semibold shadow-xl" size="large">
          Create New Customer
        </Button>
      </NavLink>
    </>
  )
}

export default ListCustomer
