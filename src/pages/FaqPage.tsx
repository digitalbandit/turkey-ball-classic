import { InkButton } from '../components/InkButton'
import { Reveal } from '../components/Reveal'
import { faqs } from '../data/event'

export function FaqPage() {
  return (
    <article className="page-shell">
      <header className="page-banner">
        <p className="hand-kicker">Before you ask in the group text</p>
        <h1>FAQ</h1>
        <p className="page-lede">
          The short version: Olive Field 3, Friday after the meal, wiffle then kickball,
          Green vs. Black.
        </p>
      </header>

      <ol className="faq-list">
        {faqs.map((item, i) => (
          <Reveal key={item.q}>
            <li>
              <span>{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h2>{item.q}</h2>
                <p>{item.a}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>

      <div className="page-cta">
        <InkButton to="/im-in">I’m In</InkButton>
      </div>
    </article>
  )
}
