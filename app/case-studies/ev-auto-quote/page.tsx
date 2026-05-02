import Link from "next/link";

export default function EVAutoQuotePage() {
  return (
    <div className="bg-navy-950 text-white min-h-screen">

      {/* 🔹 Top Navbar / Back */}
      <div className="sticky top-0 z-50 bg-navy-950/80 backdrop-blur-md border-b border-indigo-500/20">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          
          <h2 className="font-bold text-white text-lg">
            Abdul Hannan
          </h2>

          <Link
            href="/"
            className="text-sm text-indigo-400 hover:text-indigo-300 transition"
          >
            ← Back to Home
          </Link>

        </div>
      </div>

      {/* 🔹 Main Content */}
      <div className="px-6 py-16">
        <div className="max-w-5xl mx-auto">

          {/* Title */}
          <h1 className="text-4xl font-bold mb-4 gradient-text">
            EV Auto Quote
          </h1>

          <p className="text-gray-400 mb-10">
            End-to-End EV Charger Sales & Installation Automation System
          </p>

          {/* Cover Image */}
          <img
            src="/pictures/projects/AQ/Architecture Diagram.png"
            className="rounded-xl mb-10 w-full"
            alt="Architecture Diagram"
          />

          {/* Executive Summary */}
          <section className="mb-10">
            <h2 className="text-indigo-400 text-2xl font-bold mb-3">
              Executive Summary
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Auto Quote is a business process automation system designed for EV charging companies to eliminate manual bottlenecks across customer onboarding, quote generation, invoicing, payment processing, CRM synchronization, installer allocation, and installation scheduling.
              <br /><br />
              Built using Zapier, Python, Webhooks, HubSpot, Xero, Jumptech, Cypher, and database automation, this system transforms a fragmented workflow requiring coordination across 12–14 roles into a unified automated pipeline.
            </p>
          </section>

          {/* Problem */}
          <section className="mb-10">
            <h2 className="text-indigo-400 text-2xl font-bold mb-3">
              Industry Problem
            </h2>
            <p className="text-gray-300">
              EV charging companies face operational complexity due to disconnected systems and manual coordination. This results in slow quote turnaround, fragmented customer data, payment delays, inconsistent CRM updates, inefficient installer allocation, and high administrative overhead.
            </p>
          </section>

          {/* Solution */}
          <section className="mb-10">
            <h2 className="text-indigo-400 text-2xl font-bold mb-3">
              Solution
            </h2>
            <p className="text-gray-300">
              Auto Quote automates the entire operational journey:
              <br /><br />
              Customer Survey → Quote Generation → Payment Handling → Invoice Automation → CRM Updates → Installer Assignment → Installation Scheduling
            </p>
          </section>

          {/* Images */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <img src="/pictures/projects/AQ/aq generator.png" className="rounded-xl" alt="" />
            <img src="/pictures/projects/AQ/aq bank.png" className="rounded-xl" alt="" />
            <img src="/pictures/projects/AQ/aq paid.png" className="rounded-xl" alt="" />
            <img src="/pictures/projects/AQ/aq xero to jumptech and cypher.png" className="rounded-xl" alt="" />
          </div>

          {/* Workflow */}
          <section className="mb-10">
            <h2 className="text-indigo-400 text-2xl font-bold mb-3">
              Workflow Architecture
            </h2>
            <p className="text-gray-300 leading-relaxed">
              The system operates in structured phases including customer intake, intelligent quote generation, automated payment routing, invoice processing, CRM synchronization, and installer allocation.
              <br /><br />
              Each event triggers downstream workflows automatically, ensuring a seamless pipeline.
            </p>
          </section>

          {/* Technologies */}
          <section className="mb-10">
            <h2 className="text-indigo-400 text-2xl font-bold mb-3">
              Technologies Used
            </h2>
            <p className="text-gray-300">
              Zapier, Python, Webhooks, HubSpot CRM, Xero Accounting, Jumptech, Cypher, Database Automation
            </p>
          </section>

          {/* Impact */}
          <section className="mb-10">
            <h2 className="text-indigo-400 text-2xl font-bold mb-3">
              Business Impact
            </h2>
            <ul className="text-green-400 space-y-2">
              <li>• 80% reduction in manual operations</li>
              <li>• Quote generation reduced from hours to minutes</li>
              <li>• Real-time CRM and payment synchronization</li>
              <li>• Faster customer communication</li>
              <li>• Scalable operations without additional staff</li>
            </ul>
          </section>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-400 mb-4">
              Want to automate your business like this?
            </p>

            <Link
              href="/#contact"
              className="bg-gradient-to-r from-indigo-600 to-purple-700 px-6 py-3 rounded-md font-semibold hover:shadow-lg transition inline-block"
            >
              Let’s Work Together
            </Link>

            {/* 🔹 Bottom Back Button */}
            <div className="mt-6">
              <Link
                href="/"
                className="text-indigo-400 hover:text-indigo-300 underline text-sm"
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