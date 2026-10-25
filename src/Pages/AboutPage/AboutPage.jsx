import React from 'react'
import './AboutPage.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'
import Aderss from '../../Components/Aderss/Aderss'

const AboutPage = () => {
    return (
        <>
            <Navbar />
            <div className="about">
                <div className="container">
                    <header className="aboutHero">
                        <p className="aboutEyebrow">Branches</p>
                        <h1 className="aboutTitle">Find your nearest MaxBite</h1>
                        <ul className="aboutFacts">
                            <li>3 branches in Tashkent</li>
                            <li>Open daily, 10:00 – 03:00</li>
                        </ul>
                    </header>

                    <Link className='aboutLink' to={"/magic"}><Aderss name={"MaxBite Magic City"} title={"Opening hours"} text={"Magic City, Babur St, 174, Tashkent, Uzbekistan"} time={"10:00 – 03:00"} /></Link>
                    <Link className='aboutLink' to={"/tashkent-city"}><Aderss name={"MaxBite Tashkent City"} title={"Opening hours"} text={"Navoi St, 26, Tashkent, Uzbekistan"} time={"10:00 – 03:00"} /></Link>
                    <Link className='aboutLink' to={"/chilanzar"}><Aderss name={"MaxBite Chilanzar"} title={"Opening hours"} text={"Chilanzar St, 3, Tashkent, Uzbekistan"} time={"10:00 – 03:00"} /></Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AboutPage