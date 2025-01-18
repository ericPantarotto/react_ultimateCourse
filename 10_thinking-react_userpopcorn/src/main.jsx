import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import StarRating from './components/StarRating'
// import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <StarRating maxRating={7}/>
    <StarRating maxRating={10}/>
    <StarRating />
  </StrictMode>,
)
