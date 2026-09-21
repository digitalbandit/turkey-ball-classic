import { useEffect, useRef } from 'react'
import { event } from '../data/event'
import { BrushUnderline, Crown } from './Icons'
import { InkButton } from './InkButton'
import { ParkBackdrop } from './ParkBackdrop'

export function Hero() {
  const artRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const art = artRef.current
    if (!art) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const onScroll = () => {
      art.style.transform = `translateY(${window.scrollY * 0.06}px)`
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-frame">
        <div className="hero-art" ref={artRef}>
          <ParkBackdrop />
        </div>

        <div className="hero-stage">
          <div className="hero-copy">
            <p className="hero-annual">
              <Crown className="hero-annual-crown" />
              {event.annual}
            </p>
            <h1 id="hero-title" className="hero-title">
              <span>Turkey</span>
              <span>Ball</span>
              <span>Classic</span>
            </h1>
            <p className="hero-est">
              Established {event.established}
              <BrushUnderline className="hero-underline" />
            </p>
          </div>

          <div className="hero-mascot">
            <picture>
              <source srcSet="/assets/turkey-mascot.webp" type="image/webp" />
              <img
                src="/assets/turkey-mascot.png"
                alt="Cartoon Turkey Ball mascot in a pilgrim hat, sneakers, and a Wiffle bat, standing over a Wiffle ball and red kickball"
                width={739}
                height={983}
              />
            </picture>
          </div>

          <p className="hero-tagline">
            Last Night’s Turkey.
            <br />
            Today’s Glory.
          </p>

          <aside className="scoreboard" aria-label="Park sign">
            <ul>
              <li>Wiffle Ball</li>
              <li>Kick Strikes</li>
              <li>Cold Drinks</li>
              <li>Good People</li>
              <li>Great Tradition</li>
            </ul>
          </aside>
          <p className="field-hand">
            George
            <br />
            Izay Park
          </p>

          <div className="hero-ctas">
            <InkButton to="/im-in">I’m In</InkButton>
            <InkButton to="/details" variant="outline">
              See Details →
            </InkButton>
          </div>
        </div>
      </div>
    </section>
  )
}
