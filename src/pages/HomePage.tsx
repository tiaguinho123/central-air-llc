import { motion } from 'motion/react';
import { Phone, Calendar, Star, Flame, Snowflake, Wind, Thermometer, ClipboardList, BadgeCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteConfig } from '../config/SiteConfigContext';
import TrustBadges from '../components/TrustBadges';
import GoogleReviews from '../components/GoogleReviews';

// Real Central Air LLC images
const HERO_IMAGE = 'https://www.centralairllc.com/app/uploads/sites/51/2026/03/Central-Air-truck.png';
const LENNOX_AWARD = 'https://www.centralairllc.com/app/uploads/sites/51/2023/03/LennoxLengthOfDealershipAward.png';

const SERVICES = [
  {
    title: 'Heating',
    icon: Flame,
    path: '/heating',
    desc: 'Furnace repair, maintenance & installation. We service all major makes and keep your home warm all winter.',
    img: 'https://images.unsplash.com/photo-1631700611307-37dbcb89ef7e?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Cooling',
    icon: Snowflake,
    path: '/cooling',
    desc: 'Central AC repair, maintenance & installation. Save up to 50% on cooling costs with modern high-SEER systems.',
    img: 'https://images.unsplash.com/photo-1562614757-bd2c5614d800?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Heat Pumps',
    icon: Thermometer,
    path: '/heat-pumps',
    desc: 'Efficient year-round heating & cooling. Heat pump installation, repair & maintenance.',
    img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Indoor Air Quality',
    icon: Wind,
    path: '/indoor-air-quality',
    desc: 'Air audits, HEPA filtration, UV germicidal lights & humidity control for a healthier home.',
    img: 'https://images.unsplash.com/photo-1586105449897-20b5efeb3233?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Mini-Split Systems',
    icon: Zap,
    path: '/mini-splits',
    desc: 'Ductless mini-split installation for zoned comfort in any room — without existing ductwork.',
    img: 'https://images.unsplash.com/photo-1499502626839-de2e85b09820?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Service Agreements',
    icon: ClipboardList,
    path: '/service-agreements',
    desc: 'Annual maintenance plans that lower energy costs, prevent breakdowns & extend equipment life.',
    img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop',
  },
];

const WHY_ITEMS = [
  { icon: BadgeCheck, text: 'NATE & ICE Certified Technicians' },
  { icon: BadgeCheck, text: 'Lennox Premier Dealer — 5+ Years' },
  { icon: BadgeCheck, text: 'Mitsubishi Diamond Contractor' },
  { icon: BadgeCheck, text: 'BBB Accredited & ACCA Member' },
  { icon: BadgeCheck, text: 'Free Estimates on New Installations' },
  { icon: BadgeCheck, text: 'Serving Fairfield County since 2003' },
];

export default function HomePage() {
  const { phone, phoneFormatted, reviews, colors } = useSiteConfig();
  const red = colors.primaryHex;
  const blue = colors.dark;

  return (
    <div>
      {/* ─── Offer Announcement Strip ── */}
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
          {' '}available — Ask Us Today. Call (203) 403-6174
        </span>
      </div>

      {/* ─── Hero ─── */}
      <section className="relative pt-28" aria-label="Hero">
        <div className="relative overflow-hidden" style={{ height: '580px' }}>
          <img
            src={HERO_IMAGE}
            alt="Central Air LLC service truck — Brookfield, CT HVAC"
            className="w-full h-full object-cover object-center"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-2xl"
              >
                {/* Review badge */}
                <a
                  href={reviews.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/25 backdrop-blur-sm mb-6"
                  aria-label={`${reviews.rating} stars — ${reviews.count} Google Reviews`}
                >
                  <div className="flex gap-0.5" aria-hidden="true">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-white text-sm font-semibold">
                    {reviews.rating} · <span className="text-amber-300">{reviews.count} Google Reviews</span>
                  </span>
                </a>

                <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
                  Dependable HVAC Service
                  <br />
                  <span style={{ color: red }}>Service With Quality</span>
                </h1>
                <p className="text-xl text-white/90 mb-3 font-medium">
                  Locally owned & operated since 2003 — Brookfield, CT
                </p>
                <p className="text-base text-white/75 mb-8">
                  NATE Certified · Lennox Premier Dealer · Mitsubishi Diamond Contractor
                  <br />
                  Serving Fairfield County & Westchester, NY
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-lg text-lg transition-colors shadow-lg"
                    style={{ backgroundColor: red }}
                  >
                    <Calendar className="w-5 h-5" aria-hidden="true" />
                    Request Service
                  </Link>
                  <a
                    href={`tel:${phone}`}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-lg text-lg border border-white/50 hover:bg-white/15 transition-colors"
                  >
                    <Phone className="w-5 h-5" aria-hidden="true" />
                    {phoneFormatted}
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Trust Badges ─── */}
      <TrustBadges />

      {/* ─── About Blurb ─── */}
      <section className="py-10 sm:py-16 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: red }}>
                Service With Quality
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-5">
                Central Air, LLC. — Brookfield's Trusted HVAC Company
              </h2>
              <p className="text-base text-slate-600 mb-4 leading-relaxed">
                At Central Air LLC, heating and cooling isn't solely our job; it's our passion.
                We strive to provide you with the top HVAC service in Fairfield County. No matter
                the time, day or the problem, you can rely on us to get the job done correctly.
              </p>
              <p className="text-base text-slate-600 mb-6 leading-relaxed">
                After all, Central Air LLC has been working in the community since 2003, bringing
                comfort to our customers all year round.
              </p>
              <div className="grid grid-cols-1 gap-3 mb-6">
                {WHY_ITEMS.map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 flex-shrink-0" style={{ color: red }} aria-hidden="true" />
                    <span className="text-sm font-medium text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/about-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-bold text-sm transition-colors"
                style={{ backgroundColor: red }}
              >
                About Us →
              </Link>
            </div>
            <div className="relative">
              <img
                src={LENNOX_AWARD}
                alt="Lennox Length of Dealership Award — Central Air LLC 5 Years"
                className="w-full rounded-2xl shadow-lg object-contain bg-slate-50 p-6"
                loading="lazy"
                decoding="async"
              />
              <div
                className="absolute -bottom-4 -left-4 px-5 py-3 rounded-xl text-white text-center shadow-lg"
                style={{ backgroundColor: red }}
              >
                <div className="text-2xl font-extrabold">20+</div>
                <div className="text-xs font-semibold opacity-90">Years of Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Services Grid ─── */}
      <section className="py-10 sm:py-16 bg-slate-50" id="services" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: red }}>
              What We Do
            </p>
            <h2 id="services-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              Our HVAC Services
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm">
              Residential & light commercial heating, cooling, and air quality solutions for Fairfield County and Westchester.
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <svc.icon className="w-5 h-5 text-white" aria-hidden="true" />
                    <h3 className="text-white font-bold text-lg">{svc.title}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{svc.desc}</p>
                  <Link
                    to={svc.path}
                    className="inline-flex items-center text-sm font-bold transition-colors"
                    style={{ color: red }}
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Lennox Offer Strip ─── */}
      <section className="py-10 sm:py-14" style={{ backgroundColor: blue }} aria-label="Current Offer">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-white/60 mb-2">Limited Time</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Receive up to $1,800 in Rebates
          </h2>
          <p className="text-white/80 mb-2">
            When you purchase the Lennox® Ultimate Comfort System™ <strong className="text-white">OR</strong> qualified buyers make no payments, incur no interest for 12 months when financing a new Lennox® system.
          </p>
          <p className="text-white/50 text-xs mb-6">(Rebate is paid in the form of a Lennox Prepaid Mastercard®)</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/financing"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-bold text-sm border-2 border-white text-white hover:bg-white transition-colors"
              style={{ ['--hover-color' as string]: blue }}
            >
              View Financing Options
            </Link>
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-bold text-sm text-white border-2 border-white/40 hover:border-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              {phoneFormatted}
            </a>
          </div>
        </div>
      </section>

      {/* ─── Google Reviews ─── */}
      <GoogleReviews />

      {/* ─── Service Area ─── */}
      <section className="py-10 sm:py-16 bg-slate-50 border-t border-slate-100" aria-labelledby="area-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: red }}>
            Proudly Serving
          </p>
          <h2 id="area-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8">
            Brookfield and Surrounding Areas
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 text-sm text-slate-600">
            {[
              'Brookfield','Danbury','Bethel','Newtown','Ridgefield',
              'New Milford','New Fairfield','Monroe','Shelton','Oxford',
              'Greenwich','Stamford','Darien','Westport','Wilton',
              'New Canaan','Norwalk','Trumbull','Bedford','Brewster',
              'Carmel','Chappaqua','Pound Ridge','Waccabuc'
            ].map(town => (
              <div key={town} className="px-2 py-1.5 bg-white rounded-lg border border-slate-200 font-medium text-xs">
                {town}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Not sure if we serve your area? <a href={`tel:${phone}`} className="font-semibold" style={{ color: red }}>Call us at {phoneFormatted}</a>
          </p>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <div className="py-10 sm:py-14 bg-white border-t border-slate-100 pb-24 lg:pb-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
            Ready to Schedule Service?
          </h2>
          <p className="text-slate-500 mb-6 max-w-lg mx-auto text-sm">
            Free estimates on new installations. Call us Mon–Fri 8am–4:30pm or submit a request anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-white font-bold text-base transition-colors shadow-md"
              style={{ backgroundColor: red }}
            >
              <Calendar className="w-5 h-5" />
              Request Service Online
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
        </div>
      </div>
    </div>
  );
}
