import { Timeline } from 'antd'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'
import { memo } from 'react'

function OrdersTimeline({ orderOptions }) {
  return (
    <Timeline
      pending="Recording..."
      // TODO: mock UI
      items={
        orderOptions
          ? orderOptions.map((order) => ({
              children: (
                <Link
                  key={order._id}
                  to={`../${order._id}`}
                  // relative="path"
                >
                  <h5 className="font-semibold text-sm mb-0">
                    {`$${order.totalCost} - ${order.name}`}
                  </h5>
                  <span className="text-[12px] text-[#8c8c8c]">
                    {dayjs(order.startDate).format('MMM D, YYYY h:mm A')}
                  </span>
                </Link>
              ),
            }))
          : null
      }
    />
  )
}

export default memo(OrdersTimeline)
