import { event } from '../data/event'
import { IconCalendar, IconClock, IconPin } from './Icons'

export function InfoStrip() {
  return (
    <section className="info-strip" aria-label="Event details">
      <div className="info-item">
        <IconCalendar className="info-icon" />
        <div>
          <p className="info-kicker">{event.weekday}</p>
          <p className="info-main">{event.dateShort}</p>
        </div>
      </div>
      <div className="info-item">
        <IconClock className="info-icon" />
        <div>
          <p className="info-kicker">Game Starts</p>
          <p className="info-main">{event.time}</p>
          <p className="info-note">
            Roll in early to stretch,
            <br />
            talk trash, or grab a little
            <br />
            hair of the dog.
          </p>
        </div>
      </div>
      <div className="info-item">
        <IconPin className="info-icon" />
        <div>
          <p className="info-main">{event.location}</p>
          <p className="info-sub">({event.field})</p>
        </div>
      </div>
    </section>
  )
}
