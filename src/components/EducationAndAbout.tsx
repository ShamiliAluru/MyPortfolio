import React from 'react';

export const EducationAndAbout: React.FC = () => {
  return (
    <>
      {/* 7. EDUCATION */}
      <section className="space-y-6" id="education">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-parchment-border pb-3">
          <div>
            <span className="font-mono text-xs font-semibold text-accent-blue uppercase tracking-wider">
              SECTION 07 // ACADEMIC FOUNDATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight mt-0.5">
              Education
            </h2>
          </div>
          <p className="font-mono text-xs text-navy-600">Institution &amp; Degree Details</p>
        </div>

        <div className="p-6 sm:p-8 rounded border border-parchment-border bg-white shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:border-navy-900/30 transition-all">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-blue-50 text-accent-blue font-mono text-xs font-semibold">
              <span>UNDERGRADUATE DEGREE PROGRAM</span>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-navy-900 tracking-tight">
                Bachelor of Technology in Information Technology
              </h3>
              <p className="text-sm text-navy-700 mt-1 font-medium">
                Sreenidhi Institute of Science and Technology (SNIST)
              </p>
            </div>

            <p className="text-xs text-navy-600 leading-relaxed font-sans">
              Core undergraduate study covering data structures and algorithms, database management, software design, and applied computational disciplines.
            </p>
          </div>

          <div className="lg:w-80 p-5 rounded border border-parchment-border bg-parchment-low flex flex-col justify-center items-start lg:items-end font-mono">
            <span className="text-[10px] text-navy-400 uppercase tracking-widest">Standing &amp; GPA</span>
            <div className="text-3xl font-bold text-navy-900 my-1">
              GPA 8.9 <span className="text-sm font-normal text-navy-500">/ 10</span>
            </div>
            <span className="text-xs text-accent-blue font-semibold">
              Final year · Graduation Year: 2027
            </span>
            <span className="text-[11px] text-navy-600 mt-1">GPA: 8.9/10</span>
          </div>
        </div>
      </section>

      {/* 8. ABOUT */}
      <section className="space-y-6" id="about">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-parchment-border pb-3">
          <div>
            <span className="font-mono text-xs font-semibold text-accent-blue uppercase tracking-wider">
              SECTION 08 // PERSPECTIVE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight mt-0.5">
              Brief About
            </h2>
          </div>
          <p className="font-mono text-xs text-navy-600">Personal Note</p>
        </div>

        <div className="p-6 sm:p-8 rounded border border-parchment-border bg-white shadow-sm">
          <p className="text-base sm:text-lg text-navy-800 leading-relaxed font-sans max-w-4xl">
            I enjoy understanding how things work, solving problems with code, and turning data into useful tools. Through projects, internships, and campus involvement, I’m continuing to grow my skills in software, analytics, and machine learning.
          </p>
        </div>
      </section>
    </>
  );
};
