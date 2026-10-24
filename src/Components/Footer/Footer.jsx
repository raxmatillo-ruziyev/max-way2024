import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'Branches' },
  { to: '/onas', label: 'About us' },
  { to: '/contact', label: 'Contact' },
]

// Replace the "#" with your real page links
const SOCIALS = [
  {
    name: 'Telegram',
    href: 'https://t.me/',
    icon: (
      <>
        <path d="M22 2 11 13" />
        <path d="M22 2 15 22l-4-9-9-4 20-7Z" />
      </>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/',
    icon: (
      <>
        <rect x="2.5" y="5" width="19" height="14" rx="4" />
        <path d="m10 9.5 5 2.5-5 2.5v-5Z" />
      </>
    ),
  },
]

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__logo" aria-label="MaxBite home">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                aria-hidden="true"
                focusable="false"
              >
                <defs>
                  <mask id="footer-bite">
                    <rect width="40" height="40" fill="#fff" />
                    <circle cx="36" cy="4" r="8" fill="#000" />
                    <circle cx="26.5" cy="2.5" r="3" fill="#000" />
                  </mask>
                </defs>
                <g mask="url(#footer-bite)">
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
              <span className="footer__logo-text">
                Max<span>Bite</span>
              </span>
            </Link>
            <p className="footer__tagline">Fresh food, made to order and delivered fast.</p>
          </div>

          <nav className="footer__col" aria-label="Footer">
            <h2 className="footer__heading">Explore</h2>
            <ul className="footer__list">
              {LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="footer__link">{label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__col">
            <h2 className="footer__heading">Order by phone</h2>
            <a className="footer__phone" href="tel:+998938901105">
              +998 93 890 11 05
            </a>

            <h2 className="footer__heading footer__heading--spaced">Follow us</h2>
            <ul className="footer__socials">
              {SOCIALS.map(({ name, href, icon }) => (
                <li key={name}>
                  <a
                    className="footer__social"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      focusable="false"
                    >
                      {icon}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} MaxBite. All rights reserved.</p>
          <p>Developed by Raxmatillo</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer