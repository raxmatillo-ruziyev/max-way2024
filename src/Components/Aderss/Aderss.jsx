import React from 'react'
import './Adress.scss'
const Aderss = ({name,text,title,time}) => {
    return (
        <>
            <div className="aderss">
                <ul className="aderssList">
                    <li className="aderssItem">
                        <h1 className='adressTitle'>{name}</h1>
                        <h3 className='adressSubtitle'>{text}</h3>
                    </li>
                    <li className="aderssItem">
                        <h3 className='adressSubtitle'>{title}</h3>
                        <h3 className='adressSubtitle'>{time}</h3>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Aderss
