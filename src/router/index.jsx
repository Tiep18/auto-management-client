import { menuConfig } from '../config/config'
import Home from '../pages/Home/Home'
import LogIn from '../pages/LogIn/LogIn'

export const routes = [
  {
    path: '/',
    exact: true,
    element: <Home />,
  },
  {
    path: '/login',
    exact: true,
    element: <LogIn />,
  },
  ...menuConfig.map(({ path, children }) => ({
    path: '/' + path,
    element: <Home />,
    children: children.map((child) => {
      const Component = child.component
      return {
        path: child.path,
        element: <Component />,
      }
    }),
  })),
]
