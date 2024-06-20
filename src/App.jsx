import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage/HomePage'
import Desert from './Components/Desert/Desert'
import AboutPage from './Pages/AboutPage/AboutPage'
import Lavash from './Components/Lavash/Lavash'
import Set from './Components/Set/Set'
import Xaggi from './Components/Xaggi/Xaggi'
import Burger from './Components/Burger/Burger'
import Pizza from './Components/Pizza/Pizza'
import Magic from './Components/MagicCity/Magic'
import Contact from './Pages/ConatactPage/Contact'
import Onas from './Pages/Onas/Onas'




function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}>
          <Route path='/' element={<Lavash />} />
          <Route path='/desert' element={<Desert />} />
          <Route path='/set' element={<Set />} />
          <Route path='/xaggi' element={<Xaggi />} />
          <Route path='/burger' element={<Burger />} />
          <Route path='/pizza' element={<Pizza />} />
        </Route>
        <Route path='/about' element={<AboutPage />} />
        <Route path='/magic' element={<Magic />} />
        <Route path='/onas' element={<Onas/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>



    </>
  )
}

export default App
