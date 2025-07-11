import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "WallpaperForge",
  description: "Dynamic wallpaper generator",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  )
}
