import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
const Navbar = () => {
  return (
    <>
      <div className="navbar">
       <div className="container">
       <ul className="navbarList">
            <li className="navbarItem1"><h1 className="logo">SFood</h1></li>
            <li className="navbarItem">
                <Link className='navbarLink' to={"/"} >Главная</Link>
                <Link className='navbarLink' to={"/about"} >Филиалы</Link>
                <Link className='navbarLink' to={"/onas"} >О нас</Link>
                <Link className='navbarLink' to={"/contact"} >Контакты</Link>
            </li>
            <li className="navbarItem2">
                <i id='logocha' className='fa fa-shopping-cart'></i>
                <button className='navbarBtn'>Войти</button>
            </li>
        </ul>
       </div>
      </div>
      <br /><br /><br /><br /><br />
    </>
  )
}

export default Navbar
