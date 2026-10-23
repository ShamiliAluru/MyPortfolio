import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { TOOLKIT_CATEGORIES } from '../data/portfolioData';

export const Toolkit: React.FC = () => {
  const [filterText, setFilterText] = useState('');

  return (
    <section className="space-y-6" id="toolkit">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-parchment-border pb-3">
        <div>
          <span className="font-mono text-xs font-semibold text-accent-blue uppercase tracking-wider">
            SECTION 03 // SPECIFICATIONS
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight mt-0.5">
            Technical Toolkit
          </h2>
        </div>
        <p className="font-mono text-xs text-navy-600">Categorized Competencies &amp; Technologies</p>
      </div>

      {/* Grouped cards without proficiency bars or percentages */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {TOOLKIT_CATEGORIES.map((cat) => {
          const isHighlighted = (skill: string) =>
            filterText.trim() !== '' && skill.toLowerCase().includes(filterText.toLowerCase().trim());

          return (
            <div
              key={cat.number}
              className="p-5 rounded border border-parchment-border bg-white shadow-sm flex flex-col justify-between hover:border-navy-900/30 transition-all"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`w-2 h-2 rounded-sm ${
                      cat.accentColor === 'navy'
                        ? 'bg-navy-900'
                        : cat.accentColor === 'blue'
                        ? 'bg-accent-blue'
                        : 'bg-accent-orange'
                    }`}
                  ></span>
                  <span className="font-mono text-xs font-bold text-navy-900 uppercase tracking-wider">
                    {cat.number} // {cat.category}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => {
                    const match = isHighlighted(skill);
                    return (
                      <span
                        key={skill}
                        className={`px-2.5 py-1 rounded border text-xs font-medium transition-colors ${
                          match
                            ? 'bg-blue-100 border-accent-blue text-blue-900 font-semibold'
                            : 'bg-parchment-low border-parchment-border text-navy-900'
                        }`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>

              <p className="text-[11px] text-navy-600 font-mono mt-4 pt-2 border-t border-parchment-border-subtle">
                {cat.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
