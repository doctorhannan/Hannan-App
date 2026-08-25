const Overview = () => {
    return (
        <section id="overview" className="py-20 bg-black">
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

                        <h2 className="font-heading text-4xl font-bold text-white mb-1">
                            ABDUL <span className="text-blue-500 font-semibold">HANNAN</span> ASIF
                        </h2>
                        <h4 className="font-heading text-md font-bold text-blue-500 mb-6">
                            AI/ML Engineer | EV & Renewable Energy Research
                        </h4>

                        <p className="text-neutral-300 leading-relaxed mb-4">
                            I am a{" "}
                            <span className="text-indigo-400 font-semibold">
                                BS Computer Science graduate
                            </span>{" "}
                            with a strong foundation in software development, Artificial Intelligence,
                            Machine Learning, and intelligent systems. I enjoy using technology to
                            understand complex problems and build practical solutions that can create
                            meaningful real-world impact.
                        </p>

                        <p className="text-neutral-300 leading-relaxed mb-4">
                            My professional experience with an{" "}
                            <span className="text-indigo-400 font-semibold">
                                Australian EV charging and renewable energy company
                            </span>{" "}
                            introduced me to the challenges and opportunities within the{" "}
                            <span className="text-indigo-400 font-semibold">
                                electric vehicle and sustainable energy
                            </span>{" "}
                            sector. This experience sparked a deeper interest in exploring how
                            technology can help make EV charging smarter, more efficient, and better
                            integrated with renewable energy.
                        </p>

                        <p className="text-neutral-300 leading-relaxed mb-8">
                            I want to bring together my{" "}
                            <span className="text-indigo-400 font-semibold">
                                technical knowledge in AI and Machine Learning
                            </span>{" "}
                            with my interest in renewable energy to develop new intelligent solutions
                            for the EV and energy sector. My current focus is on{" "}
                            <span className="text-indigo-400 font-semibold">
                                Reinforcement Learning for intelligent energy management
                            </span>
                            , exploring how AI can optimize the interaction between renewable
                            generation, EV charging, Battery Energy Storage Systems (BESS), and the
                            electrical grid.
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