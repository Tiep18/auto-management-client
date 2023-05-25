import { Col, Row, Timeline } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import NotFound from '../../../../components/NotFound/NotFound'
import { getCarDetails } from '../../../../redux/car/actions'
import CarForm from './CarForm'

const CarDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { state } = useLocation()
  const dispatch = useDispatch()
  const { isLoading, carDetail } = useSelector((state) => state.car)
  const customerName = carDetail?.customer.customerName
  const newCarDetail = { ...carDetail, customer: customerName }
  useEffect(() => {
    if (!id) return
    dispatch(getCarDetails(id))
  }, [dispatch, id])

  useEffect(() => {
    if (!carDetail) return
    navigate('.', {
      replace: true,
      state: {
        breadcrumb: carDetail.plateNumber,
      },
    })
  }, [carDetail, navigate, state?.breadcrumb])
  if (!id || (!carDetail && !isLoading)) {
    return <NotFound />
  }
  return (
    <Row gutter={32} className="pb-6">
      <Col span={15}>
        <CarForm carDetail={newCarDetail} type="update" />
      </Col>
      <Col span={9}>
        <div className="p-6 rounded-xl bg-white shadow-lg h-full ">
          <h2 className="mb-5">Orders</h2>

          <Timeline
            pending="Recording..."
            // TODO: mock UI
            items={[
              {
                children: (
                  <Link to={'/'}>
                    <h5 className="font-semibold text-sm mb-0">
                      $2,400 - Redesign store
                    </h5>
                    <span className="text-[12px] text-[#8c8c8c]">
                      09 JUN 7:20 PM
                    </span>
                  </Link>
                ),
              },
              {
                children: (
                  <Link to={'/'}>
                    <h5 className="font-semibold text-sm mb-0">
                      $2,400 - Redesign store
                    </h5>
                    <span className="text-[12px] text-[#8c8c8c]">
                      09 JUN 7:20 PM
                    </span>
                  </Link>
                ),
              },
            ]}
          />
        </div>
      </Col>
    </Row>
  )
}

export default CarDetail
