import React from 'react';
import Link from 'next/link';
import { Github, Globe, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="px-6 py-12 bg-gray-900 border-t border-gray-700">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Qwen 3 WebDev</h3>
            <p className="text-gray-400 max-w-md">
              Showcasing the capabilities of Qwen 3 in web development.
              From responsive designs to interactive applications, discover what AI can do.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="#demo" className="hover:text-white transition-colors">Demo</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <div className="flex space-x-4">
              <Link href="https://github.com/sisovin/qwen3-webdev-demo" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </Link>
              <Link href="hhttps://x.com/NiewinCheung?t=cJkI6vwKYEVeAQgdf10u5Q&s=35" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="https://www.linkedin.com/in/sisovinchieng" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="https://alibaba.com" className="text-gray-400 hover:text-white transition-colors">
                <Globe size={20} />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Qwen 3 Showcase | Built with ❤️ using AI</p>
          <p className="mt-2 text-sm">Inspired by Tactiq.io YouTube Transcript</p>
        </div>
      </div>
    </footer>
  )
}