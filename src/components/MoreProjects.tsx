import React from 'react';
import { MORE_PROJECTS } from '../data/portfolioData';

export const MoreProjects: React.FC = () => {
  return (
    <section className="space-y-6" id="more-projects">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-parchment-border pb-3">
        <div>
          <span className="font-mono text-xs font-semibold text-accent-blue uppercase tracking-wider">
            SECTION 05 // EXTENDED REPOSITORY
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight mt-0.5">
            More Projects
          </h2>
        </div>
        <p className="font-mono text-xs text-navy-600">Verified Web, Vision &amp; Desktop Systems</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {MORE_PROJECTS.map((project) => {
          const isSpanTwo = project.id === 'balance-buddy';
          const isDesktopOrWeb = project.category === 'DESKTOP SOFTWARE' || project.category === 'WEB APPLICATION';

          return (
            <div
              key={project.id}
              className={`p-5 rounded border border-parchment-border bg-white shadow-sm flex flex-col justify-between hover:border-navy-900/40 transition-all ${
                isSpanTwo ? 'md:col-span-2' : ''
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between font-mono text-[11px]">
                  <span
                    className={`font-semibold ${
                      isDesktopOrWeb ? 'text-accent-orange' : 'text-accent-blue'
                    }`}
                  >
                    {project.category}
                  </span>
                  <span className="text-navy-500">{project.badge}</span>
                </div>

                <h3 className="text-base font-bold text-navy-900">{project.title}</h3>

                <p className="text-xs text-navy-700 leading-relaxed">{project.description}</p>
              </div>

              <div className="pt-4 space-y-2 border-t border-parchment-border-subtle mt-4">
                {project.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-1 font-mono text-[10px]">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-parchment-low text-navy-800 border border-parchment-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-4 pt-1 font-mono text-xs">
                  {project.liveUrl && (
                    <a
                      className="inline-flex items-center gap-1 text-accent-blue font-semibold hover:underline"
                      href={project.liveUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>Live App</span>
                      <span className="material-symbols-outlined text-[13px]">arrow_outward</span>
                    </a>
                  )}

                  {project.liveUrl && project.githubUrl && (
                    <span className="text-parchment-border">•</span>
                  )}

                  {project.githubUrl && (
                    <a
                      className="inline-flex items-center gap-1 text-navy-700 hover:text-navy-900"
                      href={project.githubUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="material-symbols-outlined text-[13px]">code</span>
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
