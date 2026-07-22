# Selio Marketing Co. 🚀

A modern, high-performance marketing website built with cutting-edge web technologies. Features smooth animations, 3D graphics, and an interactive user experience.

**Live Demo:** https://selio-marketing.vercel.app

---

## 🎯 Features

- ⚡ **Next.js 16** - Latest React framework with App Router
- 🎨 **Advanced Animations** - GSAP, Framer Motion, and smooth scroll effects with Lenis
- 🎭 **3D Graphics** - Three.js and OGL for stunning visual experiences
- 🎯 **Responsive Design** - Tailwind CSS with mobile-first approach
- 📱 **Optimized Performance** - Image optimization, font optimization, and code splitting
- 🔤 **Premium Typography** - Inter, Plus Jakarta Sans, and Syne font families
- ⚙️ **Type-Safe** - Full TypeScript support
- 🧹 **Code Quality** - ESLint configured for best practices

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** 18.17 or later
- **npm**, **yarn**, **pnpm**, or **bun** package manager

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Bineesh627/selio_marketing_co.git
cd selio_marketing_co
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the website in action.

The site will auto-reload as you make changes to files (particularly `app/page.tsx`).

---

## 📦 Project Structure

```
selio_marketing_co/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── public/                # Static assets
├── components/            # Reusable React components
├── styles/                # Global styles and Tailwind config
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── eslint.config.js       # ESLint configuration
└── package.json           # Project dependencies
```

---

## 🛠️ Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server at localhost:3000 |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint to check code quality |

---

## 📚 Tech Stack

### Frontend Framework
- **Next.js 16.2.6** - React framework with SSR/SSG capabilities
- **React 19.2.4** - UI library

### Animation & Graphics
- **GSAP 3.15.0** - Professional-grade animation library
- **@gsap/react 2.1.2** - GSAP React integration
- **Framer Motion 12.38.0** - React animation library
- **Three.js 0.184.0** - 3D graphics library
- **OGL 1.0.11** - WebGL rendering engine
- **Lenis 1.3.23** - Smooth scroll library

### Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **Tailwind Merge 3.6.0** - Utility merging for Tailwind
- **Lucide React 1.14.0** - Icon library

### Typography
- **@fontsource-variable/inter** - Variable Inter font
- **@fontsource-variable/plus-jakarta-sans** - Variable Plus Jakarta Sans font
- **@fontsource/syne** - Syne font

### Utilities
- **clsx 2.1.1** - Utility for constructing className strings

### Development Tools
- **TypeScript 5** - Type safety for JavaScript
- **ESLint 9** - Code linting
- **Tailwind PostCSS 4** - PostCSS plugin for Tailwind

---

## 🎨 Customization

### Change Fonts

Edit `app/layout.tsx` to modify font imports from `@fontsource-variable` and `@fontsource`.

### Update Styles

- Global styles are in the `styles/` directory
- Tailwind configuration is in `tailwind.config.ts`
- Component-specific styles can be added using Tailwind classes or CSS modules

### Add Animations

Use GSAP or Framer Motion for animations:

```tsx
import { motion } from 'framer-motion';

export default function AnimatedComponent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      Hello World
    </motion.div>
  );
}
```

---

## 📤 Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy your Next.js app is using the [Vercel Platform](https://vercel.com).

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically build and deploy your site

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/Bineesh627/selio_marketing_co)

### Other Deployment Options

- **Netlify** - Static hosting with git integration
- **AWS Amplify** - Full-stack hosting
- **Self-hosted** - Deploy to your own server with `npm run build && npm start`

---

## 📖 Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Next.js Tutorial](https://nextjs.org/learn) - Interactive Next.js course
- [GSAP Documentation](https://gsap.com/) - Professional animation platform
- [Three.js Documentation](https://threejs.org/) - 3D graphics library
- [Tailwind CSS Docs](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion Guide](https://www.framer.com/motion/) - React animation library

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT](LICENSE) License.

---

## 👤 Author

**Bineesh627**
- GitHub: [@Bineesh627](https://github.com/Bineesh627)
- Email: Check GitHub profile

---

## 🐛 Issues & Support

Found a bug or have a suggestion? Please open an [issue](https://github.com/Bineesh627/selio_marketing_co/issues) on GitHub.

---

## ✨ Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and deployment
- All open-source library maintainers whose work made this project possible

---

**Made with ❤️ by Bineesh627**
