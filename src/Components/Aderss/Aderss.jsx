import React from 'react'
import './Adress.scss'

const Aderss = ({ name, text, title, time }) => {
    return (
        <>
            <div className="aderss">
                <ul className="aderssList">
                    <li className="aderssItem">
                        <span className="aderssIcon" aria-hidden="true">
                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" focusable="false">
                                <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
                                <circle cx="12" cy="9.5" r="2.5" />
                            </svg>
                        </span>
                        <div>
                            <h2 className='adressTitle'>{name}</h2>
                            <p className='adressSubtitle'>{text}</p>
                        </div>
                    </li>
                    <li className="aderssItem2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                            <circle cx="12" cy="12" r="9" />
                            <path d="M12 7v5l3 2" />
                        </svg>
                        <div>
                            <p className='adressLabel'>{title}</p>
                            <p className='adressTime'>{time}</p>
                        </div>
                    </li>
                </ul>

                <span className="aderssArrow" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                </span>
            </div>
        </>
    )
}

export default Aderss