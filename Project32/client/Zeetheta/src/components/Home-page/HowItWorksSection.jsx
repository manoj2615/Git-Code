import React from "react";
import {
  CheckCircle,
  BookOpen,
  Award,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: CheckCircle,
      title: "Choose a Simulation",
      description:
        "Browse our library of industry simulations designed by professionals and select one matching your career goals.",
      gradient: "from-purple-500 via-violet-500 to-purple-600",
      bgGradient: "from-purple-50 to-violet-50",
      glow: "shadow-[0_0_24px_0_rgba(139,92,246,0.4)]",
    },
    {
      number: "02",
      icon: BookOpen,
      title: "Complete Realistic Tasks",
      description:
        "Engage in projects that mirror real workplace scenarios. Use actual tools and solve genuine business problems.",
      gradient: "from-blue-500 via-cyan-500 to-blue-600",
      bgGradient: "from-blue-50 to-cyan-50",
      glow: "shadow-[0_0_24px_0_rgba(14,165,233,0.3)]",
    },
    {
      number: "03",
      icon: Award,
      title: "Earn Certificates & Build Skills",
      description:
        "Receive industry-recognized certificates and build a portfolio that showcases your practical experience.",
      gradient: "from-emerald-500 via-green-500 to-emerald-600",
      bgGradient: "from-emerald-50 to-green-50",
      glow: "shadow-[0_0_24px_0_rgba(16,185,129,0.3)]",
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-20 left-1/2 w-80 h-80 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          
          <div className=" w-100% max-h-0.5  bg-blue-400"></div>

          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-white/40 shadow-lg mb-6">
            <Sparkles className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-semibold text-purple-700">
              Simple 3-Step Process
            </span>
          </div>

          <h2 className="text-5xl lg:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our proven methodology transforms theoretical knowledge into practical skills that employers value most.
          </p>
        </div>

        {/* Cards grid */}
        <div className="relative max-w-7xl mx-auto">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-200 via-blue-200 to-emerald-200 transform -translate-y-1/2 rounded-full">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 rounded-full animate-pulse"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col items-center"
              >
                {/* Card */}
                <div
                  className={`
                    relative bg-white/80 backdrop-blur-2xl 
                    border border-gray-100
                    shadow-xl hover:shadow-2xl
                    transition-all duration-500 hover:-translate-y-2 
                    rounded-3xl px-8 py-12 w-full
                  `}
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.92) 70%, rgba(249,250,251,0.82) 100%)",
                  }}
                >
                  {/* Number Badge */}
                  <div className="absolute -top-7 left-8">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${step.gradient} ${step.glow} rounded-2xl flex items-center justify-center shadow-xl rotate-12 group-hover:rotate-0 transition-transform duration-300`}
                    >
                      <span className="text-lg font-bold text-white drop-shadow">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Animated Icon */}
                  <div className="mb-8 mt-8">
                    <div
                      className={`w-20 h-20 mx-auto bg-gradient-to-br ${step.gradient} ${step.glow} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                    >
                      <step.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {step.description}
                    </p>
                    {/* Interactive arrow */}
                    <div className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-4 transition-all duration-300 cursor-pointer">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Decorative corner */}
                  <div
                    className={`absolute top-4 right-4 w-16 h-16 bg-gradient-to-br ${step.gradient} opacity-10 rounded-2xl rotate-45`}
                  ></div>
                </div>

                {/* Connector Arrow for large screens */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-7 transform -translate-y-1/2 z-20">
                    <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-blue-100">
                      <ArrowRight className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4 bg-white/90 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-lg border border-white/50">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full border-2 border-white"></div>
            </div>
            <span className="text-gray-700 font-medium">
              Join 50,000+ professionals already learning
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
