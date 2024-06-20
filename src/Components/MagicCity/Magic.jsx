import React from 'react'
import './Magic.scss'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import Tashkent from '../Tashkent/Tashkent'


const Magic = () => {
  return (
    <>
      <Navbar />
      <Tashkent/>
      <Footer />
      <Link className='magiclink' to={'/magic'}>Go to Magic</Link>
    </>
  )
}

export default Magic
