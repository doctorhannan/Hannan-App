const Testimonials = () => {
    const testimonials = [
      {
        text: "Before this, our team was manually replying to every customer query. Now the AI handles most of it automatically and our response time is almost instant. It honestly saved us a lot of time.",
        role: "SaaS Founder",
        bg: "bg-indigo-500/5",
      },
      {
        text: "The automation setup removed a lot of repetitive work from our daily operations. We’re saving around 15–20 hours every week now. Everything just runs in the background.",
        role: "Operations Manager",
        bg: "bg-purple-500/5",
      },
      {
        text: "We had a lot of scattered data and no proper system. The AI solution organized everything and now we can get answers instantly. It feels like having an internal assistant.",
        role: "Tech Startup Team",
        bg: "bg-indigo-500/5",
      },
    ];
  
    return (
      <section id="testimonials" className="py-20 bg-navy-950">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-11 xl:px-16">
  
          {/* Heading */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 bg-indigo-500/10 border border-indigo-500/25">
              <span className="text-indigo-400 text-sm font-medium">
                Client Feedback
              </span>
            </div>
  
            <h2 className="font-heading text-4xl font-bold text-white mb-4">
              What Clients <span className="gradient-text">Experience</span>
            </h2>
  
            <p className="text-gray-400 max-w-xl mx-auto">
              Real outcomes from businesses using AI automation systems.
            </p>
  
            <p className="text-xs text-gray-500 mt-4">
              *Based on client projects and feedback
            </p>
          </div>
  
          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className={`glass-card rounded-2xl p-6 transition-all duration-300 border border-indigo-500/15 ${t.bg} hover:border-indigo-500/40 hover:-translate-y-1`}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  <span className="text-yellow-400 text-sm">★★★★★</span>
                </div>
  
                {/* Text */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
  
                {/* Role */}
                <div className="text-gray-400 text-xs font-medium">
                  — {t.role}
                </div>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  };
  
  export default Testimonials;