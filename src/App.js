
import {createBrowserRouter} from 'react-router-dom'

import Home from './pages/home'
import Login from './pages/Login'
import Admin from './pages/Admin'

import Error from './pages/error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/admin',
    element: <Admin/>
  },
  {
    path: '*',
    element: <Error/>
  }
])

export { router }