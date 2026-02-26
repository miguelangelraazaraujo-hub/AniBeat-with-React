import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'leaflet/dist/leaflet.css';
import './i18n'
import Home from './pages/home/Home'
import News from './pages/news/News'
import NewsDetail from './pages/news-detail/NewsDetail'
import Contact from './pages/contact/Contact'
import Privacy from './pages/privacy/Privacy';
import Cookies from './pages/cookies/Cookies';
import SaleConditions from './pages/sale-conditions/SaleConditions';
import Rss from './pages/rss/Rss';
import Forum from "./pages/forum/Forum";

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
          <Route path='/cookies' element={<Cookies />} />
          <Route path='/sales-conditions' element={<SaleConditions />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/rss" element={<Rss />} />
          <Route path="/forum" element={<Forum />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
