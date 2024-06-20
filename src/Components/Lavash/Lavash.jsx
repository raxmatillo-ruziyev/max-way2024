import React from 'react'
import './Lavash.scss'
import Card from '../Card/Card'
import lavash1 from  '../../assets/lavash1.jpeg'
import lavash2 from  '../../assets/lavash2.jpg'
import lavash3 from  '../../assets/lavash3.jpg'
import lavash4 from  '../../assets/lavash4.jpg'
import lavash5 from  '../../assets/lavash5.png'
import lavash6 from  '../../assets/lavash6.png'
const Lavash = () => {
  return (
    <>
      <div className="container">
        <div className="lavashBox">
        <Card name="Spicy seasoned seafood noodles" price="2.29" lavash2={lavash1}/>
        <Card name="x owls available " price="3.29" lavash2={lavash1} />
        <Card name="Salted Pasta with mushroom sauce" price="5.29"lavash2={lavash1}/>
        <Card name="Beef dumpling in hot soup" price="3.29" lavash2={lavash1}/>
        <Card name="Hot spicy fried rice with omelet" price="9.29"  lavash2={lavash4}/>
        <Card name="Spicy instant noodle with" price="2.29"  lavash2={lavash3}/>
        <Card name="constant noodle special omelette" price="2.9"  lavash2={lavash2}/>
        <Card name="noodle with spinach" price="0.29"  lavash2={lavash5}/>
      <Card name="Salted Pasta with mushroom sauce" price="5.29" lavash2={lavash6}/>
        </div>
      </div>
    </>
  )
}

export default Lavash
