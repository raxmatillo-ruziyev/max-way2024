import React from 'react'
import { Link } from 'react-router-dom'
import './Tashkent.scss'

// One branch page layout. Each branch page (Magic, TashkentCity, Chilanzar)
// passes its own details as props.
//
// mapLl = "longitude,latitude". To pin the exact spot: open Yandex Maps,
// right-click the place, copy the coordinates and paste them (lon,lat order).
const Tashkent = ({
  name,
  address,
  hours,
  phone,
  phoneText,
  landmark,
  image,
  mapLl = '69.279737,41.311151',
  mapZoom = 12,
}) => {
  const mapSrc = `https://yandex.uz/map-widget/v1/?ll=${mapLl}&z=${mapZoom}&pt=${mapLl},pm2rdm`

  return (
    <div className='container'>
      <div className="magic-page">
        <Link to="/about" className="magic-page__back">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
            <path d="M19 12H5M11 6l-6 6 6 6" />
          </svg>
          All branches
        </Link>

        <h1 className="magic-page__title">{name}</h1>

        <ul className="magic-page__info">
          <li className="magic-page__item">
            <span className="magic-page__icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" focusable="false">
                <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
                <circle cx="12" cy="9.5" r="2.5" />
              </svg>
            </span>
            <div>
              <span className="magic-page__label">Address</span>
              <strong className="magic-page__value">{address}</strong>
            </div>
          </li>

          <li className="magic-page__item">
            <span className="magic-page__icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" focusable="false">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
            </span>
            <div>
              <span className="magic-page__label">Opening hours</span>
              <strong className="magic-page__value">{hours}</strong>
            </div>
          </li>

          <li className="magic-page__item">
            <span className="magic-page__icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" focusable="false">
                <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
              </svg>
            </span>
            <div>
              <span className="magic-page__label">Phone</span>
              <a className="magic-page__value magic-page__value--link" href={`tel:${phone}`}>{phoneText}</a>
            </div>
          </li>

          {landmark && (
            <li className="magic-page__item">
              <span className="magic-page__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" focusable="false">
                  <path d="M3 11l18-8-8 18-2-8-8-2Z" />
                </svg>
              </span>
              <div>
                <span className="magic-page__label">Landmark</span>
                <strong className="magic-page__value">{landmark}</strong>
              </div>
            </li>
          )}
        </ul>

        <div className="magic-page__media">
          <img
            className="magic-page__photo"
            src={image}
            alt={`${name} restaurant`}
            decoding="async"
          />

          <div className="magic-page__map">
            <iframe
              title={`Map: ${name}`}
              src={mapSrc}
              loading="lazy"
              allowFullScreen
            ></iframe>
            <span className="magic-page__credit">
              <a href="https://yandex.uz/maps/10335/tashkent/" target="_blank" rel="noopener noreferrer">Tashkent — Yandex Maps</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tashkent