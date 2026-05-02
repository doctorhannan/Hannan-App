"use client";

import { useRouter } from "next/navigation";

type CaseStudy = {
  path: string; // changed from slug → path
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
    tags: ["Automation", "Zapier", "Python", "CRM", "HubSpot", "Xero", "Jumptech"],
    result: "80% reduction in manual operations",
  },
];

const CaseStudies = () => {
  const router = useRouter();

  return (
    <section className="py-20 bg-navy-950">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Case <span className="gradient-text">Studies</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Deep dive into real-world automation systems and measurable impact.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((cs) => (
            <div
              key={cs.path}
              onClick={() => router.push(cs.path)}
              className="h-30 cursor-pointer group rounded-2xl overflow-hidden border border-indigo-700 bg-white/5 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-62 overflow-hidden">
                <img
                  src={cs.cover}
                  alt={cs.title}
                  className="w-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-indigo-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-indigo-400 mb-2">
                  {cs.title}
                </h3>

                <p className="text-gray-400 text-sm mb-3">
                  {cs.subtitle}
                </p>

                <p className="text-green-400 text-sm font-medium">
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