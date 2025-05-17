
import { Navbar } from './components/layout/navbar'
import { Footer } from './components/layout/footer'
import { Hero } from './components/pages/hero'
import { AboutSection } from './components/pages/about-section'
import { FeaturesSection } from './components/pages/features-section'
import { DemoSection } from './components/pages/demo-section'
import { PerformanceSection } from './components/pages/performance-section'
import { CallToAction } from './components/pages/call-to-action'
import React from 'react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white font-sans">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Features Section */}
        <div className="max-w-6xl mx-auto">
          <FeaturesSection />
        </div>
        
        {/* Demo Section */}
        <DemoSection />
        
        {/* Performance Section */}
        <div className="max-w-6xl mx-auto">
          <PerformanceSection />
        </div>
        
        {/* Call to Action Section */}
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}