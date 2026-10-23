import React, { useState, useEffect } from 'react';
import { Terminal, Search } from 'lucide-react';

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'toolkit', 'experience', 'more-projects', 'certificates', 'education', 'about', 'contact'];
      const scrollPos = window.scrollY + 100;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#toolkit', label: 'Toolkit', id: 'toolkit' },
    { href: '#experience', label: 'Experience', id: 'experience' },
    { href: '#certificates', label: 'Certificates', id: 'certificates' },
    { href: '#education', label: 'Education', id: 'education' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FBF9F2]/95 backdrop-blur-md border-b border-parchment-border transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand / Title */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded border border-navy-900/15 bg-white flex items-center justify-center font-mono font-bold text-xs text-navy-900 shadow-sm group-hover:border-accent-blue transition-colors">
            SA
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-navy-900 group-hover:text-accent-blue transition-colors">
              Shamili Aluru
            </span>
            <span className="font-mono text-[11px] text-navy-600 tracking-tight">
              Engineer's Field Notes
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="flex items-center gap-3 sm:gap-6 font-medium text-xs tracking-wide text-navy-700 overflow-x-auto py-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`hover:text-accent-blue transition-colors whitespace-nowrap ${
                activeSection === link.id
                  ? 'text-accent-blue font-semibold border-b-2 border-accent-blue pb-0.5'
                  : ''
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* Quick Search / Command Button */}
          <button
            onClick={onOpenCommandPalette}
            className="inline-flex items-center gap-1.5 px-2 py-1 rounded border border-parchment-border bg-white text-navy-700 hover:text-navy-900 hover:border-navy-900 text-[11px] font-mono shadow-sm transition-colors ml-1"
            title="Open Command Palette (Cmd + K)"
          >
            <Search className="w-3 h-3 text-navy-500" />
            <span className="hidden md:inline">Index</span>
            <kbd className="hidden sm:inline text-[9px] bg-parchment-low px-1 py-0.2 rounded border border-parchment-border">
              ⌘K
            </kbd>
          </button>
        </nav>
      </div>
    </header>
  );
};
