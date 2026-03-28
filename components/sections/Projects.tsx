const Projects = () => {
    const projects = [
      {
        img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&q=80",
        tags: ["LangChain", "GPT-4", "Pinecone"],
        title: "AI Customer Support Agent",
        desc: "Autonomous support agent handling 500+ daily queries with 94% resolution rate, reducing support costs by 70%.",
        result: "70% cost reduction",
      },
      {
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80",
        tags: ["n8n", "HubSpot", "OpenAI"],
        title: "Sales Pipeline Automation",
        desc: "End-to-end sales automation with AI lead scoring, personalized outreach, and CRM sync for a SaaS startup.",
        result: "3x lead conversion rate",
      },
      {
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80",
        tags: ["RAG", "LlamaIndex", "n8n"],
        title: "Enterprise RAG Knowledge Base",
        desc: "Custom RAG system ingesting 100+ documents, enabling instant accurate answers from company knowledge.",
        result: "98% query accuracy",
      },
      {
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
        tags: ["Zapier", "Shopify", "GPT-4"],
        title: "E-commerce AI Assistant",
        desc: "AI shopping assistant with product recommendations, order tracking, and automated email sequences.",
        result: "45% increase in AOV",
      },
      {
        img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&q=80",
        tags: ["CrewAI", "Nextjs", "n8n"],
        title: "HR Recruitment AI Agent",
        desc: "Multi-agent system for CV screening, candidate ranking, interview scheduling, and automated feedback.",
        result: "80% faster hiring process",
      },
      {
        img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=500&q=80",
        tags: ["AutoGen", "FastAPI", "PostgreSQL"],
        title: "AI Data Analytics Agent",
        desc: "Natural language to SQL agent that generates business insights and automated reports from raw data.",
        result: "10x faster reporting",
      },
    ];
  
    return (
      <section id="projects" className="py-20 bg-navy-950">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-11 xl:px-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 bg-indigo-500/10 border border-indigo-500/25">
              <span className="text-indigo-400 text-sm font-medium">Portfolio</span>
            </div>
            <h2 className="font-heading text-4xl font-bold text-white mb-4">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Real-world AI solutions that delivered measurable business outcomes for clients across industries.
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="project-card glass-card rounded-2xl overflow-hidden border border-indigo-500/15 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer group relative">
                <div className="relative overflow-hidden h-48">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="project-overlay absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent">
                    <button className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-xs font-semibold px-4 py-2 rounded-md font-heading">
                      View Details →
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag-badge bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-heading text-white font-bold text-base mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-3">{project.desc}</p>
                  <div className="flex items-center gap-2 text-green-400 text-xs font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                    {project.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;