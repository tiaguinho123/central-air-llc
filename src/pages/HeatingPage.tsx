import { motion } from 'motion/react';
import { Phone, Flame, CheckCircle, Clock, Wrench, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteConfig } from '../config/SiteConfigContext';

const HERO_IMG = 'https://images.unsplash.com/photo-1631700611307-37dbcb89ef7e?q=80&w=1200&auto=format&fit=crop';

const SERVICES = [
  { title: 'Furnace Repair', desc: 'Fast, accurate diagnosis and repair of gas and oil furnaces. We service all major brands with upfront pricing before any work begins.' },
  { title: 'Furnace Maintenance', desc: 'Annual tune-ups that extend equipment life, catch issues early, and keep your system running at peak efficiency all season.' },
  { title: 'Furnace Installation', desc: 'Energy-efficient new furnace installation sized correctly for your home. Lennox® and other top brands available.' },
  { title: 'Boiler Service', desc: 'Expert boiler inspection, repair, and maintenance to keep your home warm and your hot water flowing reliably.' },
  { title: 'Heat Pump Heating', desc: 'Heat pump repair and maintenance for year-round heating efficiency — we service all major makes and models.' },
  { title: 'Emergency Heating', desc: 'Lost heat? We respond fast. Call us and we\'ll dispatch a NATE-certified technician as quickly as possible.' },
];

const BRANDS = ['Lennox®', 'Mitsubishi®', 'Carrier®', 'Trane®', 'Bryant®', 'Rheem®', 'Bosch®', 'Weil-McLain®'];

export default function HeatingPage() {
  const { phone, phoneFormatted, colors } = useSiteConfig();
  const red = colors.primaryHex;
  const blue = colors.dark;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-64 sm:h-80" aria-label="Heating services hero">
        <img src={HERO_IMG} alt="HVAC heating system" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-3">
              <Flame className="w-6 h-6 text-white" style={{ color: red }} />
              <span className="text-sm font-bold text-white/70 uppercase tracking-wider">HVAC Services</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white">Heating Services</h1>
            <p className="text-white/80 mt-2 text-base">Furnaces · Boilers · Heat Pumps — All Makes & Models</p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: red }}>Expert Heating</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-5">
            Keep Your Home Warm All Winter
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            At Central Air LLC, our NATE and ICE certified technicians specialize in heating systems of all types and brands. Whether your furnace is making an unusual noise, your boiler needs its annual tune-up, or it's time to upgrade to a high-efficiency system, we have the expertise and the tools to get the job done right.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            Modern furnaces last between 12 and 17 years when properly maintained. Quiet operation and energy efficiency have improved dramatically — if your system is aging, upgrading can reduce your heating bills significantly. As a Lennox Premier Dealer, we offer access to top-performing systems with industry-leading warranties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-bold text-sm"
              style={{ backgroundColor: red }}
            >
              <Calendar className="w-4 h-4" />
              Request Heating Service
            </Link>
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-sm border-2"
              style={{ borderColor: red, color: red }}
            >
              <Phone className="w-4 h-4" />
              {phoneFormatted}
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 sm:py-16 bg-slate-50" aria-labelledby="heating-svcs-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="heating-svcs-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8 text-center">
            Our Heating Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${red}15` }}>
                  <Wrench className="w-5 h-5" style={{ color: red }} aria-hidden="true" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-10 sm:py-14 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: red }}>We Service All Major Brands</p>
          <div className="flex flex-wrap justify-center gap-3">
            {BRANDS.map(b => (
              <span key={b} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-semibold text-slate-700">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Why NATE */}
      <section className="py-10 sm:py-16 bg-slate-50" aria-labelledby="nate-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6" style={{ color: red }} />
              <h2 id="nate-heading" className="text-xl font-extrabold text-slate-900">Why NATE Certification Matters</h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-3">
              NATE (North American Technician Excellence) certification is the heating and cooling industry's most recognized and respected certification program. To be NATE certified, technicians must pass rigorous, knowledge-based tests developed by a committee of HVAC industry experts.
            </p>
            <p className="text-slate-600 leading-relaxed">
              When you choose Central Air LLC, every technician sent to your home is both NATE and ICE certified — ensuring your system is diagnosed correctly the first time, and repaired or installed to the highest standard.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-14 text-white text-center pb-24 lg:pb-16" style={{ backgroundColor: blue }}>
        <div className="max-w-2xl mx-auto px-4">
          <Clock className="w-10 h-10 text-white/60 mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Need Heating Help?</h2>
          <p className="text-white/70 mb-6 text-sm">Call Mon–Fri 8am–4:30pm. Free estimates on new equipment installations.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-us" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-sm border-2 border-white text-white hover:bg-white transition-colors">
              Request Service Online
            </Link>
            <a href={`tel:${phone}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-sm text-white border-2 border-white/40 hover:border-white transition-colors">
              <Phone className="w-4 h-4" /> {phoneFormatted}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
