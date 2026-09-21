import { features } from '../data/event'
import { IconBats, IconCan, IconCooler, IconJersey } from './Icons'
import { Reveal } from './Reveal'

const icons = {
  gear: IconBats,
  jerseys: IconJersey,
  setup: IconCooler,
  times: IconCan,
}

export function Features() {
  return (
    <section className="features" aria-label="What to expect">
      <div className="features-grid">
        {features.map((item) => {
          const Icon = icons[item.id]
          return (
            <Reveal key={item.id} className="feature-card">
              <Icon className="feature-icon" />
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
