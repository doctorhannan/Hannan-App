"use client";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#CaseStudies", label: "CaseStudies" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl border-b border-indigo-500/20 ${
        scrolled ? "bg-navy-950/98" : "bg-navy-950/85"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center">
              <span className="text-white text-xs font-bold font-heading">HI</span>
            </div>
            <span className="font-heading font-bold text-white text-lg">
              Hannan Asif <span className="gradient-text">Here</span>
            </span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-indigo-300 transition text-sm"
                onClick={(e) => scrollTo(e, link.href.slice(1))}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Hire Me button (desktop) */}
          <div className="hidden md:flex">
            <a
              href="#contact"
              className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-sm font-medium px-5 py-2 rounded-md font-heading hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] hover:-translate-y-0.5 transition-all"
              onClick={(e) => scrollTo(e, "contact")}
            >
              Hire Me
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-navy-950/98 backdrop-blur-xl border-b border-indigo-500/20 px-4 py-4`}>
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-400 hover:text-indigo-300 text-base py-2 border-b border-white/5"
              onClick={(e) => scrollTo(e, link.href.slice(1))}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-sm font-medium px-5 py-2.5 rounded-md text-center font-heading mt-2"
            onClick={(e) => scrollTo(e, "contact")}
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;