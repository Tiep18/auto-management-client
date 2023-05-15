import { Spin } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { getProfileThunk } from '../redux/auth/actions'

const PrivateRoute = ({ children }) => {
  const { currentUser, isLoading } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  useEffect(() => {
    if (currentUser) return
    dispatch(getProfileThunk())
  }, [currentUser, dispatch])

  if (isLoading)
    return (
      <div className="w-[100vw] h-[100vh]">
        <Spin tip="Loading" size="large" wrapperClassName="h-full">
          <div className="content"></div>
        </Spin>
      </div>
    )

  if (!isLoading && !currentUser) return <Navigate to={'/login'} />
  else return children
}

export default PrivateRoute
