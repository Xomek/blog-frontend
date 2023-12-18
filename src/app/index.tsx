import { createRoot } from 'react-dom/client'
import 'app/styles/index.scss'
import { Login, Registration } from 'pages'

const app = <Registration />
// const app = <Login />

const root = createRoot(document.getElementById('root')!)
root.render(app)
