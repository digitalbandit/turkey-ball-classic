import { FormEvent, useMemo, useState } from 'react'
import { Crown } from '../components/Icons'
import { rsvp } from '../data/event'

type Rsvp = {
  name: string
  email: string
  adults: string
  kids: string
  role: string
  notes: string
  at: string
}

const STORAGE_KEY = 'tbc-rsvp-2026'

type Status = 'idle' | 'sending' | 'error' | 'closed'

async function sendRsvp(payload: Rsvp & { website: string }) {
  // text/plain keeps this a "simple" request, so the browser skips the CORS
  // preflight that Apps Script can't answer.
  const res = await fetch(rsvp.endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload),
  })
  const data = (await res.json()) as { ok?: boolean }
  if (!data.ok) throw new Error('rejected')
}

export function ImInPage() {
  const existing = useMemo(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? (JSON.parse(raw) as Rsvp) : null
    } catch {
      return null
    }
  }, [])

  const [done, setDone] = useState<Rsvp | null>(existing)
  const [form, setForm] = useState({
    name: existing?.name ?? '',
    email: existing?.email ?? '',
    adults: existing?.adults ?? '1',
    kids: existing?.kids ?? '0',
    role: existing?.role ?? 'playing',
    notes: existing?.notes ?? '',
  })

  const [status, setStatus] = useState<Status>('idle')
  const [website, setWebsite] = useState('')

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (status === 'sending') return
    if (!rsvp.endpoint) {
      setStatus('closed')
      return
    }
    const payload: Rsvp = { ...form, at: new Date().toISOString() }
    setStatus('sending')
    try {
      await sendRsvp({ ...payload, website })
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
      } catch {
        // This device just won't remember it. The list still has it.
      }
      setStatus('idle')
      setDone(payload)
    } catch {
      setStatus('error')
    }
  }

  return (
    <article className="page-shell">
      <header className="page-banner">
        <p className="hand-kicker">Put your name on the clipboard</p>
        <h1>I’m In</h1>
        <p className="page-lede">
          This is how we draft teams and print jerseys. No ticket booth. No app. Just the
          list.
        </p>
      </header>

      <div className="clipboard">
        <div className="clipboard-clip" aria-hidden="true">
          <Crown />
        </div>
        {done ? (
          <div className="clipboard-paper">
            <p className="hand-kicker">You’re on the list</p>
            <h2>{done.name}</h2>
            <p>
              See you Friday at Olive Field 3. We’ll use this for the Thanksgiving-night
              draft.
            </p>
            <dl className="rsvp-dl">
              <div>
                <dt>Email</dt>
                <dd>{done.email}</dd>
              </div>
              <div>
                <dt>Crew</dt>
                <dd>
                  {done.adults} adult{done.adults === '1' ? '' : 's'}, {done.kids} kid
                  {done.kids === '1' ? '' : 's'}
                </dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>{done.role === 'playing' ? 'Playing' : 'Spectating / bench coaching'}</dd>
              </div>
            </dl>
            <button type="button" className="text-link" onClick={() => setDone(null)}>
              Edit RSVP
            </button>
            <p className="rsvp-fine">Same email = same spot. Edits replace the old one.</p>
          </div>
        ) : (
          <form className="clipboard-paper" onSubmit={onSubmit}>
            <label>
              Name
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                autoComplete="name"
              />
            </label>
            <label>
              Email
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                autoComplete="email"
              />
            </label>
            <div className="form-row">
              <label>
                Adults
                <input
                  required
                  inputMode="numeric"
                  pattern="[0-9]{1,2}"
                  value={form.adults}
                  onChange={(e) => setForm({ ...form, adults: e.target.value })}
                />
              </label>
              <label>
                Kids / Thrashers
                <input
                  required
                  inputMode="numeric"
                  pattern="[0-9]{1,2}"
                  value={form.kids}
                  onChange={(e) => setForm({ ...form, kids: e.target.value })}
                />
              </label>
            </div>
            <label>
              I’m
              <select
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
              >
                <option value="playing">Playing</option>
                <option value="sideline">Spectating / bench coaching</option>
              </select>
            </label>
            <label>
              Notes
              <textarea
                rows={3}
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                placeholder="Glove size, leftover pie, rivalry warnings…"
              />
            </label>
            <label className="hp-field" aria-hidden="true">
              Website
              <input
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </label>
            {status === 'error' && (
              <p className="rsvp-error" role="alert">
                That one didn’t go through. Give it another swing.
              </p>
            )}
            {status === 'closed' && (
              <p className="rsvp-error" role="alert">
                The clipboard isn’t out yet. Check back soon.
              </p>
            )}
            <button
              type="submit"
              className="ink-btn ink-btn-solid"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Signing…' : 'I’m In'}
            </button>
          </form>
        )}
      </div>
    </article>
  )
}
