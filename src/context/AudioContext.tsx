"use client"

import { createContext, useContext, useRef, useState } from "react"

type AudioContextType = {
  playing: boolean
  togglePlay: () => void
}

const AudioCtx = createContext<AudioContextType>({ playing: false, togglePlay: () => {} })

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const hasStarted = useRef(false)

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return
    if (!hasStarted.current) {
      audio.currentTime = 5
      hasStarted.current = true
    }
    playing ? audio.pause() : audio.play()
    setPlaying(!playing)
  }

  return (
    <AudioCtx.Provider value={{ playing, togglePlay }}>
      <audio ref={audioRef} src="/music/track.mp3" loop />
      {children}
    </AudioCtx.Provider>
  )
}

export const useAudio = () => useContext(AudioCtx)