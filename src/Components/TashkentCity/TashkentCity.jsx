import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Tashkent from '../Tashkent/Tashkent'
import tashkentCityPhoto from '../../assets/tashkent.png'

const TashkentCity = () => {
  return (
    <>
      <Navbar />
      <Tashkent
        name="MaxBite Tashkent City"
        address="Navoi St, 26, Tashkent, Uzbekistan"
        hours="10:00 – 03:00"
        phone="+998938901105"
        phoneText="+998 93 890 11 05"
        landmark="Tashkent City"
        image={tashkentCityPhoto}
        // mapLl="69.xxxx,41.xxxx"   <- exact map position (longitude,latitude)
      />
      <Footer />
    </>
  )
}

export default TashkentCity