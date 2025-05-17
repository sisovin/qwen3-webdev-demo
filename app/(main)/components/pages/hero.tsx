'use client'

export function Hero() {
  return (
    <section className="px-6 py-16 md:py-24 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
        The Power of Qwen 3 in Web Development
      </h2>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
        Discover how Qwen 3 is revolutionizing web development with AI-powered tools that create stunning, functional websites and games.
      </p>
      <a 
        href="#demo" 
        className="inline-block px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold shadow-md hover:shadow-lg"
      >
        View Demo
      </a>
    </section>
  );
}