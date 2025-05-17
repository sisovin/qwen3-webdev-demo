import React from 'react';

export function DemoSection() {
    return (
      <section id="demo" className="px-6 py-16 bg-gray-800">
        <h3 className="text-3xl font-bold mb-10 text-center">Live Demo: Flappy Bird Game</h3>
        <div className="max-w-3xl mx-auto bg-black p-4 rounded-lg shadow-lg">          <iframe 
            title="Flappy Bird Game" 
            src="https://editor.p5js.org/embed/8zYevvZfM" 
            className="w-full h-96 border-none rounded"
            allowFullScreen
          ></iframe>
          <p className="mt-4 text-sm text-gray-400 text-center">
            Powered by p5.js and generated entirely by Qwen 3. Try playing this AI-created version of Flappy Bird!
          </p>
        </div>
      </section>
    )
  }