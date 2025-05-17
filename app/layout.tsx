import type { Metadata } from "next";
import { ThemeProvider } from './providers/theme-provider'
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Qwen 3 WebDev Demo",
  description: "Showcase of Qwen 3 web development capabilities",
  keywords: ["Qwen 3", "AI", "Web Development", "Large Language Model"],
  authors: [{ name: "Qwen 3 Demo Team" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${geistSans.variable} ${geistMono.variable} min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
