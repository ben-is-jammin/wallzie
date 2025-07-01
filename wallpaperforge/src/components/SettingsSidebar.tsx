'use client'
import { useWallpaperStore } from '../hooks/useWallpaperStore'
import TextOverlay from './TextOverlay'
import FilterControls from './FilterControls'

export default function SettingsSidebar() {
  const { width, height, setSize, backgroundColor, setBackgroundColor } = useWallpaperStore()

  return (
    <div className="space-y-4 p-4 w-64 bg-gray-100 h-full overflow-y-auto">
      <div className="space-y-2">
        <label className="block font-semibold">Dimensions</label>
        <div className="flex space-x-2">
          <input
            type="number"
            value={width}
            onChange={(e) => setSize(Number(e.target.value), height)}
            className="border p-1 w-full"
            placeholder="Width"
          />
          <input
            type="number"
            value={height}
            onChange={(e) => setSize(width, Number(e.target.value))}
            className="border p-1 w-full"
            placeholder="Height"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="block font-semibold">Background</label>
        <input type="color" value={backgroundColor} onChange={(e) => setBackgroundColor(e.target.value)} />
      </div>
      <TextOverlay />
      <FilterControls />
    </div>
  )
}
