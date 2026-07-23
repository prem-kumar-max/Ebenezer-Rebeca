'use client'

import { Users, HeartHandshake, HandHeart, Church } from 'lucide-react'
import { Reveal, SectionTitle } from './ui'

const STORY = [
  {
    icon: Users,
    title: 'We Met',
    text: 'Two families, one faith — our paths crossed by grace, and a quiet friendship began to bloom.',
  },
  {
    icon: HandHeart,
    title: 'We Prayed',
    text: 'In prayer we sought His will, and God gently confirmed the promise He had written for us.',
  },
  {
    icon: HeartHandshake,
    title: 'Families United',
    text: 'With the blessing of our parents, two families joined as one in joy and celebration.',
  },
  {
    icon: Church,
    title: 'Wedding Day',
    text: 'And now we step into Holy Matrimony, covenanting our love before God and those we cherish.',
  },
]

export function LoveStory() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle eyebrow="Our journey together" title="Our Love Story" />

        <div className="relative mt-16">
          {/* center line */}
          <span className="absolute left-6 top-0 h-full w-px bg-gold-soft/40 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {STORY.map((item, i) => {
              const Icon = item.icon
              const left = i % 2 === 0
              return (
                <Reveal
                  key={item.title}
                  delay={i * 0.05}
                  className={`relative flex items-start gap-6 md:w-1/2 ${
                    left ? 'md:ml-0 md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'
                  }`}
                >
                  {/* node */}
                  <span
                    className={`absolute top-1 flex h-12 w-12 items-center justify-center rounded-full border border-gold-soft/60 bg-background text-primary shadow-sm ${
                      left
                        ? 'left-0 md:left-auto md:-right-6 md:translate-x-1/2'
                        : 'left-0 md:-left-6 md:-translate-x-1/2'
                    }`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>

                  <div className={`ml-16 md:ml-0 ${left ? '' : ''}`}>
                    <h3 className="font-display text-2xl text-primary">{item.title}</h3>
                    <p className="mt-2 text-pretty font-body text-lg leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
