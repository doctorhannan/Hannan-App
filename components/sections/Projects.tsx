import { useState } from "react";

type Project = {
  img: string;
  title: string;
  desc: string;
  link?: string;
  tags: string[];
  result: string;
  problem: string;
  solution: string;
  technologies: string[];
  cost: string;
  review: string;
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projectCategories = [
    {
      category: "Web Development",
      projects: [
        {
          img: "/pictures/projects/rakalabweb.png",
          title: "Raka Labs Website",
          desc: "Modern Business Solutions via automation tech startup website",
          link: "https://rakalabs.vercel.app/",
          tags: ["Next.js", "Tailwind", "API"],
          result: "Fast UI",
          problem: "Raka Labs required a modern, high-performance web presence to effectively communicate their AI-driven automation services. Their previous digital presence lacked scalability, clear messaging, and failed to reflect the innovation behind their solutions, resulting in weak user engagement and limited client conversions.",
          solution: "Developed a fully responsive and scalable website using Next.js and Tailwind CSS, focusing on performance optimization, clean UI/UX, and strong service positioning. Implemented structured layouts, fast-loading components, and conversion-focused design elements to enhance user engagement and clearly communicate their value proposition.",
          technologies: ["Next.js", "Tailwind", "Node.js"],
          cost: "$300",
          review: "Amazing UI and performance!"
        },
        {
          img: "/pictures/projects/ozgoatweb.png",
          title: "OZGOAT Website",
          desc: "Australian business website for tech solutions",
          tags: ["Next.js", "SEO", "Tailwind CSS", "React.js"],
          result: "High conversion",
          link: "https://ozgoat-webiste.vercel.app/",
          problem: "OZGOAT needed a professional digital presence to establish credibility in the competitive Australian tech market. Their existing branding lacked clarity, SEO optimization, and a structured user journey, limiting their ability to attract and convert potential clients.",
          solution: "Designed and developed a modern, SEO-optimized website with a strong focus on branding, user experience, and conversion strategy. Leveraged Next.js for performance and scalability, and implemented clean UI components with Tailwind CSS to ensure a visually appealing and highly responsive experience across all devices.",
          technologies: ["Next.js", "SEO", "React.js"],
          cost: "$250",
          review: "Very professional work!"
        },
        {
          img: "/pictures/projects/portfolioweb.png",
          title: "Personal Website",
          desc: "My personal portfolio website",
          tags: ["Next.js", "SEO"],
          result: "High conversion",
          problem: "There was a need to establish a strong personal brand and showcase technical expertise in AI, automation, and web development. Without a structured and visually appealing portfolio, it was difficult to effectively communicate skills and attract high-quality clients.",
          solution: "Built a modern, fully responsive portfolio using Next.js with a strong emphasis on UI/UX, performance, and storytelling. Designed sections to clearly highlight services, projects, and expertise while optimizing for SEO and client conversion, resulting in improved visibility and professional positioning.",
          technologies: ["Next.js", "SEO"],
          cost: "$250",
          review: ""
        }
      ]
    },
    {
      category: "Automation Projects",
      projects: [
        {
          img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&q=80",
          title: "CRM Lead-to-Sales Automation",
          desc: "Fully automated lead pipeline from capture to conversion",
          tags: ["n8n", "Zapier", "HubSpot"],
          result: "3x increase in lead conversion",
          problem: "Businesses were manually managing leads across multiple platforms, leading to delayed follow-ups, missed opportunities, and inconsistent sales processes.",
          solution: "Designed and deployed an end-to-end CRM automation system using n8n and Zapier that captures leads, qualifies them automatically, triggers personalized email sequences, and syncs data across CRM tools—ensuring faster response time and higher conversion rates.",
          technologies: ["n8n", "Zapier", "HubSpot"],
          cost: "$400",
          review: "Massively improved our sales workflow!"
        },
        {
          img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
          title: "E-commerce Order Automation",
          desc: "Automated order processing and customer notifications",
          tags: ["Shopify", "Make", "API"],
          result: "60% reduction in manual workload",
          problem: "E-commerce businesses struggled with manual order processing, delayed updates, and inefficient customer communication, affecting customer satisfaction.",
          solution: "Built an automated workflow that processes orders, updates inventory, sends real-time notifications, and integrates with third-party services—ensuring seamless operations and improved customer experience.",
          technologies: ["Shopify API", "Make", "Webhooks"],
          cost: "$350",
          review: "Automation saved us hours daily!"
        },
        {
          img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&q=80",
          title: "Marketing Automation System",
          desc: "Automated email campaigns and lead nurturing",
          tags: ["Mailchimp", "n8n", "Automation"],
          result: "2.5x engagement rate",
          problem: "Manual email marketing campaigns were time-consuming and lacked personalization, leading to low engagement and poor ROI.",
          solution: "Implemented an automated marketing system that segments users, triggers personalized email sequences, and tracks engagement—boosting open rates and conversions significantly.",
          technologies: ["Mailchimp", "n8n", "APIs"],
          cost: "$300",
          review: "Our marketing is now fully automated!"
        }
      ]
    },
    {
      category: "Business AI Solutions",
      projects: [
        {
          img: "/pictures/projects/data analyst.jpeg", // Placeholder: Data analytics visualization
          title: "AI-Powered Data Analyst Automation System",
          desc: "Automated data extraction, visualization & reporting via natural language queries",
          tags: ["n8n", "Google Gemini", "QuickChart"],
          result: "Instant analysis & professional reports",
          problem: "Businesses struggle with manual data analysis requiring technical expertise, slow decision-making, inconsistent reporting formats, and lack of real-time visualization.",
          solution: "Built an n8n-powered AI system that interprets natural language queries, processes structured data from Google Sheets, generates dynamic charts (line/bar/pie), and delivers professional HTML reports via email—all through simple conversation.",
          technologies: ["n8n", "Google Gemini", "Google Sheets", "QuickChart API", "Gmail API", "JavaScript"],
          cost: "$300",
          review: "Transformed how we use data—reports that took hours now arrive in seconds!"
        },
        {
          img: "/pictures/projects/khan bbq.jpeg", // Placeholder: Restaurant/ordering
          title: "AI-Powered Food Ordering System",
          desc: "Conversational AI ordering assistant for restaurants",
          tags: ["n8n", "WhatsApp API", "Google Gemini"],
          result: "Instant orders, zero manual effort",
          problem: "Small restaurants rely on manual order taking via calls/messages, leading to miscommunication, no structured tracking, slow responses, and poor customer experience.",
          solution: "Developed an AI-powered WhatsApp ordering assistant using n8n that handles the entire order flow—menu browsing, guided selection, real-time inventory checks, order confirmation, and automated logging—all through natural conversation.",
          technologies: ["n8n", "WhatsApp Business API", "Google Gemini", "Google Sheets", "Webhooks"],
          cost: "$200",
          review: "Our customers love ordering on WhatsApp—game changer for our small kitchen!"
        },
        {
          img: "/pictures/projects/HR MANAGMENT PROJECT.png", // Placeholder: HR/recruitment
          title: "AI-Powered HR Management Automation System",
          desc: "End-to-end recruitment & candidate screening automation",
          tags: ["n8n", "AI Decision Logic", "Webhooks"],
          result: "Faster hiring & instant communication",
          problem: "HR departments waste time on manual candidate screening, interview coordination, and repetitive communication, leading to slow hiring and poor candidate experience.",
          solution: "Built a fully automated HR workflow system using n8n that captures applicant data, applies AI-based evaluation logic, routes candidates into multiple decision paths (shortlist/reject/review), and triggers automated responses—creating a scalable, smart hiring pipeline.",
          technologies: ["n8n", "Webhooks", "JavaScript", "JSON", "External APIs"],
          cost: "$700",
          review: "Cut our screening time by 80%—candidates love the instant responses!"
        },
      ]
    }
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
            Real-world AI and web solutions delivering measurable results.
          </p>
        </div>

        {projectCategories.map((section, i) => (
          <div key={i} className="mb-16">
            <h3 className="text-2xl font-bold text-purple-500 mb-6">
              {section.category}
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.projects.map((project, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedProject(project)}
                  className="glass-card rounded-2xl overflow-hidden border border-indigo-500/15 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-5">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-white font-bold mb-1">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-xs mb-3">
                      {project.desc}
                    </p>

                    <div className="text-green-400 text-xs font-medium">
                      {project.result}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4 ">
            <div className="bg-navy-900 max-w-5xl w-full rounded-2xl p-6 relative border border-purple-900">

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-white text-xl cursor-pointer"
              >
                ✕
              </button>

              <img
                src={selectedProject.img}
                className="w-full h-56 object-cover rounded-xl mb-4 "
              />

              <h2 className="text-2xl text-white font-bold mb-3">
                {selectedProject.title}
              </h2>

              {selectedProject.link && (
                <p className="text-red-400 mb-2">
                  <span className="text-neutral-200 font-semibold">Link:</span>{" "}
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-400 transition"
                  >
                    {selectedProject.link}
                  </a>
                </p>
              )}

              <p className="text-gray-400 mb-2">
                <span className="text-neutral-200 font-semibold">Problem:</span> {selectedProject.problem}
              </p>

              <p className="text-gray-400 mb-2">
                <span className="text-neutral-200 font-semibold">Solution:</span> {selectedProject.solution}
              </p>

              <p className="text-gray-400 mb-2">
                <span className="text-neutral-200 font-semibold">Technologies:</span> {selectedProject.technologies.join(", ")}
              </p>

              <p className="text-gray-400 mb-2">
                <span className="text-neutral-200 font-semibold">Cost:</span> {selectedProject.cost}
              </p>

              <p className="text-green-400 mt-3">
                ⭐ {selectedProject.review}
              </p>
            </div>
          </div>
        )}

        <div className="flex justify-center items-center">
          <a
            href="#contact"
            className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-semibold px-7 py-3 rounded-md font-heading inline-flex items-center gap-2 hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] hover:-translate-y-0.5 transition-all"
          >
            Let's Work Together
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;