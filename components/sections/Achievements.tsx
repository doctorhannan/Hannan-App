const Achievements = () => {
    const stats = [
      { value: "50+", label: "Projects Delivered" },
      { value: "30+", label: "Happy Clients" },
      { value: "10+", label: "Workflows Automated" },
      { value: "99%", label: "Client Satisfaction" },
    ];
  
    const timeline = [
        {
          year: "2026",
          icon: "🎓",
          title: "BS Computer Science",
          desc: "Completed a degree in Computer Science with focus on AI, data science, and software development."
        },
        {
            year: "2025",
            icon: "🧠",
            title: "AI Automation & Agentic Systems Focus",
            desc: "Specialized in building AI agents, RAG pipelines, and intelligent automation systems using modern frameworks."
          },
          {
            year: "2025",
            icon: "🔧",
            title: "Hands-on Experience in AI & Automation",
            desc: "Worked on real-world projects involving chatbots, workflow automation, and API integrations for business use-cases."
          },
          {
            year: "2023",
            icon: "🌱",
            title: "Started Journey in AI & Development",
            desc: "Began learning programming, web development, and AI concepts with a strong vision to build impactful technology."
          }
      ];
  
    return (
      <section id="achievements" className="py-20 bg-gradient-radial from-indigo-500/5 via-transparent to-transparent bg-navy-900">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-11 xl:px-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 bg-indigo-500/10 border border-indigo-500/25">
              <span className="text-indigo-400 text-sm font-medium">Track Record</span>
            </div>
            <h2 className="font-heading text-4xl font-bold text-white mb-4">
              Achievements & <span className="gradient-text">Milestones</span>
            </h2>
          </div>
          <div className="flex justify-center items-center w-full text-center">
  <div className="max-w-7xl w-full grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
    {stats.map((stat, idx) => (
      <div
        key={idx}
        className="glass-card rounded-2xl p-6 text-center border border-indigo-500/20 bg-white/5 backdrop-blur-md"
      >
        <div className="font-heading text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
          {stat.value}
        </div>
        <div className="text-gray-400 text-sm">{stat.label}</div>
      </div>
    ))}
  </div>
</div>
  
  
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-600 via-purple-600 to-transparent"></div>
            <div className="space-y-8">
              {timeline.map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center z-10 relative bg-gradient-to-br from-indigo-600 to-purple-700">
                    <span className="text-lg">{item.icon}</span>
                  </div>
                  <div className="glass-card rounded-2xl p-4 flex-1 border border-indigo-500/15 bg-white/5 backdrop-blur-md">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-heading text-white font-semibold">{item.title}</h3>
                      <span className="text-indigo-400 text-xs">{item.year}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Achievements;