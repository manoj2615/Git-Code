import React from "react";
import testimonials from "../../data/testimonials";

const TestimonialsSection = () => (
  <section className="py-12 bg-blue-50 text-center">
    <h2 className="text-2xl font-bold mb-8">Student Success Stories</h2>
    <div className="flex flex-wrap justify-center gap-8">
      {testimonials.map((t) => (
        <div
          key={t.id}
          className="bg-white rounded-4xl py-16 px-3 shadow-md w-80 flex flex-col items-center"
        >
          <img
            src={t.photo}
            alt={t.name}
            className="mb-4 w-20 h-20 rounded-full object-cover border-2 border-blue-400"
          />
          <blockquote className="italic text-gray-800">"{t.quote}"</blockquote>
          <div className="mt-3 font-semibold">{t.name}</div>
          <div className="text-blue-700 text-sm">{t.outcome}</div>
        </div>
      ))}
    </div>
  </section>
);

export default TestimonialsSection;
