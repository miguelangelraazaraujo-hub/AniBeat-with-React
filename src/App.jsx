import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'leaflet/dist/leaflet.css';
import Home from './pages/home/Home'
import News from './pages/news/News'
import Contact from './pages/contact/Contact'
import Privacy from './pages/privacy/Privacy';
import SaleConditions from './pages/sale-conditions/SaleConditions';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='home' element={<Home />} />
          <Route path='/news' element={<News />} />
          <Route path='*' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/sales-conditions' element={<SaleConditions />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
