import { useEffect } from 'react'

export function useMusicControl(videoPlaying: boolean) {
  useEffect(() => {
    const musicButton = document.querySelector('[aria-label="Turn music off"], [aria-label="Turn music on"]') as HTMLButtonElement
    
    if (!musicButton) return

    if (videoPlaying) {
      // Video is playing - pause music
      const isPlaying = musicButton.getAttribute('aria-pressed') === 'true'
      if (isPlaying) {
        musicButton.click()
        // Store that music was playing
        localStorage.setItem('musicWasPlaying', 'true')
      }
    } else {
      // Video stopped - resume music if it was playing
      const wasPlaying = localStorage.getItem('musicWasPlaying')
      if (wasPlaying === 'true') {
        const isCurrentlyPlaying = musicButton.getAttribute('aria-pressed') === 'true'
        if (!isCurrentlyPlaying) {
          musicButton.click()
        }
        localStorage.removeItem('musicWasPlaying')
      }
    }
  }, [videoPlaying])
}
