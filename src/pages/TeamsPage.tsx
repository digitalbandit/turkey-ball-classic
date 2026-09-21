import { InkButton } from '../components/InkButton'
import { Reveal } from '../components/Reveal'

export function TeamsPage() {
  return (
    <article className="page-shell">
      <header className="page-banner">
        <p className="hand-kicker">Drafted the day before</p>
        <h1>Green vs. Black</h1>
        <p className="page-lede">
          You don’t pick a side in the parking lot. Thanksgiving night, names go on the
          board. Friday morning, you pull a jersey and find out who you’re chirping.
        </p>
      </header>

      <Reveal>
        <section className="team-split" aria-label="Team colors">
          <article className="team-poster team-green">
            <p className="eyebrow">Squad</p>
            <h2>Green</h2>
            <p>Forest. Grass stains. The color of leftover determination.</p>
            <p className="team-note">Roster drops after the draft.</p>
          </article>
          <article className="team-poster team-black">
            <p className="eyebrow">Squad</p>
            <h2>Black</h2>
            <p>Night-before turkey. A little more swagger. Same bats.</p>
            <p className="team-note">Roster drops after the draft.</p>
          </article>
        </section>
      </Reveal>

      <Reveal>
        <section className="paper-panel draft-panel">
          <h2>How the draft works</h2>
          <p>
            Everyone who RSVPs is in the pool — adults, Thrashers, cousins who “don’t really
            play.” Teams are mixed on purpose. Custom jerseys are waiting Friday. If you
            show up undeclared, you still play, but you might end up in last year’s size.
          </p>
        </section>
      </Reveal>

      <div className="page-cta">
        <InkButton to="/im-in">Get drafted</InkButton>
      </div>
    </article>
  )
}
