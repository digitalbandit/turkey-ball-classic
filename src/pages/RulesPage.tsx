import { InkButton } from '../components/InkButton'
import { KickDiagram } from '../components/RulesSection'
import { Reveal } from '../components/Reveal'
import { rules } from '../data/event'
import { Crown } from '../components/Icons'

export function RulesPage() {
  return (
    <article className="page-shell">
      <header className="page-banner">
        <p className="hand-kicker">Very loose definition</p>
        <h1>The Rules</h1>
        <p className="page-lede">
          Wiffle ball with a conscience. Kick-strike is the whole personality of the event —
          the fourth chance, the big boot, the thing people will still be arguing about in
          December.
        </p>
      </header>

      <div className="rules-page-grid">
        <Reveal>
          <article className="rules-card rules-card-page">
            <header className="rules-tape">
              <h2>Play it like this</h2>
            </header>
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
          <div className="chalkboard-panel">
            <KickDiagram />
            <p className="chalk-caption">
              Three strikes on the plastic ball. Then the red one. That’s the Classic.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <section className="copy-grid">
          <div className="paper-panel">
            <h2>Spirit of the thing</h2>
            <p>
              Counts are friendly. Trash talk is required. If a Thrasher needs a pitch they
              can reach, they get it. If an adult needs to be reminded they ate too much
              stuffing, the kick-strike will handle that.
            </p>
          </div>
          <div className="paper-panel">
            <h2>Don’t be that person</h2>
            <p>
              No full-count lawyer hour. No “that wasn’t a strike” filibuster. The strike
              zone is posted, the 8-run cap exists so nobody stews, and the draft is the
              draft.
            </p>
          </div>
        </section>
      </Reveal>

      <div className="page-cta">
        <InkButton to="/im-in">I’m In</InkButton>
      </div>
    </article>
  )
}
