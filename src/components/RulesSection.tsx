import { rules } from '../data/event'
import { Crown } from './Icons'
import { Reveal } from './Reveal'

export function KickDiagram() {
  return (
    <div className="kick-diagram">
      <img
        src="/assets/kick-strike-diagram.png"
        alt="Chalk diagram of the Kick-Strike rule: a Wiffle ball cycles around a dashed strike zone for three strikes, then a red kickball"
        width={394}
        height={448}
      />
    </div>
  )
}

export function Polaroid() {
  return (
    <figure className="polaroid">
      <span className="tape tape-left" />
      <span className="tape tape-right" />
      <img
        src="/assets/crew-photo.jpg"
        alt="Three kids on a baseball field wearing Turkey Ball Classic shirts"
        width={846}
        height={850}
      />
      <figcaption>
        Same Crew.
        <br />
        Bigger Plays.
        <Crown className="polaroid-crown" />
      </figcaption>
    </figure>
  )
}

export function RulesSection() {
  return (
    <section className="rules-band" aria-labelledby="rules-heading">
      <div className="rules-layout">
        <Reveal>
          <article className="rules-card">
            <header className="rules-tape">
              <h2 id="rules-heading">The Rules</h2>
            </header>
            <p className="rules-sub">(Very Loose Definition)</p>
            <ol>
              {rules.map((rule) => (
                <li key={rule.n}>
                  <span>{rule.n}</span>
                  <p>{rule.text}</p>
                </li>
              ))}
            </ol>
            <Crown className="rules-crown" />
          </article>
        </Reveal>
        <Reveal>
          <KickDiagram />
        </Reveal>
        <Reveal>
          <Polaroid />
        </Reveal>
      </div>
    </section>
  )
}
