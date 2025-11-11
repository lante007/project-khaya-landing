# Project Khaya - Landing Page

A modern, responsive landing page for Project Khaya - a job bidding marketplace connecting homeowners with skilled tradespeople and material suppliers across KwaZulu-Natal, South Africa.

## 🎯 Overview

Project Khaya is a three-sided marketplace platform that enables:
- **Homeowners** to post jobs (building projects and home maintenance) and receive competitive bids
- **Skilled Workers** to find jobs, submit bids, and grow their business
- **Material Suppliers** to list products and bid on supply contracts

## ✨ Features

- **Behavioral Science-Driven Design**: Implements proven psychological principles (social proof, loss aversion, risk reversal) to maximize conversions
- **Clear Value Proposition**: Addresses pain points and emphasizes the job bidding model
- **Three User Pathways**: Dedicated sections for homeowners, workers, and suppliers
- **Responsive Design**: Mobile-first approach, fully responsive across all devices
- **Modern Tech Stack**: React 19, Tailwind CSS 4, TypeScript, Vite
- **Accessible**: WCAG-compliant with proper semantic HTML and ARIA labels
- **Performance Optimized**: Fast loading times with optimized images and code splitting

## 🚀 Getting Started

### Prerequisites

- Node.js 22.x or higher
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/lante007/project-khaya-landing.git
cd project-khaya-landing
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 🛠️ Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4 with custom design tokens
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Routing**: Wouter
- **TypeScript**: Full type safety

## 📁 Project Structure

```
client/
├── public/              # Static assets (images, favicon)
├── src/
│   ├── components/      # Reusable UI components
│   │   └── ui/         # shadcn/ui components
│   ├── contexts/       # React contexts
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── pages/          # Page components
│   │   └── Home.tsx    # Main landing page
│   ├── App.tsx         # App entry with routing
│   ├── main.tsx        # React DOM entry
│   ├── index.css       # Global styles & Tailwind config
│   └── const.ts        # App constants
```

## 🎨 Design System

### Colors (Warm Orange/Terracotta Theme)
- **Primary**: `oklch(0.68 0.15 40)` - Warm orange
- **Secondary**: `oklch(0.55 0.13 30)` - Deep terracotta
- **Accent**: `oklch(0.78 0.16 50)` - Lighter orange

### Typography
- **Headings**: Poppins (700 weight)
- **Body**: Inter (400-700 weights)

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🧪 Testing Responsiveness

The landing page has been tested and optimized for:
- **Mobile devices**: iPhone, Android phones (320px - 480px)
- **Tablets**: iPad, Android tablets (768px - 1024px)
- **Desktops**: All screen sizes (1024px+)
- **Browsers**: Chrome, Firefox, Safari, Edge

## 📦 Build for Production

```bash
pnpm build
```

The production-ready files will be in the `dist/` directory.

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
pnpm add -g vercel
vercel
```

### Deploy to Netlify
```bash
pnpm build
# Upload the dist/ folder to Netlify
```

### Deploy via Manus Platform
Use the Manus Management UI to publish directly from the dashboard.

## 🎯 Behavioral Science Principles Applied

1. **Social Proof**: Star ratings, user counts, and testimonials build trust
2. **Loss Aversion**: Emphasizes problems solved (no ghosting, no hidden costs)
3. **Risk Reversal**: "Free to join", "No hidden fees", "100% guarantee"
4. **Scarcity**: "1,500+ Jobs Completed" creates FOMO
5. **Clear CTAs**: Action-oriented buttons ("Post a Job", "Sign Up to Earn")
6. **Cognitive Ease**: 3-step process simplifies complex actions
7. **Framing**: "Old Way vs Khaya Way" comparison highlights benefits

## 📝 Key Sections

1. **Hero**: Compelling headline with dual CTAs for different user types
2. **Trust Bar**: Quick credibility indicators
3. **Marketplace Overview**: Three user type cards with benefits
4. **How It Works**: Simple 3-step process
5. **Job Types**: Visual examples of building and maintenance work
6. **Problem/Solution**: Comparison highlighting platform benefits
7. **Testimonials**: Real stories from all three user types
8. **Final CTA**: Strong closing with dual CTAs and risk reversal

## 🔧 Customization

### Update Logo
Edit `client/src/const.ts`:
```typescript
export const APP_LOGO = "/logo.png";
```

### Update Colors
Edit `client/src/index.css` in the `:root` section.

### Update Content
Edit `client/src/pages/Home.tsx` to modify copy, images, or structure.

## 📄 License

© 2025 Project Khaya. All rights reserved.

## 🤝 Contributing

This is a private project. For questions or support, contact the Project Khaya team.

## 📧 Contact

- Website: projectkhaya.co.za
- Email: hello@projectkhaya.co.za
- Location: Estcourt, KwaZulu-Natal, South Africa

---

**Ubuntu ngumuntu ngabantu** - A person is a person through other people
