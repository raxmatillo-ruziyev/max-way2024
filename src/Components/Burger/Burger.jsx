import React from 'react'
import Card from '../Card/Card'
import burger1 from  '../../assets/burger1.jpg'
import burger2 from  '../../assets/burger2.jpg'
import burger3 from  '../../assets/burger3.jpeg'
import burger4 from  '../../assets/burger4.jpg'

const Burger = () => {
  return (
    <>
       <div className="container">
        <div className="lavashBox">
        <Card name="Spicy seasoned seafood noodles" price="2.29" lavash2={burger1}/>
        <Card name="x owls available " price="3.29" lavash2={burger2} />
        <Card name="Salted Pasta with mushroom sauce" price="5.29"lavash2={burger3}/>
        <Card name="Beef dumpling in hot soup" price="3.29" lavash2={burger4}/>
        <Card name="Hot spicy fried rice with omelet" price="9.29"  lavash2={burger1}/>
        <Card name="Spicy instant noodle with" price="2.29"  lavash2={burger2}/>
        </div>
      </div>
    </>
  )
}

export default Burger
