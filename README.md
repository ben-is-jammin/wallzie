# wallzie

# 🖼️ WallpaperForge: AI-Powered Wallpaper Generator

**Wallzie** is a dynamic, interactive wallpaper creation web application. It enables users to generate, customize, and download wallpapers in various resolutions using a range of artistic tools and filters.

This README provides a detailed specification and prompt for an AI (e.g., Codex) to generate the application from scratch.

---

## 📌 Application Prompt (For Codex / AI-Based Codegen Tools)

**Prompt:**

> Build a responsive web application called **WallpaperForge**. It should allow users to create wallpapers with a range of dimensions (e.g., 1920x1080, 4K, phone resolutions, custom sizes), and offer multiple tools to adjust and apply visual effects in real-time. Include a modern UI, canvas-based drawing and filtering, real-time previews, and export options. Use **React** with **Three.js**, **Fabric.js**, or **React Konva** for canvas handling. Provide advanced image filters (blur, saturation, contrast, color overlays, glitch effects), background gradients, text overlays, AI-generated texture options, and pattern creators.

---

## ⚙️ Features

### ✅ Core Functionality
- Wallpaper canvas with adjustable dimensions (preset and custom)
- Real-time preview of wallpaper edits
- Export wallpaper in PNG and JPG format

### 🎨 Customization Tools
- Solid color, gradient, and image backgrounds
- Drawing tools (freehand, shapes, brush thickness)
- Text overlay (font selector, size, alignment, color)
- Image filters:
  - Blur
  - Saturation
  - Brightness
  - Contrast
  - Sepia
  - Grayscale
  - Hue Rotation
- Pattern Generator:
  - Dotted, grid, and noise patterns
  - Symmetry and kaleidoscope modes

### 🤖 AI-Generated Textures (Optional Extension)
- Integration with OpenAI's DALL·E or Stability AI API to generate unique textures
- Prompt-based texture generation with style options (e.g., cyberpunk, minimalist, abstract)

---

## 💻 Technical Stack

### Frontend
- **React** (Next.js recommended for SSR and deployment)
- **Tailwind CSS** for responsive styling and theming
- **React Konva** or **Fabric.js** for 2D canvas rendering and editing
- **Three.js** (optionally via `@react-three/fiber`) for 3D-style wallpapers or effects
- **zustand** or **Redux Toolkit** for state management
- **html-to-image** or **canvas.toBlob()** for image export

### Optional AI Image Tools
- **OpenAI API** or **Stability AI API** for texture/image generation
- **n8n** or a backend Express.js server (optional) to queue and handle AI image jobs

---

## 🧭 User Flow

1. **Select Dimensions:**
   - Choose from presets (e.g., 1080p, 4K, Phone)
   - Or enter custom width × height

2. **Customize Wallpaper:**
   - Choose background type (color, gradient, image, AI texture)
   - Add overlays (patterns, text, shapes)
   - Apply image filters
   - Preview changes in real-time

3. **Export Image:**
   - Export as PNG or JPG
   - Option to choose compression level and DPI

---

## 📦 Folder Structure (Suggestion)

wallpaperforge/
├── public/
│ └── assets/
├── src/
│ ├── components/
│ │ ├── CanvasEditor.tsx
│ │ ├── FilterControls.tsx
│ │ ├── TextOverlay.tsx
│ │ ├── ExportPanel.tsx
│ │ └── SettingsSidebar.tsx
│ ├── hooks/
│ │ └── useWallpaperStore.ts
│ ├── pages/
│ │ └── index.tsx
│ ├── styles/
│ │ └── globals.css
│ └── utils/
│ └── exportHelpers.ts
├── .env
├── tailwind.config.js
└── package.json


---

## 🚀 How to Run

```bash
# 1. Clone repo
git clone https://github.com/yourname/wallpaperforge
cd wallpaperforge

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
Ensure Node.js >= 18 and Next.js >= 14 for compatibility with app directory.

