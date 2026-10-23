import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Toolkit } from './components/Toolkit';
import { Experience } from './components/Experience';
import { MoreProjects } from './components/MoreProjects';
import { CertificatesTable } from './components/CertificatesTable';
import { EducationAndAbout } from './components/EducationAndAbout';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CertificateModal } from './components/CertificateModal';
import { InteractiveDemos } from './components/InteractiveDemos';
import { CommandPalette } from './components/CommandPalette';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  // Modal state for certificate previews
  const [certModal, setCertModal] = useState<{
    isOpen: boolean;
    title: string;
    subtitle: string;
    imageUrl: string;
  }>({
    isOpen: false,
    title: '',
    subtitle: '',
    imageUrl: '',
  });

  // Interactive demo modal state
  const [activeDemo, setActiveDemo] = useState<
    'price-simulator' | 'sales-waterfall' | 'rfm-cluster' | null
  >(null);

  // Command palette state
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  // Toast notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleOpenCert = (title: string, subtitle: string, imageUrl: string) => {
    setCertModal({
      isOpen: true,
      title,
      subtitle,
      imageUrl,
    });
  };

  const handleCloseCert = () => {
    setCertModal((prev) => ({ ...prev, isOpen: false }));
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  return (
    <div className="bg-[#FBF9F2] text-[#1E293B] font-sans antialiased selection:bg-blue-100 selection:text-blue-900 grid-bg min-h-screen relative flex flex-col">
      {/* Top Navigation */}
      <Navbar onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />

      {/* Main Content */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col gap-16 sm:gap-24">
        {/* 1. Hero */}
        <Hero onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />

        {/* 2. Featured Projects */}
        <FeaturedProjects onOpenDemo={(type) => setActiveDemo(type)} />

        {/* 3. Technical Toolkit */}
        <Toolkit />

        {/* 4. Experience & Involvement Timeline */}
        <Experience onOpenCertModal={handleOpenCert} />

        {/* 5. More Projects (Extended Repository) */}
        <MoreProjects />

        {/* 6. Audited Credentials (Certificates & Recognition) */}
        <CertificatesTable onOpenCertModal={handleOpenCert} />

        {/* 7 & 8. Education & Brief About */}
        <EducationAndAbout />

        {/* 9. Contact Section */}
        <ContactSection onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Certificate Lightbox Modal */}
      <CertificateModal
        isOpen={certModal.isOpen}
        onClose={handleCloseCert}
        title={certModal.title}
        subtitle={certModal.subtitle}
        imageUrl={certModal.imageUrl}
      />

      {/* Interactive Project Simulators Modal */}
      <InteractiveDemos type={activeDemo} onClose={() => setActiveDemo(null)} />

      {/* Quick Search & Command Palette */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onSelectCert={handleOpenCert}
        onOpenDemo={(type) => setActiveDemo(type)}
      />

      {/* Toast Notification */}
      <div
        className={`fixed bottom-6 right-6 z-50 transform transition-all duration-300 pointer-events-none px-4 py-3 rounded bg-navy-900 text-white font-mono text-xs flex items-center gap-2.5 shadow-2xl border border-navy-700 max-w-md ${
          toastMessage ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
        }`}
      >
        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
        <span className="leading-snug">{toastMessage}</span>
      </div>
    </div>
  );
}
