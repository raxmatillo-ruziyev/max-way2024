import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="container">
        <div className="navbarcha">
          <ul className="navbarList">
            <li className="navbarItem1"><Link to={'/'} style={{ textDecoration: 'none' }} className="logo">SFood</Link></li>
            <li className="navbarItem">
              <Link className='navbarLink' to={"/"} >Главная</Link>
              <Link className='navbarLink' to={"/about"} >Филиалы</Link>
              <Link className='navbarLink' to={"/onas"} >О нас</Link>
              <Link className='navbarLink' to={"/contact"} >Контакты</Link>
            </li>
            <li className="navbarItem2">
              <i id='logocha' className='fa fa-shopping-cart'></i>
              <button className='navbarBtn'>Войти</button>
              <i id='burger' className='	fa fa-align-justify'></i>
            </li>

          </ul>
        </div>
      </div>
      </div>
      <br /><br /><br /><br /><br /> <br />
    </>
  )
}

export default Navbar
