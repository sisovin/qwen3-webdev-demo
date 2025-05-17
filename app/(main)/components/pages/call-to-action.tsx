import React from 'react';

export function CallToAction() {
  return (
    <section className="px-6 py-16 text-center">
      <h3 className="text-2xl md:text-3xl font-bold mb-4">
        Ready to Build with Qwen 3?
      </h3>
      <p className="text-gray-300 max-w-xl mx-auto mb-6">
        Start creating beautiful websites and games today—no coding experience required.
      </p>
      <a 
        href="https://qwenlm.github.io/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition shadow-md hover:shadow-lg"
      >
        Visit Official Site
      </a>
    </section>
  );
}
