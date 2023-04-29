import Home from '../pages/Home/Home'
import LogIn from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import routesPath from './routes'

export const routes = [
  { path: routesPath.home, component: Home, isPrivate: false },
  { path: routesPath.login, component: LogIn, isPrivate: false },
  { path: routesPath.register, component: Register, isPrivate: false },
]
