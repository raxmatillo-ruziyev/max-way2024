import React from 'react'
import './Contact.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Contactcha from '../../Components/Contactcha/Contactcha'

const Contact = () => {
  return (
   <div>
          <Navbar />
          <Contactcha name={'Телефоны контактных центров'} text={'Ташкент'} text2={'Наманган'} title={'Круглосуточно, без выходных'} text3={'Алмалык'} number={'+998931487733 '} number2={'+998993253304'} number3={'+998931487777'}/>
          <Contactcha name={'Отдел поддержки клиентов'}text={'Электронная почта'} text2={'Контактный телефон'} number={'raxmatillo248@gmail.com'}number2={'+998935010770'} />
          <Contactcha name={'Правообладателям'}text={'Электронная почта' } title={'По вопросам, возникшим связи предположительным неправомерным использованием товарных знаков, логотипов  иных материалов, просим обращаться по е-мейлу с приложением подтверждающих документов'} number={'raxmatillo248@gmail.com'}/>
          <Footer />
   </div>
  )
}

export default Contact
