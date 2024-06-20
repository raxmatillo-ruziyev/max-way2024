import React from 'react'
import './HomePage.scss'
import Navbar from '../../Components/Navbar/Navbar'
import SliderTop from '../../Components/SliderTop/SliderTop'
import Menu from '../../Components/Menu/Menu'

import Footer from '../../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'


const HomePage = () => {
  return (
    <>
      <Navbar/>
      <SliderTop/>
      <Menu/>
       <Outlet/>
      <Footer/>
   
    </>
  )
}

export default HomePage
