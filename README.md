# Qwen3 WebDev Demo

![Qwen3 WebDev Demo](https://img.shields.io/badge/Qwen3-WebDev_Demo-blue)
![Next.js 15](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-Latest-black)

A showcase project demonstrating the web development capabilities of Qwen3. This project is built with Next.js 15, TypeScript, Tailwind CSS v4, and shadcn/ui components.

## Features

- 🚀 Modern responsive web design
- 🌙 Dark/Light theme switching
- 🧩 Modular component architecture
- 📱 Mobile-friendly navigation
- 🎨 Beautiful UI with shadcn/ui components
- 🔄 Interactive UI elements
- 🎭 Animated transitions

## Tech Stack

- **Frontend Framework**: [Next.js 15](https://nextjs.org) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/icons/)

## Getting Started

### Prerequisites

- Node.js 20.x or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone https://github.com/sisovin/qwen3-webdev-demo.git
cd qwen3-webdev-demo
```

2. Install dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
# or
bun install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
qwen3-webdev-demo/
├── app/
│   ├── (main)/            # Main layout route group
│   │   ├── components/    # Page-specific components
│   │   │   ├── layout/    # Layout components (navbar, footer)
│   │   │   └── pages/     # Page sections (hero, about, etc.)
│   │   ├── layout.tsx     # Main layout
│   │   └── page.tsx       # Main page
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/
│   └── ui/                # Reusable UI components from shadcn/ui
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions and shared code
├── public/                # Static assets
├── tailwind.config.ts     # Tailwind CSS configuration
└── next.config.ts         # Next.js configuration
```

## Customization

### Theming

This project uses the `next-themes` package for theme management. You can customize the themes in the `tailwind.config.ts` file.

### Components

Most of the UI components are from shadcn/ui, which can be customized in the `components/ui` directory.

### Styling

Tailwind CSS is used for styling. You can modify the configuration in `tailwind.config.ts` file.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Acknowledgements

- [Next.js](https://nextjs.org) for the React framework
- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com) for the beautiful UI components
- [Vercel](https://vercel.com) for the deployment platform
- [Lucide Icons](https://lucide.dev) for the icon set
- [next-themes](https://github.com/pacocoursey/next-themes) for theme management

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

[Sisovin Chieng](https://github.com/sisovin) - Full Stack Developer

---

Built with ❤️ using Qwen3, an AI assistant by Alibaba Cloud.
