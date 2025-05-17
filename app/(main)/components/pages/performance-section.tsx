import React from 'react';

export function PerformanceSection() {
  const benchmarks = [
    { model: "Qwen 3", speed: "Medium", quality: "High", creativity: "High" },
    { model: "Gemini 2.5 Pro", speed: "Fast", quality: "Medium", creativity: "Medium" },
    { model: "Lovable / Your Wear", speed: "Slow", quality: "High", creativity: "High" }
  ];

  return (
    <section className="px-6 py-16">
      <h3 className="text-3xl font-bold mb-10 text-center">Performance Benchmark</h3>
      <div className="max-w-4xl mx-auto bg-gray-700 p-6 rounded-lg shadow-lg">
        <table className="w-full text-left table-auto">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="py-3 px-4 text-gray-200">Model</th>
              <th className="py-3 px-4 text-gray-200">Speed</th>
              <th className="py-3 px-4 text-gray-200">Quality</th>
              <th className="py-3 px-4 text-gray-200">Creativity</th>
            </tr>
          </thead>
          <tbody>
            {benchmarks.map((benchmark, index) => (
              <tr key={index} className="border-b border-gray-600">
                <td className="py-3 px-4">{benchmark.model}</td>
                <td className={`py-3 px-4 ${
                  benchmark.speed === "Fast" ? "text-green-400" : 
                  benchmark.speed === "Medium" ? "text-yellow-400" : "text-red-400"
                }`}>
                  {benchmark.speed}
                </td>
                <td className={`py-3 px-4 ${
                  benchmark.quality === "High" ? "text-green-400" : "text-yellow-400"
                }`}>
                  {benchmark.quality}
                </td>
                <td className={`py-3 px-4 ${
                  benchmark.creativity === "High" ? "text-green-400" : "text-yellow-400"
                }`}>
                  {benchmark.creativity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-4 text-sm text-gray-300">
          *Note: Qwen 3 activates only 22B parameters but delivers superior design aesthetics compared to other models.
        </p>
      </div>
    </section>
  );
}