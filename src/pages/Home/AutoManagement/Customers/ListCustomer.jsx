import { Button, Table, Input } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getAllCustomerThunk } from '../../../../redux/customer/actions'

const ListCustomer = () => {
  const dispatch = useDispatch()
  const { customers, page, limit, totalCount, search, loading } = useSelector(
    (state) => state.customer
  )

  useEffect(() => {
    dispatch(getAllCustomerThunk())
  }, [dispatch])

  const onSearch = (e) => {
    dispatch(
      getAllCustomerThunk({
        page,
        limit,
        search: e.target.value,
      })
    )
  }
  return (
    <div className="p-6 rounded-xl bg-white shadow-lg">
      <header className="mb-5 flex justify-between items-center">
        <NavLink to="create-new-customer">
          <Button
            type="primary"
            className="font-semibold shadow-xl"
            size="large"
          >
            Create New Customer
          </Button>
        </NavLink>
        <div className="h-[40px] flex w-[400px]">
          <Input.Search
            className="h-full"
            placeholder="Search by Name or Phone Number"
            onChange={onSearch}
            value={search}
            style={{ width: 400 }}
            size="large"
            loading={loading}
          />
        </div>
      </header>
      <Table
        className="-mx-6 max-w-none"
        // rowSelection={{
        //   type: selectionType,
        //   ...rowSelection,
        // }}
        columns={[
          {
            title: 'Name',
            dataIndex: 'name',
            //TODO: Handle later
            render: (text) => <a>{text}</a>,
          },
          {
            title: 'Phone Number',
            dataIndex: 'phone',
          },
          {
            title: 'Email',
            dataIndex: 'email',
          },
          {
            title: 'Address',
            dataIndex: 'address',
          },
          {
            title: 'Actions',
            dataIndex: 'actions',
            render: (text, record) => (
              <Button
                danger
                size="small"
                onClick={() =>
                  // TODO: Handle later
                  dispatch({
                    type: 'customer/deleteCustomer',
                    payload: record,
                  })
                }
              >
                Delete
              </Button>
            ),
          },
        ]}
        rowKey={(row) => row._id}
        dataSource={customers}
        pagination={{
          pageSize: limit,
          current: page,
          total: totalCount,
          onChange: () => {
            //TODO: Handle later
          },
        }}
      />
    </div>
  )
}

export default ListCustomer
