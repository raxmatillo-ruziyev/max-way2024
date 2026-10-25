import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Tashkent from '../Tashkent/Tashkent'
import chilanzarPhoto from '../../assets/chilonzor.webp'

const Chilanzar = () => {
  return (
    <>
      <Navbar />
      <Tashkent
        name="MaxBite Chilanzar"
        address="Chilanzar St, 3, Tashkent, Uzbekistan"
        hours="10:00 – 03:00"
        phone="+998938901105"
        phoneText="+998 93 890 11 05"
        landmark="Chilanzar district"
        image={chilanzarPhoto}
        // mapLl="69.xxxx,41.xxxx"   <- exact map position (longitude,latitude)
      />
      <Footer />
    </>
  )
}

export default Chilanzar