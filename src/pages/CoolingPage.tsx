import { motion } from 'motion/react';
import { Phone, Snowflake, Zap, CheckCircle, Calendar, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteConfig } from '../config/SiteConfigContext';

const HERO_IMG = 'https://images.unsplash.com/photo-1562614757-bd2c5614d800?q=80&w=1200&auto=format&fit=crop';

const SERVICES = [
  { title: 'AC Repair', desc: 'Fast, accurate diagnosis and repair of central air conditioning systems. We service all major makes and models — upfront pricing before any work begins.' },
  { title: 'AC Maintenance', desc: 'Annual tune-ups that keep your system running efficiently all summer. Prevents costly breakdowns and extends equipment life by years.' },
  { title: 'AC Installation', desc: 'High-efficiency air conditioner installation sized correctly for your home. Modern systems can use up to 50% less energy than equipment just 10 years old.' },
  { title: 'Ductless Mini‑Splits', desc: 'Installation of ductless cooling systems for rooms without existing ductwork. Efficient, quiet, and zone-controlled.' },
  { title: 'Heat Pump Cooling', desc: 'Heat pump repair and maintenance. Heat pumps provide efficient heating AND cooling — one system, year-round comfort.' },
  { title: 'Emergency Cooling', desc: 'No AC in summer heat? We prioritize urgent calls. Contact us and we\'ll get a technician to you as quickly as possible.' },
];

const SEER_FACTS = [
  'Modern high-SEER AC units use up to 50% less energy than systems from 10 years ago',
  'ENERGY STAR certified equipment can qualify for federal tax credits',
  'Proper sizing is critical — oversized units cycle on/off too fast, wasting energy and reducing comfort',
  'Regular maintenance keeps efficiency at peak levels and can extend system life by 5+ years',
];

export default function CoolingPage() {
  const { phone, phoneFormatted, colors } = useSiteConfig();
  const red = colors.primaryHex;
  const blue = colors.dark;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-64 sm:h-80" aria-label="Cooling services hero">
        <img src={HERO_IMG} alt="Air conditioning system" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-3">
              <Snowflake className="w-6 h-6" style={{ color: '#60a5fa' }} />
              <span className="text-sm font-bold text-white/70 uppercase tracking-wider">HVAC Services</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white">Cooling Services</h1>
            <p className="text-white/80 mt-2 text-base">Central AC · Ductless · Heat Pumps — All Makes & Models</p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: red }}>Expert Cooling</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-5">
            Stay Cool & Comfortable Year‑Round
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Central Air LLC's NATE-certified technicians service, repair, and install cooling systems of all types. Whether your AC isn't keeping up with the heat, needs a seasonal tune-up, or it's time for an upgrade, we bring the expertise to get it right the first time.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            As a Lennox Premier Dealer and Mitsubishi Diamond Contractor, we have access to industry-leading equipment with the best warranties available. Modern high-SEER systems can save you up to 50% on cooling costs compared to equipment just 10 years old.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact-us" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-bold text-sm" style={{ backgroundColor: red }}>
              <Calendar className="w-4 h-4" /> Request Cooling Service
            </Link>
            <a href={`tel:${phone}`} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-sm border-2" style={{ borderColor: red, color: red }}>
              <Phone className="w-4 h-4" /> {phoneFormatted}
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 sm:py-16 bg-slate-50" aria-labelledby="cooling-svcs-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="cooling-svcs-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8 text-center">Our Cooling Services</h2>
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

      {/* Efficiency Facts */}
      <section className="py-10 sm:py-16 bg-white border-y border-slate-100" aria-labelledby="seer-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${red}15` }}>
                <Zap className="w-6 h-6" style={{ color: red }} />
              </div>
              <h2 id="seer-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-5">
                The Case for Upgrading Your AC
              </h2>
              <div className="space-y-4">
                {SEER_FACTS.map((fact) => (
                  <div key={fact} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: red }} />
                    <p className="text-slate-600 text-sm leading-relaxed">{fact}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 text-center">
              <div className="text-5xl font-extrabold mb-2" style={{ color: red }}>50%</div>
              <p className="text-slate-700 font-semibold mb-4">Potential Energy Savings</p>
              <p className="text-slate-500 text-sm">by upgrading from a 10-year-old system to a modern high-SEER unit</p>
              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-slate-500 text-xs">Ask us about Lennox® equipment with SEER2 ratings of 18 or higher</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-14 text-white text-center pb-24 lg:pb-16" style={{ backgroundColor: blue }}>
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Need Cooling Help?</h2>
          <p className="text-white/70 mb-6 text-sm">Free estimates on new AC installations. Call Mon–Fri 8am–4:30pm.</p>
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
