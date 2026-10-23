import React, { useEffect, useState } from 'react';
import { Search, X, Terminal, ExternalLink, Code2, Award, FolderGit2, BookOpen } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCert: (title: string, subtitle: string, imageUrl: string) => void;
  onOpenDemo: (type: 'price-simulator' | 'sales-waterfall' | 'rfm-cluster') => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectCert,
  onOpenDemo,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose(); // toggle if already handled or handled in parent
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const quickActions = [
    {
      label: 'Explore Hyderabad Home Price Pipeline Demo',
      category: 'Interactive Lab',
      icon: Terminal,
      action: () => {
        onClose();
        onOpenDemo('price-simulator');
      },
    },
    {
      label: 'Inspect Retail Sales Margin Recovery CTEs',
      category: 'Interactive Lab',
      icon: Terminal,
      action: () => {
        onClose();
        onOpenDemo('sales-waterfall');
      },
    },
    {
      label: 'Test K-Means Customer RFM Clusters',
      category: 'Interactive Lab',
      icon: Terminal,
      action: () => {
        onClose();
        onOpenDemo('rfm-cluster');
      },
    },
    {
      label: 'View Certificate: Aleph Zero Blockchain & Web3 Workshop',
      category: 'Credentials',
      icon: Award,
      action: () => {
        onClose();
        onSelectCert(
          'Blockchain & Web3 Workshop — Certificate of Participation',
          'SDC SNIST × Aleph Zero India • March 24, 2025',
          '/assets/aistudio/Aleph_Zero_Blockchain_Web3_Workshop_Certificate.jpeg'
        );
      },
    },
    {
      label: 'View Certificate: HackWave 3.0 Distinction (Five Star Performer)',
      category: 'Credentials',
      icon: Award,
      action: () => {
        onClose();
        onSelectCert(
          'HackWave 3.0 — Five Star Performer (Certificate of Distinction)',
          'SNIST CDC × StudentAlumni.ai • Sept 4–5, 2026',
          '/assets/aistudio/HackWave_3_Distinction_Five_Star_Performer_Certificate.jpeg'
        );
      },
    },
    {
      label: 'View Certificate: HackWave 3.0 Certificate of Appreciation',
      category: 'Credentials',
      icon: Award,
      action: () => {
        onClose();
        onSelectCert(
          'HackWave 3.0 — Certificate of Appreciation',
          'SNIST CDC × StudentAlumni.ai • Sept 4–5, 2026',
          '/assets/aistudio/HackWave_3_Appreciation_Certificate.jpeg'
        );
      },
    },
    {
      label: 'View Certificate: AI Agents Workshop (SDC SNIST)',
      category: 'Credentials',
      icon: Award,
      action: () => {
        onClose();
        onSelectCert(
          'AI Agents Workshop — Certificate of Participation',
          'SDC–SNIST Chapter • Aug 7, 2025',
          '/assets/aistudio/ai_agents_workshop_certificate.png'
        );
      },
    },
    {
      label: 'View Certificate: EduSkills MERN Stack Internship',
      category: 'Credentials',
      icon: Award,
      action: () => {
        onClose();
        onSelectCert(
          'EduSkills — MERN Stack Internship Certificate',
          'EduSkills Academy • Oct 11, 2026',
          '/assets/aistudio/EduSkills_MERN_Stack_Internship_Certificate.png'
        );
      },
    },
    {
      label: 'View Certificate: Marpu Foundation Writing Intern',
      category: 'Credentials',
      icon: Award,
      action: () => {
        onClose();
        onSelectCert(
          'Marpu Foundation — Writing Intern Certificate of Internship',
          'Marpu Foundation • May 10, 2024',
          '/assets/aistudio/Marpu_f040d6a8.jpeg'
        );
      },
    },
    {
      label: 'Jump to Section: Featured Projects',
      category: 'Navigation',
      icon: FolderGit2,
      action: () => {
        onClose();
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      label: 'Jump to Section: Technical Toolkit',
      category: 'Navigation',
      icon: Code2,
      action: () => {
        onClose();
        document.getElementById('toolkit')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      label: 'Jump to Section: Experience Timeline',
      category: 'Navigation',
      icon: BookOpen,
      action: () => {
        onClose();
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      label: 'Jump to Section: Certificates & Recognition',
      category: 'Navigation',
      icon: Award,
      action: () => {
        onClose();
        document.getElementById('certificates')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      label: 'Open GitHub Profile (@ShamiliAluru)',
      category: 'External',
      icon: ExternalLink,
      action: () => {
        window.open('https://github.com/ShamiliAluru', '_blank');
        onClose();
      },
    },
    {
      label: 'Open LinkedIn Profile',
      category: 'External',
      icon: ExternalLink,
      action: () => {
        window.open('https://www.linkedin.com/in/shamili-aluru-9035012b2', '_blank');
        onClose();
      },
    },
  ];

  const filtered = quickActions.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-50 bg-navy-900/80 backdrop-blur-sm flex items-start justify-center pt-20 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-xl w-full bg-white rounded border border-parchment-border shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 border-b border-parchment-border bg-parchment-low">
          <Search className="w-4 h-4 text-navy-400" />
          <input
            type="text"
            placeholder="Type a command, project, or section..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full px-3 py-3.5 text-sm font-mono text-navy-900 bg-transparent focus:outline-none placeholder:text-navy-400"
          />
          <button
            onClick={onClose}
            className="p-1 rounded text-navy-400 hover:text-navy-900 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-parchment-border-subtle">
          {filtered.length === 0 ? (
            <div className="p-6 text-center text-xs font-mono text-navy-500">
              No matching commands found for "{query}".
            </div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  onClick={item.action}
                  className="w-full text-left px-3 py-2.5 rounded hover:bg-parchment-low flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-navy-500 group-hover:text-accent-blue transition-colors" />
                    <span className="text-xs font-mono text-navy-800 font-medium group-hover:text-navy-900">
                      {item.label}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-parchment-border-subtle text-navy-600">
                    {item.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 bg-parchment-low border-t border-parchment-border flex items-center justify-between text-[11px] font-mono text-navy-500">
          <span>Navigate with mouse or touch</span>
          <kbd className="px-1.5 py-0.5 rounded bg-white border border-parchment-border text-[10px]">
            ESC to close
          </kbd>
        </div>
      </div>
    </div>
  );
};
