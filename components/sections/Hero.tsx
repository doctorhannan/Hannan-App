"use client";
import { useEffect, useRef } from "react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const messages = [
      "Analyzing your workflow...",
      "Building automation pipeline...",
      "Deploying AI agent... ✓"
    ];
    let msgIndex = 0;
    const typingBubble = document.querySelector('.chat-bubble-bot:last-child');

    const interval = setInterval(() => {
      if (typingBubble && typingBubble.querySelector('.flex')) {
        setTimeout(() => {
          typingBubble.innerHTML = `<span class="text-xs text-indigo-200">${messages[msgIndex]}</span>`;
          msgIndex = (msgIndex + 1) % messages.length;

          setTimeout(() => {
            typingBubble.innerHTML = `<div class="flex gap-1 items-center"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>`;
          }, 2000);
        }, 500);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-28 pb-20 overflow-hidden bg-gradient-radial from-indigo-500/15 via-transparent to-transparent bg-navy-950">
      {/* Floating orbs */}
      <div className="absolute w-96 h-96 bg-indigo-600 opacity-20 rounded-full blur-[80px] -top-24 -left-24 animate-float"></div>
      <div className="absolute w-80 h-80 bg-purple-700 opacity-15 rounded-full blur-[80px] top-24 -right-24 animate-float [animation-delay:3s]"></div>
      <div className="absolute w-64 h-64 bg-blue-600 opacity-10 rounded-full blur-[80px] bottom-0 left-1/3 animate-float [animation-delay:1.5s]"></div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-11 xl:px-18 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Availability */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-indigo-500/15 border border-indigo-500/30">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-sm text-indigo-300 font-medium">Available for Projects</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Transform Your Business with <span className="gradient-text">AI Automation,</span> From Simple Tasks to Intelligent Systems
            </h1>

            {/* Subheading */}
            <p className="text-gray-400 text-lg leading-relaxed mb-4 max-w-xl">
              I design and deploy AI-powered systems that automate workflows, reduce manual work, and improve efficiency. 
              Whether it's a small task or a full business process, I build solutions that save time and scale your operations.
            </p>

            {/* Trust Line */}
            <p className="text-indigo-300 text-sm mb-6">
              ✔ No task is too small — from quick automations to complete AI systems
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
              <a
                href="#contact"
                className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-semibold px-8 py-3.5 rounded-md font-heading flex items-center gap-2 hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] hover:-translate-y-0.5 transition-all"
              >
                Start a Project
              </a>

              <a
                href="#projects"
                className="border border-indigo-500/60 text-indigo-300 font-semibold px-8 py-3.5 rounded-md font-heading flex items-center gap-2 hover:bg-indigo-500/15 hover:border-indigo-500/90 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:-translate-y-0.5 transition-all"
              >
                View Projects
              </a>
            </div>

            {/* Trust Note */}
            <p className="text-xs text-gray-500 mb-10">
              Helping startups, freelancers, and businesses automate smarter
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8">
              <div className="text-center">
                <div className="font-heading text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  20+
                </div>
                <div className="text-gray-500 text-xs mt-1">Projects Done</div>
              </div>

              <div className="w-px h-10 bg-white/10"></div>

              <div className="text-center">
                <div className="font-heading text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  10+
                </div>
                <div className="text-gray-500 text-xs mt-1">Happy Clients</div>
              </div>

              <div className="w-px h-10 bg-white/10"></div>

              <div className="text-center">
                <div className="font-heading text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  3+
                </div>
                <div className="text-gray-500 text-xs mt-1">Years Experience</div>
              </div>
            </div>

          </div>

          {/* Right side (chatbot widget) */}
          <div className="relative flex justify-center items-center animate-float">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-indigo-500/30 blur-3xl scale-150"></div>
              <div className="chatbot-widget rounded-2xl p-5 w-80 relative z-10 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-md bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center">
                      <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold font-heading">AI Assistant</div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                        <span className="text-green-400 text-xs">Online</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex gap-2">
                    <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs bg-gradient-to-br from-indigo-600 to-purple-700">🤖</div>
                    <div className="chat-bubble-bot rounded-2xl rounded-tl-none px-3 py-2 text-xs text-indigo-200 max-w-48 bg-indigo-500/20 border border-indigo-500/30">
                      Hello! I'm your AI assistant. How can I automate your workflow today?
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <div className="chat-bubble-user rounded-2xl rounded-tr-none px-3 py-2 text-xs text-white max-w-44 bg-gradient-to-r from-indigo-600 to-purple-700">
                      Can you automate my CRM data entry?
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs bg-gradient-to-br from-indigo-600 to-purple-700">🤖</div>
                    <div className="chat-bubble-bot rounded-2xl rounded-tl-none px-3 py-2 max-w-48 bg-indigo-500/20 border border-indigo-500/30">
                      <div className="flex gap-1 items-center">
                        <div className="typing-dot"></div>
                        <div className="typing-dot"></div>
                        <div className="typing-dot"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 text-xs px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-indigo-500/60"
                    readOnly
                  />
                  <button className="w-8 h-8 rounded-md bg-gradient-to-r from-indigo-600 to-purple-700 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" fill="white" viewBox="0 0 24 24">
                      <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-6 glass-card neon-border rounded-md px-3 py-2 flex items-center gap-2 bg-white/5 backdrop-blur-md border border-indigo-500/30">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-xs text-white font-medium">RAG Pipeline Active</span>
              </div>
              <div className="absolute -bottom-4 -left-6 glass-card neon-border rounded-md px-3 py-2 flex items-center gap-2 bg-white/5 backdrop-blur-md border border-indigo-500/30">
                <span className="text-xs">⚡</span>
                <span className="text-xs text-white font-medium">10x Faster Workflows</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;