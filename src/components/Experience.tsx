import React from 'react';
import { EXPERIENCE_LIST } from '../data/portfolioData';

interface ExperienceProps {
  onOpenCertModal: (title: string, subtitle: string, imageUrl: string) => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onOpenCertModal }) => {
  return (
    <section className="space-y-6" id="experience">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-parchment-border pb-3">
        <div>
          <span className="font-mono text-xs font-semibold text-accent-blue uppercase tracking-wider">
            SECTION 04 // TIMELINE
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight mt-0.5">
            Experience &amp; Involvement
          </h2>
        </div>
        <p className="font-mono text-xs text-navy-600">Chronological Notebook Entries (Newest First)</p>
      </div>

      {/* Timeline Entries */}
      <div className="relative pl-6 sm:pl-8 space-y-8 before:content-[''] before:absolute before:left-2.5 sm:before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-parchment-border">
        {EXPERIENCE_LIST.map((item) => (
          <div key={item.id} className="relative group">
            {/* Timeline node */}
            <div className="absolute -left-[27px] sm:-left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-navy-900 group-hover:border-accent-blue transition-colors"></div>

            <div className="p-5 rounded border border-parchment-border bg-white shadow-sm space-y-2 hover:border-navy-900/40 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 font-mono text-xs">
                <span
                  className={`px-2 py-0.5 rounded font-semibold self-start sm:self-auto ${
                    item.isCurrent
                      ? 'bg-blue-50 text-accent-blue'
                      : 'bg-parchment-low text-navy-800 border border-parchment-border'
                  }`}
                >
                  {item.dateRange}
                </span>
                {item.dateSubtext && (
                  <span className="text-navy-500 text-[11px]">{item.dateSubtext}</span>
                )}
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-navy-900">{item.title}</h3>
                <p
                  className={`text-xs font-mono font-medium ${
                    item.id === 'exp-skillcraft' ||
                    item.id === 'exp-student-kare' ||
                    item.id === 'exp-student-tribe' ||
                    item.id === 'exp-marpu'
                      ? 'text-accent-orange'
                      : 'text-accent-blue'
                  }`}
                >
                  {item.organization}
                </p>
              </div>

              <p className="text-sm text-navy-700 leading-relaxed">{item.description}</p>

              {item.techStack && item.techStack.length > 0 && (
                <div className="flex flex-wrap gap-1 font-mono text-[10px] pt-1">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-parchment-low text-navy-800 border border-parchment-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Action Buttons if Certificate or LOR attached */}
              {item.certificates && item.certificates.length > 0 && (
                <div className="pt-1 flex flex-wrap gap-2">
                  {item.certificates.map((cert, cIdx) => (
                    <button
                      key={cIdx}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-parchment-low hover:bg-parchment-border text-navy-800 text-xs font-mono transition-colors border border-parchment-border/60"
                      onClick={() => onOpenCertModal(cert.title, cert.subtitle, cert.imageUrl)}
                    >
                      <span
                        className={`material-symbols-outlined text-[14px] ${
                          cert.type === 'cert' ? 'text-accent-blue' : 'text-accent-orange'
                        }`}
                      >
                        {cert.type === 'cert' ? 'verified' : 'rate_review'}
                      </span>
                      <span>{cert.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Involvement Tags */}
      <div className="p-4 rounded border border-parchment-border bg-white shadow-sm">
        <div className="font-mono text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
          Additional Campus &amp; Community Involvements
        </div>
        <div className="flex flex-wrap gap-2 font-mono text-xs">
          <span className="px-2.5 py-1 rounded bg-parchment-low border border-parchment-border text-navy-800">
            Member, Student Developers Community (SDC)
          </span>
          <span className="px-2.5 py-1 rounded bg-parchment-low border border-parchment-border text-navy-800">
            Volunteer, Sreenidhi Cancer Foundation (SCF)
          </span>
          <span className="px-2.5 py-1 rounded bg-parchment-low border border-parchment-border text-navy-800">
            Cadet, National Cadet Corps (NCC)
          </span>
          <span className="px-2.5 py-1 rounded bg-parchment-low border border-parchment-border text-navy-800">
            SAE INDIA — Mechprix Representative
          </span>
        </div>
      </div>
    </section>
  );
};
