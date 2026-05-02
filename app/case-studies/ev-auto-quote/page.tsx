import Link from "next/link";

export default function EVAutoQuotePage() {
  return (
    <div className="bg-navy-950 text-white min-h-screen">

      {/* 🔹 Navbar */}
      
      <div className="sticky top-0 z-50 bg-navy-950/80 backdrop-blur-md border-b border-indigo-500/20">
  <div className="max-w-6xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">

    {/* LEFT → Developer Name */}
    <div className="px-10 xl:px-15 flex items-center gap-2 group cursor-default">
      <span className="text-indigo-400 text-xs sm:text-sm font-medium">
        Developer:
      </span>

      <h2 className="font-semibold text-white text-sm sm:text-lg tracking-wide transition duration-200 group-hover:text-indigo-300">
        Abdul Hannan Asif
      </h2>
    </div>

    {/* RIGHT → Button */}
    <Link
      href="/"
      className="px-10 xl:px-15 sm:px-5 py-2 rounded-md text-xs sm:text-sm 
                 bg-indigo-600/10 border border-indigo-500/30 
                 text-indigo-300 hover:bg-indigo-600/20 
                 hover:text-white hover:border-indigo-400 
                 transition-all duration-200"
    >
      ← Return Home
    </Link>

  </div>
</div>


      {/* 🔹 Main */}
      <div className="px-4 sm:px-6 py-10 sm:py-16">
        <div className="max-w-4xl mx-auto">

         {/* 🔹 Hero Section (Responsive Split Layout) */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">

{/* LEFT → TEXT */}
<div>
  <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-red-500 leading-tight">
    EV Auto Quote
  </h1>

  <p className="text-gray-300 text-sm sm:text-base mb-2">
    End-to-End EV Charger Sales & Installation Automation System
  </p>

  <p className="text-indigo-400 text-xs sm:text-sm mb-6">
    Case Study | Sales Operations Automation for EV Charging Companies
  </p>

  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
    Auto Quote is a business process automation system designed to eliminate
    manual bottlenecks across EV charger sales operations, from onboarding
    to installation scheduling, creating a seamless automated pipeline.
  </p>
</div>

{/* RIGHT → IMAGE */}
<div className="w-full">
  <img
    src="/pictures/projects/AQ/Architecture Diagram.png"
    alt="Architecture Diagram"
    className="rounded-xl w-full shadow-lg hover:scale-[1.02] transition duration-300"
  />
</div>

</div>
          {/* Executive Summary */}
          <Section title="Executive Summary">
            Auto Quote is a business process automation system designed for EV charging companies to eliminate manual operational bottlenecks across customer onboarding, quote generation, invoicing, payment processing, CRM synchronization, installer allocation, and installation scheduling.
            <br /><br />
            Built using Zapier, Python, Webhooks, HubSpot, Xero, Jumptech, Cypher, and Database Automation, this system transforms a traditionally fragmented workflow requiring coordination across 12–14 operational roles into a unified automated pipeline.
            <br /><br />
            The result is faster customer response times, improved operational visibility, reduced administrative workload, and a significantly smoother customer journey.
          </Section>

          {/* Problem */}
          <Section title="Industry Problem">
            <strong>The Operational Challenges EV Charging Companies Face</strong>
            <br /><br />
            As EV adoption accelerates, charging companies face increasing operational complexity. Most companies still rely on disconnected systems and manual coordination.
            <br /><br />
            Slow Quote Turnaround — customers wait hours or days.
            <br />
            Fragmented Customer Data — scattered across tools.
            <br />
            Payment Processing Delays — manual verification slows execution.
            <br />
            CRM Inconsistency — teams lack synchronized visibility.
            <br />
            Installer Allocation Inefficiency — delays and poor optimization.
            <br />
            High Administrative Overhead — repetitive manual tasks.
          </Section>

          {/* Solution */}
          <Section title="Our Solution">
            <strong>Auto Quote: Intelligent Workflow Automation</strong>
            <br /><br />
            Customer Survey → Quote Generation → Payment Handling → Invoice Automation → CRM Updates → Installer Assignment → Installation Scheduling
            <br /><br />
            Every business event triggers downstream workflows automatically.
          </Section>

          {/* Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12">
            <img src="/pictures/projects/AQ/aq generator.png" className="rounded-xl" />
            <img src="/pictures/projects/AQ/aq bank.png" className="rounded-xl" />
            <img src="/pictures/projects/AQ/aq paid.png" className="rounded-xl" />
            <img src="/pictures/projects/AQ/aq xero to jumptech and cypher.png" className="rounded-xl" />
          </div>

          {/* Tech Stack */}
          <Section title="Technology Stack">
            <strong>Automation Layer:</strong> Zapier, Webhooks
            <br />
            <strong>Business Logic:</strong> Python
            <br />
            <strong>Platforms:</strong> HubSpot, Xero, Jumptech, Cypher
            <br />
            <strong>Other:</strong> Databases, Email Automation
          </Section>

          {/* Workflow */}
          <Section title="Workflow Architecture">
            <strong>Phase 1: Customer Intake</strong>
            <br />
            Customer submits survey → Webhook captures data → HubSpot contact + deal → Jumptech order created.
            <br /><br />

            <strong>Phase 2: Quote Generation</strong>
            <br />
            System analyzes requirements → selects top 3 chargers → sends automated quote email.
            <br /><br />

            <strong>Phase 3: Payment Automation</strong>
            <br />
            Card: instant invoice + fulfillment.
            <br />
            Bank: invoice + delayed payment tracking.
            <br /><br />

            <strong>Phase 4: Installer Allocation</strong>
            <br />
            Automatically assigns installer based on location, workload, and availability.
          </Section>

          {/* Features */}
          <Section title="Key System Features">
            Unified Visibility, Event-Driven Automation, Dynamic Pricing, Dual Payment Logic, Installer Optimization, Audit Logs.
          </Section>

          {/* Impact */}
          <Section title="Business Impact">
            Up to 80% reduction in manual work.
            <br />
            Quotes generated in minutes.
            <br />
            Real-time payment + CRM sync.
            <br />
            Improved customer experience.
            <br />
            Scalable operations.
          </Section>

          {/* Why */}
          <Section title="Why This Matters">
            Faster responses, better deal conversion, lower operational cost, and scalable EV operations.
          </Section>

          {/* Highlights */}
          <Section title="Project Highlights">
            Business Automation, API Integration, CRM Systems, Payment Workflows, Python Logic, System Design.
          </Section>

          {/* CTA */}
          <div className="text-center mt-14 sm:mt-20">
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Let’s automate the future of EV operations.
            </p>

            <Link
              href="/#contact"
              className="bg-gradient-to-r from-indigo-600 to-purple-700 px-5 sm:px-6 py-3 rounded-md font-semibold hover:shadow-lg transition inline-block text-sm sm:text-base"
            >
              Let’s Work Together
            </Link>

            <div className="mt-6">
              <Link
                href="/"
                className="text-indigo-400 hover:text-indigo-300 underline text-xs sm:text-sm"
              >
                Go Back to Home
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

/* 🔹 Reusable Section Component */
function Section({ title, children }: any) {
  return (
    <section className="mb-10 sm:mb-14">
      <h2 className="text-indigo-400 text-xl sm:text-2xl font-bold mb-3">
        {title}
      </h2>
      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
        {children}
      </p>
    </section>
  );
}