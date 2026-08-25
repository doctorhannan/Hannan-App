const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: "🧠",
      skills: [
        "Machine Learning",
        "Deep Learning",
        "Reinforcement Learning",
        "LLMs",
        "RAG Systems",
        "AI Agents",
      ],
    },
    {
      title: "Energy & EV Systems",
      icon: "⚡",
      skills: [
        "EV Charging Systems",
        "Renewable Energy",
        "Battery Energy Storage",
        "Energy Management",
        "Energy Optimization",
        "Smart Grid Concepts",
      ],
    },
    {
      title: "Programming & Data",
      icon: "💻",
      skills: [
        "Python",
        "C / C++",
        "SQL",
        "Data Analysis",
        "API Development",
        "FastAPI",
      ],
    },
    {
      title: "Software & Automation",
      icon: "⚙️",
      skills: [
        "Next.js",
        "React",
        "Node.js",
        "n8n",
        "Zapier",
        "CRM Automation",
      ],
    },
  ];

  const techStack = [
    "Python",
    "PyTorch",
    "NumPy",
    "Pandas",
    "Scikit-learn",
    "FastAPI",
    "Next.js",
    "React",
    "Node.js",
    "SQL",
    "Git",
    "n8n",
    "Zapier",
    "OpenAI",
    "LangChain",
    "LlamaIndex",
  ];

  return (
    <section id="skills" className="py-20 bg-navy-950">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-11 xl:px-16">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 bg-indigo-500/10 border border-indigo-500/25">
            <span className="text-indigo-400 text-sm font-medium">
              Technical Expertise
            </span>
          </div>

          <h2 className="font-heading text-4xl font-bold text-white mb-4">
            Skills & <span className="gradient-text">Research Interests</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            A combination of computer science, artificial intelligence, and
            software engineering skills with a growing research focus on
            renewable energy, EV charging, and intelligent energy management.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="glass-card rounded-2xl p-6 border border-indigo-500/15 bg-white/5 backdrop-blur-md"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-xl">
                  {category.icon}
                </div>

                <h3 className="text-white font-semibold font-heading">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="py-2 px-3 text-sm bg-white/5 border border-white/10 text-gray-300 rounded-lg hover:border-indigo-500/40 hover:text-indigo-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Research Focus */}
        <div className="rounded-2xl p-6 mb-12 bg-indigo-500/5 border border-indigo-500/20">
          <div className="flex flex-col md:flex-row md:items-center gap-5">
            
            <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center text-2xl">
              🔋
            </div>

            <div>
              <h3 className="text-white font-semibold font-heading mb-2">
                Current Research Focus
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                Reinforcement Learning for intelligent energy management of
                renewable-powered EV charging systems with Battery Energy
                Storage Systems (BESS), with an emphasis on energy
                optimization, renewable utilization, battery management,
                charging demand, and grid interaction.
              </p>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div>
          <h3 className="text-center text-white font-semibold font-heading mb-6">
            Technologies & Tools
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="tag-badge py-2 px-4 text-sm bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;