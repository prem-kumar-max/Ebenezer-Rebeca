'use client'

import { CalendarDays, Clock, MapPin, Utensils, BookOpen, Mic2 } from 'lucide-react'
import { Reveal, SectionTitle, FloralDivider, FloralCorner } from './ui'

const DETAILS = [
  {
    icon: CalendarDays,
    label: 'The Date',
    lines: ['Thursday', '06 August 2026'],
  },
  {
    icon: Clock,
    label: 'The Time',
    lines: ['5:00 PM', 'Onwards'],
  },
  {
    icon: MapPin,
    label: 'The Venue',
    lines: ['Ashok Function Hall', 'Nunna, Vijayawada'],
  },
  {
    icon: Utensils,
    label: 'Reception',
    lines: ['Followed by', 'Dinner'],
  },
]

export function Details() {
  return (
    <section id="details" className="relative overflow-hidden bg-background py-24 sm:py-32">
      <FloralCorner position="top-left" opacity={0.5} size={220} />
      <FloralCorner position="bottom-right" opacity={0.5} size={220} />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <SectionTitle eyebrow="Join us as we celebrate" title="Wedding Details" />

        {/* Detail cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DETAILS.map((d, i) => {
            const Icon = d.icon
            return (
              <Reveal
                key={d.label}
                delay={i * 0.08}
                className="flex flex-col items-center rounded-2xl border border-border bg-cream px-6 py-10 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold-soft/60 text-primary">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <span className="mt-5 text-xs uppercase tracking-luxury text-gold">{d.label}</span>
                {d.lines.map((line, idx) => (
                  <p
                    key={line}
                    className={
                      idx === 0
                        ? 'mt-2 font-display text-xl text-primary'
                        : 'font-body text-lg text-muted-foreground'
                    }
                  >
                    {line}
                  </p>
                ))}
              </Reveal>
            )
          })}
        </div>

        {/* Ceremony */}
        <Reveal className="mx-auto mt-20 max-w-3xl">
          <div className="rounded-3xl border border-border bg-cream px-8 py-12 text-center shadow-sm sm:px-14">
            <span className="text-xs uppercase tracking-luxury text-gold">The Ceremony</span>
            <h3 className="mt-3 font-script text-4xl text-primary sm:text-5xl">Holy Matrimony</h3>
            <FloralDivider className="mt-6" />

            <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2">
              <div className="flex flex-col items-center">
                <BookOpen className="h-6 w-6 text-primary" strokeWidth={1.5} />
                <p className="mt-3 text-xs uppercase tracking-wide-lux text-muted-foreground">
                  To be Solemnized by
                </p>
                <p className="mt-2 font-display text-xl text-primary">Pastor P. Job Aseesh Garu</p>
                <p className="font-body text-base text-muted-foreground">
                  Job Memorial Baptist Church, Visakhapatnam
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Mic2 className="h-6 w-6 text-primary" strokeWidth={1.5} />
                <p className="mt-3 text-xs uppercase tracking-wide-lux text-muted-foreground">
                  Message by
                </p>
                <p className="mt-2 font-display text-xl text-primary">Daniel Cephas</p>
                <p className="font-body text-base text-muted-foreground">
                  The Potters Church, Hyderabad
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Parents */}
        <Reveal className="mx-auto mt-14 max-w-4xl">
          <p className="text-center font-body text-lg italic text-muted-foreground">
            With the blessings of our beloved parents
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-background px-8 py-10 text-center shadow-sm">
              <span className="text-xs uppercase tracking-luxury text-gold">Groom&apos;s Parents</span>
              <p className="mt-4 font-display text-xl text-primary">Mr. Kareti Peter (Dhananjeyulyu)</p>
              <p className="mt-1 font-display text-xl text-primary">Mrs. Deborah (Srilakshmi)</p>
            </div>
            <div className="rounded-2xl border border-border bg-background px-8 py-10 text-center shadow-sm">
              <span className="text-xs uppercase tracking-luxury text-gold">Bride&apos;s Parents</span>
              <p className="mt-4 font-display text-xl text-primary">
                Mr.Pastor Golla Srinivas Rao (Paul)
              </p>
              <p className="mt-1 font-display text-xl text-primary">Mrs. Durga (Hepsiba)</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
