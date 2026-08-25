const Achievements = () => {
  const stats = [
    { value: "3.78/4.00", label: "BSCS CGPA" },
    { value: "2026", label: "Computer Science Graduate" },
    { value: "8+ Months", label: "EV Industry Experience" },
    { value: "1", label: "Current Research Direction" },
  ];

  const timeline = [
    {
      year: "2026",
      icon: "🎓",
      title: "BS Computer Science Graduate",
      desc: "Completed my BS in Computer Science with a 3.78/4.00 CGPA, developing a strong foundation in programming, artificial intelligence, data science, algorithms, databases, and software engineering.",
    },
    {
      year: "2026",
      icon: "⚡",
      title: "Entered the EV & Renewable Energy Domain",
      desc: "Began working at the intersection of software technology, electric vehicle charging, and renewable energy, gaining practical industry exposure that later shaped my research direction in intelligent energy management.",
    },
    {
      year: "2026",
      icon: "🌱",
      title: "Research Focus: Renewable Energy & EV Systems",
      desc: "Developed a research interest at the intersection of Artificial Intelligence, renewable energy, battery energy storage, and electric vehicle charging systems.",
    },
    {
      year: "2026",
      icon: "🧠",
      title: "Reinforcement Learning Research Direction",
      desc: "Started exploring reinforcement learning for intelligent energy management of renewable-powered EV charging systems with Battery Energy Storage Systems (BESS), focusing on energy optimization and efficient resource allocation.",
    },
    {
      year: "2025",
      icon: "🤖",
      title: "AI & Intelligent Automation",
      desc: "Built practical AI-driven solutions including intelligent automation workflows, API integrations, RAG systems, and AI-powered applications for real-world use cases.",
    },
    {
      year: "2023",
      icon: "💻",
      title: "Started Computer Science & Software Development",
      desc: "Began developing a strong foundation in programming, algorithms, software development, and web technologies, progressing toward AI and machine learning applications.",
    },
  ];

  return (
    <section
      id="achievements"
      className="py-20 bg-gradient-radial from-indigo-500/5 via-transparent to-transparent bg-navy-900"
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-11 xl:px-16">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 bg-indigo-500/10 border border-indigo-500/25">
            <span className="text-indigo-400 text-sm font-medium">
              Academic & Professional Journey
            </span>
          </div>

          <h2 className="font-heading text-4xl font-bold text-white mb-4">
            Education & <span className="gradient-text">Milestones</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            A journey from computer science and AI development toward research
            in intelligent energy management, renewable energy, and EV systems.
          </p>
        </div>

        {/* Stats */}
        <div className="flex justify-center items-center w-full text-center">
          <div className="max-w-7xl w-full grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 text-center border border-indigo-500/20 bg-white/5 backdrop-blur-md"
              >
                <div className="font-heading text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>

                <div className="text-gray-400 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-600 via-purple-600 to-transparent"></div>

          <div className="space-y-8">
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className="flex gap-6 items-start"
              >
                {/* Timeline Icon */}
                <div className="w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center z-10 relative bg-gradient-to-br from-indigo-600 to-purple-700">
                  <span className="text-lg">
                    {item.icon}
                  </span>
                </div>

                {/* Timeline Content */}
                <div className="glass-card rounded-2xl p-5 flex-1 border border-indigo-500/15 bg-white/5 backdrop-blur-md">
                  <div className="flex items-center justify-between mb-2 gap-4">
                    <h3 className="font-heading text-white font-semibold">
                      {item.title}
                    </h3>

                    <span className="text-indigo-400 text-xs whitespace-nowrap">
                      {item.year}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Experience */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 bg-emerald-500/10 border border-emerald-500/25">
              <span className="text-emerald-400 text-sm font-medium">
                Professional Experience
              </span>
            </div>

            <h3 className="font-heading text-3xl font-bold text-white mb-3">
              Industry <span className="gradient-text">Experience</span>
            </h3>

            <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
              Practical experience connecting software development and
              automation with the growing electric vehicle and renewable
              energy industry.
            </p>
          </div>

          {/* Electric Future Experience Card */}
          <div className="glass-card rounded-2xl p-6 md:p-8 border border-indigo-500/20 bg-white/5 backdrop-blur-md">
            <div className="flex flex-col md:flex-row md:items-start gap-6">

              {/* Company Icon */}
              <div className="w-14 h-14 rounded-2xl flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700">
                <span className="text-2xl">⚡</span>
              </div>

              {/* Experience Content */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h4 className="font-heading text-xl font-semibold text-white">
                      Remote Developer
                    </h4>

                    <p className="text-indigo-400 font-medium text-sm mt-1">
                      Electric Future · Australian EV & Renewable Energy Company
                    </p>
                  </div>

                  <span className="text-gray-400 text-sm whitespace-nowrap">
                    Dec 2025 — Present
                  </span>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  Working remotely with an Australian company specializing in{" "}
                  <span className="text-white">
                    EV charger installation and renewable energy solutions
                  </span>
                  , developing software and automation systems that support
                  real-world EV charging operations.
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-0.5">▹</span>
                    <span className="text-gray-400 text-sm">
                      Developing CRM and workflow automation for EV charging
                      operations
                    </span>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-0.5">▹</span>
                    <span className="text-gray-400 text-sm">
                      Automating quote generation, invoice generation, and
                      validation
                    </span>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-0.5">▹</span>
                    <span className="text-gray-400 text-sm">
                      Integrating APIs and business systems to improve
                      operational efficiency
                    </span>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-0.5">▹</span>
                    <span className="text-gray-400 text-sm">
                      Applying software and automation to practical EV
                      industry workflows
                    </span>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {[
                    "EV Charging",
                    "Renewable Energy",
                    "CRM Automation",
                    "Zapier",
                    "APIs",
                    "Python",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-xs text-indigo-300 bg-indigo-500/10 border border-indigo-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;