import React from 'react';

export function FeaturesSection() {
  const features = [
    {
      title: "AI-Powered Website Builder",
      description: "Create fully responsive, SEO-optimized websites with minimal input. Qwen 3 handles layout, styling, and content generation automatically."
    },
    {
      title: "Game Development",
      description: "Generate playable browser games like Flappy Bird using frameworks such as p5.js—all powered by natural language prompts."
    },
    {
      title: "Thinking Budget Mode",
      description: "Control the depth and quality of output by setting thinking budgets. Get better results by optimizing computational resources."
    }
  ];

  return (
    <section id="features" className="px-6 py-16">
      <h3 className="text-3xl font-bold mb-10 text-center">Key Features</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
            <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
            <p className="text-gray-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
