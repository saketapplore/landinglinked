import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'https://linked-to-home-api.applore.in/api';

const FALLBACK_TIERS = [
  { name: 'small', minPupils: 0, maxPupils: 100, prices: { year1: 500, year2: 950, year3: 1400 } },
  { name: 'medium', minPupils: 101, maxPupils: 600, prices: { year1: 1000, year2: 1900, year3: 2750 } },
  { name: 'large', minPupils: 601, maxPupils: null, prices: { year1: 1500, year2: 2900, year3: 4250 } },
];

const fmt = (n: number) => `£${n.toLocaleString('en-GB')}`;

const pupilRangeLabel = (tier: { minPupils: number; maxPupils: number | null }) => {
  if (tier.maxPupils == null) return `${tier.minPupils}+ pupils`;
  if (tier.minPupils === 0) return `Up to ${tier.maxPupils} pupils`;
  return `${tier.minPupils} – ${tier.maxPupils} pupils`;
};

const INCLUDED_FEATURES = [
  'Full platform access for all staff',
  'Parent & family engagement tools',
  'AI safeguarding assistant',
  'Secure messaging & resources',
  'Webinars & professional development',
  'MIS / Wonde integration',
  'Dedicated onboarding support',
  'Invoice & bank transfer payment',
];

const FAQ = [
  {
    q: "How is my school's price calculated?",
    a: "Pricing is based on your school's pupil count, which is automatically detected via your MIS system (Wonde). No manual input needed.",
  },
  {
    q: 'Can I change my subscription duration?',
    a: 'Yes. At renewal time you can choose 1, 2, or 3 years. Multi-year subscriptions offer a saving compared to the annual rate.',
  },
  {
    q: 'How do I pay?',
    a: "We invoice your school directly. Payment is by bank transfer. You'll have up to 31 days from sign-up to process your invoice while enjoying full platform access.",
  },
  {
    q: 'Is there a free trial?',
    a: 'We offer a pilot programme for early adopters. Use the Contact Us form to register your interest.',
  },
  {
    q: 'Can I cancel my subscription?',
    a: 'Cancellations are handled by our team. Contact us directly and we will review your request in line with our terms.',
  },
];

function Pricing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({ fullName: '', schoolName: '', email: '' });
  const [pricingTiers, setPricingTiers] = useState(FALLBACK_TIERS);
  const [selectedDuration, setSelectedDuration] = useState(1);
  const [selectedTier, setSelectedTier] = useState<string>('medium');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    fetch(`${API_BASE}/pricing`)
      .then((r) => r.json())
      .then((json) => {
        if (json?.data?.tiers?.length > 0) setPricingTiers(json.data.tiers);
      })
      .catch(() => {/* keep fallback */ });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE}/admin/pilot-program/submit-form`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Thank you for your interest! We will get in touch soon.');
        setShowPopup(false);
        setFormData({ fullName: '', schoolName: '', email: '' });
      } else {
        const errorData = await response.json();
        alert(`Failed to submit: ${errorData.message || 'Unknown error'}`);
      }
    } catch {
      alert('There was an error submitting the form. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ── Navigation ──────────────────────────────────────────────── */}
      <nav className="bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 items-center h-12 sm:h-16">
            <div className="flex items-center justify-start">
              <Link to="/">
                <img src="/images/linkedlogo11.png" alt="LinkED to home" className="h-10 sm:h-14 lg:h-20 w-auto object-contain" />
              </Link>
            </div>
            <div className="hidden md:flex space-x-3 md:space-x-4 lg:space-x-[60px] items-center justify-end">
              <Link to="/#home" className="text-[#003049] text-xs md:text-sm lg:text-base font-normal transition-colors whitespace-nowrap" style={{ fontFamily: 'Poppins, sans-serif' }}>Home</Link>
              <Link to="/#for-school" className="text-[#003049] text-xs md:text-sm lg:text-base font-normal transition-colors whitespace-nowrap" style={{ fontFamily: 'Poppins, sans-serif' }}>For school</Link>
              <Link to="/#for-parents" className="text-[#003049] text-xs md:text-sm lg:text-base font-normal transition-colors whitespace-nowrap" style={{ fontFamily: 'Poppins, sans-serif' }}>For parents</Link>
              <Link to="/pricing" className="text-[#08A0AF] text-xs md:text-sm lg:text-base font-semibold transition-colors whitespace-nowrap border-b-2 border-[#08A0AF] pb-0.5" style={{ fontFamily: 'Poppins, sans-serif' }}>Pricing</Link>
              <Link to="/about" className="text-[#003049] text-xs md:text-sm lg:text-base font-normal transition-colors whitespace-nowrap" style={{ fontFamily: 'Poppins, sans-serif' }}>About Us</Link>
              <button onClick={() => setShowPopup(true)} className="bg-[#003049] text-white px-4 sm:px-6 lg:px-10 py-1.5 sm:py-2 text-xs sm:text-sm rounded-md hover:bg-blue-800 transition-colors whitespace-nowrap" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Contact Us
              </button>
            </div>
            <div className="flex md:hidden items-center justify-end">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-[#003049] p-2" aria-label="Toggle menu">
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                )}
              </button>
            </div>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                <Link to="/#home" className="text-[#003049] text-base font-normal transition-colors px-4" style={{ fontFamily: 'Poppins, sans-serif' }} onClick={() => setMobileMenuOpen(false)}>Home</Link>
                <Link to="/#for-school" className="text-[#003049] text-base font-normal transition-colors px-4" style={{ fontFamily: 'Poppins, sans-serif' }} onClick={() => setMobileMenuOpen(false)}>For school</Link>
                <Link to="/#for-parents" className="text-[#003049] text-base font-normal transition-colors px-4" style={{ fontFamily: 'Poppins, sans-serif' }} onClick={() => setMobileMenuOpen(false)}>For parents</Link>
                <Link to="/pricing" className="text-[#08A0AF] text-base font-semibold transition-colors px-4" style={{ fontFamily: 'Poppins, sans-serif' }} onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
                <Link to="/about" className="text-[#003049] text-base font-normal transition-colors px-4" style={{ fontFamily: 'Poppins, sans-serif' }} onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                <div className="px-4 pt-2">
                  <button className="bg-[#003049] text-white w-full px-6 py-2.5 rounded-md hover:bg-blue-800 transition-colors text-sm font-medium" style={{ fontFamily: 'Poppins, sans-serif' }} onClick={() => { setMobileMenuOpen(false); setShowPopup(true); }}>
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="bg-[#F8FAFB] py-14 sm:py-20">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-6 h-1 bg-[#08A0AF] rounded mx-auto mb-4"></div>
          <h1 className="text-[#003049] font-bold leading-tight mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(32px, 5vw, 56px)' }}>
            Simple, Transparent Pricing
          </h1>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Choose the duration that works for your school. Your exact price is based on your pupil count — automatically detected via your MIS system.
          </p>
        </div>
      </section>

      {/* ── Duration tabs + Cards ────────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Duration tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-[#F8FAFB] border border-gray-200 rounded-xl p-1 gap-1">
              {[
                { label: '1 Year', sub: 'Standard', value: 1 },
                { label: '2 Years', sub: 'Save ~10%', value: 2 },
                { label: '3 Years', sub: 'Best Value', value: 3 },
              ].map((d) => {
                const isActive = selectedDuration === d.value;
                return (
                  <button
                    key={d.value}
                    onClick={() => setSelectedDuration(d.value)}
                    className={`px-6 py-2.5 rounded-lg text-center transition-all cursor-pointer ${isActive ? 'bg-[#003049] text-white shadow' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    <div className="text-sm font-semibold">{d.label}</div>
                    <div className={`text-xs ${isActive ? 'text-white/70' : 'text-[#08A0AF]'}`}>{d.sub}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pricingTiers.map((tier, idx) => {
              const isHighlighted = tier.name === selectedTier;
              const dotColors = ['bg-blue-400', 'bg-amber-400', 'bg-emerald-400'];
              const durationKey = `year${selectedDuration}` as 'year1' | 'year2' | 'year3';
              const activePrice = tier.prices[durationKey];
              const registerUrl = `https://linked-to-home-web.applore.in/register?duration=${selectedDuration}&tier=${tier.name}`;
              return (
                <div
                  key={tier.name}
                  onClick={() => setSelectedTier(tier.name)}
                  className={`rounded-2xl p-7 relative overflow-hidden flex flex-col transition-all cursor-pointer ${isHighlighted
                    ? 'bg-[#003049] shadow-xl scale-[1.02]'
                    : 'bg-white border border-gray-200 hover:shadow-md hover:border-[#003049]'
                    }`}
                >
                  {tier.name === 'medium' && (
                    <div className="absolute top-4 right-4">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${isHighlighted ? 'bg-[#08A0AF] text-white' : 'bg-gray-100 text-gray-500'}`}>
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="flex items-center gap-2 mb-1">
                    <div className={`w-3 h-3 rounded-full ${dotColors[idx] ?? 'bg-gray-400'}`}></div>
                    <h3 className={`text-lg font-bold capitalize ${isHighlighted ? 'text-white' : 'text-[#003049]'}`}>
                      {tier.name} School
                    </h3>
                  </div>
                  <p className={`text-xs mb-5 ${isHighlighted ? 'text-white/60' : 'text-gray-500'}`}>{pupilRangeLabel(tier)}</p>

                  {/* Active duration price */}
                  <div className="mb-3">
                    <span className={`text-4xl font-bold ${isHighlighted ? 'text-white' : 'text-[#003049]'}`}>{fmt(activePrice)}</span>
                    <span className={`text-sm ml-1 ${isHighlighted ? 'text-white/60' : 'text-gray-500'}`}>
                      / {selectedDuration} year{selectedDuration > 1 ? 's' : ''}
                    </span>
                  </div>

                  {/* Other durations as small reference */}
                  <div className="space-y-1 mb-5">
                    {(['year1', 'year2', 'year3'] as const).map((key, i) => {
                      if (i + 1 === selectedDuration) return null;
                      return (
                        <div key={key} className={`flex justify-between text-xs ${isHighlighted ? 'text-white/40' : 'text-gray-400'}`}>
                          <span>{i + 1} Year{i > 0 ? 's' : ''}</span>
                          <span>{fmt(tier.prices[key])}</span>
                        </div>
                      );
                    })}
                  </div>

                  <p className={`text-xs mb-6 ${isHighlighted ? 'text-white/40' : 'text-gray-400'}`}>+ VAT where applicable</p>

                  <div className="mt-auto">
                    <a
                      href={registerUrl}
                      onClick={(e) => e.stopPropagation()}
                      className={`block w-full text-center py-2.5 rounded-xl text-sm font-semibold transition-colors ${isHighlighted
                        ? 'bg-[#08A0AF] text-white hover:bg-[#069aaa]'
                        : 'bg-[#003049] text-white hover:bg-[#08A0AF]'
                        }`}
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Note below cards */}
          <p className="text-center text-sm text-gray-400 mt-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Prices are indicative. Your exact price is confirmed during sign-up based on your school's pupil count.
          </p>
        </div>
      </section>

      {/* ── What's included ─────────────────────────────────────────── */}
      <section className="py-14 bg-[#F8FAFB]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-[#003049] font-bold mb-8" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(22px, 3vw, 32px)' }}>
            Everything included in every plan
          </h2>
          <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {INCLUDED_FEATURES.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#08A0AF] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700" style={{ fontFamily: 'Poppins, sans-serif' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-[#003049] font-bold mb-10" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(22px, 3vw, 32px)' }}>
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {FAQ.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex justify-between items-center px-6 py-4 text-left bg-white hover:bg-[#F8FAFB] transition-colors"
                  >
                    <span className="text-sm font-semibold text-[#003049] pr-4" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.q}</span>
                    <svg className={`w-5 h-5 flex-shrink-0 text-[#08A0AF] transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 bg-white">
                      <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA banner ──────────────────────────────────────────────── */}
      <section className="bg-[#003049] py-14 sm:py-20">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(24px, 3.5vw, 40px)' }}>
            Ready to get started?
          </h2>
          <p className="text-white/70 text-base sm:text-lg mb-8 max-w-xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Register your school today and get full platform access while your invoice is processed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://linked-to-home-web.applore.in/register"
              className="inline-block bg-[#08A0AF] text-white px-10 py-3.5 rounded-xl font-semibold text-base hover:bg-[#069aaa] transition-colors"
            >
              Register Your School
            </a>
            <button
              onClick={() => setShowPopup(true)}
              className="inline-block bg-transparent text-white border border-white/40 px-10 py-3.5 rounded-xl font-semibold text-base hover:bg-white/10 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────── */}
      <footer className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 sm:mb-8 gap-4">
            <div className="flex-shrink-0">
              <img src="/images/linkedlogo11.png" alt="LinkED to Home" className="h-10 sm:h-12 lg:h-16 object-contain" />
            </div>
            <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
              <a href="https://www.youtube.com/@LinkEDtohome" className="rounded-full flex items-center justify-center transition-colors">
                <img src="/images/youtube1.png" alt="YouTube" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
              </a>
              <a href="https://www.facebook.com/share/183VGVaiaM/?mibextid=wwXIfr" className="rounded-full flex items-center justify-center transition-colors">
                <img src="/images/fb1.png" alt="Facebook" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
              </a>
              <a href="https://www.tiktok.com/@linkedtohome" className="rounded-full flex items-center justify-center transition-colors">
                <img src="/images/tiktok1.png" alt="TikTok" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
              </a>
              <a href="https://www.linkedin.com/in/linked-tohome-95a93938b/" className="rounded-full flex items-center justify-center transition-colors">
                <img src="/images/Linkedin.png" alt="LinkedIn" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
              </a>
              <a href="https://www.instagram.com/linkedtohome/" className="rounded-full flex items-center justify-center transition-colors">
                <img src="/images/insta.png" alt="Instagram" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
              </a>
            </div>
          </div>
          <div className="border-t border-[#003049] my-4 sm:my-6 lg:my-8"></div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <div className="text-center md:text-left order-2 md:order-1">
              <p style={{ color: 'var(--deep-blue, #003049)', fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(11px, 1.5vw, 14px)', fontWeight: 400 }}>
                © 2026 LinkED to Home. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6 order-1 md:order-2">
              <Link to="/privacy" className="hover:text-[#08A0AF] transition-colors whitespace-nowrap" style={{ color: '#003049', fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(11px, 1.5vw, 14px)', fontWeight: 400 }}>Privacy Policy</Link>
              <Link to="/terms" className="hover:text-[#08A0AF] transition-colors whitespace-nowrap" style={{ color: '#003049', fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(11px, 1.5vw, 14px)', fontWeight: 400 }}>Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* ── Contact popup (same as About) ───────────────────────────── */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowPopup(false)} />
          <div className="relative w-full max-w-6xl overflow-hidden p-2 sm:p-4 md:p-6 lg:p-8 shrink-0" style={{ backgroundImage: 'url(/images/popup.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <button onClick={() => setShowPopup(false)} className="absolute top-2 right-2 sm:top-4 sm:right-4 lg:top-6 lg:right-6 z-10 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-white/30 hover:bg-white/50 transition-colors">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="bg-white rounded-lg max-w-5xl mx-auto overflow-auto max-h-[95vh]">
              <div className="grid grid-cols-1 md:grid-cols-2 p-2 sm:p-3 md:p-5 overflow-hidden rounded-lg">
                <div className="hidden md:block">
                  <img src="/images/parentss.png" alt="Family" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col px-3 sm:px-6 md:px-8 lg:px-2 ml-2 bg-white py-2 sm:py-0">
                  <h2 className="mb-1 sm:mb-2" style={{ color: '#003049', fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(18px, 3vw, 24px)', fontWeight: 700, lineHeight: '1.3' }}>
                    Be part of LinkEdtohome's Pilot Programme
                  </h2>
                  <p className="mb-3 sm:mb-4" style={{ color: '#827E7E', fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(12px, 2vw, 15px)', fontWeight: 400, lineHeight: '1.5' }}>
                    LinkEdtohome is officially launching in September 2026. Register your interest below to get early access and help shape the platform.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3 p-2 sm:p-4 md:p-5 bg-[#fffdf9] rounded-lg">
                    {[
                      { id: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Enter your full name' },
                      { id: 'schoolName', label: 'School / Institution Name', type: 'text', placeholder: 'Enter your school name' },
                      { id: 'email', label: 'Email Address', type: 'email', placeholder: 'Enter your email address' },
                    ].map((field) => (
                      <div key={field.id}>
                        <label htmlFor={field.id} className="block mb-1.5" style={{ color: '#003049', fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(12px, 2vw, 14px)', fontWeight: 500 }}>
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          id={field.id}
                          name={field.id}
                          value={formData[field.id as keyof typeof formData]}
                          onChange={handleInputChange}
                          placeholder={field.placeholder}
                          required
                          className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003049] focus:border-transparent transition-all text-sm sm:text-base"
                          style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(13px, 2vw, 14px)' }}
                        />
                      </div>
                    ))}
                    <button type="submit" className="w-full mt-2 sm:mt-3 bg-[#173570] text-white py-2 sm:py-2.5 rounded-lg hover:bg-[#00456a] transition-colors font-medium" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(14px, 2vw, 16px)' }}>
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Pricing;
