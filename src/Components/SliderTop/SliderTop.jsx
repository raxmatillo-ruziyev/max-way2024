import React, { useCallback, useEffect, useRef, useState } from 'react'
import './SliderTop.scss'
import slider1 from '../../assets/slidertop1.avif'
import slider2 from '../../assets/slider2.avif'
import slider3 from '../../assets/slider3.avif'

const SLIDES = [
  { src: slider1, alt: 'Three burgers with fries on a wooden tray' },
  { src: slider2, alt: 'Pizza on an orange background' },
  { src: slider3, alt: 'Two burgers with cola bottles behind them' },
]

const AUTOPLAY_MS = 5000
const SWIPE_MIN_PX = 50

const SliderTop = () => {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef(null)
  const count = SLIDES.length

  const goTo = useCallback((i) => setIndex((i + count) % count), [count])
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count])
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count])

  // Autoplay: stops on hover/focus and for people who prefer reduced motion
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (paused || reduce) return
    const timer = setInterval(next, AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [paused, next, index])

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null
    if (Math.abs(delta) < SWIPE_MIN_PX) return
    delta < 0 ? next() : prev()
  }

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') next()
    if (e.key === 'ArrowLeft') prev()
  }

  return (
    <section
      className="slider"
      aria-roledescription="carousel"
      aria-label="Featured offers"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={onKeyDown}
    >
      <div className="container">
        <div className="slider__stage">
          <div
            className="slider__viewport"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="slider__track"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {SLIDES.map((slide, i) => (
                <div
                  key={slide.src}
                  className="slider__slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${count}`}
                  aria-hidden={i !== index}
                >
                  <img
                    className="slider__img"
                    src={slide.src}
                    alt={slide.alt}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    fetchPriority={i === 0 ? 'high' : 'auto'}
                    decoding="async"
                    draggable="false"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="slider__arrow slider__arrow--prev"
            onClick={prev}
            aria-label="Previous slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>
          <button
            type="button"
            className="slider__arrow slider__arrow--next"
            onClick={next}
            aria-label="Next slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots: jump straight to a slide */}
          <div className="slider__dots">
            {SLIDES.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                className={`slider__dot ${i === index ? 'is-active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SliderTop