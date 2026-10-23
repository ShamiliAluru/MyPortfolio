import React from 'react';
import { SlidersHorizontal, ArrowUpRight, Code, Sparkles } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';

interface FeaturedProjectsProps {
  onOpenDemo: (type: 'price-simulator' | 'sales-waterfall' | 'rfm-cluster') => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onOpenDemo }) => {
  return (
    <section className="space-y-6" id="projects">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-parchment-border pb-3">
        <div>
          <span className="font-mono text-xs font-semibold text-accent-blue uppercase tracking-wider">
            SECTION 02 // LAB ARTIFACTS
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight mt-0.5">
            Featured Projects
          </h2>
        </div>
        <p className="font-mono text-xs text-navy-600">3 Core Implementations</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* Project 1: Hyderabad Home Price Studio */}
        <article className="p-6 rounded border border-parchment-border bg-white shadow-sm flex flex-col lg:flex-row gap-6 hover:border-navy-900/40 transition-all">
          <div className="lg:w-2/5 p-4 rounded bg-parchment-low border border-parchment-border-subtle flex flex-col justify-between font-mono">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-accent-orange font-semibold">PREDICTION_PIPELINE.PY</span>
              <span className="px-1.5 py-0.5 rounded bg-white text-navy-700 border border-parchment-border">
                Nested CV
              </span>
            </div>

            <div className="py-6 flex flex-col items-center justify-center text-center">
              <svg className="w-full h-24 text-accent-blue/80" fill="none" viewBox="0 0 240 100">
                <path
                  d="M10 85 Q 90 65, 140 40 T 230 15"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                />
                <circle cx="50" cy="74" fill="#EA580C" r="3.5" />
                <circle cx="100" cy="58" fill="#EA580C" r="3.5" />
                <circle cx="150" cy="36" fill="#EA580C" r="3.5" />
                <circle cx="190" cy="24" fill="#EA580C" r="3.5" />
                <line
                  stroke="#CBD5E1"
                  strokeDasharray="3 3"
                  x1="10"
                  x2="230"
                  y1="90"
                  y2="90"
                />
              </svg>
              <span className="text-[10px] text-navy-600 mt-2 font-mono">
                scikit-learn Regressor vs Median Baseline
              </span>
            </div>

            <div className="text-[11px] text-navy-600 flex justify-between border-t border-parchment-border pt-2">
              <span>Built-up Area &amp; Amenities</span>
              <span className="text-emerald-700">Validated Evaluation</span>
            </div>
          </div>

          <div className="lg:w-3/5 flex flex-col justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-[11px]">
                <span className="px-2 py-0.5 rounded bg-blue-50 text-accent-blue font-semibold">
                  Predictive Modeling
                </span>
                <span className="text-navy-400">•</span>
                <span className="text-navy-600">Regression Pipeline</span>
              </div>

              <h3 className="text-xl font-bold text-navy-900 tracking-tight">
                Hyderabad Home Price Studio
              </h3>

              <p className="text-sm text-navy-700 mt-2 leading-relaxed">
                An interactive app that estimates Hyderabad home prices using built-up area, locality, bedroom count, resale status, and selected amenities. It uses a scikit-learn pipeline, evaluates model performance with nested cross-validation, and compares it with a median-price baseline. Users can explore the dataset and how an estimate is produced.
              </p>

              <div className="mt-3 p-2.5 rounded bg-parchment-low border border-parchment-border-subtle text-[11px] font-mono text-navy-600">
                <strong className="text-navy-800">Data Note:</strong> The ₹ display is inferred from the Hyderabad context. The source data has no explicit currency or collection date, so estimates are not live-market valuations.
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                {['Python', 'Streamlit', 'pandas', 'scikit-learn', 'NumPy', 'Plotly', 'joblib'].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded bg-parchment-low text-navy-800 border border-parchment-border"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-1 text-xs font-mono">
                <a
                  className="inline-flex items-center gap-1 text-accent-blue font-semibold hover:underline"
                  href="https://house-price-prediction-model-mt3arlqnihcsa3cdcrmatc.streamlit.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Live App</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
                </a>

                <span className="text-parchment-border">•</span>

                <a
                  className="inline-flex items-center gap-1 text-navy-700 hover:text-navy-900"
                  href="https://github.com/ShamiliAluru/House-Price-Prediction-Model"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[14px]">code</span>
                  <span>GitHub Repository</span>
                </a>

                <span className="text-parchment-border">•</span>

                <button
                  onClick={() => onOpenDemo('price-simulator')}
                  className="inline-flex items-center gap-1.5 text-accent-orange font-semibold hover:text-navy-900 transition-colors"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>Test Pipeline Simulator</span>
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Project 2: Sales Analytics — Retail Profitability Analysis */}
        <article className="p-6 rounded border border-parchment-border bg-white shadow-sm flex flex-col lg:flex-row gap-6 hover:border-navy-900/40 transition-all">
          <div className="lg:w-2/5 p-4 rounded bg-parchment-low border border-parchment-border-subtle flex flex-col justify-between font-mono">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-accent-blue font-semibold">RETAIL_PROFITABILITY.SQL</span>
              <span className="px-1.5 py-0.5 rounded bg-white text-navy-700 border border-parchment-border">
                CTEs &amp; Windows
              </span>
            </div>

            <div className="py-4 flex items-end justify-center gap-3 h-28">
              <div className="w-8 bg-slate-300 rounded-t flex flex-col justify-end items-center pb-1 text-[9px] text-navy-700 h-14">
                Q1
              </div>
              <div className="w-8 bg-slate-400 rounded-t flex flex-col justify-end items-center pb-1 text-[9px] text-white h-18">
                Q2
              </div>
              <div className="w-8 bg-accent-blue rounded-t flex flex-col justify-end items-center pb-1 text-[9px] text-white h-22">
                Q3
              </div>
              <div className="w-8 bg-accent-orange rounded-t flex flex-col justify-end items-center pb-1 text-[9px] text-white h-28 font-bold">
                Q4
              </div>
            </div>

            <div className="text-[11px] text-navy-600 flex justify-between border-t border-parchment-border pt-2">
              <span>Discount Auditing</span>
              <span className="text-navy-700">Relational Modeling</span>
            </div>
          </div>

          <div className="lg:w-3/5 flex flex-col justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-[11px]">
                <span className="px-2 py-0.5 rounded bg-orange-50 text-accent-orange font-semibold">
                  Business Intelligence
                </span>
                <span className="text-navy-400">•</span>
                <span className="text-navy-600">SQL &amp; Relational Analytics</span>
              </div>

              <h3 className="text-xl font-bold text-navy-900 tracking-tight">
                Sales Analytics — Retail Profitability Analysis
              </h3>

              <p className="text-sm text-navy-700 mt-2 leading-relaxed">
                Cleaned and audited retail sales data in Excel, modeled it in MySQL, analyzed sales and discount patterns using SQL CTEs and window functions, and built an interactive Power BI dashboard.
              </p>

              <div className="mt-3 p-2.5 rounded bg-parchment-low border border-parchment-border-subtle text-[11px] font-mono text-navy-600">
                <strong className="text-navy-800">Opportunity Note:</strong> Pricing and discounting recommendations associated with an estimated $135,000 in potential margin recovery (presented strictly as an estimated opportunity, not realized savings).
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                {['Excel', 'MySQL', 'SQL CTEs', 'Power BI'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded bg-parchment-low text-navy-800 border border-parchment-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-1 text-xs font-mono">
                <a
                  className="inline-flex items-center gap-1 text-navy-700 hover:text-navy-900"
                  href="https://github.com/ShamiliAluru/Sales-Analytics"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[14px]">code</span>
                  <span>GitHub Repository</span>
                </a>

                <span className="text-parchment-border">•</span>

                <button
                  onClick={() => onOpenDemo('sales-waterfall')}
                  className="inline-flex items-center gap-1.5 text-accent-orange font-semibold hover:text-navy-900 transition-colors"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>Inspect Margin Recovery Model</span>
                </button>

                <span className="text-parchment-border">•</span>

                <span className="text-navy-500 italic text-[11px]">
                  Public Power BI dashboard not available for hosted viewing
                </span>
              </div>
            </div>
          </div>
        </article>

        {/* Project 3: Customer Segmentation Workbench */}
        <article className="p-6 rounded border border-parchment-border bg-white shadow-sm flex flex-col lg:flex-row gap-6 hover:border-navy-900/40 transition-all">
          <div className="lg:w-2/5 p-4 rounded bg-parchment-low border border-parchment-border-subtle flex flex-col justify-between font-mono">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-accent-blue font-semibold">RFM_SEGMENTATION.PY</span>
              <span className="px-1.5 py-0.5 rounded bg-white text-navy-700 border border-parchment-border">
                K-Means
              </span>
            </div>

            <div className="py-4 flex items-center justify-center">
              <svg className="w-full h-24" fill="none" viewBox="0 0 200 90">
                <circle cx="40" cy="30" fill="#2563EB" opacity="0.8" r="4" />
                <circle cx="50" cy="22" fill="#2563EB" opacity="0.8" r="4.5" />
                <circle cx="35" cy="42" fill="#2563EB" opacity="0.8" r="3.5" />
                <circle cx="160" cy="65" fill="#EA580C" opacity="0.8" r="4" />
                <circle cx="145" cy="72" fill="#EA580C" opacity="0.8" r="4.5" />
                <circle cx="170" cy="55" fill="#EA580C" opacity="0.8" r="3.5" />
                <circle cx="110" cy="25" fill="#0F172A" opacity="0.7" r="4" />
                <circle cx="125" cy="35" fill="#0F172A" opacity="0.7" r="3.5" />
                <circle cx="95" cy="38" fill="#0F172A" opacity="0.7" r="4.5" />
              </svg>
            </div>

            <div className="text-[11px] text-navy-600 flex justify-between border-t border-parchment-border pt-2">
              <span>Silhouette Evaluation</span>
              <span className="text-navy-700">Cluster Analysis</span>
            </div>
          </div>

          <div className="lg:w-3/5 flex flex-col justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-[11px]">
                <span className="px-2 py-0.5 rounded bg-blue-50 text-accent-blue font-semibold">
                  Unsupervised ML
                </span>
                <span className="text-navy-400">•</span>
                <span className="text-navy-600">RFM Feature Clustering</span>
              </div>

              <h3 className="text-xl font-bold text-navy-900 tracking-tight">
                Customer Segmentation Workbench
              </h3>

              <p className="text-sm text-navy-700 mt-2 leading-relaxed">
                An interactive app for exploring customer purchasing patterns from transaction data. Users can upload a CSV, review data-quality checks, and segment customers using Recency, Frequency, and Monetary (RFM) features with K-Means clustering. Compares candidate cluster counts using silhouette scores, visualizes segment profiles, and exports customer assignments and report.
              </p>

              <div className="mt-3 p-2.5 rounded bg-parchment-low border border-parchment-border-subtle text-[11px] font-mono text-navy-600">
                <strong className="text-navy-800">Analytical Scope:</strong> Includes UCI Online Retail dataset and CSV template. Segments describe historical purchasing patterns; they do not predict future behavior.
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                {['Python', 'Streamlit', 'pandas', 'scikit-learn', 'Plotly', 'openpyxl'].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded bg-parchment-low text-navy-800 border border-parchment-border"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-1 text-xs font-mono">
                <a
                  className="inline-flex items-center gap-1 text-accent-blue font-semibold hover:underline"
                  href="https://ljwofspnfytzokucq3d637.streamlit.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Live App</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
                </a>

                <span className="text-parchment-border">•</span>

                <a
                  className="inline-flex items-center gap-1 text-navy-700 hover:text-navy-900"
                  href="https://github.com/ShamiliAluru/Customer-Segmentation-Model"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[14px]">code</span>
                  <span>GitHub Repository</span>
                </a>

                <span className="text-parchment-border">•</span>

                <button
                  onClick={() => onOpenDemo('rfm-cluster')}
                  className="inline-flex items-center gap-1.5 text-accent-orange font-semibold hover:text-navy-900 transition-colors"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>Test Cluster Segments</span>
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
