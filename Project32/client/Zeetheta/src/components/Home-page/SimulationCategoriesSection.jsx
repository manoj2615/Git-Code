import React from "react";
import categories from "../../data/categories";



const SimulationCategoriesSection = () => (
  <section className="py-12">
    <h2 className="text-gray-200 text-2xl font-bold text-center mb-auto p-4 bg-blue-400 rounded-3xl">Simulation Categories</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {categories.map(cat => (
        <div key={cat.id} className="bg-white-400 pb-20 mt-10 border rounded-3xl  flex flex-col items-center  transform transition-transform duration-300 hover:-translate-y-2 shadow-md hover:shadow-lg ">
          <img src={cat.iconUrl} alt={cat.name} className="w-100% h-50 mb-3  rounded-t-3xl" />

          <h3 className="text-lg font-bold mb-1">{cat.name}</h3>
          <p className="text-gray-700 text-center px-2">{cat.description}</p>
          <a href={cat.link} className="mt-4 text-gray-300  font-medium bg-blue-500 px-4 py-2 rounded-2xl border-2">Explore</a>
        </div>
      ))}
    </div>
  </section>
);

export default SimulationCategoriesSection;
