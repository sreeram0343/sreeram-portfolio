# Sreeram M R - AI/ML Inovator Portfolio

![Tech Hero Portfolio Preview](/public/sreeram-profile.png)

A high-performance, immersive "Tech Hero" portfolio website built for Sreeram M R, showcasing expertise in AI, Machine Learning, and Automated Security.

## 🚀 Key Features

- **"Tech Hero" Aesthetic**: Deep Space Violet & Cyan theme with liquid shader backgrounds.
- **Interactive 3D**: React Three Fiber shader simulations for background visuals.
- **Glassmorphism**: Premium frosted glass UI overlaid on dynamic backgrounds.
- **Performance First**: Built with Next.js 15, React 19, and Tailwind CSS v4.
- **Animations**: Powered by GSAP and Framer Motion for cinematic entrances.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/)
- **3D Graphics**: [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/) & [Three.js](https://threejs.org/)
- **Fonts**: Outfit (Headings) & Inter (Body) via `next/font`

## 📦 Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/sreeram-portfolio.git
    cd sreeram-portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it.

4.  **Build for production:**
    ```bash
    npm run build
    ```

## 🚀 Deployment

### Vercel (Recommended)
This project is optimized for Vercel.

1.  Push your code to a GitHub repository.
2.  Import the project into Vercel.
3.  **IMPORTANT**: Since the project is in a subdirectory, when importing:
    *   Click **Edit** next to **Root Directory**.
    *   Select `next-portfolio` (or enter `next-portfolio`).
    *   Click **Continue**.
4.  Vercel will detect Next.js and deploy automatically.

### GitHub Pages
To deploy to GitHub Pages, you may need to update `next.config.ts` with `output: 'export'`, but Vercel is recommended for full feature support.

## 📁 Project Structure

```
├── app/                  # Next.js App Router
│   ├── globals.css       # Global styles & Tailwind Theme
│   ├── layout.tsx        # Root layout with fonts
│   └── page.tsx          # Main assembly
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Hero, About, Skills, Projects, etc.
│   └── ui/               # Reusable UI components (ShaderBackground, Buttons)
├── lib/
│   └── data.ts           # Portfolio Content
└── public/               # Static assets
```

## 📄 License
MIT
