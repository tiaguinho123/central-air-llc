// GoogleReviews.tsx — Real reviews from centralairllc.com (Google)
// Place: Central Air, LLC. — ChIJv7AhoCD554kRtbjhjGrcnKA
// Scraped: 2026-03-20 — 4.9 ★ across 194 reviews
// Shows 5 top reviewers — ui-avatars fallback for profile photos

import { useState, useEffect, useCallback } from 'react';
import { Star, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const GOOGLE_MAPS_URL =
  'https://search.google.com/local/writereview?placeid=ChIJv7AhoCD554kRtbjhjGrcnKA';

// Real Central Air LLC Google reviews
const REVIEWS = [
  {
    name: 'Patrick L.',
    photo: 'https://ui-avatars.com/api/?name=Patrick+L&background=D12027&color=fff&size=56',
    stars: 5,
    date: '3 months ago',
    text: 'Central Air is a top notch company. Prompt service, reasonable prices and very knowledgeable technicians. They have taken care of all of my heating and cooling concerns for the last 7 years. I\'m more than happy with them!',
    isLocalGuide: true,
    services: 'HVAC system maintenance · A/C maintenance · Heating system repair',
  },
  {
    name: 'John S.',
    photo: 'https://ui-avatars.com/api/?name=John+S&background=D12027&color=fff&size=56',
    stars: 5,
    date: '5 months ago',
    text: 'This is an amazing company. The team not only does great work at a reasonable price, but I have never known anyone in this or any other service trade who has gone so much above and beyond to help his customers. I wish I could give more stars than 5.',
    isLocalGuide: false,
    services: 'Heating & Cooling',
  },
  {
    name: 'John G.',
    photo: 'https://ui-avatars.com/api/?name=John+G&background=D12027&color=fff&size=56',
    stars: 5,
    date: '3 months ago',
    text: 'The technicians were terrific. They were extremely knowledgeable, professional and a pleasure to communicate with. Diagnosed and fixed our heating issue on the first visit.',
    isLocalGuide: false,
    services: 'Heating system repair',
  },
  {
    name: 'Ryan K.',
    photo: 'https://ui-avatars.com/api/?name=Ryan+K&background=D12027&color=fff&size=56',
    stars: 5,
    date: 'a year ago',
    text: 'I had a great experience with Central Air. Their price was very competitive. The team was extremely accommodating, answering all my questions and finding a solution that best fit my needs. The installation went smoothly and everyone was very professional.',
    isLocalGuide: true,
    services: 'Heat pump installation · Thermostat installation',
  },
  {
    name: 'Art S.',
    photo: 'https://ui-avatars.com/api/?name=Art+S&background=D12027&color=fff&size=56',
    stars: 5,
    date: '2 years ago',
    text: 'Professional, thorough, extremely neat and explained what they were doing and why. Excellent equipment, fairly priced, beautifully installed — and it works! I\'m a tough person to please but was absolutely delighted with the system and the installation.',
    isLocalGuide: false,
    services: 'AC installation · Heating system installation',
  },
];

export default function GoogleReviews() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const total = REVIEWS.length;

  const go = useCallback((direction: 'prev' | 'next') => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(prev =>
        direction === 'next' ? (prev + 1) % total : (prev - 1 + total) % total
      );
      setIsAnimating(false);
    }, 300);
  }, [isAnimating, total]);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const t = setInterval(() => go('next'), 6000);
    return () => clearInterval(t);
  }, [go]);

  const r = REVIEWS[current];

  return (
    <section className="py-12 sm:py-20 bg-white border-y border-slate-100" aria-labelledby="reviews-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: '#CE1126' }}>
            Google Reviews
          </p>
          <h2 id="reviews-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
            What Our Customers Say
          </h2>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#D12027] transition-colors"
          >
            <span className="flex gap-0.5" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </span>
            <span className="font-bold text-slate-800">4.9</span>
            <span className="text-slate-500">· 194 Google Reviews</span>
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>

        {/* Card */}
        <div
          className={`transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}
        >
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-2xl p-5 sm:p-8 md:p-10 shadow-md border border-slate-100 hover:shadow-lg transition-shadow"
            aria-label={`${r.name}'s Google review`}
          >
            {/* Quote mark */}
            <div className="text-4xl sm:text-6xl leading-none font-serif mb-3 select-none" style={{ color: '#CE1126' }} aria-hidden="true">
              "
            </div>

            {/* Review text — full, no truncation */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-5">
              {r.text}
            </p>

            {/* Services tag */}
            {r.services && (
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-6">
                {r.services}
              </p>
            )}

            {/* Reviewer info */}
            <div className="flex items-center gap-3">
              <img
                src={r.photo}
                alt={`${r.name} — verified Google customer`}
                className="w-10 h-10 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-slate-100 flex-shrink-0"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    `https://ui-avatars.com/api/?name=${encodeURIComponent(r.name)}&background=D12027&color=fff&size=56`;
                }}
              />
              <div className="flex-1 min-w-0">
                <p className="font-bold text-slate-900 text-base">{r.name}</p>
                <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                  <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                    {[...Array(r.stars)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
                    ))}
                  </div>
                  {r.isLocalGuide && <span className="text-xs text-slate-400">· Local Guide</span>}
                  <span className="text-xs text-slate-400">· {r.date}</span>
                </div>
              </div>
              {/* Google G */}
              <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 48 48" aria-hidden="true">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
            </div>
          </a>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-10">
          {/* Prev */}
          <button
            onClick={() => go('prev')}
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-500 hover:border-[#D12027] hover:text-[#D12027] transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" aria-hidden="true" />
          </button>

          {/* Dots */}
          <div className="flex gap-2.5" role="tablist" aria-label="Review navigation">
            {REVIEWS.map((rev, i) => (
              <button
                key={rev.name}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setTimeout(() => { setCurrent(i); setIsAnimating(false); }, 300);
                  }
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'scale-125' : 'bg-slate-200'}`}
                style={i === current ? { backgroundColor: '#D12027' } : undefined}
                role="tab"
                aria-selected={i === current}
                aria-label={`Review ${i + 1} by ${rev.name}`}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={() => go('next')}
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-500 hover:border-[#D12027] hover:text-[#D12027] transition-colors"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="mt-6 max-w-xs mx-auto h-1 bg-slate-100 rounded-full overflow-hidden">
          <div
            key={current}
            className="h-full rounded-full origin-left"
            style={{
              backgroundColor: '#D12027',
              animation: 'progress-bar 6s linear forwards',
            }}
          />
        </div>

        <style>{`
          @keyframes progress-bar {
            from { width: 0%; }
            to   { width: 100%; }
          }
        `}</style>
      </div>
    </section>
  );
}
