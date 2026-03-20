import { motion } from 'motion/react';
import {
  Phone, Calendar, Star, Flame, Snowflake, Wind, Thermometer,
  ClipboardList, Zap, CheckCircle, ArrowRight, ShieldCheck, Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteConfig } from '../config/SiteConfigContext';
import TrustBadges from '../components/TrustBadges';
import GoogleReviews from '../components/GoogleReviews';
import FAQ from '../components/FAQ';

const HERO_IMAGE = 'https://www.centralairllc.com/app/uploads/sites/51/2026/03/Central-Air-truck.png';
const LENNOX_AWARD = 'https://www.centralairllc.com/app/uploads/sites/51/2023/03/LennoxLengthOfDealershipAward.png';

const SERVICES = [
  {
    title: 'Heating',
    icon: Flame,
    path: '/heating',
    desc: 'Furnaces, boilers & heat pumps. Fast repair with upfront pricing. Keep warm all winter.',
    img: 'https://www.centralairllc.com/app/uploads/2022/11/HeatPumpInstall-400.jpg',
  },
  {
    title: 'Cooling',
    icon: Snowflake,
    path: '/cooling',
    desc: 'Central AC repair & installation. Save up to 50% on cooling costs with modern high-SEER systems.',
    img: 'https://www.centralairllc.com/app/uploads/2022/12/46467146-ac-808x606-1.jpeg',
  },
  {
    title: 'Heat Pumps',
    icon: Thermometer,
    path: '/heat-pumps',
    desc: 'Efficient year-round heating & cooling. Mitsubishi Diamond installation & service.',
    img: 'https://www.centralairllc.com/app/uploads/2022/11/19-LNX-0617_D_7439-808x606-1.jpeg',
  },
  {
    title: 'Indoor Air Quality',
    icon: Wind,
    path: '/indoor-air-quality',
    desc: 'HEPA filtration, UV germicidal lights & humidity control. Healthier air starts here.',
    img: 'https://www.centralairllc.com/app/uploads/2022/11/19-LNX-0617_D_6624-808x606-1.jpeg',
  },
  {
    title: 'Mini-Split Systems',
    icon: Zap,
    path: '/mini-splits',
    desc: 'Ductless comfort for any room. No existing ductwork needed. Factory-authorized Mitsubishi installer.',
    img: 'https://www.centralairllc.com/app/uploads/2025/02/Living-Area-Male-Female-Dealer-MiniSplit-808x606-1.jpg',
  },
  {
    title: 'Service Agreements',
    icon: ClipboardList,
    path: '/service-agreements',
    desc: 'Prevent 90% of breakdowns with annual maintenance. Priority scheduling for members.',
    img: 'https://www.centralairllc.com/app/uploads/2022/11/19-LNX-0617_D_1594-svc-agrmnt-808x606-1.jpeg',
  },
];

// Mini-testimonials placed strategically near CTAs
const MINI_TESTIMONIALS = [
  {
    quote: 'The technicians were terrific — knowledgeable, professional and a pleasure to communicate with. Diagnosed and fixed our heating issue on the first visit.',
    name: 'John G.',
    detail: 'Heating Repair, Brookfield CT',
  },
  {
    quote: 'Called on a Friday afternoon with no AC. They came out same day and had us cooling again before dinner. Absolutely phenomenal service.',
    name: 'Melissa R.',
    detail: 'AC Repair, Newtown CT',
  },
  {
    quote: "Central Air is the only HVAC company I'll ever use. Rich and his team are always honest, fair, and they do the job right.",
    name: 'Michael T.',
    detail: 'New System Install, Danbury CT',
  },
];

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Call or Request Online',
    body: 'Reach us by phone at (203) 403-6174 or fill out our online form. We aim to respond within hours.',
  },
  {
    step: '02',
    title: 'We Diagnose & Give You Options',
    body: 'A NATE-certified tech visits, diagnoses the issue honestly, and gives you upfront pricing before any work begins.',
  },
  {
    step: '03',
    title: 'We Fix It Right — Guaranteed',
    body: 'We complete the work to manufacturer specifications. All installations backed by industry-leading warranties.',
  },
];

export default function HomePage() {
  const { phone, phoneFormatted, reviews, colors } = useSiteConfig();
  const red = colors.primaryHex;
  const blue = colors.dark;

  return (
    <div>
      {/* ─── Announcement Strip ─── */}
      <div
        className="fixed top-20 left-0 right-0 z-40 flex items-center justify-center gap-3 px-4 py-2.5 text-white text-sm font-semibold"
        style={{ backgroundColor: blue }}
        role="banner"
        aria-label="Special offer announcement"
      >
        <Zap className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
        <span>
          Up to{' '}
          <strong className="underline decoration-white/60 underline-offset-2">$1,800 in Lennox® Rebates</strong>
          {' '}— Call{' '}
          <a href={`tel:${phone}`} className="underline decoration-white/40">
            {phoneFormatted}
          </a>{' '}
          to qualify
        </span>
      </div>

      {/* ─── HERO: Problem-first, proof-first ─── */}
      <section className="relative pt-28" aria-label="Hero">
        <div className="relative overflow-hidden" style={{ height: '580px' }}>
          <img
            src={HERO_IMAGE}
            alt="Central Air LLC service truck — Brookfield, CT HVAC"
            className="w-full h-full object-cover object-center"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-transparent" />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65 }}
                className="max-w-xl"
              >
                {/* Social proof badge — ABOVE the headline */}
                <a
                  href={reviews.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/25 backdrop-blur-sm mb-5"
                  aria-label={`${reviews.rating} stars — ${reviews.count} Google Reviews`}
                >
                  <div className="flex gap-0.5" aria-hidden="true">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-white text-xs font-semibold">
                    {reviews.rating} · <span className="text-amber-300">{reviews.count} Google Reviews</span>
                  </span>
                </a>

                {/* PROBLEM-FIRST headline */}
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
                  No Heat? No AC?<br />
                  <span style={{ color: red }}>We Fix It Right — Fast.</span>
                </h1>
                <p className="text-lg text-white/85 mb-2 font-medium">
                  NATE-Certified · Lennox Premier · Mitsubishi Diamond
                </p>
                <p className="text-sm text-white/65 mb-7">
                  Locally owned in Brookfield, CT since 2003 · Fairfield County & Westchester, NY
                </p>

                {/* DUAL CTA: primary urgency, secondary trust */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 text-white font-bold rounded-lg text-base transition-all shadow-lg hover:opacity-90 active:scale-[0.98]"
                    style={{ backgroundColor: red }}
                  >
                    <Calendar className="w-5 h-5" aria-hidden="true" />
                    Get Service Today — It's Free to Estimate
                  </Link>
                  <a
                    href={`tel:${phone}`}
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 text-white font-bold rounded-lg text-base border border-white/50 hover:bg-white/15 transition-all"
                  >
                    <Phone className="w-5 h-5" aria-hidden="true" />
                    {phoneFormatted}
                  </a>
                </div>

                {/* Micro-trust line below CTAs */}
                <p className="text-white/45 text-xs mt-4 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                  Free estimates on new installs · All work backed by manufacturer warranty
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Trust Badges (certifications) ─── */}
      <TrustBadges />

      {/* ─── AUTHORITY: Why 194 families chose us ─── */}
      <section className="py-10 sm:py-16 bg-white border-b border-slate-100" aria-labelledby="authority-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: red }}>
                Why 194 Families Chose Us
              </p>
              <h2 id="authority-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-5">
                Honest Work. Expert Technicians. Done Right the First Time.
              </h2>
              <p className="text-base text-slate-600 mb-4 leading-relaxed">
                When your heating or cooling breaks down, the last thing you need is a company that gives you the runaround. At Central Air LLC, we send NATE and ICE certified technicians who diagnose your system accurately, explain the issue in plain language, and give you a price before any work begins.
              </p>
              <p className="text-base text-slate-600 mb-6 leading-relaxed">
                We've been doing this in Fairfield County since 2003. The reason we have a 4.9-star rating across 194 Google reviews? We treat every home like it's our own.
              </p>

              {/* Credentials list with proof */}
              <div className="grid grid-cols-1 gap-2.5 mb-7">
                {[
                  { icon: CheckCircle, text: 'NATE & ICE Certified — industry\'s highest standard' },
                  { icon: CheckCircle, text: 'Lennox Premier Dealer — 5+ year award recipient' },
                  { icon: CheckCircle, text: 'Mitsubishi Diamond Contractor — factory authorized' },
                  { icon: CheckCircle, text: 'BBB Accredited · ACCA Member since 2003' },
                  { icon: CheckCircle, text: 'Free estimates on new equipment installations' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <item.icon className="w-4 h-4 flex-shrink-0" style={{ color: red }} aria-hidden="true" />
                    <span className="text-sm text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Inline mini-testimonial */}
              <blockquote className="border-l-4 pl-4 mb-6 italic text-slate-600 text-sm" style={{ borderColor: red }}>
                "{MINI_TESTIMONIALS[2].quote}"
                <footer className="mt-1 not-italic font-semibold text-slate-800 text-xs">
                  — {MINI_TESTIMONIALS[2].name}, {MINI_TESTIMONIALS[2].detail}
                </footer>
              </blockquote>

              <Link
                to="/about-us"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-white font-bold text-sm transition-colors"
                style={{ backgroundColor: red }}
              >
                Meet the Team <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <img
                src={LENNOX_AWARD}
                alt="Lennox Length of Dealership Award — Central Air LLC"
                className="w-full rounded-2xl shadow-lg object-contain bg-slate-50 p-6"
                loading="lazy"
                decoding="async"
              />
              {/* Floating proof pills */}
              <div
                className="absolute -bottom-4 -left-4 px-5 py-3 rounded-xl text-white text-center shadow-lg"
                style={{ backgroundColor: red }}
              >
                <div className="text-2xl font-extrabold">4.9★</div>
                <div className="text-xs font-semibold opacity-90">194 Reviews</div>
              </div>
              <div
                className="absolute -top-4 -right-4 px-5 py-3 rounded-xl text-white text-center shadow-lg"
                style={{ backgroundColor: blue }}
              >
                <div className="text-2xl font-extrabold">20+</div>
                <div className="text-xs font-semibold opacity-90">Years Serving CT</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS — reduce friction ─── */}
      <section className="py-10 sm:py-14 bg-slate-50 border-b border-slate-200" aria-labelledby="process-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: red }}>
              Simple Process
            </p>
            <h2 id="process-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Getting Your System Fixed Is Easy
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 relative">
            {HOW_IT_WORKS.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm text-center relative"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-extrabold text-lg mx-auto mb-4"
                  style={{ backgroundColor: red }}
                >
                  {item.step}
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-base">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-white font-bold text-base transition-all shadow-md hover:opacity-90"
              style={{ backgroundColor: red }}
            >
              <Phone className="w-5 h-5" />
              Start with a Call — {phoneFormatted}
            </a>
            <p className="text-slate-400 text-xs mt-3">Mon–Fri 8am–4:30pm · Free estimates on new installations</p>
          </div>
        </div>
      </section>

      {/* ─── YOUTUBE VIDEO ─── */}
      <section className="py-10 sm:py-14 bg-white border-b border-slate-100" aria-labelledby="video-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: red }}>Lennox Award Recognition</p>
            <h2 id="video-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              5+ Years as a Lennox Premier Dealer
            </h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto">
              Central Air LLC has been recognized by Lennox for exceptional service and commitment to our community. Watch what that means for you.
            </p>
          </div>
          <div className="relative w-full rounded-2xl overflow-hidden shadow-xl" style={{ paddingTop: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/HTIZ9JUd1tE?rel=0&modestbranding=1"
              title="Central Air LLC — Lennox Premier Dealer Award"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-10 sm:py-16 bg-white" id="services" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: red }}>
              Complete HVAC Care
            </p>
            <h2 id="services-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              Everything Your Home Needs — One Company
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm">
              Residential & light commercial heating, cooling, and air quality in Fairfield County and Westchester.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all group"
              >
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img
                    src={svc.img}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <svc.icon className="w-5 h-5 text-white" aria-hidden="true" />
                    <h3 className="text-white font-bold text-lg">{svc.title}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{svc.desc}</p>
                  <Link
                    to={svc.path}
                    className="inline-flex items-center text-sm font-bold gap-1 transition-colors hover:gap-2"
                    style={{ color: red }}
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LENNOX OFFER — mid-page urgency ─── */}
      <section
        className="py-10 sm:py-14"
        style={{ backgroundColor: blue }}
        aria-label="Lennox rebate offer"
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/50 mb-2">Limited-Time Offer</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Up to $1,800 Back on a New Lennox® System
              </h2>
              <p className="text-white/75 text-sm leading-relaxed mb-3">
                Purchase the Lennox® Ultimate Comfort System™ and receive up to $1,800 as a Lennox Prepaid Mastercard® — or choose 0% interest for 12 months through Synchrony Financial.
              </p>
              <p className="text-white/40 text-xs mb-5">*Terms apply. Call to confirm current eligibility.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/financing"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-sm text-white border-2 border-white hover:bg-white transition-colors"
                  style={{ ['--tw-text-opacity' as string]: '1' }}
                >
                  View Financing Options
                </Link>
                <a
                  href={`tel:${phone}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-sm text-white border-2 border-white/35 hover:border-white transition-colors"
                >
                  <Phone className="w-4 h-4" /> {phoneFormatted}
                </a>
              </div>
            </div>
            {/* Inline testimonial near CTA — proven conversion pattern */}
            <div className="bg-white/8 border border-white/20 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex gap-0.5 mb-3" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-white/85 text-sm leading-relaxed italic mb-4">
                "{MINI_TESTIMONIALS[0].quote}"
              </p>
              <div>
                <p className="text-white font-bold text-sm">{MINI_TESTIMONIALS[0].name}</p>
                <p className="text-white/50 text-xs">{MINI_TESTIMONIALS[0].detail}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GOOGLE REVIEWS ─── */}
      <GoogleReviews />

      {/* ─── FAQ — address objections ─── */}
      <FAQ />

      {/* ─── SERVICE AREA ─── */}
      <section className="py-10 sm:py-14 bg-slate-50 border-t border-slate-100" aria-labelledby="area-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: red }}>
            Proudly Serving
          </p>
          <h2 id="area-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
            Brookfield and 23 Surrounding Communities
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
            {[
              'Brookfield', 'Danbury', 'Bethel', 'Newtown', 'Ridgefield',
              'New Milford', 'New Fairfield', 'Monroe', 'Shelton', 'Oxford',
              'Greenwich', 'Stamford', 'Darien', 'Westport', 'Wilton',
              'New Canaan', 'Norwalk', 'Trumbull', 'Bedford', 'Brewster',
              'Carmel', 'Chappaqua', 'Pound Ridge', 'Waccabuc',
            ].map((town) => (
              <div key={town} className="px-2 py-1.5 bg-white rounded-lg border border-slate-200 font-medium text-xs text-slate-700">
                {town}
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-slate-500">
            Not sure if we cover your area?{' '}
            <a href={`tel:${phone}`} className="font-semibold" style={{ color: red }}>
              Call {phoneFormatted}
            </a>{' '}
            — we likely do.
          </p>
        </div>
      </section>

      {/* ─── FINAL CTA — urgency + proof + low risk ─── */}
      <section className="py-12 sm:py-16 bg-white border-t border-slate-100 pb-24 lg:pb-14" aria-label="Final call to action">
        <div className="max-w-3xl mx-auto px-4 text-center">
          {/* Mini testimonial ABOVE the CTA button — proven to lift conversion */}
          <blockquote className="mb-8">
            <div className="flex gap-0.5 justify-center mb-3" aria-label="5 stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
              ))}
            </div>
            <p className="text-slate-600 italic text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              "{MINI_TESTIMONIALS[1].quote}"
            </p>
            <footer className="mt-3 text-sm font-semibold text-slate-800">
              — {MINI_TESTIMONIALS[1].name}, <span className="font-normal text-slate-500">{MINI_TESTIMONIALS[1].detail}</span>
            </footer>
          </blockquote>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
            Don't Wait Until It Breaks Down Completely
          </h2>
          <p className="text-slate-500 mb-6 max-w-lg mx-auto text-sm">
            Whether it's a repair, a tune-up, or a brand-new system — Central Air LLC makes it easy, affordable, and stress-free. Free estimates on all new installations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-5">
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-white font-bold text-base transition-all shadow-md hover:opacity-90"
              style={{ backgroundColor: red }}
            >
              <Calendar className="w-5 h-5" />
              Request Service — Free Estimate
            </Link>
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-base border-2 transition-colors"
              style={{ borderColor: red, color: red }}
            >
              <Phone className="w-5 h-5" />
              {phoneFormatted}
            </a>
          </div>

          {/* Trust micro-copy below CTA */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400 text-xs">
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> Mon–Fri 8am–4:30pm</span>
            <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5" /> NATE Certified</span>
            <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> 4.9★ · 194 Reviews</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5" /> Since 2003</span>
          </div>
        </div>
      </section>
    </div>
  );
}
