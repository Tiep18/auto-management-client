import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input, Typography } from 'antd'
import { useDispatch } from 'react-redux'
import { logInThunk } from '../../redux/auth/actions'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function LogIn() {
  const dipatch = useDispatch()
  const navigate = useNavigate()
  const [curentUser, setCurentUser] = useState(null)

  const handleSubmit = (e) => {
    dipatch(logInThunk(e))
      .then((result) => {
        setCurentUser(result.payload)
        if (result.payload) navigate('/')
      })
      .catch((err) => {
        throw new Error(err)
      })
  }
  return (
    <div
      style={{ width: '350px' }}
      className="container mx-auto flex flex-col items-center justify-center max-w-[100%]"
    >
      <Typography.Title className="mt-4">Sign In</Typography.Title>
      {curentUser === undefined ? (
        <Typography.Text type="danger" className="mb-2">
          Username or password is not correct
        </Typography.Text>
      ) : (
        ''
      )}
      <Form className="w-full" onFinish={handleSubmit}>
        <Form.Item
          name="username"
          rules={[
            { required: true, message: 'Please enter your Username!' },
            { min: 6, message: 'The username must be at least 6 characters' },
          ]}
        >
          <Input
            style={{ fontSize: '14px', padding: 4 }}
            placeholder="Enter your username"
            prefix={<UserOutlined />}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: 'Please enter your Password!' },
            { min: 6, message: 'The username must be at least 6 characters' },
          ]}
        >
          <Input placeholder="Enter your password" prefix={<LockOutlined />} />
        </Form.Item>

        <Button type="primary" htmlType="submit" block size="large">
          Sign In
        </Button>
      </Form>
    </div>
  )
}

export default LogIn
