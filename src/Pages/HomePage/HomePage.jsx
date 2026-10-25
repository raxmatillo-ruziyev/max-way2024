import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import SliderTop from '../../Components/SliderTop/SliderTop'
import Products from '../../Components/Products/Products'
import Footer from '../../Components/Footer/Footer'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <SliderTop />
      {/* Products = menu tabs + product cards */}
      <Products />
      <Footer />
    </>
  )
}

export default HomePage