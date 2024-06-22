import React from 'react'
import './Set.scss'
import Card from '../Card/Card'
import set1 from  '../../assets/set1.jpg'
import set2 from  '../../assets/set2.jpg'
import set3 from  '../../assets/set3.jpg'
import set46 from  '../../assets/set46.jpg'
import set5 from  '../../assets/set5.png'
import set7 from  '../../assets/set7.jpg'
import set8 from  '../../assets/set8.jpg'
import set9 from  '../../assets/set9.jpg'
const Set = () => {
  return (
    <>
       <div className="container">
        <div className="lavashBox">
        <Card name=" noodle with spinach" price="2.29" lavash2={set1}/>
        <Card name="x owls available " price="3.29" lavash2={set2} />
        <Card name="Spicy seasoned seafood noodles" price="5.29"lavash2={set3}/>
        <Card name="Beef dumpling in hot soup" price="3.29" lavash2={set46}/>
        <Card name=" Salted Pasta with mushroom sauce" price="9.29"  lavash2={set5}/>
        <Card name="Spicy instant noodle with" price="2.29"  lavash2={set46}/>
        <Card name="constant noodle special omelette" price="2.9"  lavash2={set7}/>
        <Card name="Salted Pasta with mushroom sauce " price="0.29"  lavash2={set8}/>
      <Card name="Hot spicy fried rice with omelet" price="5.29" lavash2={set9}/>
        </div>
      </div>
    </>
  )
}

export default Set
