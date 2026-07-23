'use client'

import { useEffect, useRef, useState } from 'react'
import { Music, VolumeX } from 'lucide-react'
import { cn } from '@/lib/utils'

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const startedRef = useRef(false)

  useEffect(() => {
    const audio = new Audio('/wedding/music.mp3')
    audio.loop = true
    audio.volume = 0.25
    audio.preload = 'auto'
    audioRef.current = audio

    const tryPlay = () => {
      if (startedRef.current) return
      audio
        .play()
        .then(() => {
          startedRef.current = true
          setPlaying(true)
        })
        .catch(() => {
          /* autoplay blocked — will retry on first interaction */
        })
    }

    // Attempt immediate autoplay
    tryPlay()

    // Fallback: start on first user interaction
    const onInteract = () => {
      tryPlay()
      if (startedRef.current) removeListeners()
    }
    const removeListeners = () => {
      window.removeEventListener('click', onInteract)
      window.removeEventListener('scroll', onInteract)
      window.removeEventListener('touchstart', onInteract)
      window.removeEventListener('keydown', onInteract)
    }
    window.addEventListener('click', onInteract, { passive: true })
    window.addEventListener('scroll', onInteract, { passive: true })
    window.addEventListener('touchstart', onInteract, { passive: true })
    window.addEventListener('keydown', onInteract)

    return () => {
      removeListeners()
      audio.pause()
      audioRef.current = null
    }
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().then(() => {
        startedRef.current = true
        setPlaying(true)
      })
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={playing ? 'Turn music off' : 'Turn music on'}
      aria-pressed={playing}
      className="fixed bottom-5 right-5 z-50 flex h-13 w-13 items-center justify-center rounded-full border border-gold-soft/50 bg-primary/90 text-background shadow-lg shadow-primary/25 backdrop-blur transition hover:scale-105 hover:bg-primary sm:bottom-7 sm:right-7"
      style={{ width: 52, height: 52 }}
    >
      {playing ? (
        <Music className={cn('h-5 w-5 animate-spin-slow')} strokeWidth={1.5} />
      ) : (
        <VolumeX className="h-5 w-5" strokeWidth={1.5} />
      )}
      <span className="sr-only">{playing ? 'Music on' : 'Music off'}</span>
    </button>
  )
}
