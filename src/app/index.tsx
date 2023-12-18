import { createRoot } from 'react-dom/client'
import router from './routes/router'
import { RouterProvider } from 'react-router-dom'
import 'app/styles/index.scss'

const app = <RouterProvider router={router} />

const root = createRoot(document.getElementById('root')!)
root.render(app)
