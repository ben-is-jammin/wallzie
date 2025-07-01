'use client'
import { useWallpaperStore } from '../hooks/useWallpaperStore'

export default function FilterControls() {
  const { blur, setBlur } = useWallpaperStore()

  return (
    <div className="space-y-2">
      <label className="block">Blur: {blur}px</label>
      <input
        type="range"
        min={0}
        max={20}
        value={blur}
        onChange={(e) => setBlur(Number(e.target.value))}
        className="w-full"
      />
    </div>
  )
}
