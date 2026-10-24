import React from 'react'
import './Contact.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Contactcha from '../../Components/Contactcha/Contactcha'

// All the page content lives here. To add a block, add one object.
// item.type: 'phone' (click to call) | 'email' (click to write)
// variant: 'dark' | 'light' | 'outline'     icon: 'phone' | 'mail' | 'shield'
const SECTIONS = [
  {
    title: 'Call center',
    note: 'Pick your city and call. We answer around the clock.',
    badge: 'Open 24/7',
    icon: 'phone',
    variant: 'dark',
    items: [
      { label: 'Tashkent', value: '+998931487733', type: 'phone' },
      { label: 'Namangan', value: '+998993253304', type: 'phone' },
      { label: 'Almalyk', value: '+998931487777', type: 'phone' },
    ],
  },
  {
    title: 'Customer support',
    note: 'Problem with an order? Write or call, we will sort it out.',
    icon: 'mail',
    variant: 'light',
    items: [
      { label: 'Email', value: 'raxmatilloww22458@gmail.com', type: 'email' },
      { label: 'Phone', value: '+998935010770', type: 'phone' },
    ],
  },
  {
    title: 'For rights holders',
    note: 'If our trademarks, logos or other materials are used without permission, email us and attach documents that confirm your rights.',
    icon: 'shield',
    variant: 'outline',
    items: [
      { label: 'Email', value: 'raxmatilloww22448@gmail.com', type: 'email' },
    ],
  },
]

const callNumber = SECTIONS[0].items[0].value
const supportEmail = SECTIONS[1].items[0].value

const Contact = () => {
  return (
    <>
      <Navbar />

      <main className="contact-page container">
        <header className="contact-hero">
          <div className="contact-hero__text">
            <h1 className="contact-hero__title">How can we help?</h1>
            <p className="contact-hero__lead">
              Call us any time, or write to the team that fits your question.
            </p>
            <div className="contact-hero__actions">
              <a className="contact-hero__btn contact-hero__btn--primary" href={`tel:${callNumber}`}>
                Call now
              </a>
              <a className="contact-hero__btn contact-hero__btn--ghost" href={`mailto:${supportEmail}`}>
                Write an email
              </a>
            </div>
          </div>
        </header>

        <div className="contact-page__list">
          {SECTIONS.map((section) => (
            <Contactcha key={section.title} {...section} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Contact