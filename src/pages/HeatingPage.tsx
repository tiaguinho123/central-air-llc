import { motion } from 'motion/react';
import {
  Phone, Calendar, CheckCircle, Thermometer, Star, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteConfig } from '../config/SiteConfigContext';

// Real images from centralairllc.com
const HERO_IMG = 'https://www.centralairllc.com/app/uploads/2022/11/FurnRepair-45832271-808x606-1.jpg';
const SECONDARY_IMG = 'https://www.centralairllc.com/app/uploads/2022/11/VaryingComfortLevels.png';

const SIGNS = [
  'No heat — furnace running but not warming the house',
  'Furnace cycles on and off constantly (short cycling)',
  'Unusual noises: banging, squealing, or rumbling',
  'Yellow or flickering pilot light (should be blue)',
  'Spike in heating bills with no change in usage',
  'Inconsistent temperatures between rooms',
  'System is 15+ years old and needs frequent repairs',
];

const SERVICES_LIST = [
  {
    title: 'Furnace Repair',
    desc: 'Fast diagnosis and repair of gas, oil, and electric furnaces. Our NATE-certified technicians carry a full inventory of parts to fix most furnaces on the first visit.',
  },
  {
    title: 'Boiler Repair & Service',
    desc: 'Expert boiler repair and maintenance for hydronic heating systems. We service all makes and models.',
  },
  {
    title: 'Furnace Installation',
    desc: 'As a Lennox Premier Dealer, we install the most efficient, reliable furnaces available — backed by some of the best warranties in the industry.',
  },
  {
    title: 'Annual Heating Tune-Up',
    desc: 'Comprehensive 21-point inspection and cleaning to ensure your system runs safely and efficiently all winter long.',
  },
];

export default function HeatingPage() {
  const { phone, phoneFormatted, colors } = useSiteConfig();
  const red = colors.primaryHex;
  const blue = colors.dark;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-72 sm:h-96" aria-label="Furnace Repair hero">
        <img
          src={HERO_IMG}
          alt="Central Air LLC furnace repair technician at work in Brookfield CT"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-3">Heating Services</p>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-3">
              Furnace Repair in<br />Brookfield, CT
            </h1>
            <p className="text-white/80 text-base max-w-md">
              NATE-Certified technicians. Same-day availability. All major brands serviced.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: red }}>
                Expert Heating Service
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-5">
                When Your Heat Goes Out, We Show Up Fast
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our certified repair technicians service all heating system makes and models — furnaces, boilers, and heat pumps. Whether you need a quick repair or a full system replacement, Central Air LLC has been the trusted heating contractor in Fairfield County since 2003.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                As a Lennox Premier Dealer for 5+ years, we have access to the best equipment at the most competitive prices — and we back our work with industry-leading warranties.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-bold text-sm"
                  style={{ backgroundColor: red }}
                >
                  <Calendar className="w-4 h-4" /> Schedule Service
                </Link>
                <a
                  href={`tel:${phone}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-sm border-2"
                  style={{ borderColor: red, color: red }}
                >
                  <Phone className="w-4 h-4" /> {phoneFormatted}
                </a>
              </div>
            </div>
            <div>
              <img
                src={SECONDARY_IMG}
                alt="Varying comfort levels — signs of a heating system problem"
                className="w-full rounded-2xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Signs you need service */}
      <section className="py-10 sm:py-16 bg-slate-50" aria-labelledby="signs-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="signs-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center mb-10">
            7 Signs Your Furnace Needs Repair
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {SIGNS.map((sign) => (
              <div key={sign} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-slate-200">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: red }} aria-hidden="true" />
                <p className="text-sm text-slate-700">{sign}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-10 sm:py-16 bg-white" aria-labelledby="heating-svcs-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="heating-svcs-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center mb-10">
            Our Heating Services
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {SERVICES_LIST.map((s) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200"
              >
                <h3 className="font-bold mb-2" style={{ color: red }}>{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NATE Certification section */}
      <section className="py-10 sm:py-14 bg-slate-50 border-y border-slate-200" aria-labelledby="nate-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Thermometer className="w-10 h-10 mx-auto mb-4" style={{ color: red }} />
          <h2 id="nate-heading" className="text-2xl font-extrabold text-slate-900 mb-3">
            Why NATE Certification Matters
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm leading-relaxed">
            NATE (North American Technician Excellence) certification is the HVAC industry's highest standard. All Central Air LLC technicians are NATE and ICE certified — meaning accurate diagnosis the first time, fewer repeat visits, and a heating system that runs the way it should. Most furnaces that are 12–17 years old can often be repaired cost-effectively; our techs will always give you an honest assessment.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
            {['All major brands serviced', 'Upfront pricing', 'Parts on every truck', 'Warranty on all repairs'].map(t => (
              <span key={t} className="flex items-center gap-1.5 text-slate-700 font-medium">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />{t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-14 text-white text-center pb-24 lg:pb-16" style={{ backgroundColor: blue }}>
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Need Heating Repair Today?</h2>
          <p className="text-white/70 mb-6 text-sm">Free estimates on new installations. Same-day appointments based on availability.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-sm bg-white transition-colors"
              style={{ color: red }}
            >
              <Calendar className="w-4 h-4" /> Request Service
            </Link>
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-sm text-white border-2 border-white/40 hover:border-white transition-colors"
            >
              <Phone className="w-4 h-4" /> {phoneFormatted}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
