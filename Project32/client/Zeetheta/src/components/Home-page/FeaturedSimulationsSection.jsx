import React from "react";
import { FaClock, FaStar, FaUser, FaCertificate } from "react-icons/fa";
import simulations from "../../data/simulations";

const FeaturedSimulationsSection = () => (
  <section className="py-12 bg-gray-50">
    <h2 className="text-3xl font-bold text-center mb-10 text-gray-200 bg-blue-400 p-4 rounded-3xl">Featured Simulations</h2>
    <div className="flex flex-wrap justify-center gap-8 px-4 ">
      {simulations.map(sim => (
        <div
          key={sim.id}
          className="w-80 rounded-3xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 bg-white"
        >
          <div
          
          >
          <img src={sim.iconUrl} alt={sim.name} className="w-100% h-50 mb-3  rounded-t-3xl" />

          {/* Header */}
          {/* <div
            className={`h-45 rounded-t-3xl relative ${
              sim.headerColor || "bg-gradient-to-br from-blue-500 to-blue-700"
            }`}
          > */}
            <div className="absolute top-3 left-3 bg-white text-xs px-2 py-1 rounded-full font-semibold shadow-sm">
              {sim.industry}
            </div>
            <div className="absolute top-3 right-3 bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full font-bold">
              {sim.difficulty}
            </div>
          </div>

          {/* Body */}
          <div className="p-4">
            <div className="flex items-center text-sm text-blue-500 gap-4 mb-2">
              <span className="flex items-center gap-1">
                <FaClock /> {sim.duration}
              </span>
              <span className="flex items-center gap-1">
                <FaStar className="text-yellow-400" /> {sim.rating}
              </span>
              <span className="flex items-center gap-1">
                <FaUser /> {sim.participants}
              </span>
            </div>

            <h3 className="text-lg font-bold mb-1 text-gray-800">{sim.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{sim.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {sim.tags.slice(0, 3).map((tag, i) => (
                <span key={i} className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
              {sim.tags.length > 3 && (
                <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                  +{sim.tags.length - 3} more
                </span>
              )}
            </div>

            {/* Buttons */}
            <div className="flex gap-2">
              <button className="bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-xl flex-1 hover:bg-blue-700 transition">
                Start Simulation →
              </button>
              <button className="border border-purple-400 text-purple-600 text-sm font-semibold py-2 px-4 rounded-xl hover:bg-purple-50 transition">
                Preview
              </button>
            </div>

            {/* Certificate */}
            <div className="mt-3 flex items-center gap-1 text-yellow-600 text-sm">
              <FaCertificate />
              Certificate upon completion
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturedSimulationsSection;
