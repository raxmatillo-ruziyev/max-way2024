import React from 'react'
import './Card.scss'
import Btn from '../Btn/Btn'
const Card = ({name,price,lavash2}) => {
  return (
    <>
      <div className="card">
        <img src={lavash2} alt=""  width={"230px"} height={"150px"}/>
        <h1 className="cardTitle">{name}</h1>
        <p className="cardText">Информация: лаваш мясной classic, картофель-фри, пеп</p>
        <ul className="cardList">
            <li className="cardItem"><h2 className="cardSubtitle">{price} сум</h2></li>
            <li className="cardItem"><Btn/></li>
        </ul>
      </div>
      
    </>
  )
}

export default Card
