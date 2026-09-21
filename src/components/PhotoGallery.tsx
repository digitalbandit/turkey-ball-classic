import { useEffect, useId, useState } from 'react'
import { lastYearPhotos, lastYearVideo } from '../data/event'
import { Crown } from './Icons'
import { Reveal } from './Reveal'

export function PhotoGallery() {
  const [active, setActive] = useState<number | null>(null)
  const headingId = useId()
  const photo = active !== null ? lastYearPhotos[active] : null

  useEffect(() => {
    if (active === null) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowRight') {
        setActive((i) => (i === null ? 0 : (i + 1) % lastYearPhotos.length))
      }
      if (e.key === 'ArrowLeft') {
        setActive((i) =>
          i === null ? 0 : (i - 1 + lastYearPhotos.length) % lastYearPhotos.length,
        )
      }
    }

    document.body.classList.add('lightbox-open')
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('lightbox-open')
      window.removeEventListener('keydown', onKey)
    }
  }, [active])

  return (
    <section className="gallery-band" id="last-year" aria-labelledby={headingId}>
      <Reveal>
        <header className="gallery-intro">
          <p className="hand-kicker">From the 1st Annual</p>
          <h2 id={headingId}>Last Year</h2>
          <p>Glory, grass stains, and one very small trophy.</p>
          <Crown className="gallery-crown" />
        </header>
      </Reveal>

      <figure className="gallery-tape">
        <span className="tape tape-left" aria-hidden="true" />
        <span className="tape tape-right" aria-hidden="true" />
        <video
          controls
          playsInline
          preload="metadata"
          poster={lastYearVideo.poster}
          title={lastYearVideo.title}
          aria-label={lastYearVideo.title}
        >
          <source src={lastYearVideo.src} type="video/mp4" />
        </video>
        <figcaption>{lastYearVideo.caption}</figcaption>
      </figure>

      <div className="gallery-wall">
        {lastYearPhotos.map((item, index) => (
          <button
            key={item.src}
            type="button"
            className={`gallery-card gallery-${item.size} gallery-crop-${item.crop.replace(' ', '-')}`}
            onClick={() => setActive(index)}
          >
            <img src={item.src} alt={item.alt} loading="lazy" />
            <span>{item.caption}</span>
          </button>
        ))}
      </div>

      {photo && active !== null ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={photo.alt}
          onClick={() => setActive(null)}
        >
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={photo.src} alt={photo.alt} />
            <figcaption>{photo.caption}</figcaption>
          </figure>
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setActive(null)}
          >
            Close
          </button>
          <button
            type="button"
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation()
              setActive((active - 1 + lastYearPhotos.length) % lastYearPhotos.length)
            }}
          >
            Prev
          </button>
          <button
            type="button"
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation()
              setActive((active + 1) % lastYearPhotos.length)
            }}
          >
            Next
          </button>
        </div>
      ) : null}
    </section>
  )
}
