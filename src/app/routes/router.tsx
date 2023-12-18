import { createBrowserRouter } from 'react-router-dom'
import { ROUTES } from './routes.enum'
import { Login, Registration } from 'pages'

const router = createBrowserRouter([
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTES.REGISTRATION,
    element: <Registration />,
  },
  {
    path: ROUTES.BLOG,
    element: <div />,
  },
])

export default router
