import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Crown, IconClose, IconMenu } from './Icons'

const links = [
  { to: '/', label: 'Home' },
  { to: '/details', label: 'Details' },
  { to: '/rules', label: 'Rules' },
  { to: '/teams', label: 'Teams' },
  { to: '/faq', label: 'FAQ' },
  { to: '/im-in', label: 'RSVP' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])

  return (
    <header className="site-header">
      <Link to="/" className="brand" onClick={() => setOpen(false)}>
        <span className="brand-text">
          <span>The</span>
          <span>Turkey Ball</span>
          <span>Classic</span>
        </span>
        <Crown className="brand-crown" />
      </Link>

      <nav className="site-nav" aria-label="Primary">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) => (isActive ? 'is-active' : undefined)}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <Link to="/im-in" className="ink-btn ink-btn-solid header-cta">
        I’m In
      </Link>

      <button
        type="button"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <IconClose /> : <IconMenu />}
        <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
      </button>

      <div id="mobile-nav" className={`mobile-nav ${open ? 'is-open' : ''}`}>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
        <Link to="/im-in" className="ink-btn ink-btn-solid" onClick={() => setOpen(false)}>
          I’m In
        </Link>
      </div>
    </header>
  )
}
