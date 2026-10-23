import React from 'react';
import { CERTIFICATES_REGISTRY } from '../data/portfolioData';

interface CertificatesTableProps {
  onOpenCertModal: (title: string, subtitle: string, imageUrl: string) => void;
}

export const CertificatesTable: React.FC<CertificatesTableProps> = ({ onOpenCertModal }) => {
  return (
    <section className="space-y-6" id="certificates">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-parchment-border pb-3">
        <div>
          <span className="font-mono text-xs font-semibold text-accent-blue uppercase tracking-wider">
            SECTION 06 // AUDITED CREDENTIALS
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight mt-0.5">
            Certificates &amp; Recognition
          </h2>
        </div>
        <p className="font-mono text-xs text-navy-600">Select any record to inspect document</p>
      </div>

      {/* Clean table registry */}
      <div className="overflow-x-auto rounded border border-parchment-border bg-white shadow-sm">
        <table className="w-full text-left text-xs font-mono border-collapse">
          <thead>
            <tr className="bg-parchment-low border-b border-parchment-border text-[11px] text-navy-700">
              <th className="py-3 px-4 font-semibold">Title / Description</th>
              <th className="py-3 px-4 font-semibold hidden md:table-cell">Issuer &amp; Affiliation</th>
              <th className="py-3 px-4 font-semibold hidden sm:table-cell">Date</th>
              <th className="py-3 px-4 font-semibold text-right">Verification</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-parchment-border-subtle text-navy-800">
            {CERTIFICATES_REGISTRY.map((cert) => {
              const isLor = cert.id === 'cert-skillcraft-lor';

              return (
                <tr key={cert.id} className="hover:bg-parchment-low/60 transition-colors">
                  <td className="py-3 px-4">
                    <div className="font-bold text-navy-900 font-sans text-sm">{cert.title}</div>
                    <div className="text-[11px] text-navy-500 md:hidden mt-0.5">
                      {cert.issuer} • {cert.date}
                    </div>
                    <div className="text-[11px] text-navy-600 hidden md:block">
                      {cert.description}
                    </div>
                  </td>

                  <td className="py-3 px-4 hidden md:table-cell font-sans text-xs">{cert.issuer}</td>
                  <td className="py-3 px-4 hidden sm:table-cell text-navy-600">{cert.date}</td>

                  <td className="py-3 px-4 text-right">
                    <div className="inline-flex items-center justify-end gap-1.5 flex-wrap">
                      {cert.type === 'external' && cert.externalUrl && (
                        <a
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-blue-50 text-accent-blue hover:bg-blue-100 font-semibold transition-colors"
                          href={cert.externalUrl}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <span>Verify Badge</span>
                          <span className="material-symbols-outlined text-[13px]">open_in_new</span>
                        </a>
                      )}

                      {cert.type === 'badge' && (
                        <span
                          className={`px-2 py-0.5 rounded bg-parchment-low text-[11px] ${
                            cert.badgeColor || 'text-navy-600'
                          }`}
                        >
                          {cert.badgeText}
                        </span>
                      )}

                      {cert.type === 'modal' && cert.imageUrl && (
                        <button
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-parchment-low hover:bg-parchment-border text-navy-900 font-semibold transition-colors border border-parchment-border/50"
                          onClick={() =>
                            onOpenCertModal(
                              cert.title,
                              `${cert.issuer} • ${cert.date}`,
                              cert.imageUrl!
                            )
                          }
                        >
                          <span>{isLor ? 'View Letter' : 'View Certificate'}</span>
                          <span className="material-symbols-outlined text-[13px]">visibility</span>
                        </button>
                      )}

                      {cert.badgeUrl && (
                        <button
                          className="inline-flex items-center gap-1 px-2 py-1 rounded bg-emerald-50 text-emerald-800 hover:bg-emerald-100 font-semibold transition-colors border border-emerald-200 text-[11px]"
                          title="View Verified Badge"
                          onClick={() =>
                            onOpenCertModal(
                              `${cert.title} — Verified Badge`,
                              `${cert.issuer} • Verified Credential Badge`,
                              cert.badgeUrl!
                            )
                          }
                        >
                          <span className="material-symbols-outlined text-[13px] text-emerald-600">
                            verified
                          </span>
                          <span>Badge</span>
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};
