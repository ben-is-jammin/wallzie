'use client'
import { Stage, Layer, Rect, Text } from 'react-konva'
import { useRef } from 'react'
import { useWallpaperStore } from '../hooks/useWallpaperStore'

export default function CanvasEditor() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { width, height, backgroundColor, text, blur } = useWallpaperStore()

  return (
    <div ref={containerRef} className="border inline-block" style={{ filter: `blur(${blur}px)` }}>
      <Stage width={width} height={height}>
        <Layer>
          <Rect width={width} height={height} fill={backgroundColor} />
          <Text
            text={text}
            x={width / 2}
            y={height / 2}
            fontSize={48}
            fill="#000"
            width={width}
            align="center"
            offsetY={24}
          />
        </Layer>
      </Stage>
    </div>
  )
}
