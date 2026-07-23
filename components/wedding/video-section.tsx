'use client'

import { useRef, useState } from 'react'
import { Play } from 'lucide-react'
import { Reveal, SectionTitle } from './ui'

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [started, setStarted] = useState(false)

  const handlePlay = () => {
    const v = videoRef.current
    if (!v) return
    v.play()
    setStarted(true)
  }

  return (
    <section id="video" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle eyebrow="A moment to cherish" title="Wedding Invitation Video" />

        <Reveal delay={0.1} className="mt-14">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-primary/5 shadow-xl shadow-primary/10">
            <div className="absolute -inset-2 -z-10 rounded-[1.75rem] border border-gold-soft/30" />
            <video
              ref={videoRef}
              src="/wedding/video.mp4"
              className="aspect-video w-full bg-black object-cover"
              controls={started}
              playsInline
              preload="metadata"
              poster="/wedding/hero-2.png"
            />
            {!started && (
              <button
                type="button"
                onClick={handlePlay}
                aria-label="Play wedding invitation video"
                className="group absolute inset-0 flex items-center justify-center bg-[#1c1424]/35 transition hover:bg-[#1c1424]/25"
              >
                <span className="flex h-20 w-20 items-center justify-center rounded-full border border-background/70 bg-background/90 text-primary shadow-lg transition group-hover:scale-110">
                  <Play className="ml-1 h-8 w-8 fill-current" strokeWidth={1} />
                </span>
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
