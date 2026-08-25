"use client";

import { useRouter } from "next/navigation";

type CaseStudy = {
  path: string;
  cover: string;
  title: string;
  subtitle: string;
  tags: string[];
  result: string;
};

const caseStudies: CaseStudy[] = [
  {
    path: "/case-studies/ev-auto-quote",
    cover: "/pictures/projects/AQ/Architecture Diagram.png",
    title: "EV Auto Quote System",
    subtitle: "End-to-End EV Charger Sales & Installation Automation",
    tags: ["Automation", "Zapier", "Python", "CRM", "HubSpot", "Xero"],
    result: "80% reduction in manual operations",
  },
];

const CaseStudies = () => {
  const router = useRouter();

  return (
    <section id="case-studies" className="py-16 md:py-20 bg-navy-950">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Case <span className="gradient-text">Studies</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-sm md:text-base">
            Deep dive into real-world automation systems and measurable impact.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {caseStudies.map((cs) => (
            <div
              key={cs.path}
              onClick={() => router.push(cs.path)}
              className="cursor-pointer group rounded-xl md:rounded-2xl overflow-hidden border border-indigo-700 bg-white/5 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="w-full aspect-[16/9] overflow-hidden">
                <img
                  src={cs.cover}
                  alt={cs.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4 md:p-5">

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-2 md:mb-3">
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] md:text-xs px-2 py-0.5 md:py-1 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-indigo-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-base md:text-lg font-bold text-red-500 mb-1 md:mb-2">
                  {cs.title}
                </h3>

                {/* Subtitle */}
                <p className="text-gray-300 text-xs md:text-sm mb-2 md:mb-3">
                  {cs.subtitle}
                </p>

                {/* Result */}
                <p className="text-green-400 text-xs md:text-sm font-medium">
                  {cs.result}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;