# 🔥 React Fire Embers

Beautiful rising fire ember particle effect for the web

A lightweight React component that brings a mesmerising campfire atmosphere to your page with CSS-animated sparks that rise, drift, and flicker.

[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [Configuration](#-configuration) • [Technical Details](#-technical-details) • [License](#-license)

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![CSS Animations](https://img.shields.io/badge/CSS-Animations-1572B6?logo=css3&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

### Core Animation
- 🔥 **Rising Sparks** — 50 particles float upward from the bottom of the screen like embers from a campfire
- 💨 **Erratic Drift** — Each spark follows a unique randomised horizontal drift path with 5 waypoints
- ✨ **Realistic Flicker** — Fast step-based flicker animation toggles between bright and dim glow states
- 🎨 **Dynamic Colour** — Each particle gets a unique hue (warm yellows to deep oranges) and glow intensity

### Technical
- ⚡ **Pure CSS Animations** — No canvas, no WebGL, no JavaScript animation loops
- 🪶 **Lightweight** — Zero external animation dependencies
- 📱 **Responsive** — Full viewport coverage, works on any screen size
- 🚫 **Non-intrusive** — `pointer-events: none` overlay, doesn't interfere with page interaction

---

## 🎬 Demo

### [🔗 Live Demo](https://BenBrady96.github.io/react-fire-embers/)

---

## 📦 Installation

### Quick Start

```bash
# Clone the repository
git clone https://github.com/BenBrady96/react-fire-embers.git
cd react-fire-embers

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173/react-fire-embers/](http://localhost:5173/react-fire-embers/) to view it locally.

---

## ⚙️ Configuration

### Particle Properties

Each of the 50 sparks is randomly generated with the following ranges:

| Property | Range | Description |
|---|---|---|
| Size | 1.5–4.5px | Small bright points |
| Rise Duration | 4–8s | Time to float from bottom to top |
| Drift Duration | 1–2.5s | Horizontal sway cycle speed |
| Flicker Duration | 0.1–0.4s | Brightness toggle speed |
| Hue | 15°–50° | Warm yellow to deep orange |
| Lightness | 55%–75% | Brightness variation |
| Drift Range | ±40px | Horizontal movement per waypoint |

### Customising

Edit `src/FireEmbers.jsx` to adjust:
- **Particle count** — Change `length: 50` to your preferred count
- **Colour range** — Modify the `hue` and `lightness` calculations
- **Speed** — Adjust `riseDuration`, `driftDuration`, and `flickerDuration` ranges
- **Drift intensity** — Change the `* 80` multiplier in `driftRange`

---

## 🏗️ Technical Details

### Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | Component rendering & state |
| Vite 7 | Build tooling & dev server |
| CSS Keyframes | All particle animation |
| CSS Custom Properties | Per-particle randomisation |
| gh-pages | One-command deployment |

### Project Structure

```
react-fire-embers/
├── src/
│   ├── FireEmbers.jsx    # Particle generator component
│   ├── FireEmbers.css    # Keyframe animations & styles
│   ├── App.jsx           # Root app component
│   ├── index.css         # Global styles (dark background)
│   └── main.jsx          # React entry point
├── index.html            # HTML shell
├── vite.config.js        # Vite config with GitHub Pages base path
└── package.json          # Dependencies & deploy scripts
```

### How It Works

1. **On mount**, `FireEmbers` generates 50 particle objects with randomised properties
2. Each particle is rendered as a tiny `<div>` with CSS custom properties (`--rise-duration`, `--drift-left`, etc.)
3. **Three layered CSS animations** run simultaneously on each particle:
   - `spark-rise` — vertical movement from bottom to top
   - `spark-drift` — horizontal sway through 5 random waypoints
   - `spark-flicker` — rapid brightness/glow toggling
4. All animation is handled by the browser's compositor — **zero JavaScript runs per frame**

---

## 📄 License

MIT - see [LICENSE](LICENSE) for details.

---

## 📧 Contact

- [GitHub](https://github.com/BenBrady96)
- [LinkedIn](https://www.linkedin.com/in/ben-brady-b241642b4/)
