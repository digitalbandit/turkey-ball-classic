import { InkButton } from '../components/InkButton'
import { Reveal } from '../components/Reveal'

const shirts = [
  {
    name: 'Fowl Play',
    side: 'left',
    tone: 'team-fowl',
    line: 'Navy. Hears “foul” and takes it as a dare.',
    frontAlt: 'Navy Fowl Play shirt, front: turkey in a pilgrim hat, crossed bats, TBC, 2nd Annual',
    backAlt: 'Navy shirt back lettered Fowl Play, number 07, Wingman',
  },
  {
    name: 'Dirty Birds',
    side: 'right',
    tone: 'team-dirty',
    line: 'Sand. The leftovers made the roster.',
    frontAlt: 'Sand Dirty Birds shirt, front: turkey in a pilgrim hat, crossed bats, TBC, 2nd Annual',
    backAlt: 'Sand shirt back lettered Dirty Birds, number 24, Leftovers',
  },
] as const

export function TeamsPage() {
  return (
    <article className="page-shell">
      <header className="page-banner teams-banner">
        <p className="hand-kicker">Drafted the day before</p>
        <h1>
          Fowl Play
          <span className="title-vs">vs.</span>
          Dirty Birds
        </h1>
        <p className="page-lede">
          You don’t pick a side in the parking lot. Thanksgiving night, names go on the
          board. Friday morning, you pull a shirt and find out who you’re chirping.
        </p>
      </header>

      <Reveal>
        <section className="team-split" aria-label="This year’s shirts">
          {shirts.map((team) => (
            <article key={team.name} className={`team-card ${team.tone}`}>
              <div className="shirt-pair">
                <figure>
                  <div className={`shirt-crop is-${team.side}`}>
                    <img src="/assets/shirts-front.jpg" alt={team.frontAlt} />
                  </div>
                  <figcaption>Front</figcaption>
                </figure>
                <figure>
                  <div className={`shirt-crop is-${team.side}`}>
                    <img src="/assets/shirts-back.jpg" alt={team.backAlt} />
                  </div>
                  <figcaption>Back</figcaption>
                </figure>
              </div>
              <div className="team-copy">
                <p className="eyebrow">Squad</p>
                <h2>{team.name}</h2>
                <p>{team.line}</p>
                <p className="team-note">Your name goes on after the draft.</p>
              </div>
            </article>
          ))}
        </section>
      </Reveal>

      <Reveal>
        <section className="paper-panel draft-panel">
          <h2>How the draft works</h2>
          <p>
            Everyone who RSVPs is in the pool — adults, Thrashers, cousins who “don’t really
            play.” Teams are mixed on purpose. Custom shirts are waiting Friday. If you show
            up undeclared, you still play, but you might end up in last year’s size.
          </p>
        </section>
      </Reveal>

      <div className="page-cta">
        <InkButton to="/im-in">Get drafted</InkButton>
      </div>
    </article>
  )
}
