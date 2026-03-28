const Services = () => {
    const services = [
      { icon: "💬", title: "AI Chatbot Development", desc: "Custom intelligent chatbots powered by GPT-4 with memory, context awareness, and seamless integrations." },
      { icon: "⚡", title: "Business Process Automation", desc: "Eliminate repetitive tasks with intelligent n8n and Zapier workflows that run 24/7 without human intervention." },
      { icon: "🤖", title: "Custom AI Agents", desc: "Multi-agent systems using CrewAI and AutoGen that plan, reason, and execute complex multi-step tasks autonomously." },
      { icon: "📊", title: "CRM Automation", desc: "Automate lead management, follow-ups, data enrichment, and reporting in HubSpot, Salesforce, and more." },
    ];
  
    return (
      <section id="services" className="py-20 bg-gradient-radial from-indigo-500/5 via-transparent to-transparent bg-navy-900">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-1 xl:px-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 bg-indigo-500/10 border border-indigo-500/25">
              <span className="text-indigo-400 text-sm font-medium">What I Offer</span>
            </div>
            <h2 className="font-heading text-4xl font-bold text-white mb-4">
              Services That <span className="gradient-text">Drive Results</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              End-to-end AI automation solutions tailored to your business needs — from concept to deployment.
            </p>
          </div>
  
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 border border-indigo-500/15 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                <div className="service-icon-bg w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="font-heading text-white font-bold text-lg mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.desc}</p>
                <div className="flex items-center gap-1 text-indigo-400 text-sm font-medium group-hover:gap-2 transition-all">
                  Learn more <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;