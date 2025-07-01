'use client'
import { toPng } from 'html-to-image'
import { useRef } from 'react'
import CanvasEditor from './CanvasEditor'

export default function ExportPanel() {
  const ref = useRef<HTMLDivElement>(null)

  const handleExport = async () => {
    if (ref.current) {
      const dataUrl = await toPng(ref.current)
      const link = document.createElement('a')
      link.download = 'wallpaper.png'
      link.href = dataUrl
      link.click()
    }
  }

  return (
    <div>
      <div ref={ref}>
        <CanvasEditor />
      </div>
      <button onClick={handleExport} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Export PNG
      </button>
    </div>
  )
}
