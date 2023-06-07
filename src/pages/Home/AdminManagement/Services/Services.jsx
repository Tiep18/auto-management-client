import React, { useEffect } from 'react'
import { CaretRightOutlined } from '@ant-design/icons'
import { Collapse, theme } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { camelize } from '../../../../utils/index'
import {
  getAllServiceThunk,
  getServiceTypesThunk,
} from '../../../../redux/service/actions'
const { Panel } = Collapse

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`
const Services = () => {
  const { token } = theme.useToken()
  const dispatch = useDispatch()
  const { isLoading, services, types } = useSelector((state) => state.service)
  useEffect(() => {
    if (services.length === 0)
      dispatch(getAllServiceThunk({ page: 1, limit: 9999 }))
    if (types.length === 0) dispatch(getServiceTypesThunk())
  }, [dispatch, services.length, types.length])
  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: 'none',
    boxShadow: token.boxShadowTertiary,
  }
  return (
    <div className="rounded-xl p-6 bg-white shadow-lg h-full">
      <Collapse
        accordion
        bordered={false}
        defaultActiveKey={types[0]}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        style={{ background: token.colorBgContainer }}
      >
        {types.map((name) => (
          <Panel
            header={name}
            className="font-bold"
            key={camelize(name)}
            style={panelStyle}
          >
            <p>{text}</p>
          </Panel>
        ))}
      </Collapse>
    </div>
  )
}

export default Services
