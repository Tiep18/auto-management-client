import { Button, Form, Input, notification } from 'antd'
import customerService from '../../../../api/customerService'
import { useForm } from 'antd/es/form/Form'
const layout = {
  labelCol: {
    span: 3,
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

const CreateNewCustomer = () => {
  const [form] = useForm()
  const onFinish = async (values) => {
    try {
      const res = await customerService.createCustomer(values)

      notification.success({
        message: res.message || 'Customer has been created',
      })
      form.resetFields()
    } catch (err) {
      if (err.message) {
        notification.error({
          message: err.message,
        })
      } else
        notification.error({
          message: 'Failed to create customer, please try again',
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
      size="large"
    >
      <Form.Item
        name={'name'}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true, type: 'email' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="address"
        label="Address"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Phone"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 0,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
export default CreateNewCustomer
