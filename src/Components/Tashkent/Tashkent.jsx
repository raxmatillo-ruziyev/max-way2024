import React from 'react'
import magic  from '../../assets/macgic.jpeg'
const Tashkent = () => {
  return (
    <div>
         <div  style={{display:'flex',justifyContent:"space-between",padding:"30px", width:"1200px", margin:"0 auto"}}>
        <div className='magicBox'>
            <h1 className="adressTitle"> MaxWay Magic City</h1>
            <h3 className='adressSubtitle'> <i className='	fa fa-map-marker'></i>  Адрес: Magic City,ул. Бабура, 174, Ташкент, Узбекистан</h3>
            <h3 className='adressSubtitle'><i className='fa fa-clock-o'></i> Часы работы: 10:00-03:00</h3>
            <h3 className='adressSubtitle'> <i li className='fa fa-phone'></i> Номер телефона:+998 93 890 11 05</h3>
            <h3 className='adressSubtitle'> <i className='	fa fa-location-arrow'></i> Ориентир: Magic City</h3>
            <img src={magic} alt="" width={400}  height={240}/>
        </div>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <a 
            href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps" 
            style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
          >
            Ташкент
          </a>
          <a 
            href="https://yandex.uz/maps/10335/tashkent/?ll=69.279737%2C41.311151&utm_medium=mapframe&utm_source=maps&z=12" 
            style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
          >
            Ташкент — Яндекс Карты
          </a>
          <iframe 
            src="https://yandex.uz/map-widget/v1/?ll=69.279737%2C41.311151&z=12" 
            width="660" 
            height="500" 
            frameBorder="1" 
            allowFullScreen 
            style={{ position: 'relative' }}
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Tashkent
