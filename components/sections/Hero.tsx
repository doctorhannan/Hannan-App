"use client";
import { useEffect, useRef } from "react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const messages = [
      "Analyzing renewable generation...",
      "Optimizing battery energy storage...",
      "Balancing EV charging demand...",
      "Learning optimal energy allocation... ✓",
    ];

    let msgIndex = 0;
    const typingBubble = document.querySelector(".chat-bubble-bot:last-child");

    const interval = setInterval(() => {
      if (typingBubble && typingBubble.querySelector(".flex")) {
        setTimeout(() => {
          typingBubble.innerHTML = `<span class="text-xs text-indigo-200">${messages[msgIndex]}</span>`;
          msgIndex = (msgIndex + 1) % messages.length;

          setTimeout(() => {
            typingBubble.innerHTML = `
              <div class="flex gap-1 items-center">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
              </div>
            `;
          }, 2000);
        }, 500);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative pt-28 pb-20 overflow-hidden bg-gradient-radial from-indigo-500/15 via-transparent to-transparent bg-navy-950"
    >
      {/* Floating background elements */}
      <div className="absolute w-96 h-96 bg-indigo-600 opacity-20 rounded-full blur-[80px] -top-24 -left-24 animate-float"></div>

      <div className="absolute w-80 h-80 bg-purple-700 opacity-15 rounded-full blur-[80px] top-24 -right-24 animate-float [animation-delay:3s]"></div>

      <div className="absolute w-64 h-64 bg-blue-600 opacity-10 rounded-full blur-[80px] bottom-0 left-1/3 animate-float [animation-delay:1.5s]"></div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-11 xl:px-18 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Research Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-indigo-500/15 border border-indigo-500/30">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-sm text-indigo-300 font-medium">
                AI • Renewable Energy • EV Systems
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Intelligent AI for{" "}
              <span className="text-blue-500">
                Renewable Energy
              </span>{" "}
              & EV Systems
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed mb-5 ">
              The transition toward{" "}
              <span className="text-indigo-400 font-semibold">
                renewable-powered EV charging
              </span>{" "}
              requires intelligent systems that can balance variable renewable
              generation, growing EV demand, battery storage, and grid constraints.
            </p>

            <p className="text-gray-400 text-base leading-relaxed mb-6 ">
              <span className="text-indigo-400 font-semibold">
                Artificial Intelligence and Machine Learning
              </span>{" "}
              can enable these systems to predict energy availability, understand
              charging patterns, and make real-time decisions. Reinforcement Learning
              can further optimize energy allocation between renewable sources,
              EV charging, Battery Energy Storage Systems, and the electrical grid.
            </p>

            {/* Research Focus */}
            <p className="text-indigo-300 text-sm mb-7">
              ⚡ AI-driven energy optimization for a sustainable EV future
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">

              {/* <a
                href="#research"
                className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-semibold px-8 py-3.5 rounded-md font-heading flex items-center gap-2 hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] hover:-translate-y-0.5 transition-all"
              >
                Explore Research
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a> */}

              <a
                href="#projects"
                className="border border-indigo-500/60 text-indigo-300 font-semibold px-8 py-3.5 rounded-md font-heading flex items-center gap-2 hover:bg-indigo-500/15 hover:border-indigo-500/90 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:-translate-y-0.5 transition-all"
              >
                View Projects
              </a>

            </div>

            {/* Research Areas */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">

              <span className="px-3 py-1.5 rounded-full text-xs bg-white/5 border border-white/10 text-gray-400">
                Reinforcement Learning
              </span>

              <span className="px-3 py-1.5 rounded-full text-xs bg-white/5 border border-white/10 text-gray-400">
                EV Charging
              </span>

              <span className="px-3 py-1.5 rounded-full text-xs bg-white/5 border border-white/10 text-gray-400">
                BESS
              </span>

              <span className="px-3 py-1.5 rounded-full text-xs bg-white/5 border border-white/10 text-gray-400">
                Renewable Energy
              </span>

            </div>

          </div>

          {/* Right Side — Intelligent Energy Management Visualization */}
          <div className="relative flex justify-center items-center animate-float">

            <div className="relative">

              <div className="absolute inset-0 rounded-2xl bg-indigo-500/30 blur-3xl scale-150"></div>

              <div className="chatbot-widget rounded-2xl p-5 w-80 relative z-10 shadow-2xl">

                {/* Header */}
                <div className="flex items-center justify-between mb-5">

                  <div className="flex items-center gap-3">

                    <div className="w-9 h-9 rounded-md bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center">
                      <span className="text-lg">⚡</span>
                    </div>

                    <div>
                      <div className="text-white text-sm font-semibold font-heading">
                        Intelligent Energy System
                      </div>

                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                        <span className="text-green-400 text-xs">
                          RL Agent Active
                        </span>
                      </div>
                    </div>

                  </div>

                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                  </div>

                </div>

                {/* Energy Flow */}
                <div className="space-y-3 mb-5">

                  <div className="flex items-center justify-between p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                    <div className="flex items-center gap-2">
                      <span>☀️</span>
                      <span className="text-xs text-gray-300">
                        Renewable Generation
                      </span>
                    </div>

                    <span className="text-xs text-yellow-300">
                      8.4 kW
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <div className="flex items-center gap-2">
                      <span>🔋</span>
                      <span className="text-xs text-gray-300">
                        Battery Storage
                      </span>
                    </div>

                    <span className="text-xs text-blue-300">
                      76% SOC
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                    <div className="flex items-center gap-2">
                      <span>🚗</span>
                      <span className="text-xs text-gray-300">
                        EV Charging
                      </span>
                    </div>

                    <span className="text-xs text-green-300">
                      6.2 kW
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                    <div className="flex items-center gap-2">
                      <span>⚡</span>
                      <span className="text-xs text-gray-300">
                        Grid
                      </span>
                    </div>

                    <span className="text-xs text-purple-300">
                      1.8 kW
                    </span>
                  </div>

                </div>

                {/* AI Decision */}
                <div className="flex gap-2">

                  <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs bg-gradient-to-br from-indigo-600 to-purple-700">
                    🧠
                  </div>

                  <div className="chat-bubble-bot rounded-2xl rounded-tl-none px-3 py-2 max-w-48 bg-indigo-500/20 border border-indigo-500/30">

                    <div className="flex gap-1 items-center">
                      <div className="typing-dot"></div>
                      <div className="typing-dot"></div>
                      <div className="typing-dot"></div>
                    </div>

                  </div>

                </div>

              </div>

              {/* Floating badges */}

              <div className="absolute -top-4 -right-6 glass-card neon-border rounded-md px-3 py-2 flex items-center gap-2 bg-white/5 backdrop-blur-md border border-indigo-500/30">

                <span className="text-xs">☀️</span>

                <span className="text-xs text-white font-medium">
                  Renewable Energy
                </span>

              </div>

              <div className="absolute -bottom-4 -left-6 glass-card neon-border rounded-md px-3 py-2 flex items-center gap-2 bg-white/5 backdrop-blur-md border border-indigo-500/30">

                <span className="text-xs">🔋</span>

                <span className="text-xs text-white font-medium">
                  BESS Optimization
                </span>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

