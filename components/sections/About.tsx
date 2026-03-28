const About = () => {
    return (
      <section id="about" className="py-20 bg-gradient-radial from-indigo-500/5 via-transparent to-transparent bg-navy-900">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-11 xl:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-indigo-500/20">
                <img
                  src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80"
                  alt="AI Developer"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 glass-card neon-border rounded-2xl p-4 shadow-2xl bg-white/5 backdrop-blur-md border border-indigo-500/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center">
                    <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm font-heading">Top Rated</div>
                    <div className="text-indigo-300 text-xs">AI Specialist</div>
                  </div>
                </div>
              </div>
            </div>
  
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 bg-indigo-500/10 border border-indigo-500/25">
                <span className="text-indigo-400 text-sm font-medium">About Me</span>
              </div>
              <h2 className="font-heading text-4xl font-bold text-white mb-6">
                Turning Complex AI Into <span className="gradient-text">Business Results</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                I'm an AI Automation Developer and Agentic AI Specialist with 3+ years of experience building intelligent systems that solve real business problems. I bridge the gap between cutting-edge AI research and practical, scalable business solutions.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                My approach is simple: understand your bottlenecks, design intelligent agents, and deploy automation that works 24/7, so you can focus on growth, not repetitive tasks.
              </p>
  
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="glass-card rounded-2xl p-4 border border-indigo-500/15 bg-white/5 backdrop-blur-md">
                  <div className="text-2xl mb-2">🤖</div>
                  <div className="text-white font-semibold text-sm font-heading mb-1">AI Agents</div>
                  <div className="text-gray-500 text-xs">Autonomous multi-step agents</div>
                </div>
                <div className="glass-card rounded-2xl p-4 border border-indigo-500/15 bg-white/5 backdrop-blur-md">
                  <div className="text-2xl mb-2">📚</div>
                  <div className="text-white font-semibold text-sm font-heading mb-1">RAG Systems</div>
                  <div className="text-gray-500 text-xs">Knowledge-powered AI</div>
                </div>
                <div className="glass-card rounded-2xl p-4 border border-indigo-500/15 bg-white/5 backdrop-blur-md">
                  <div className="text-2xl mb-2">⚡</div>
                  <div className="text-white font-semibold text-sm font-heading mb-1">Automation</div>
                  <div className="text-gray-500 text-xs">n8n, Zapier, Make</div>
                </div>
                <div className="glass-card rounded-2xl p-4 border border-indigo-500/15 bg-white/5 backdrop-blur-md">
                  <div className="text-2xl mb-2">💬</div>
                  <div className="text-white font-semibold text-sm font-heading mb-1">Chatbots</div>
                  <div className="text-gray-500 text-xs">Intelligent conversational AI</div>
                </div>
              </div>
  
              <a
                href="#contact"
                className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-semibold px-7 py-3 rounded-md font-heading inline-flex items-center gap-2 hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] hover:-translate-y-0.5 transition-all"
              >
                Let's Work Together
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;