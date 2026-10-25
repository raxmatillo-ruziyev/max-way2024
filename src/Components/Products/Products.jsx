import React, { useState } from 'react'
import Menu from '../Menu/Menu'
import Card from '../Card/Card'
import { CATEGORIES, PRODUCTS } from './Productsdata'
import './Products.scss'

// Menu tabs + product grid in one component.
// Picking a tab only changes state: no router, no page reload.
const Products = () => {
  const [category, setCategory] = useState(CATEGORIES[0].slug)

  const current = CATEGORIES.find((c) => c.slug === category)
  const items = PRODUCTS[category] ?? []

  return (
    <>
      <Menu categories={CATEGORIES} active={category} onChange={setCategory} />

      <section className="products container" aria-live="polite">
        <h2 className="products__title">{current.label}</h2>

        {items.length === 0 ? (
          <p className="products__empty">No items in this category yet.</p>
        ) : (
          <div className="card-grid">
            {items.map((item) => (
              <Card
                key={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                description={item.description}
              />
            ))}
          </div>
        )}
      </section>
    </>
  )
}

export default Products