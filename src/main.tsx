import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from "./pages/App.tsx";

import "../public/css/custom.css"
import "../public/css/theme-blog.css"
import "../public/css/theme-shop.css"
import "../public/css/theme-elements.css"
import "../public/css/theme.css"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
