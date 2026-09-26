# 🌿 Leafy — AI Plant Doctor (Apple Edition)
> **Powered by Grok Vision, OpenAI Vision & [Cosmos AI](https://sathishyogesh20-del.github.io/MY_PORTFOLIO/)**

Leafy is an ultra-premium, mobile-first **Progressive Web App (PWA)** inspired by Apple Human Interface Guidelines and Apple Intelligence aesthetics. It integrates a 3D glassmorphic live camera viewfinder, multi-spectral plant vision diagnosis, insect/pollinator attraction reports, and an encyclopedic Ayurvedic botanical manual (`plant.md`).

---

## ✨ Features & Architecture

- 🍎 **Apple Fluid Design System**:
  - Continuous iOS squircle icons (`icon-192.svg`, `icon-512.svg`).
  - Frosted glassmorphism (`backdrop-filter: blur(40px)`), ambient 3D glowing emerald light orbs, and haptic button feedback.
  - 6-Card Bento diagnostic grid with visual trait chips and match confidence meters.
- 👁️ **Grok Vision & OpenAI Multimodal AI**:
  - Native support for **xAI Grok Vision** (`grok-2-vision-1212`) and **OpenAI Vision** (`gpt-4o`).
  - In-app ⚙️ Settings dialog to switch models and configure API keys securely in `localStorage`.
- 📷 **Live Optic Viewfinder**:
  - Real-time video stream via WebRTC with an animated emerald laser reticle.
  - Organ selector (*Leaf, Flower, Fruit, Bark*) to boost identification accuracy.
  - Camera flip (rear/selfie) and instant shutter grab.
- 🐝 **Ecosystem & Health Reports**:
  - Benefical pollinators (bees, butterflies, sunbirds) vs. targeted pests (mealybugs, aphids, fruit flies).
  - Critical care triggers (overwatering vs. underwatering, soil aeration, compost, repotting).
  - Ayurvedic, culinary, and medicinal uses.
  - Pet toxicity and safety warnings.
- 📱 **Complete PWA**:
  - Fully offline capable via `sw.js` (Cache-First with network revalidation).
  - Installable to home screen on iOS (Safari) and Android (Chrome).

---

## 📂 Project Directory Structure

```text
cosmos-leafy/
├── index.html          # Main Apple-designed PWA application
├── manifest.json       # Web App Manifest with iOS squircle icons
├── sw.js               # Service Worker v6 with offline caching
├── plants-data.js      # Curated Indian garden & Ayurvedic database
├── plant.md            # Comprehensive botanical manual & AI reference
├── vercel.json         # Vercel deployment & security headers
├── icon-192.svg        # 192x192 Apple-style SVG icon
├── icon-512.svg        # 512x512 Apple-style SVG icon
├── api/
│   └── analyze.js      # Serverless API proxy for Grok & OpenAI
└── README.md           # Project documentation & migration guide
```

---

## 🚀 How to Move to a New Google / GitHub Account

Follow these steps to move this entire repository to your new account:

### Step 1: Open PowerShell / Terminal in this folder
```powershell
cd "c:\Users\LENOVO\OneDrive\Desktop\cosmos-leafy"
```

### Step 2: Remove old Git remote (if present)
```powershell
git remote remove origin
```

### Step 3: Create a new repository on your new GitHub account
1. Log in to [GitHub](https://github.com) with your new Google/GitHub account.
2. Click **New Repository**, name it (e.g. `leafy`), and keep it **Public** (or Private).
3. Do NOT initialize with a README (this folder already has everything).

### Step 4: Link & Push to your new repository
```powershell
git add .
git commit -m "feat: complete Leafy Apple Edition with Grok Vision and Cosmos AI"
git branch -M main
git remote add origin https://github.com/<YOUR-NEW-USERNAME>/<YOUR-NEW-REPO>.git
git push -u origin main --force
```

### Step 5: Deploy to Vercel
1. Log in to [Vercel](https://vercel.com) using your new Google/GitHub account.
2. Click **"Add New..."** > **"Project"**.
3. Import your new repository.
4. (Optional) In **Environment Variables**, you can add:
   - `GROK_API_KEY`: Your xAI Grok API key
   - `OPENAI_API_KEY`: Your OpenAI key
5. Click **Deploy**.

---

## 🌿 Powered By
Built with passion by **[Cosmos AI](https://sathishyogesh20-del.github.io/MY_PORTFOLIO/)**.
