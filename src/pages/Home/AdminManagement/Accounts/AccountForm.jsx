import { Button, Form, Input, Select, notification } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import userService from '../../../../api/userService'
import { updateUserThunk } from '../../../../redux/user/actions'
const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 16,
  },
}

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
}

const messages = {
  create: {
    success: 'User has been created',
    error: 'Failed to create user, please try again',
  },
  update: {
    success: 'User has been updated',
    error: 'Failed to update user, please try again',
  },
}

const UserForm = ({ type = 'create', userDetail }) => {
  const [form] = useForm()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!userDetail) return
    form.setFieldsValue(userDetail)
  }, [userDetail, form])

  const onFinish = async (values) => {
    try {
      if (type === 'create') {
        const res = await userService.createUser(values)
        notification.success({
          message: res.message || messages[type].success,
        })
        form.resetFields()
      } else if (type === 'update') {
        dispatch(updateUserThunk({ data: values, id: userDetail._id }))
      }
    } catch (err) {
      notification.error({
        message: err?.message || messages[type].error,
      })
    }
  }
  return (
    <Form
      form={form}
      {...layout}
      layout="vertical"
      onFinish={onFinish}
      className="bg-white p-6 shadow-md rounded-xl"
      validateMessages={validateMessages}
      initialValues={{ role: 'STAFF' }}
      size="large"
    >
      <Form.Item
        name={'fullName'}
        label="Full Name"
        rules={[
          {
            required: true,
          },
          {
            min: 6,
            message: 'Username must be at least 6 characters',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="username"
        label="Username"
        rules={[
          { required: true },
          {
            min: 6,
            message: 'Username must be at least 6 characters',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
          },
          {
            min: 6,
            message: 'Password must be at least 6 characters',
          },
        ]}
      >
        <Input type="password" />
      </Form.Item>
      <Form.Item
        name="role"
        label="Role"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          options={[
            { label: 'STAFF', value: 'STAFF' },
            { label: 'ADMIN', value: 'ADMIN' },
          ]}
        />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 0,
        }}
      >
        <Button type="primary" htmlType="submit">
          {type === 'create' ? 'Submit' : 'Update'}
        </Button>
        {type === 'update' && (
          <Button
            className="ml-4"
            type="default"
            onClick={() => {
              form.setFieldsValue(userDetail)
            }}
          >
            Reset
          </Button>
        )}
      </Form.Item>
    </Form>
  )
}
export default UserForm
