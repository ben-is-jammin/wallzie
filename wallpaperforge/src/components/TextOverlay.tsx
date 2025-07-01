'use client'
import { useWallpaperStore } from '../hooks/useWallpaperStore'

export default function TextOverlay() {
  const { text, setText } = useWallpaperStore()

  return (
    <div className="space-y-2">
      <label className="block">Text Overlay</label>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-1 w-full"
      />
    </div>
  )
}
