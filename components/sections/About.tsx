const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-radial from-indigo-500/5 via-transparent to-transparent bg-navy-900"
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-11 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-indigo-500/20">
              <img
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80"
                alt="Renewable Energy and Sustainable Technology"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-transparent"></div>
            </div>

            {/* Research Badge */}
            <div className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-4 shadow-2xl bg-white/5 backdrop-blur-md border border-indigo-500/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 3v18M3 12h18" />
                    <circle cx="12" cy="12" r="8" />
                  </svg>
                </div>

                <div>
                  <div className="text-white font-semibold text-sm font-heading">
                    Research Focus
                  </div>
                  <div className="text-indigo-300 text-xs">
                    AI & Renewable Energy
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 bg-indigo-500/10 border border-indigo-500/25">
              <span className="text-indigo-400 text-sm font-medium">
                About Me
              </span>
            </div>

            <h2 className="font-heading text-4xl font-bold text-white mb-6">
              Exploring AI for{" "}
              <span className="gradient-text">
                Sustainable Energy Systems
              </span>
            </h2>

            

            

            {/* Research / Interest Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="glass-card rounded-2xl p-4 border border-indigo-500/15 bg-white/5 backdrop-blur-md">
                <div className="text-2xl mb-2">🧠</div>
                <div className="text-white font-semibold text-sm font-heading mb-1">
                  AI & Machine Learning
                </div>
                <div className="text-gray-500 text-xs">
                  Intelligent systems and data-driven solutions
                </div>
              </div>

              <div className="glass-card rounded-2xl p-4 border border-indigo-500/15 bg-white/5 backdrop-blur-md">
                <div className="text-2xl mb-2">⚡</div>
                <div className="text-white font-semibold text-sm font-heading mb-1">
                  EV Charging
                </div>
                <div className="text-gray-500 text-xs">
                  Intelligent and efficient EV energy systems
                </div>
              </div>

              <div className="glass-card rounded-2xl p-4 border border-indigo-500/15 bg-white/5 backdrop-blur-md">
                <div className="text-2xl mb-2">☀️</div>
                <div className="text-white font-semibold text-sm font-heading mb-1">
                  Renewable Energy
                </div>
                <div className="text-gray-500 text-xs">
                  Renewable integration and energy optimization
                </div>
              </div>

              <div className="glass-card rounded-2xl p-4 border border-indigo-500/15 bg-white/5 backdrop-blur-md">
                <div className="text-2xl mb-2">🔋</div>
                <div className="text-white font-semibold text-sm font-heading mb-1">
                  Battery Energy Storage
                </div>
                <div className="text-gray-500 text-xs">
                  Intelligent battery management and optimization
                </div>
              </div>
            </div>

            {/* Research Direction */}
            <div className="rounded-2xl p-5 mb-8 bg-indigo-500/5 border border-indigo-500/20">
              <div className="text-indigo-400 text-sm font-semibold mb-2 font-heading">
                Current Research Direction
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">
                Reinforcement Learning for intelligent energy management of
                renewable-powered EV charging systems with{" "}
                <span className="text-white font-semibold">
                  Battery Energy Storage Systems (BESS)
                </span>
                .
              </p>
            </div>

            {/* <a
              href="#research"
              className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-semibold px-7 py-3 rounded-md font-heading inline-flex items-center gap-2 hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] hover:-translate-y-0.5 transition-all"
            >
              Explore My Research
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;