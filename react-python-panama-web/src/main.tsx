import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HomePage } from "../src/pages/HomePage.tsx";

import "./css/custom.css"
import "./css/theme-blog.css"
import "./css/theme-shop.css"
import "./css/theme-elements.css"
import "./css/theme.css"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <HomePage />
  </BrowserRouter>
)
