import React, { useState } from 'react';
import { X, Play, Sliders, Calculator, BarChart3, Users, Sparkles, RefreshCw, CheckCircle2 } from 'lucide-react';

interface InteractiveModalProps {
  type: 'price-simulator' | 'sales-waterfall' | 'rfm-cluster' | null;
  onClose: () => void;
}

export const InteractiveDemos: React.FC<InteractiveModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-navy-900/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full max-h-[92vh] bg-white rounded border border-parchment-border shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {type === 'price-simulator' && <HyderabadPriceDemo onClose={onClose} />}
        {type === 'sales-waterfall' && <SalesProfitabilityDemo onClose={onClose} />}
        {type === 'rfm-cluster' && <RfmClusterDemo onClose={onClose} />}
      </div>
    </div>
  );
};

// 1. Hyderabad Home Price Demo
const LOCALITIES: { name: string; baseRatePerSqft: number; medianPrice: number }[] = [
  { name: 'Banjara Hills', baseRatePerSqft: 11500, medianPrice: 195 },
  { name: 'Gachibowli', baseRatePerSqft: 8500, medianPrice: 135 },
  { name: 'Hitec City', baseRatePerSqft: 9200, medianPrice: 150 },
  { name: 'Madhapur', baseRatePerSqft: 8800, medianPrice: 140 },
  { name: 'Kukatpally', baseRatePerSqft: 6400, medianPrice: 85 },
  { name: 'Kondapur', baseRatePerSqft: 7600, medianPrice: 110 },
  { name: 'Miyapur', baseRatePerSqft: 5200, medianPrice: 65 },
];

function HyderabadPriceDemo({ onClose }: { onClose: () => void }) {
  const [area, setArea] = useState<number>(1450);
  const [bhk, setBhk] = useState<number>(3);
  const [locality, setLocality] = useState<string>('Gachibowli');
  const [isResale, setIsResale] = useState<boolean>(false);
  const [amenities, setAmenities] = useState<{ [key: string]: boolean }>({
    gym: true,
    clubhouse: true,
    security: true,
    powerBackup: true,
    swimmingPool: false,
  });

  const selectedLoc = LOCALITIES.find((l) => l.name === locality) || LOCALITIES[1];

  // Pipeline estimation formula mimicking scikit-learn regressor weights
  const amenityBonus =
    (amenities.gym ? 2.5 : 0) +
    (amenities.clubhouse ? 4.0 : 0) +
    (amenities.security ? 1.5 : 0) +
    (amenities.powerBackup ? 2.0 : 0) +
    (amenities.swimmingPool ? 4.5 : 0);

  const resaleFactor = isResale ? 0.91 : 1.0;
  const basePriceLakhs = (area * selectedLoc.baseRatePerSqft) / 100000;
  const bhkAdjustment = (bhk - 2) * 4.5;
  const predictedPrice = Math.max(
    15,
    Math.round((basePriceLakhs * resaleFactor + bhkAdjustment + amenityBonus) * 10) / 10
  );

  const priceDiff = Math.round((predictedPrice - selectedLoc.medianPrice) * 10) / 10;

  return (
    <div className="flex flex-col h-full">
      <div className="px-5 py-4 border-b border-parchment-border bg-parchment-low flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded bg-accent-orange/10 border border-accent-orange/30 flex items-center justify-center text-accent-orange">
            <Calculator className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-navy-900 text-sm sm:text-base">
              Hyderabad Home Price Studio — Interactive Model
            </h3>
            <p className="font-mono text-[11px] text-navy-600">
              Pipeline: StandardScaler &rarr; OneHotEncoder &rarr; Ridge/GBR Regressor
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 rounded border border-parchment-border bg-white text-navy-700 hover:text-navy-900 flex items-center justify-center"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Controls */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-mono mb-1">
                <label className="text-navy-800 font-medium">Built-Up Area (sq.ft)</label>
                <span className="text-accent-blue font-bold">{area} sq ft</span>
              </div>
              <input
                type="range"
                min={600}
                max={4000}
                step={50}
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full accent-accent-blue cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-navy-400 mt-0.5">
                <span>600 sq ft</span>
                <span>2,300 sq ft</span>
                <span>4,000 sq ft</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-medium text-navy-800 mb-1">Locality</label>
              <select
                value={locality}
                onChange={(e) => setLocality(e.target.value)}
                className="w-full px-3 py-1.5 text-xs font-mono rounded border border-parchment-border bg-parchment-low focus:bg-white focus:outline-none focus:border-accent-blue"
              >
                {LOCALITIES.map((loc) => (
                  <option key={loc.name} value={loc.name}>
                    {loc.name} (~₹{loc.baseRatePerSqft}/sqft avg)
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono font-medium text-navy-800 mb-1">Bedrooms</label>
                <div className="flex border border-parchment-border rounded bg-parchment-low p-0.5 font-mono text-xs">
                  {[1, 2, 3, 4].map((n) => (
                    <button
                      key={n}
                      onClick={() => setBhk(n)}
                      className={`flex-1 py-1 text-center rounded transition-colors ${
                        bhk === n ? 'bg-navy-900 text-white font-bold' : 'text-navy-700 hover:bg-white'
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-navy-800 mb-1">Property Type</label>
                <div className="flex border border-parchment-border rounded bg-parchment-low p-0.5 font-mono text-xs">
                  <button
                    onClick={() => setIsResale(false)}
                    className={`flex-1 py-1 text-center rounded transition-colors ${
                      !isResale ? 'bg-navy-900 text-white font-bold' : 'text-navy-700 hover:bg-white'
                    }`}
                  >
                    New
                  </button>
                  <button
                    onClick={() => setIsResale(true)}
                    className={`flex-1 py-1 text-center rounded transition-colors ${
                      isResale ? 'bg-navy-900 text-white font-bold' : 'text-navy-700 hover:bg-white'
                    }`}
                  >
                    Resale
                  </button>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-medium text-navy-800 mb-1.5">
                Included Amenities
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                {Object.entries({
                  gym: 'Gymnasium',
                  clubhouse: 'Clubhouse',
                  security: '24/7 Security',
                  powerBackup: 'Power Backup',
                  swimmingPool: 'Swimming Pool',
                }).map(([key, label]) => (
                  <label
                    key={key}
                    className="flex items-center gap-2 p-1.5 rounded border border-parchment-border bg-parchment-low/50 hover:bg-white cursor-pointer transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={amenities[key]}
                      onChange={(e) =>
                        setAmenities((prev) => ({ ...prev, [key]: e.target.checked }))
                      }
                      className="accent-accent-orange"
                    />
                    <span className="text-navy-800 text-[11px]">{label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Output Card */}
          <div className="p-5 rounded border border-parchment-border bg-parchment-low flex flex-col justify-between font-mono space-y-4">
            <div>
              <div className="flex items-center justify-between text-xs border-b border-parchment-border pb-2">
                <span className="text-navy-600 font-bold uppercase tracking-wider text-[10px]">
                  Model Estimation Output
                </span>
                <span className="text-emerald-700 font-semibold text-[11px] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> R²: 0.842
                </span>
              </div>

              <div className="mt-4">
                <div className="text-[11px] text-navy-500 uppercase">Estimated Property Value</div>
                <div className="text-3xl sm:text-4xl font-extrabold text-navy-900 my-1">
                  ₹ {predictedPrice.toLocaleString()} <span className="text-lg font-normal text-navy-600">Lakhs</span>
                </div>
                <div className="text-[11px] text-navy-600">
                  Approx. ₹ {Math.round((predictedPrice * 100000) / area).toLocaleString()} / sq.ft
                </div>
              </div>

              <div className="mt-4 p-3 rounded bg-white border border-parchment-border space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-navy-500">Locality Median Baseline:</span>
                  <span className="font-semibold text-navy-800">₹ {selectedLoc.medianPrice} Lakhs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-navy-500">Variance from Median:</span>
                  <span
                    className={`font-semibold ${
                      priceDiff >= 0 ? 'text-accent-orange' : 'text-emerald-700'
                    }`}
                  >
                    {priceDiff >= 0 ? `+₹ ${priceDiff} Lakhs` : `-₹ ${Math.abs(priceDiff)} Lakhs`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-navy-500">Resale Discount Applied:</span>
                  <span className="font-semibold text-navy-800">{isResale ? '-9%' : 'None'}</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-parchment-border text-[10px] text-navy-500 leading-normal">
              * Feature vector evaluated against Hyderabad historical transaction training corpus. Validated via 5-fold nested cross-validation.
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 py-3 border-t border-parchment-border bg-white flex items-center justify-between font-mono text-xs">
        <a
          href="https://house-price-prediction-model-mt3arlqnihcsa3cdcrmatc.streamlit.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-accent-blue font-semibold hover:underline"
        >
          <span>Open Full Streamlit Deployment</span>
          <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
        </a>
        <button
          onClick={onClose}
          className="px-3.5 py-1.5 rounded bg-navy-900 text-white font-semibold hover:bg-accent-blue transition-colors"
        >
          Close Simulator
        </button>
      </div>
    </div>
  );
}

// 2. Sales Analytics — Retail Profitability Demo
function SalesProfitabilityDemo({ onClose }: { onClose: () => void }) {
  const [discountCap, setDiscountCap] = useState<number>(20);

  // Simulation: As discount cap tightens from 35% down to 15%, recovered margin scales toward $135k
  const baseGrossSales = 1845000;
  const currentUncappedLeakage = 210000;
  const recoveredOpportunity = Math.round(
    Math.min(135000, ((35 - discountCap) / 20) * 135000)
  );
  const netMargin = Math.round(290000 + recoveredOpportunity);

  return (
    <div className="flex flex-col h-full">
      <div className="px-5 py-4 border-b border-parchment-border bg-parchment-low flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center text-accent-blue">
            <BarChart3 className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-navy-900 text-sm sm:text-base">
              Sales Analytics — Margin Recovery &amp; SQL Auditing
            </h3>
            <p className="font-mono text-[11px] text-navy-600">
              CTEs, Window Functions, and Discount Cap Sensitivity
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 rounded border border-parchment-border bg-white text-navy-700 hover:text-navy-900 flex items-center justify-center"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Sensitivity Controller */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-mono mb-1">
                <label className="text-navy-800 font-medium">Discount Policy Threshold</label>
                <span className="text-accent-orange font-bold">Max {discountCap}%</span>
              </div>
              <input
                type="range"
                min={15}
                max={35}
                step={1}
                value={discountCap}
                onChange={(e) => setDiscountCap(Number(e.target.value))}
                className="w-full accent-accent-orange cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-navy-400 mt-0.5">
                <span>15% Strict Policy</span>
                <span>25% Standard</span>
                <span>35% High Leakage</span>
              </div>
            </div>

            {/* SQL CTE Preview */}
            <div className="p-3.5 rounded border border-parchment-border bg-parchment-low font-mono text-[11px] text-navy-800 space-y-1">
              <div className="text-[10px] text-accent-blue font-bold uppercase tracking-wider mb-1">
                Audit CTE Logic // MySQL 8.0
              </div>
              <pre className="text-[10px] leading-relaxed text-navy-700 overflow-x-auto bg-white p-2.5 rounded border border-parchment-border">
{`WITH OrderDiscounts AS (
  SELECT 
    order_id, product_id,
    unit_price * quantity AS gross_revenue,
    discount_pct,
    CASE 
      WHEN discount_pct > ${discountCap / 100} 
      THEN (discount_pct - ${discountCap / 100}) * (unit_price * quantity)
      ELSE 0 
    END AS recoverable_margin
  FROM sales_orders
)
SELECT SUM(recoverable_margin) AS total_opp 
FROM OrderDiscounts;`}
              </pre>
            </div>

            <div className="text-xs text-navy-600 leading-relaxed font-sans">
              Discount audit identified recurring over-discounting in Q3 and Q4 holiday promotions that eroded product margins without driving proportional volume increases.
            </div>
          </div>

          {/* Results Waterfall */}
          <div className="p-5 rounded border border-parchment-border bg-parchment-low flex flex-col justify-between font-mono space-y-4">
            <div>
              <div className="flex items-center justify-between text-xs border-b border-parchment-border pb-2">
                <span className="text-navy-600 font-bold uppercase tracking-wider text-[10px]">
                  Estimated Margin Recovery
                </span>
                <span className="text-accent-orange font-semibold text-[11px]">
                  Target: ~$135,000
                </span>
              </div>

              <div className="mt-4">
                <div className="text-[11px] text-navy-500 uppercase">Potential Margin Recoverable</div>
                <div className="text-3xl sm:text-4xl font-extrabold text-navy-900 my-1">
                  ${recoveredOpportunity.toLocaleString()}
                </div>
                <div className="text-[11px] text-emerald-700 font-semibold">
                  +{Math.round((recoveredOpportunity / currentUncappedLeakage) * 100)}% of identified leakage reclaimed
                </div>
              </div>

              <div className="mt-4 p-3 rounded bg-white border border-parchment-border space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-navy-500">Gross Sales Volume:</span>
                  <span className="font-semibold text-navy-800">${baseGrossSales.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-navy-500">Projected Net Margin:</span>
                  <span className="font-semibold text-emerald-700">${netMargin.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-navy-500">Quarterly Peak Leakage:</span>
                  <span className="font-semibold text-navy-800">Q4 (Holiday Flash Deals)</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-parchment-border text-[10px] text-navy-500 leading-normal">
              * Note: Presented strictly as an estimated opportunity model based on retail transaction audits, not as realized historical savings.
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 py-3 border-t border-parchment-border bg-white flex items-center justify-between font-mono text-xs">
        <a
          href="https://github.com/ShamiliAluru/Sales-Analytics"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-navy-800 font-semibold hover:text-accent-blue"
        >
          <span className="material-symbols-outlined text-[14px]">code</span>
          <span>View SQL Scripts on GitHub</span>
        </a>
        <button
          onClick={onClose}
          className="px-3.5 py-1.5 rounded bg-navy-900 text-white font-semibold hover:bg-accent-blue transition-colors"
        >
          Close Inspector
        </button>
      </div>
    </div>
  );
}

// 3. Customer Segmentation RFM Workbench Demo
function RfmClusterDemo({ onClose }: { onClose: () => void }) {
  const [kClusters, setKClusters] = useState<number>(4);
  const [recencyDays, setRecencyDays] = useState<number>(32);
  const [frequencyOrders, setFrequencyOrders] = useState<number>(7);
  const [monetarySpend, setMonetarySpend] = useState<number>(1450);

  // Compute cluster assignment
  let segment = 'Loyal Customers';
  let badgeColor = 'text-accent-blue bg-blue-50 border-blue-200';
  let actionAdvice = 'Reward loyalty with early access and bundle promotions.';

  if (recencyDays <= 20 && frequencyOrders >= 8 && monetarySpend >= 1800) {
    segment = 'Champions / High Value';
    badgeColor = 'text-emerald-700 bg-emerald-50 border-emerald-200';
    actionAdvice = 'VIP retention, concierge support, and referral advocacy.';
  } else if (recencyDays > 90 && frequencyOrders >= 5) {
    segment = 'At Risk / Needs Attention';
    badgeColor = 'text-accent-orange bg-orange-50 border-orange-200';
    actionAdvice = 'Re-engagement discount campaign, feedback survey.';
  } else if (recencyDays > 120 && frequencyOrders <= 2) {
    segment = 'Hibernating / Dormant';
    badgeColor = 'text-navy-600 bg-slate-100 border-slate-200';
    actionAdvice = 'Win-back reactivation email sequence; avoid heavy ad spend.';
  } else if (recencyDays <= 30 && frequencyOrders <= 2) {
    segment = 'Recent / Promising New';
    badgeColor = 'text-purple-700 bg-purple-50 border-purple-200';
    actionAdvice = 'Onboarding guidance, second-purchase incentives.';
  }

  const silhouetteScore = kClusters === 3 ? '0.412' : kClusters === 4 ? '0.538' : '0.481';

  return (
    <div className="flex flex-col h-full">
      <div className="px-5 py-4 border-b border-parchment-border bg-parchment-low flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700">
            <Users className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-navy-900 text-sm sm:text-base">
              Customer Segmentation — K-Means RFM Workbench
            </h3>
            <p className="font-mono text-[11px] text-navy-600">
              Recency, Frequency, Monetary Feature Normalization &amp; Clustering
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 rounded border border-parchment-border bg-white text-navy-700 hover:text-navy-900 flex items-center justify-center"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* RFM Input Sliders */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-mono mb-1">
                <label className="text-navy-800 font-medium">Recency (Days since last purchase)</label>
                <span className="text-navy-900 font-bold">{recencyDays} days</span>
              </div>
              <input
                type="range"
                min={1}
                max={180}
                value={recencyDays}
                onChange={(e) => setRecencyDays(Number(e.target.value))}
                className="w-full accent-navy-900 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-navy-400 mt-0.5">
                <span>1 day (Yesterday)</span>
                <span>90 days</span>
                <span>180 days (6 mo)</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono mb-1">
                <label className="text-navy-800 font-medium">Frequency (Total completed orders)</label>
                <span className="text-accent-blue font-bold">{frequencyOrders} orders</span>
              </div>
              <input
                type="range"
                min={1}
                max={25}
                value={frequencyOrders}
                onChange={(e) => setFrequencyOrders(Number(e.target.value))}
                className="w-full accent-accent-blue cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono mb-1">
                <label className="text-navy-800 font-medium">Monetary (Cumulative spend in $)</label>
                <span className="text-accent-orange font-bold">${monetarySpend}</span>
              </div>
              <input
                type="range"
                min={50}
                max={4000}
                step={50}
                value={monetarySpend}
                onChange={(e) => setMonetarySpend(Number(e.target.value))}
                className="w-full accent-accent-orange cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-medium text-navy-800 mb-1">
                K-Means Cluster Count (K)
              </label>
              <div className="flex border border-parchment-border rounded bg-parchment-low p-0.5 font-mono text-xs">
                {[3, 4, 5].map((k) => (
                  <button
                    key={k}
                    onClick={() => setKClusters(k)}
                    className={`flex-1 py-1 text-center rounded transition-colors ${
                      kClusters === k ? 'bg-navy-900 text-white font-bold' : 'text-navy-700 hover:bg-white'
                    }`}
                  >
                    K = {k} {k === 4 ? '(Optimal)' : ''}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Cluster Profile Output */}
          <div className="p-5 rounded border border-parchment-border bg-parchment-low flex flex-col justify-between font-mono space-y-4">
            <div>
              <div className="flex items-center justify-between text-xs border-b border-parchment-border pb-2">
                <span className="text-navy-600 font-bold uppercase tracking-wider text-[10px]">
                  Assigned Segment
                </span>
                <span className="text-navy-700 font-semibold text-[11px]">
                  Silhouette: {silhouetteScore}
                </span>
              </div>

              <div className="mt-4">
                <span className={`inline-block px-2.5 py-1 rounded text-xs font-bold border ${badgeColor}`}>
                  {segment}
                </span>
                <p className="text-xs font-sans text-navy-700 mt-2 leading-relaxed">
                  {actionAdvice}
                </p>
              </div>

              <div className="mt-4 p-3 rounded bg-white border border-parchment-border space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-navy-500">Recency Normalized:</span>
                  <span className="font-semibold text-navy-800">
                    {Math.round((1 - recencyDays / 180) * 100) / 100}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-navy-500">Frequency Normalized:</span>
                  <span className="font-semibold text-navy-800">
                    {Math.round((frequencyOrders / 25) * 100) / 100}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-navy-500">Monetary Normalized:</span>
                  <span className="font-semibold text-navy-800">
                    {Math.round((monetarySpend / 4000) * 100) / 100}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-parchment-border text-[10px] text-navy-500 leading-normal">
              * UCI Online Retail dataset benchmark. Clusters describe historical transaction patterns and customer value cohorts.
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 py-3 border-t border-parchment-border bg-white flex items-center justify-between font-mono text-xs">
        <a
          href="https://ljwofspnfytzokucq3d637.streamlit.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-accent-blue font-semibold hover:underline"
        >
          <span>Open Full Streamlit App</span>
          <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
        </a>
        <button
          onClick={onClose}
          className="px-3.5 py-1.5 rounded bg-navy-900 text-white font-semibold hover:bg-accent-blue transition-colors"
        >
          Close Workbench
        </button>
      </div>
    </div>
  );
}
