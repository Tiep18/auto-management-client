import {
  faCar,
  faFileInvoice,
  faGears,
  faScrewdriverWrench,
  faUserGear,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Accounts from '../pages/Home/AdminManagement/Accounts/Accounts'
import AdminServices from '../pages/Home/AdminManagement/Services/Services'
import Cars from '../pages/Home/AutoManagement/Cars/Cars'
import Customer from '../pages/Home/AutoManagement/Customers/Customers'
import Orders from '../pages/Home/AutoManagement/Orders/Orders'
import Services from '../pages/Home/AutoManagement/Services/Services'

export const menuConfig = [
  {
    path: 'auto-management',
    name: 'Auto Management',
    children: [
      {
        path: 'services',
        name: 'Services',
        component: Services,
        icon: <FontAwesomeIcon icon={faScrewdriverWrench} />,
      },
      {
        path: 'customers',
        name: 'Customers',
        component: Customer,
        icon: <FontAwesomeIcon icon={faUsers} />,
      },
      {
        path: 'orders',
        name: 'Orders',
        component: Orders,
        icon: <FontAwesomeIcon icon={faFileInvoice} />,
      },
      {
        path: 'cars',
        name: 'Cars',
        component: Cars,
        icon: <FontAwesomeIcon icon={faCar} />,
      },
    ],
  },
  {
    path: 'admin-management',
    name: 'Admin Management',
    children: [
      {
        path: 'accounts',
        name: 'Accounts',
        component: Accounts,
        icon: <FontAwesomeIcon icon={faUserGear} />,
      },
      {
        path: 'services',
        name: 'Services',
        component: AdminServices,
        icon: <FontAwesomeIcon icon={faGears} />,
      },
    ],
  },
]
