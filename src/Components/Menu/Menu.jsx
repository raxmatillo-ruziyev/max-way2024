import React, { useEffect, useRef } from 'react'
import './Menu.scss'

// Category tabs. It only displays what it is given:
//   categories: [{ slug, label }]   active: slug   onChange(slug)
const Menu = ({ categories, active, onChange }) => {
  const listRef = useRef(null)

  // On small screens the row scrolls sideways: keep the active tab in view
  useEffect(() => {
    const el = listRef.current?.querySelector('.is-active')
    el?.scrollIntoView({ inline: 'center', block: 'nearest' })
  }, [active])

  return (
    <nav className="menu" aria-label="Menu categories">
      <div className="container">
        <ul className="menu__list" ref={listRef}>
          {categories.map(({ slug, label }) => (
            <li key={slug}>
              <button
                type="button"
                className={`menu__link ${slug === active ? 'is-active' : ''}`}
                aria-pressed={slug === active}
                onClick={() => onChange(slug)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Menu