'use client'

import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

/* ---------- Scroll reveal wrapper ---------- */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ---------- Decorative floral corner (inline SVG line-art) ---------- */
export function FloralCorner({
  position = 'top-left',
  className,
  size = 200,
  opacity = 0.5,
}: {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  className?: string
  size?: number
  opacity?: number
}) {
  const flip: Record<string, string> = {
    'top-left': '',
    'top-right': 'scale-x-[-1]',
    'bottom-left': 'scale-y-[-1]',
    'bottom-right': 'scale-x-[-1] scale-y-[-1]',
  }
  const place: Record<string, string> = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
  }
  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute z-0 select-none', place[position], className)}
      style={{ width: size, height: size, opacity }}
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        className={cn('h-full w-full text-gold', flip[position])}
      >
        <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
          <path d="M6 6C48 22 84 58 100 100 116 142 152 178 194 194" opacity="0.7" />
          <path d="M6 6C40 10 72 30 92 62" opacity="0.55" />
          <path d="M6 6C18 40 30 66 40 78" opacity="0.5" />
          {/* leaves */}
          <path d="M40 36c10-6 22-4 30 4-11 3-22 1-30-4Z" fill="currentColor" fillOpacity="0.22" />
          <path d="M64 70c11-4 22 0 29 9-11 1-22-2-29-9Z" fill="currentColor" fillOpacity="0.22" />
          <path d="M26 62c8 8 12 18 10 28-8-6-12-17-10-28Z" fill="currentColor" fillOpacity="0.22" />
        </g>
        {/* rose blossoms */}
        <g className="text-primary" stroke="currentColor" strokeWidth="1.2">
          <circle cx="20" cy="20" r="9" fill="currentColor" fillOpacity="0.18" />
          <circle cx="20" cy="20" r="4.5" fill="currentColor" fillOpacity="0.28" />
          <circle cx="54" cy="52" r="7" fill="currentColor" fillOpacity="0.16" />
          <circle cx="90" cy="96" r="6" fill="currentColor" fillOpacity="0.16" />
        </g>
      </svg>
    </div>
  )
}

/* ---------- Floral divider (inline SVG ornament) ---------- */
export function FloralDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn('mx-auto flex items-center justify-center gap-3', className)}
    >
      <span className="h-px w-10 bg-gold/50 sm:w-16" />
      <svg viewBox="0 0 120 24" className="h-5 w-24 text-gold" fill="none">
        <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
          <path d="M8 12c14-9 28-9 42 0M112 12c-14-9-28-9-42 0" opacity="0.7" />
          <path d="M24 12c-4-5-10-6-16-4 3 5 9 7 16 4ZM96 12c4-5 10-6 16-4-3 5-9 7-16 4Z" fill="currentColor" fillOpacity="0.2" />
        </g>
        <g className="text-primary" stroke="currentColor" strokeWidth="1.1">
          <circle cx="60" cy="12" r="5.5" fill="currentColor" fillOpacity="0.22" />
          <circle cx="60" cy="12" r="2.5" fill="currentColor" fillOpacity="0.35" />
        </g>
      </svg>
      <span className="h-px w-10 bg-gold/50 sm:w-16" />
    </div>
  )
}

/* ---------- Section eyebrow + title ---------- */
export function SectionTitle({
  eyebrow,
  title,
  className,
  light = false,
}: {
  eyebrow?: string
  title: string
  className?: string
  light?: boolean
}) {
  return (
    <div className={cn('flex flex-col items-center text-center', className)}>
      {eyebrow ? (
        <span
          className={cn(
            'mb-3 text-xs uppercase tracking-luxury',
            light ? 'text-gold-soft' : 'text-gold',
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          'text-pretty text-3xl font-medium sm:text-4xl md:text-5xl',
          light ? 'text-background' : 'text-primary',
        )}
      >
        {title}
      </h2>
      <FloralDivider className="mt-5" />
    </div>
  )
}
