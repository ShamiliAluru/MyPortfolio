import React, { useState } from 'react';
import { Copy, Check, Send, Mail, ExternalLink } from 'lucide-react';

interface ContactSectionProps {
  onShowToast: (message: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    onShowToast(`Copied ${text} to clipboard!`);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      onShowToast('Message recorded. Please reach out via email or LinkedIn for immediate communication!');
    }, 600);
  };

  return (
    <section className="space-y-6" id="contact">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-parchment-border pb-3">
        <div>
          <span className="font-mono text-xs font-semibold text-accent-blue uppercase tracking-wider">
            SECTION 09 // DISPATCH
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight mt-0.5">
            Let's Connect
          </h2>
        </div>
        <p className="font-mono text-xs text-navy-600">Direct Inquiries &amp; Opportunities</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Channels */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded border border-parchment-border bg-white shadow-sm space-y-4">
            <h3 className="text-base font-bold text-navy-900 tracking-tight">Direct Channels</h3>

            <div className="space-y-3 font-mono text-xs">
              {/* Email */}
              <div className="flex items-center justify-between p-3 rounded bg-parchment-low border border-parchment-border-subtle group hover:border-parchment-border transition-colors">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-accent-blue text-[18px] mt-0.5">
                    mail
                  </span>
                  <div>
                    <div className="text-[10px] text-navy-400 uppercase">Email</div>
                    <a
                      className="text-navy-900 font-semibold hover:text-accent-blue transition-colors break-all"
                      href="mailto:shamilialuru@gmail.com"
                    >
                      shamilialuru@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard('shamilialuru@gmail.com', 'email')}
                  className="p-1.5 rounded hover:bg-white text-navy-500 hover:text-navy-900 transition-colors ml-2"
                  title="Copy email"
                >
                  {copiedKey === 'email' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center justify-between p-3 rounded bg-parchment-low border border-parchment-border-subtle group hover:border-parchment-border transition-colors">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-accent-orange text-[18px] mt-0.5">
                    hub
                  </span>
                  <div>
                    <div className="text-[10px] text-navy-400 uppercase">LinkedIn Profile</div>
                    <a
                      className="text-navy-900 font-semibold hover:text-accent-blue transition-colors break-all"
                      href="https://www.linkedin.com/in/shamili-aluru-9035012b2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linkedin.com/in/shamili-aluru-9035012b2
                    </a>
                  </div>
                </div>
                <button
                  onClick={() =>
                    copyToClipboard(
                      'https://www.linkedin.com/in/shamili-aluru-9035012b2',
                      'linkedin'
                    )
                  }
                  className="p-1.5 rounded hover:bg-white text-navy-500 hover:text-navy-900 transition-colors ml-2"
                  title="Copy LinkedIn URL"
                >
                  {copiedKey === 'linkedin' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* GitHub */}
              <div className="flex items-center justify-between p-3 rounded bg-parchment-low border border-parchment-border-subtle group hover:border-parchment-border transition-colors">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-navy-900 text-[18px] mt-0.5">
                    terminal
                  </span>
                  <div>
                    <div className="text-[10px] text-navy-400 uppercase">GitHub Profile</div>
                    <a
                      className="text-navy-900 font-semibold hover:text-accent-blue transition-colors break-all"
                      href="https://github.com/ShamiliAluru"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github.com/ShamiliAluru
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard('https://github.com/ShamiliAluru', 'github')}
                  className="p-1.5 rounded hover:bg-white text-navy-500 hover:text-navy-900 transition-colors ml-2"
                  title="Copy GitHub URL"
                >
                  {copiedKey === 'github' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            <div className="p-3 rounded bg-blue-50 border border-blue-200 text-xs font-mono text-navy-800 space-y-1">
              <div className="font-bold text-accent-blue">ACTIVE CANDIDATE</div>
              <p className="text-[11px] leading-relaxed">
                Open to entry-level software, data, and applied machine learning roles. Hyderabad based, relocatable / remote open.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <form
            className="p-6 sm:p-8 rounded border border-parchment-border bg-white shadow-sm space-y-4"
            id="contact-form"
            onSubmit={handleSubmit}
          >
            <h3 className="text-base font-bold text-navy-900 tracking-tight">
              Send a Direct Message
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block font-mono text-[11px] font-semibold text-navy-700 uppercase" htmlFor="name">
                  Your Name
                </label>
                <input
                  className="w-full px-3 py-2 text-sm rounded border border-parchment-border bg-parchment-low focus:bg-white focus:outline-none focus:border-accent-blue transition-colors"
                  id="name"
                  placeholder="Name"
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="space-y-1">
                <label className="block font-mono text-[11px] font-semibold text-navy-700 uppercase" htmlFor="email">
                  Your Email
                </label>
                <input
                  className="w-full px-3 py-2 text-sm rounded border border-parchment-border bg-parchment-low focus:bg-white focus:outline-none focus:border-accent-blue transition-colors"
                  id="email"
                  placeholder="name@company.com"
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="block font-mono text-[11px] font-semibold text-navy-700 uppercase" htmlFor="subject">
                Subject
              </label>
              <input
                className="w-full px-3 py-2 text-sm rounded border border-parchment-border bg-parchment-low focus:bg-white focus:outline-none focus:border-accent-blue transition-colors"
                id="subject"
                placeholder="Entry-Level Technical Opportunity"
                required
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>

            <div className="space-y-1">
              <label className="block font-mono text-[11px] font-semibold text-navy-700 uppercase" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full px-3 py-2 text-sm rounded border border-parchment-border bg-parchment-low focus:bg-white focus:outline-none focus:border-accent-blue resize-none transition-colors"
                id="message"
                placeholder="Role requirements, questions, or details..."
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <p className="font-mono text-[11px] text-navy-500">
              Note: Front-end prototype form. Please reach out directly via email or LinkedIn for immediate communication.
            </p>

            <button
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-navy-900 text-white font-mono text-xs font-semibold tracking-tight hover:bg-accent-blue transition-colors shadow-sm disabled:opacity-50"
              type="submit"
              disabled={isSubmitting}
            >
              <span className="material-symbols-outlined text-[16px]">send</span>
              <span>{isSubmitting ? 'Recording Message...' : 'Send Message'}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
