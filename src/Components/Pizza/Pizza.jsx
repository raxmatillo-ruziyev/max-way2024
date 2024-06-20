import React from 'react'
import Card from '../Card/Card'
import pizza1 from  '../../assets/pizza1.jpg'
import pizza2 from  '../../assets/pizza2.jpg'
import pizza3 from  '../../assets/pizza3.jpg'
import pizza5 from  '../../assets/pizza5.jpg'
import pizza6 from  '../../assets/pizza6.jpg'
import pizza7 from  '../../assets/pizza7.jpg'
import pizza8 from  '../../assets/pizza8.jpg'
import pizza9 from  '../../assets/pizza9.jpg'
const Pizza = () => {
  return (
    <>
        <div className="container">
        <div className="lavashBox">
        <Card name="Spicy seasoned seafood noodles" price="2.29" lavash2={pizza1}/>
        <Card name="x owls available " price="3.29" lavash2={pizza2} />
        <Card name="Salted Pasta with mushroom sauce" price="5.29"lavash2={pizza3}/>
        <Card name="Beef dumpling in hot soup" price="3.29" lavash2={pizza3}/>
        <Card name="Hot spicy fried rice with omelet" price="9.29"  lavash2={pizza5}/>
        <Card name="Spicy instant noodle with" price="2.29"  lavash2={pizza6}/>
        <Card name="constant noodle special omelette" price="2.9"  lavash2={pizza7}/>
        <Card name="noodle with spinach" price="0.29"  lavash2={pizza8}/>
      <Card name="Salted Pasta with mushroom sauce" price="5.29" lavash2={pizza9}/>
        </div>
      </div>
    </>
  )
}

export default Pizza
