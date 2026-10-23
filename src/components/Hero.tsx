import React from 'react';
import { ArrowDown, Mail, Terminal, Share2, Layers } from 'lucide-react';

interface HeroProps {
  onOpenCommandPalette: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCommandPalette }) => {
  return (
    <section className="relative pt-4 sm:pt-8 border-b border-parchment-border pb-12 sm:pb-16" id="hero">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-between">
        {/* Left Editorial Narrative */}
        <div className="flex-1 max-w-2xl flex flex-col gap-5">
          <div className="inline-flex items-center gap-2 self-start px-2.5 py-1 rounded bg-white border border-parchment-border font-mono text-[11px] text-navy-700 shadow-sm">
            <span className="font-bold text-accent-orange">[FIELD_NOTES // LOG]</span>
            <span>HYD, IN • IT • DATA • ML</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-[1.15]">
            I build data-driven applications that turn analysis into useful tools.
          </h1>

          <p className="text-base sm:text-lg text-navy-700 leading-relaxed font-normal">
            Open to entry-level technical opportunities across software development, data, and applied machine learning.
          </p>

          <div className="p-3.5 rounded border border-parchment-border bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono shadow-sm">
            <span className="text-navy-900 font-medium">
              Final-year B.Tech in Information Technology, Sreenidhi Institute of Science and Technology (SNIST)
            </span>
            <span className="inline-block px-2 py-0.5 rounded bg-blue-50 text-accent-blue font-semibold whitespace-nowrap self-start sm:self-auto border border-blue-200">
              GPA 8.9/10
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-navy-900 text-white font-medium text-xs sm:text-sm hover:bg-accent-blue transition-colors shadow-sm"
            >
              <span>Explore Projects</span>
              <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-white border border-navy-900/30 text-navy-900 font-medium text-xs sm:text-sm hover:border-navy-900 hover:bg-parchment-low transition-colors shadow-sm"
            >
              <span>Contact</span>
              <span className="material-symbols-outlined text-[16px] text-accent-blue">mail</span>
            </a>

            <div className="flex items-center gap-2 pl-2">
              <a
                href="https://github.com/ShamiliAluru"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub @ShamiliAluru"
                className="p-2 rounded border border-parchment-border bg-white text-navy-700 hover:text-navy-900 hover:border-navy-900 transition-colors shadow-sm"
                aria-label="GitHub Profile"
              >
                <span className="material-symbols-outlined text-[18px]">terminal</span>
              </a>

              <a
                href="https://www.linkedin.com/in/shamili-aluru-9035012b2"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className="p-2 rounded border border-parchment-border bg-white text-navy-700 hover:text-navy-900 hover:border-navy-900 transition-colors shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <span className="material-symbols-outlined text-[18px]">hub</span>
              </a>

              <button
                onClick={onOpenCommandPalette}
                title="Open Engineering Index & Quick Lab Demos"
                className="p-2 rounded border border-parchment-border bg-white text-navy-700 hover:text-accent-blue hover:border-accent-blue transition-colors shadow-sm"
                aria-label="Engineering Index"
              >
                <Layers className="w-[18px] h-[18px]" />
              </button>
            </div>
          </div>
        </div>

        {/* Engineering Log Side Metadata */}
        <div className="w-full lg:w-80 p-5 rounded border border-parchment-border bg-white shadow-sm flex flex-col gap-4 font-mono text-xs">
          <div className="flex items-center justify-between border-b border-parchment-border pb-2.5">
            <span className="font-bold text-navy-900 uppercase tracking-wider text-[11px]">System Specs</span>
            <span className="text-accent-blue text-[11px]">LOG_INDEX: #01</span>
          </div>

          <div className="space-y-2.5">
            <div>
              <div className="text-[10px] text-navy-400 uppercase">Focus Areas</div>
              <div className="text-navy-800 font-sans font-medium text-xs mt-0.5">
                Software Dev • Applied ML • Data Pipelines
              </div>
            </div>

            <div>
              <div className="text-[10px] text-navy-400 uppercase">Current Status</div>
              <div className="text-emerald-700 font-sans font-medium text-xs mt-0.5 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                Active Candidate // Relocatable
              </div>
            </div>

            <div>
              <div className="text-[10px] text-navy-400 uppercase">Academic Standing</div>
              <div className="text-navy-800 font-sans font-medium text-xs mt-0.5">
                Final-Year B.Tech (IT) · SNIST · GPA 8.9/10
              </div>
            </div>

            <div>
              <div className="text-[10px] text-navy-400 uppercase">Core Stack</div>
              <div className="text-navy-700 text-[11px] mt-0.5 font-mono">
                Python, Java, JavaScript, SQL, scikit-learn
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-parchment-border text-[10px] text-navy-400 leading-normal">
            * Engineering notebook documenting verified implementations, pipelines, and validated coursework.
          </div>
        </div>
      </div>
    </section>
  );
};
