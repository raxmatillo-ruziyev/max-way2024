import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="conainer">
                    <div className="footerBox">
                        <ul className="footerList">
                            <li className="footerItem">
                                <h1 className="footerTitle">SFood</h1>
                                <Link className='footerLink' to={"/"} >Главная</Link> <br />
                                <Link className='footerLink' to={"/"} >Филиалы</Link><br />
                                <Link className='footerLink' to={"/"} >О нас</Link><br />
                                <Link className='footerLink' to={"/"} >Контакты</Link>
                            </li>
                            <li className="footerItem">
                                <h1 className="footerSubtitle">Присоединяйтесь к нам</h1>
                               <a > <i id='icons' className='fa fa-telegram'></i></a>
                              <a href='https://www.instagram.com/'>  <i id='icons' className='fa fa-instagram'></i></a>
                            <a href='https://www.youtube.com/'>  <i id='icons' className='fa fa-youtube-play'></i></a>
                            </li>
                            <li className="footerItem">
                            <h1 className="footerSubtitle">Заказывайте по номеру</h1>
                            <a className='tel' href="tel:+998938901105">+998938901105</a>
                            </li>

                        </ul>
                        <hr className='footerHr' / >
                            <div className="footercha">
                                <Link className='footerjon'>© 2020–2022, ООО «IT-TIME», официальный сайт</Link>
                                <h2 className='footerText'>Developed by Raxmatillo</h2>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
