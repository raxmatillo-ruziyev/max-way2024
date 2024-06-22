import React from 'react'
import './Desert.scss'
import Card from '../Card/Card'
import desert1 from  '../../assets/desert1.jpeg'
import desert2 from  '../../assets/desert2.jpg'
import desert3 from  '../../assets/desert3.jpeg'
import desert4 from  '../../assets/desert4.jpg'
import desert5 from  '../../assets/desert5.jpg'
const Desert = () => {
  return (
    <>
      <div className="container">
        <div className="lavashBox">
        <Card name=" x owls available" price="2.29" lavash2={desert1}/>
        <Card name="Hot spicy fried rice with omelet" price="3.29" lavash2={desert2} />
        <Card name="Spicy instant noodle with" price="5.29"lavash2={desert3}/>
        <Card name="Beef dumpling in hot soup" price="3.29" lavash2={desert4}/>
        <Card name=" Spicy seasoned seafood noodles" price="9.29"  lavash2={desert5}/>
        <Card name="Salted Pasta with mushroom sauce" price="2.29"  lavash2={desert2}/>
        </div>
      </div>
    
     
    </>
  )
}

export default Desert
