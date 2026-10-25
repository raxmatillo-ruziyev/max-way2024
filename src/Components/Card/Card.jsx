import React from 'react'
import './Card.scss'

const formatPrice = (value) => {
  const n = Number(value)
  return Number.isFinite(n) ? n.toLocaleString('en-US') : value
}

const Card = ({
  name,
  price,
  image,
  lavash2, // old prop name, still works
  description = 'Fresh ingredients, made to order.',
  onAdd,
}) => {
  const src = image || lavash2

  return (
    <article className="card">
      <div className="card__media">
        <img
          className="card__img"
          src={src}
          alt={name}
          width="480"
          height="360"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="card__body">
        <h3 className="card__title">{name}</h3>
        <p className="card__text">{description}</p>

        <div className="card__footer">
          <p className="card__price">
            {formatPrice(price)} <span>UZS</span>
          </p>

          <button
            type="button"
            className="card__add"
            onClick={() => onAdd?.({ name, price })}
            aria-label={`Add ${name} to cart`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  )
}

export default Card