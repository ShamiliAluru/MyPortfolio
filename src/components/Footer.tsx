import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-parchment-border bg-white mt-16 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-navy-600">
        <div className="flex items-center gap-2">
          <span className="font-bold text-navy-900">Shamili Aluru</span>
          <span>•</span>
          <span className="text-accent-orange font-semibold">Engineer's Field Notes Edition</span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-4 text-[11px]">
          <a className="hover:text-accent-blue transition-colors" href="#hero">
            Top
          </a>
          <a className="hover:text-accent-blue transition-colors" href="#projects">
            Projects
          </a>
          <a className="hover:text-accent-blue transition-colors" href="#toolkit">
            Toolkit
          </a>
          <a className="hover:text-accent-blue transition-colors" href="#experience">
            Experience
          </a>
          <a className="hover:text-accent-blue transition-colors" href="#certificates">
            Certificates
          </a>
          <a className="hover:text-accent-blue transition-colors" href="#education">
            Education
          </a>
          <a className="hover:text-accent-blue transition-colors" href="#about">
            About
          </a>
          <a className="hover:text-accent-blue transition-colors" href="#contact">
            Contact
          </a>
        </nav>

        <div className="text-[11px] text-navy-500">
          © Shamili Aluru. Documented with rigor.
        </div>
      </div>
    </footer>
  );
};
