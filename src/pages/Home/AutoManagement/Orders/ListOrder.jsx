import { Badge, Button, Input, Popconfirm, Radio, Table } from 'antd'
import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import {
  deleteOrderThunk,
  getAllOrderThunk,
} from '../../../../redux/order/actions'
import useDebounce from '../../../../utils/hooks/useDebounce'

const ListOrder = () => {
  const dispatch = useDispatch()
  const [searchTerm, setSearchTerm] = useState('')
  const [status, setStatus] = useState('ALL')
  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  const { orders, page, limit, totalCount, isLoading } = useSelector(
    (state) => state.order
  )

  useEffect(() => {
    dispatch(
      getAllOrderThunk({
        page: 1,
        search: debouncedSearchTerm,
        status: status === 'ALL' ? null : status,
      })
    )
  }, [debouncedSearchTerm, dispatch, status])

  const onSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleChangePage = (page) => {
    dispatch(
      getAllOrderThunk({
        page,
      })
    )
  }
  const handleStatusChange = (status) => {
    setStatus(status.target.value)
  }
  return (
    <div className="p-6 rounded-xl bg-white shadow-lg">
      <header className="mb-5 flex items-center">
        <NavLink to="create-new-order">
          <Button
            type="primary"
            className="font-semibold shadow-xl"
            size="large"
          >
            Create New Order
          </Button>
        </NavLink>
        <div className="h-[40px] flex w-[400px] ml-auto mr-6">
          <Input.Search
            className="h-full"
            placeholder="Search by Order name, Plate number or Customer"
            onChange={onSearch}
            value={searchTerm}
            style={{ width: 400 }}
            size="large"
            loading={isLoading}
          />
        </div>
        <div className="flex justify-end">
          <Radio.Group
            onChange={handleStatusChange}
            optionType="button"
            size="large"
            options={[
              {
                label: 'ALL',
                value: 'ALL',
              },
              {
                label: 'WORKING',
                value: 'WORKING',
              },
              {
                label: 'DONE',
                value: 'DONE',
              },
            ]}
          />
        </div>
      </header>

      <Table
        className="-mx-6 max-w-none"
        columns={[
          {
            title: 'Order Name',
            dataIndex: 'name',
            fixed: 'left',
            render: (text, record) => (
              <Link
                to={record._id}
                state={{
                  breadcrumb: record.name,
                }}
              >
                {text}
              </Link>
            ),
          },
          {
            title: 'Customer',
            dataIndex: 'customer',
            fixed: 'left',
            render: (text) => <span>{text.customerName}</span>,
          },
          {
            title: 'Car',
            dataIndex: 'car',
            render: (text, record) => (
              <Link
                to={`/auto-management/cars/${record.car.carId}`}
                state={{
                  breadcrumb: text.plateNumber,
                }}
              >
                {text.plateNumber}
              </Link>
            ),
          },
          {
            title: 'Start Date',
            dataIndex: 'startDate',
            render: (text) => <span>{dayjs(text).format('YYYY-MM-DD')}</span>,
            sorter: (a, b) => dayjs(a.startDate) - dayjs(b.startDate),
          },
          {
            title: 'Status',
            dataIndex: 'status',
            render: (text) => (
              <Badge
                status={text === 'DONE' ? 'success' : 'processing'}
                text={text}
              />
            ),
          },
          {
            title: 'Actions',
            dataIndex: 'actions',
            fixed: 'right',
            render: (text, record) => (
              <Popconfirm
                title="Delete"
                description="Are you sure you want to delete this order?"
                onConfirm={() => dispatch(deleteOrderThunk(record._id))}
              >
                <Button danger size="small">
                  Delete
                </Button>
              </Popconfirm>
            ),
          },
        ]}
        rowKey={(row) => row._id}
        dataSource={orders}
        pagination={{
          pageSize: limit,
          current: page,
          total: totalCount,
          onChange: handleChangePage,
        }}
      />
    </div>
  )
}

export default ListOrder
