import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage/HomePage'
import AboutPage from './Pages/AboutPage/AboutPage'
import Magic from './Components/MagicCity/Magic'
import TashkentCity from './Components/TashkentCity/TashkentCity'
import Chilanzar from './Components/Chilanzar/Chilanzar'
import Contact from './Pages/ConatactPage/Contact'
import Onas from './Pages/Onas/Onas'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/magic' element={<Magic />} />
      <Route path='/tashkent-city' element={<TashkentCity />} />
      <Route path='/chilanzar' element={<Chilanzar />} />
      <Route path='/onas' element={<Onas />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}

export default App