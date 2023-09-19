import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from "./pages/App.tsx";

import "./assets/css/custom.css"
import "./assets/css/theme-blog.css"
import "./assets/css/theme-shop.css"
import "./assets/css/theme-elements.css"
import "./assets/css/theme.css"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
