'use client'

import { useEffect, useState } from 'react'

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Auto-dismiss after 3 seconds
    const dismissTimer = setTimeout(() => {
      setIsVisible(false)
    }, 3000)

    return () => {
      clearTimeout(dismissTimer)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white overflow-hidden">
      {/* Top Left Corner Decoration */}
      <svg className="absolute top-0 left-0 w-40 h-40 pointer-events-none" viewBox="0 0 120 120" preserveAspectRatio="xMinYMin meet">
        <g>
          <path
            d="M 20 10 Q 50 50 20 90"
            stroke="#b08d3f"
            strokeWidth="2"
            fill="none"
            style={{
              animation: 'drawLine 1.5s ease-in-out forwards',
            }}
          />
          <circle cx="20" cy="10" r="3" fill="#b08d3f" style={{
            animation: 'fadeIn 0.8s ease-out forwards',
            animationDelay: '0.2s',
          }} />
          <circle cx="20" cy="90" r="3" fill="#b08d3f" style={{
            animation: 'fadeIn 0.8s ease-out forwards',
            animationDelay: '1.3s',
          }} />
        </g>
      </svg>

      {/* Top Right Corner Decoration */}
      <svg className="absolute top-0 right-0 w-40 h-40 pointer-events-none" viewBox="0 0 120 120" preserveAspectRatio="xMaxYMin meet">
        <g>
          <path
            d="M 100 10 Q 70 50 100 90"
            stroke="#b08d3f"
            strokeWidth="2"
            fill="none"
            style={{
              animation: 'drawLine 1.5s ease-in-out forwards',
            }}
          />
          <circle cx="100" cy="10" r="3" fill="#b08d3f" style={{
            animation: 'fadeIn 0.8s ease-out forwards',
            animationDelay: '0.2s',
          }} />
          <circle cx="100" cy="90" r="3" fill="#b08d3f" style={{
            animation: 'fadeIn 0.8s ease-out forwards',
            animationDelay: '1.3s',
          }} />
        </g>
      </svg>

      {/* Bottom Left Corner Decoration */}
      <svg className="absolute bottom-0 left-0 w-40 h-40 pointer-events-none" viewBox="0 0 120 120" preserveAspectRatio="xMinYMax meet">
        <g>
          <path
            d="M 20 110 Q 50 70 20 30"
            stroke="#b08d3f"
            strokeWidth="2"
            fill="none"
            style={{
              animation: 'drawLine 1.5s ease-in-out forwards',
              animationDelay: '0.1s',
            }}
          />
          <circle cx="20" cy="110" r="3" fill="#b08d3f" style={{
            animation: 'fadeIn 0.8s ease-out forwards',
            animationDelay: '0.3s',
          }} />
          <circle cx="20" cy="30" r="3" fill="#b08d3f" style={{
            animation: 'fadeIn 0.8s ease-out forwards',
            animationDelay: '1.4s',
          }} />
        </g>
      </svg>

      {/* Bottom Right Corner Decoration */}
      <svg className="absolute bottom-0 right-0 w-40 h-40 pointer-events-none" viewBox="0 0 120 120" preserveAspectRatio="xMaxYMax meet">
        <g>
          <path
            d="M 100 110 Q 70 70 100 30"
            stroke="#b08d3f"
            strokeWidth="2"
            fill="none"
            style={{
              animation: 'drawLine 1.5s ease-in-out forwards',
              animationDelay: '0.1s',
            }}
          />
          <circle cx="100" cy="110" r="3" fill="#b08d3f" style={{
            animation: 'fadeIn 0.8s ease-out forwards',
            animationDelay: '0.3s',
          }} />
          <circle cx="100" cy="30" r="3" fill="#b08d3f" style={{
            animation: 'fadeIn 0.8s ease-out forwards',
            animationDelay: '1.4s',
          }} />
        </g>
      </svg>

      {/* Center Content */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center px-6">
        {/* Ebenezer */}
        <h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground"
          style={{
            animation: 'fadeInDown 0.8s ease-out forwards',
            fontWeight: 300,
            letterSpacing: '-0.02em',
            marginBottom: '0.5rem',
          }}
        >
          Ebenezer
        </h1>

        {/* Heart */}
        <div
          style={{
            animation: 'pulse 2s ease-in-out 0.5s infinite, fadeIn 0.6s ease-out forwards',
            marginY: '1rem',
            fontSize: '3rem',
          }}
        >
          💛
        </div>

        {/* Rebeca */}
        <h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground"
          style={{
            animation: 'fadeInUp 0.8s ease-out forwards',
            animationDelay: '0.3s',
            fontWeight: 300,
            letterSpacing: '-0.02em',
            marginTop: '0.5rem',
          }}
        >
          Rebeca
        </h1>

        {/* Loading Text */}
        <p
          className="mt-12 text-xs sm:text-sm md:text-base text-muted-foreground font-body tracking-[0.3em]"
          style={{
            animation: 'fadeIn 0.8s ease-out forwards',
            animationDelay: '0.8s',
          }}
        >
          LOADING INVITATION...
        </p>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes drawLine {
          from {
            stroke-dasharray: 150;
            stroke-dashoffset: 150;
          }
          to {
            stroke-dasharray: 150;
            stroke-dashoffset: 0;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  )
}
