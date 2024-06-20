import React from 'react'
import './Menu.scss'
import { Link, Outlet } from 'react-router-dom'
const Menu = () => {
  return (
    <>
      <div className="menu">
        <div className="container">
            <ul className="menuList">
                <li className="menuItem" ><Link to={"/"} className='menuLink' >Lavash</Link></li>
                <li className="menuItem" ><Link to={"/desert"} className='menuLink' >Desert</Link></li>
                <li className="menuItem" ><Link to={"/set"} className='menuLink' >Set</Link></li>
                <li className="menuItem" ><Link to={"/xaggi"} className='menuLink' >Xaggi</Link></li>
                <li className="menuItem" ><Link to={"/burger"} className='menuLink' >Burger</Link></li>
                <li className="menuItem" ><Link to={"/pizza"} className='menuLink' >Pizza</Link></li>
                <li className="menuItem" ><Link to={"/set"} className='menuLink' >Sendvich</Link></li>
                <li className="menuItem" ><Link to={"/"} className='menuLink' >Donar</Link></li>
                <li className="menuItem" ><Link to={"/burger"} className='menuLink' >Xot-Dog</Link></li>
                <li className="menuItem" ><Link to={"/pizza"} className='menuLink' >Free</Link></li>
                <li className="menuItem" ><Link to={"/"} className='menuLink' >Drink</Link></li>
                <li className="menuItem" ><Link to={"/xaggi"} className='menuLink' >Salad</Link></li>
                <li className="menuItem" ><Link to={"/burger"} className='menuLink' >Bread</Link></li>
                <li className="menuItem" ><Link to={"/pizza"} className='menuLink' >Sauce</Link></li>
            </ul>
        </div>
    
      </div>

    </>
  )
}

export default Menu
