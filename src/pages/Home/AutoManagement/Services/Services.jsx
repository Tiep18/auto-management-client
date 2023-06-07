import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getAllServiceThunk,
  getServiceTypesThunk,
} from '../../../../redux/service/actions'
import { Spin, Tabs } from 'antd'
import { camelize } from '../../../../utils'
import * as icons from '../../../.././assets/icons'
import TableService from './TableService'
const Services = () => {
  const dispatch = useDispatch()
  const { isLoading, services, types } = useSelector((state) => state.service)
  const [serviceTypes, serServiceTypes] = useState([])

  useEffect(() => {
    if (types.length === 0) return
    serServiceTypes(() =>
      types.map((item) => ({
        label: icons[camelize(item)] ? (
          <span className="flex gap-2 items-center">
            <img
              src={icons[camelize(item)]}
              alt={item}
              width={16}
              height={16}
            />
            {item}
          </span>
        ) : (
          item
        ),
        key: item,
        slug: camelize(item),
        icon: icons[camelize(item)] || null,
        children: isLoading ? (
          <div className="w-full">
            <Spin tip="Loading" size="large" wrapperClassName="h-full">
              <div className="content"></div>
            </Spin>
          </div>
        ) : (
          <TableService data={services?.filter((i) => i.type === item) || []} />
        ),
      }))
    )
  }, [isLoading, services, types])

  useEffect(() => {
    dispatch(getAllServiceThunk({ page: 1, limit: 9999 }))
    dispatch(getServiceTypesThunk())
  }, [dispatch])

  return (
    <div className="p-6 rounded-xl bg-white shadow-lg">
      <Tabs items={serviceTypes} type="card"></Tabs>
    </div>
  )
}

export default Services
