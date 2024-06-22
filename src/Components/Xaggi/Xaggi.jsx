import React from 'react'
import Card from '../Card/Card'
import xaggi15 from  '../../assets/xaggi15.jpg'
import xaggi26 from  '../../assets/xaggi26.jpg'
import xaggi3 from  '../../assets/xaggi3.jpg'
import xaggi4 from  '../../assets/xaggi4.jpg'

const Xaggi = () => {
  return (
    <>
        <div className="container">
        <div className="lavashBox">
        <Card name="Beef dumpling in hot soup" price="2.29" lavash2={xaggi15}/>
        <Card name=" Hot spicy fried rice with omelet " price="3.29" lavash2={xaggi26} />
        <Card name="Salted Pasta with mushroom sauce" price="5.29"lavash2={xaggi3}/>
        <Card name=" Spicy seasoned seafood noodles" price="3.29" lavash2={xaggi4}/>
        <Card name="x owls available" price="9.29"  lavash2={xaggi15}/>
        <Card name="Spicy instant noodle with" price="2.29"  lavash2={xaggi26}/>
        </div>
      </div>
    </>
  )
}

export default Xaggi
