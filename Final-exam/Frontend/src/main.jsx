import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

import BasketProvider from './components/context/BasketProvider.jsx'
import FavProvider from './components/context/FavProvider.jsx'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <BasketProvider>
   <FavProvider>
     <App />
 </FavProvider>
 </BasketProvider>
 </BrowserRouter>

)
