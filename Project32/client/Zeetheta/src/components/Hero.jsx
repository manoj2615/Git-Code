import React from 'react';
import { ArrowRight, Play, Star, Users, Award, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-blue-100 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-400 rounded-full filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-400 rounded-full filter blur-xl opacity-70 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 py-24 lg:py-32 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          {/* Left */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 border border-purple-300 text-purple-800 bg-amber-200 bg-opacity-50 rounded-lg font-medium">
              <Star className="w-4 h-4 mr-2 text-yellow-500" />
               Virtual Work Experience Platform
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Gain Real-World <span className="text-purple-600">Experience</span>
              <br />
              Without <span className="text-blue-600"> the Risk</span>
            </h1>

            <p className="text-lg text-gray-600">
              Build your skills through industry-created job simulations
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center">
                Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
              </button>

              <button className="border border-purple-400 text-purple-700 px-6 py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-purple-50">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>

            <div className="grid grid-cols-3 text-center pt-8 gap-6">
              <div>
                <div className="text-3xl font-bold text-purple-600">50K+</div>
                <p className="text-sm text-gray-600">Students</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">500+</div>
                <p className="text-sm text-gray-600">Simulations</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">98%</div>
                <p className="text-sm text-gray-600">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Right Cards with diagonal animation */}
          <div className="grid grid-cols-2 gap-6">
            <Card icon={<Users />} title="Virtual Internships" desc="20-40 hour immersive experiences" diagonal />
            <Card icon={<Zap />} title="Quick Tasks" desc="1-3 hour skill builders" />
            <Card icon={<Award />} title="Certifications" desc="Industry-recognized credentials" diagonal />
            <Card icon={<Star />} title="Expert Mentorship" desc="Learn from industry leaders" />
          </div>
        </div>
      </div>
    </section>
  );
};

// Card component with diagonal animation
const Card = ({ icon, title, desc, diagonal }) => (
  <div
    className="p-6 bg-blue-100 bg-opacity-100 backdrop-blur-md border rounded-2xl shadow-md transition hover:shadow-xl"
    style={{
      animation: diagonal
        ? "floatDiagonal 4s ease-in-out infinite"
        : "floatY 5s ease-in-out infinite"
    }}
  >
    <div className="w-12 h-12 bg-purple-500 text-white rounded-xl flex items-center justify-center mb-4">
      {React.cloneElement(icon, { className: "w-6 h-6" })}
    </div>
    <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{desc}</p>
  </div>
);

export default Hero;
