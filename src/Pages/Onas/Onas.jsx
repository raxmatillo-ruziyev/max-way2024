import React from 'react'
import { Link } from 'react-router-dom'
import './Onas.scss'
import onas from '../../assets/onas-hero.svg'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const Onas = () => {
  return (
    <div>
      <div className='onas'>
        <Navbar />
        <div className="container">
          <div className="onasBox">
            <div className='boxcha'>
              <img className='onasImg' src={onas} alt="A MaxBite burger with fries and a drink" />
            </div>

            <ul className="onasStats">
              <li className="onasStat"><strong>3</strong><span>Branches in Tashkent</span></li>
              <li className="onasStat"><strong>10:00 – 03:00</strong><span>Open every day</span></li>
              <li className="onasStat"><strong>24/7</strong><span>Call center</span></li>
            </ul>

            <div className="onasRow">
              <div className="onasHead">
                <p className="onasEyebrow">About MaxBite</p>
                <h1 className="onasTitle">Fresh food, made your way.</h1>
              </div>
              <div className="onasBody">
                <p className="onasText">MaxBite is a Tashkent fast-food brand built on one simple idea: fast food can be fresh. Every wrap, burger and pizza is prepared to order from fresh ingredients, with a wide choice of fillings, so everyone at the table finds something they like.</p>
                <p className="onasText">We keep our prices fair, because good food should not be a luxury, and we listen to our guests and shape the menu around their requests. With every dish we refine our recipes and look for the right balance between price and quality, so we can stay your favourite place for a quick, tasty meal.</p>
              </div>
            </div>

            <div className="onasCta">
              <div>
                <h2 className="onasCtaTitle">Tell us what you think</h2>
                <p className="onasCtaText">We welcome both good and bad feedback. A guest’s complaint is a gift that helps us grow.</p>
              </div>
              <Link to="/contact" className="onasCtaBtn">Contact us</Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Onas