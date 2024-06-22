import React from 'react'
import './Contactcha.scss'
const Contactcha = ({name,text,text2,title,text3 ,number,number2,number3}) => {
  return (
    <>
       <div>

      <div className="contact">
        <div className="container">
          <div className="contactBox">
            <h1 className="contactTitle"> {name}</h1>
            <h3 className='contactSubtitle1'>{title}</h3>
            <ul className="contactList">
              <li className="contactItem">
                <h3 className='contactSubtitle'>{text}</h3>
                <h3 className='contactSubtitle'>{number}</h3>
            
            
              </li> 
              <li className="contactItem">
                <h3 className='contactSubtitle'>{text2}</h3>
                <h3 className='contactSubtitle'>{number2}</h3>
                
              </li>
              <li className="contactItem">
                <h3 className='contactSubtitle'>{text3}</h3>
                <h3 className='contactSubtitle'>{number3}</h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
   
    </div>
    </>
  )
}

export default Contactcha
