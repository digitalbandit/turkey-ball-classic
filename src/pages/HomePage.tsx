import { Features } from '../components/Features'
import { Hero } from '../components/Hero'
import { InfoStrip } from '../components/InfoStrip'
import { PhotoGallery } from '../components/PhotoGallery'
import { RulesSection } from '../components/RulesSection'

export function HomePage() {
  return (
    <>
      <Hero />
      <InfoStrip />
      <Features />
      <RulesSection />
      <PhotoGallery />
    </>
  )
}
