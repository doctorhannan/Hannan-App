const Overview = () => {
    return (
        <section id="overview" className="py-20 bg-gradient-to-b from-black via-purple-950 to-black">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-11 xl:px-16 ">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side - Picture */}
                    <div className="relative flex justify-center">
                        <div className="relative rounded-full overflow-hidden w-64 h-64 lg:w-80 lg:h-80 
                  border border-indigo-500/20 
                  shadow-[0_0_20px_rgba(139,92,246,0.6)] 
                  transition-transform duration-500 
                  hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,0.8)]">
                            <img
                                src="/pictures/Hannan.png"
                                alt="Abdul Hannan Asif"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-transparent rounded-full"></div>
                        </div>
                    </div>

                    {/* Right Side - Overview Text */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 bg-indigo-500/10 border border-indigo-500/25">
                            <span className="text-indigo-400 text-sm font-medium">Overview</span>
                        </div>

                        <h2 className="font-heading text-4xl font-bold text-white mb-6">
                            ABDUL <span className="text-indigo-400 font-semibold">HANNAN</span> ASIF
                        </h2>

                        <p className="text-neutral-300 leading-relaxed mb-4">
                            I am a <span className="text-indigo-400 font-semibold">BS Computer Science graduate</span> focused on solving real business problems through
                            <span className="text-indigo-400 font-semibold"> AI automation, CRM automation, and intelligent workflow systems</span>.
                            I help businesses move away from manual processes and build automated pipelines that capture leads, nurture customers,
                            and convert them into revenue using <span className="text-indigo-400 font-semibold">Agentic AI and smart automation agents</span>.
                        </p>

                        <p className="text-neutral-300 leading-relaxed mb-4">
                            Along with automation, I bring strong expertise in
                            <span className="text-indigo-400 font-semibold"> Next.js web development</span>, building fast, responsive, and scalable applications.
                            Whether it’s creating a custom dashboard, integrating APIs, or connecting automation systems with user-friendly interfaces,
                            I ensure every solution is both technically powerful and easy to use.
                        </p>

                        <p className="text-neutral-300 leading-relaxed mb-8">
                            My goal is simple: <span className="text-indigo-400 font-semibold">help businesses save time, reduce costs, and scale faster</span>
                            by combining AI with practical implementation. I don’t just build systems — I build solutions that deliver measurable results.
                        </p>

                        <a
                            href="#contact"
                            className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-semibold px-7 py-3 rounded-md font-heading inline-flex items-center gap-2 hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] hover:-translate-y-0.5 transition-all"
                        >
                            Connect With Me
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

export default Overview;