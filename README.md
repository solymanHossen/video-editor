# 🎬 Cinematic Motion Editor

> **A World-Class Programmatic Motion Graphics & Video Editing Framework powered by [Remotion](https://www.remotion.dev/) and React.**

Designed for high-retention, cinematic 9:16 vertical videos (YouTube Shorts, Instagram Reels, TikTok) with Hollywood/Vox-style kinetic typography, silky smooth camera physics, and multi-layer Foley sound design.

---

## ✨ Features

- **🔥 Borderless Kinetic Typography:** Pure, box-free modern typography with vibrant golden karaoke word highlights, spring-scale pops (`1.20x`), and multi-layer drop shadows for crystal-clear readability against any visual backdrop.
- **🎥 Silky S-Curve Camera Physics:** Smooth cosine-eased (`easeInOut`) camera glides, 2.5D handheld camera drift, and cinematic vignette depth without jarring cuts.
- **🔊 Multi-layered Foley Sound Design:** Layered audio pipeline with background music ducking, voiceover clarity, contextual Foley effects (nature, cooking, tension, trains), and soft transition whooshes.
- **📊 Minimalist Top Retention Bar:** Subtle golden gradient progress line across the top edge to maximize viewer retention.
- **🖥️ Live Visual Studio (GUI):** Run `npm run dev` to scrub through timelines, preview frames with sub-millisecond precision, and inspect props directly in your browser.
- **⚡ High-Performance Rendering:** Headless Chromium multi-threaded video rendering into production-ready 1080×1920 H.264 MP4 files.

---

## 📁 Repository Structure

```
.
├── src/
│   ├── CinematicShort/
│   │   ├── Scene.tsx       # Dynamic camera drift, borderless captions & SFX
│   │   ├── data.ts        # Scene definitions, durations, and word timings
│   │   ├── types.ts       # TypeScript interfaces for scenes & phrases
│   │   └── index.tsx      # Main composition with series sequencing
│   ├── Root.tsx           # Remotion Root composition registrations
│   └── index.ts           # Entry point
├── public/
│   ├── images/            # Put your scene images here (.jpg, .png)
│   ├── audio/             # Put your voiceover audio files here (.mp3, .wav)
│   ├── sfx/               # Contextual sound effects & background drones
│   └── HindSiliguri-Bold.ttf # High-quality typography font
├── package.json
├── remotion.config.ts
└── tsconfig.json
```

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Launch Live Preview Studio
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to interactively preview and edit your video timeline.

### 3. Render Final Video
```bash
npm run render
```
The rendered video will be saved directly into `out/video.mp4` at **1080×1920 (9:16 Full HD) @ 30fps**.

---

## 🛠️ Adding New Scenes

Edit `src/CinematicShort/data.ts`:

```typescript
export const scenes: SceneData[] = [
  {
    id: 1,
    image: 'images/your_image.jpg',
    audio: 'audio/your_voiceover.mp3',
    sfx: 'sfx/your_ambient_sound.wav',
    durationInFrames: 300, // 10s at 30fps
    motionType: 'smoothZoomIn',
    phrases: [
      {
        startSec: 0.0,
        endSec: 3.5,
        words: ['Your', 'first', 'kinetic', 'sentence', 'here'],
      },
    ],
  },
];
```

Available motion styles:
- `smoothZoomIn`: Slow cinematic forward push
- `smoothZoomFace`: Focused portrait zoom with subtle drift
- `smoothMacroPush`: Macro culinary/object focus
- `smoothPanDown`: Top-to-bottom graceful reveal
- `smoothRiverPull`: Wide landscape retreat with breathing sway

---

## 📜 License

MIT License. Crafted for world-class creators and developers.
# video-editor
