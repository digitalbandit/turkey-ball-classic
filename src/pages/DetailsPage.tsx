import { Link } from 'react-router-dom'
import { InkButton } from '../components/InkButton'
import { Reveal } from '../components/Reveal'
import { event } from '../data/event'
import { IconCalendar, IconClock, IconPin } from '../components/Icons'

export function DetailsPage() {
  return (
    <article className="page-shell">
      <header className="page-banner">
        <p className="hand-kicker">{event.annual}</p>
        <h1>The Details</h1>
        <p className="page-lede">
          Same park. Same crew. Slightly bigger swings. Show up the day after Thanksgiving
          and leave the travel-ball energy at the gate.
        </p>
      </header>

      <Reveal>
        <section className="facts-row" aria-label="When and where">
          <div className="fact-card">
            <IconCalendar />
            <p className="eyebrow">Date</p>
            <h2>{event.dateLong}</h2>
          </div>
          <div className="fact-card">
            <IconClock />
            <p className="eyebrow">First pitch</p>
            <h2>{event.timePretty}</h2>
            <p>Roll in early to stretch, talk trash, or grab a little hair of the dog.</p>
          </div>
          <div className="fact-card">
            <IconPin />
            <p className="eyebrow">Field</p>
            <h2>{event.location}</h2>
            <p>
              {event.field}
              <br />
              {event.city}
            </p>
            <a className="text-link" href={event.mapsUrl} target="_blank" rel="noreferrer">
              Get directions →
            </a>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="copy-grid">
          <div className="paper-panel">
            <h2>How the day goes</h2>
            <ol className="day-list">
              <li>
                <span>10:30</span>
                <p>Gates-ish. Coffee, leftover pie, and a few warmup tosses.</p>
              </li>
              <li>
                <span>11:00</span>
                <p>First pitch. Fowl Play vs. Dirty Birds. Five innings. 8-run cap.</p>
              </li>
              <li>
                <span>After</span>
                <p>Coolers stay open. Kids keep swinging. Adults pretend they’re not sore.</p>
              </li>
            </ol>
          </div>
          <div className="paper-panel">
            <h2>We bring</h2>
            <ul className="plain-list">
              <li>Wiffle bats, balls, and bases</li>
              <li>The official red kickball</li>
              <li>Custom jerseys after the draft</li>
              <li>Tables and coolers</li>
            </ul>
            <h2>You bring</h2>
            <ul className="plain-list">
              <li>Sneakers or cleats</li>
              <li>A glove if you’ve got a lucky one</li>
              <li>Whatever belongs in the cooler</li>
              <li>Kids, cousins, and leftover determination</li>
            </ul>
          </div>
        </section>
      </Reveal>

      <div className="page-cta">
        <InkButton to="/im-in">I’m In</InkButton>
        <Link to="/rules" className="text-link">
          Read the very loose rules →
        </Link>
      </div>
    </article>
  )
}
