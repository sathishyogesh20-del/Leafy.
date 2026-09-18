# 🌿 Leafy - AI Plant Care & Mobile Garden Assistant (PWA)

Leafy is a mobile Progressive Web App (PWA) featuring a **real-time live camera viewfinder**, **AI plant scanner simulation**, and an **encyclopedic knowledge base** tailored for home garden, traditional medicinal herbs, vegetables, and household flora.

---

## 🌟 Key Features

- **📱 Full PWA Support**: Installable on Android & iOS as a standalone app with offline caching via Service Worker.
- **📷 Live Camera Viewfinder**: WebRTC-powered live camera stream with scanning laser reticle, front/rear camera toggle, and instant canvas shutter capture.
- **🏡 Home Garden & Traditional Plants**: Deep botanical, Ayurvedic, and care data for:
  - Money Plant, Tulsi (Holy Basil), Jasmine (Mogra), Henna (Mehndi), Oma Valli (Karpooravalli / Mexican Mint)
  - Rose (Desi Gulab), Bitter Gourd (Pavakkai / Karela), Tomato (Thakkali), Betel Leaf (Paan / Vetrillai)
  - Curry Leaf Tree, Neem Tree, Aloe Vera, Hibiscus (Sembaruthi), Snake Plant, Monstera Deliciosa.
- **🔍 Quick Search & Category Filters**: Search by common, regional, or scientific names across categories (Home Garden, Herbs, Veggies & Gourds, Flowering, Houseplants, Succulents, Trees).

---

## 🚀 One-Click Deploy to Vercel via GitHub

### Step 1: Initialize Git & Push to GitHub

In your project directory (`cosmos-leafy`), open your terminal or command prompt:

```bash
git init
git add .
git commit -m "feat: initial commit for Leafy PWA with live viewfinder and garden plant database"
git branch -M main
git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
git push -u origin main
```

### Step 2: Connect to Vercel

1. Log into your [Vercel Dashboard](https://vercel.com).
2. Click **"Add New..."** > **"Project"**.
3. Select your GitHub repository (`cosmos-leafy`).
4. Keep the Framework Preset as **"Other"** (it is pure static web / zero-configuration).
5. Click **"Deploy"**.

Your app will be instantly live on a secure HTTPS URL (e.g. `https://leafy-*.vercel.app`), which enables:
- Camera hardware access (`getUserMedia` requires HTTPS).
- Native PWA installation prompts on Android Chrome & iOS Safari.
- Instant offline capabilities via `sw.js`.
