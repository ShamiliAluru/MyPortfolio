import React, { useEffect, useState } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, ExternalLink, ShieldCheck } from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  imageUrl: string;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  imageUrl,
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      setZoomLevel(1);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <div
      className="fixed inset-0 z-50 bg-navy-900/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 transition-opacity"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative max-w-4xl w-full max-h-[94vh] bg-white rounded border border-parchment-border shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-4 sm:px-6 py-3.5 border-b border-parchment-border bg-parchment-low flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-blue-50 border border-blue-200 flex items-center justify-center text-accent-blue flex-shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 id="modal-title" className="text-sm sm:text-base font-bold text-navy-900 leading-snug">
                {title}
              </h4>
              <p className="font-mono text-[11px] text-navy-600 mt-0.5">{subtitle}</p>
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            {/* Zoom Controls */}
            <div className="hidden sm:flex items-center border border-parchment-border rounded bg-white p-0.5 font-mono text-xs">
              <button
                onClick={handleZoomOut}
                title="Zoom Out"
                className="p-1 hover:bg-parchment-low text-navy-700 rounded transition-colors"
                aria-label="Zoom out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="px-1.5 text-[10px] text-navy-600 select-none">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={handleZoomIn}
                title="Zoom In"
                className="p-1 hover:bg-parchment-low text-navy-700 rounded transition-colors"
                aria-label="Zoom in"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleResetZoom}
                title="Reset Zoom"
                className="p-1 hover:bg-parchment-low text-navy-700 rounded border-l border-parchment-border transition-colors"
                aria-label="Reset zoom"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            <a
              href={imageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 sm:px-2.5 sm:py-1 rounded border border-parchment-border bg-white text-navy-700 hover:text-navy-900 hover:border-navy-900 transition-colors flex items-center gap-1 font-mono text-xs"
              title="Open raw document in new tab"
            >
              <span className="hidden sm:inline">Raw File</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded border border-parchment-border bg-white text-navy-700 hover:text-navy-900 hover:border-navy-900 flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Image Frame with Scroll & Zoom */}
        <div className="flex-1 p-4 bg-parchment overflow-auto flex items-center justify-center min-h-[350px] max-h-[72vh] select-none">
          <div
            className="transition-transform duration-150 ease-out origin-center flex items-center justify-center"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            <img
              src={imageUrl}
              alt={title}
              className="max-w-full max-h-[68vh] object-contain rounded border border-parchment-border shadow-md bg-white pointer-events-auto"
              loading="lazy"
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-4 sm:px-6 py-2.5 border-t border-parchment-border bg-white flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-xs">
          <div className="flex items-center gap-2 text-navy-500 text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
            <span>Archival Record Verified // Sreenidhi Institute of Science and Technology</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 rounded bg-navy-900 text-white text-[11px] font-semibold hover:bg-accent-blue transition-colors shadow-sm"
            >
              Close Record
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
