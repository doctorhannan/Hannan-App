const Footer = () => {
    return (
      <footer className="py-10 bg-navy-950 border-t border-indigo-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center">
                <span className="text-white text-xs font-bold font-heading">AI</span>
              </div>
              <span className="font-heading font-bold text-white text-lg">
                Hannan Asif <span className="gradient-text">Web + AI Specialist</span>
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#about" className="text-gray-400 hover:text-indigo-300 text-sm transition">About</a>
              <a href="#services" className="text-gray-400 hover:text-indigo-300 text-sm transition">Services</a>
              <a href="#projects" className="text-gray-400 hover:text-indigo-300 text-sm transition">Projects</a>
              <a href="#contact" className="text-gray-400 hover:text-indigo-300 text-sm transition">Contact</a>
            </div>
            <div className="text-gray-500 text-sm text-center">
              © 2025 DevAIPro. Built with <span className="gradient-text font-semibold">AI & ❤️</span>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;