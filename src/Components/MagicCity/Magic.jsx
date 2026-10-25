import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Tashkent from '../Tashkent/Tashkent'
import magicPhoto from '../../assets/macgic.jpeg'

const Magic = () => {
  return (
    <>
      <Navbar />
      <Tashkent
        name="MaxBite Magic City"
        address="Magic City, Babur St, 174, Tashkent, Uzbekistan"
        hours="10:00 – 03:00"
        phone="+998938901105"
        phoneText="+998 93 890 11 05"
        landmark="Magic City"
        image={magicPhoto}
        // mapLl="69.xxxx,41.xxxx"   <- exact map position (longitude,latitude)
      />
      <Footer />
    </>
  )
}

export default Magic