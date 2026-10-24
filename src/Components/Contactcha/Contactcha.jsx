import React, { useId } from 'react'
import './Contactcha.scss'

const ICONS = {
  phone: (
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m4 8 8 6 8-6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
}

// +998931487733 -> +998 93 148 77 33
const formatPhone = (value) =>
  value.replace(/\s/g, '').replace(/^\+998(\d{2})(\d{3})(\d{2})(\d{2})$/, '+998 $1 $2 $3 $4')

const Contactcha = ({
  title,
  note,
  badge,
  icon = 'phone',
  variant = 'outline', // 'dark' | 'light' | 'outline'
  items = [],
}) => {
  const headingId = useId()

  return (
    <section
      className={`contact-card contact-card--${variant}`}
      aria-labelledby={headingId}
    >
      <div className="contact-card__intro">
      <div className="contact-card__head">
        <span className="contact-card__icon" aria-hidden="true">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
            focusable="false"
          >
            {ICONS[icon]}
          </svg>
        </span>
        {badge && <span className="contact-card__badge">{badge}</span>}
      </div>

      <h2 id={headingId} className="contact-card__title">
        {title}
      </h2>
      {note && <p className="contact-card__note">{note}</p>}
      </div>

      <ul className="contact-card__list">
        {items.map(({ label, value, type }) => {
          const clean = value.replace(/\s/g, '')
          const href = type === 'email' ? `mailto:${clean}` : `tel:${clean}`
          const text = type === 'email' ? clean : formatPhone(clean)

          return (
            <li key={`${label}-${clean}`} className="contact-card__item">
              <span className="contact-card__label">{label}</span>
              <a className="contact-card__value" href={href}>
                {text}
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Contactcha