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
                    <Link className='aboutLink' to={"/magic"}><Aderss name={" MaxWay Magic City"} title={"Часы работы"} text={"Magic City,ул. Бабура, 174, Ташкент, Узбекистан"} time={"10:00-03:00"} /></Link>
                    <Link className='aboutLink' to={"/magic"}><Aderss name={" MaxWay Tashkent City"} title={"Часы работы"} text={"Magic City, Navoiy, 26, Ташкент, Узбекистан"} time={"10:00-03:00"} /></Link>
                    <Link className='aboutLink' to={"/magic"}><Aderss name={" MaxWay Chilanzar City"} title={"Часы работы"} text={"Magic City,ул. Chilanzar, 3, Ташкент, Узбекистан"} time={"10:00-03:00"} /></Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AboutPage
