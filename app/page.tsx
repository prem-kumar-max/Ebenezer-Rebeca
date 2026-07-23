import { NavBar } from '@/components/wedding/nav-bar'
import { Hero } from '@/components/wedding/hero'
import { Countdown } from '@/components/wedding/countdown'
import { Couple } from '@/components/wedding/couple'
import { LoveStory } from '@/components/wedding/love-story'
import { Details } from '@/components/wedding/details'
import { VideoSection } from '@/components/wedding/video-section'
import { Gallery } from '@/components/wedding/gallery'
import { Venue } from '@/components/wedding/venue'
import { Rsvp } from '@/components/wedding/rsvp'
import { Footer } from '@/components/wedding/footer'
import { MusicPlayer } from '@/components/wedding/music-player'

export default function Page() {
  return (
    <main className="relative bg-background">
      <NavBar />
      <Hero />
      <Countdown />
      <Couple />
      <LoveStory />
      <Details />
      <VideoSection />
      <Gallery />
      <Venue />
      <Rsvp />
      <Footer />
      <MusicPlayer />
    </main>
  )
}
