import { create } from 'zustand'

interface WallpaperState {
  width: number
  height: number
  backgroundColor: string
  text: string
  blur: number
  setSize: (w: number, h: number) => void
  setBackgroundColor: (color: string) => void
  setText: (text: string) => void
  setBlur: (blur: number) => void
}

export const useWallpaperStore = create<WallpaperState>((set) => ({
  width: 1920,
  height: 1080,
  backgroundColor: '#ffffff',
  text: 'Hello WallpaperForge!',
  blur: 0,
  setSize: (w, h) => set({ width: w, height: h }),
  setBackgroundColor: (color) => set({ backgroundColor: color }),
  setText: (text) => set({ text }),
  setBlur: (blur) => set({ blur }),
}))
