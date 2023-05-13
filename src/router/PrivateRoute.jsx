import { Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useSelector((state) => state.auth.user)

  useEffect(() => {}, [])

  if (isLoading)
    return (
      <Spin tip="Loading" size="large">
        <div className="content" />
      </Spin>
    )

  if (!isLoading && !user) return <Navigate to={'/login'} />
  else return children
}

export default PrivateRoute
