import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import React from 'react'
import Header from '../../components/Header/Header'
import Nav from '../../components/Nav/Nav'
import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Home = () => {
  const currentUser = useSelector((state) => state.auth.currentUser)
  return (
    <Layout
      style={{ minHeight: '100vh' }}
      className="bgc-fa ant-layout ant-layout-has-sider layout-dashboard  "
    >
      <Nav />
      <Layout className="bgc-fa">
        <Header></Header>
        <Content className="bgc-fa">
          {currentUser ? <Outlet /> : <Navigate to={'/login'} />}
        </Content>
      </Layout>
    </Layout>
  )
}

export default Home
