import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Navbar.scss'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'Branches' },
  { to: '/onas', label: 'About us' },
  { to: '/contact', label: 'Contact' },
]

const Navbar = ({ cartCount = 0 }) => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  // Close the mobile menu when the page changes
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Add a soft shadow once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner">
          {/* Logo: a tile with an "M" and a bite taken out of the corner */}
          <Link to="/" className="navbar__logo" aria-label="MaxBite home">
            <svg
              className="navbar__logo-mark"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              aria-hidden="true"
              focusable="false"
            >
              <defs>
                <mask id="navbar-bite">
                  <rect width="40" height="40" fill="#fff" />
                  <circle cx="36" cy="4" r="8" fill="#000" />
                  <circle cx="26.5" cy="2.5" r="3" fill="#000" />
                </mask>
              </defs>
              <g mask="url(#navbar-bite)">
                <rect width="40" height="40" rx="12" fill="#F0432B" />
                <path
                  d="M9.5 29V14.5L20 23.5L30.5 14.5V29"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="3.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
            <span className="navbar__logo-text">
              Max<span>Bite</span>
            </span>
          </Link>

          <nav
            id="main-nav"
            className={`navbar__nav ${open ? 'is-open' : ''}`}
            aria-label="Main"
          >
            {LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? 'is-active' : ''}`
                }
              >
                {label}
              </NavLink>
            ))}
            <button type="button" className="navbar__btn navbar__btn--mobile">
              Sign in
            </button>
          </nav>

          <div className="navbar__actions">
            <button
              type="button"
              className="navbar__cart"
              aria-label={`Cart, ${cartCount} items`}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M5.2 8.5h13.6l-1.1 11a1.5 1.5 0 0 1-1.5 1.35H7.8a1.5 1.5 0 0 1-1.5-1.35l-1.1-11Z" />
                <path d="M8.7 8.5V7.3a3.3 3.3 0 0 1 6.6 0v1.2" />
                <path d="M9.2 12.6c.5 1.1 1.5 1.7 2.8 1.7s2.3-.6 2.8-1.7" />
              </svg>
              {cartCount > 0 && <span className="navbar__badge">{cartCount}</span>}
            </button>

            <button type="button" className="navbar__btn navbar__btn--desktop">
              Sign in
            </button>

            <button
              type="button"
              className="navbar__burger"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="main-nav"
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Replaces the old <br /> spacers: keeps content below the fixed header */}
      <div className="navbar-spacer" aria-hidden="true" />
    </>
  )
}

export default Navbar