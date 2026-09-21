import { Link } from 'react-router-dom'
import { InkButton } from '../components/InkButton'

export function NotFoundPage() {
  return (
    <article className="page-shell">
      <header className="page-banner">
        <p className="hand-kicker">Foul ball</p>
        <h1>Page not found</h1>
        <p className="page-lede">
          That URL wandered into the parking lot. The Classic is still at Olive Field 3.
        </p>
      </header>
      <div className="page-cta">
        <InkButton to="/">Back home</InkButton>
        <Link to="/im-in" className="text-link">
          Or just get on the list →
        </Link>
      </div>
    </article>
  )
}
