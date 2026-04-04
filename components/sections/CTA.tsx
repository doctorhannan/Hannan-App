const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-navy-800 via-purple-900 to-navy-800">
      <div className="absolute w-96 h-96 bg-indigo-600 opacity-20 rounded-full blur-3xl -top-24 -right-24 animate-float"></div>
      <div className="absolute w-64 h-64 bg-purple-700 opacity-15 rounded-full blur-3xl -bottom-12 -left-12 animate-float"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 bg-indigo-500/15 border border-indigo-500/30">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
          <span className="text-indigo-300 text-sm font-medium">Ready to Transform Your Business</span>
        </div>
        <h2 className="font-heading text-5xl font-bold text-white mb-6">
          Let's <span className="gradient-text">Automate</span> Your Business
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Stop wasting time on repetitive tasks. Let's build intelligent AI systems that work for you around the clock, so you can focus on what truly matters.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() =>
              window.open("https://calendly.com/doctorhannan447/30min", "_blank")
            }
            className="cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-bold px-10 py-4 rounded-md font-heading text-lg flex items-center gap-2 hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] hover:-translate-y-0.5 transition-all"
          >
            Book a Free Call
          </button>
          <a
            href="#projects"
            className="border border-indigo-500/60 text-indigo-300 font-bold px-10 py-4 rounded-md font-heading text-lg hover:bg-indigo-500/15 hover:border-indigo-500/90 hover:-translate-y-0.5 transition-all"
          >
            See My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;