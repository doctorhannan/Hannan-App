const Skills = () => {
    const skillsLeft = [
      { name: "AI Agents Development", percent: 95 },
      { name: "nextjs web development", percent: 96 },
      { name: "RAG Systems", percent: 92 },
      { name: "LangChain / LLM Integration", percent: 90 },
      { name: "Crticial Problem Solution", percent: 97 },
    ];
    const skillsRight = [
      { name: "n8n & Zapier Automation", percent: 93 },
      { name: "API Integrations", percent: 93 },
      { name: "CRM & Business Automation", percent: 87 },
      { name: "Python / FastAPI", percent: 85 },
      { name: "Vector Databases", percent: 89 },
    ];
  
    const techStack = [
      "OpenAI GPT-4", "LangChain", "LlamaIndex", "Pinecone", "Weaviate", "n8n",
      "Zapier", "Make.com", "HubSpot API", "Salesforce", "Python", "FastAPI",
      "AutoGen", "CrewAI"
    ];
  
    return (
      <section id="skills" className="py-20 bg-navy-950">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-11 xl:px-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 bg-indigo-500/10 border border-indigo-500/25">
              <span className="text-indigo-400 text-sm font-medium">Expertise</span>
            </div>
            <h2 className="font-heading text-4xl font-bold text-white mb-4">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              A comprehensive toolkit for building intelligent, automated systems that deliver measurable business impact.
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="glass-card rounded-2xl p-6 border border-indigo-500/15 bg-white/5 backdrop-blur-md">
              <div className="space-y-5">
                {skillsLeft.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white text-sm font-medium font-heading flex items-center gap-2">{skill.name}</span>
                      <span className="text-indigo-400 text-sm font-semibold">{skill.percent}%</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="skill-bar bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-400 h-full rounded-full" style={{ width: `${skill.percent}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
            <div className="glass-card rounded-2xl p-6 border border-indigo-500/15 bg-white/5 backdrop-blur-md">
              <div className="space-y-5">
                {skillsRight.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white text-sm font-medium font-heading flex items-center gap-2">{skill.name}</span>
                      <span className="text-indigo-400 text-sm font-semibold">{skill.percent}%</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="skill-bar bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-400 h-full rounded-full" style={{ width: `${skill.percent}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
  
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span key={tech} className="tag-badge py-2 px-4 text-sm bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;