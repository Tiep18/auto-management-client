import { Button } from 'antd'
import 'antd/dist/reset.css'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import {routes} from './router'

const App = () => (
  <div className="App">
    <Routes>
      {routes.map((route, index) => {
        const Page = route.component
        return <Route key={index} path={route.path} element={<Page />} />})}
    </Routes>
  </div>
)

export default App
