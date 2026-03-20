import { motion } from 'motion/react';
import { Phone, Zap, CheckCircle, Calendar, Thermometer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteConfig } from '../config/SiteConfigContext';

const HERO_IMG = 'https://images.unsplash.com/photo-1499502626839-de2e85b09820?q=80&w=1200&auto=format&fit=crop';

const BENEFITS = [
  { title: 'No Ductwork Required', desc: 'Perfect for additions, garages, basements, and older homes without existing duct systems.' },
  { title: 'Zoned Comfort', desc: 'Control the temperature in each room independently — no more fighting over the thermostat.' },
  { title: 'Quiet Operation', desc: 'Mitsubishi mini-splits are whisper quiet — you\'ll forget it\'s even running.' },
  { title: 'High Efficiency', desc: 'Ductless systems lose no energy in ductwork — all of the heating or cooling goes directly where you need it.' },
  { title: 'Fast Installation', desc: 'Most single-zone mini-split installations are completed in one day with minimal disruption to your home.' },
  { title: 'Mitsubishi Diamond', desc: 'As a Mitsubishi Diamond Contractor, we\'re factory-trained and authorized to install and service all Mitsubishi Electric ductless systems.' },
];

export default function MiniSplitsPage() {
  const { phone, phoneFormatted, colors } = useSiteConfig();
  const red = colors.primaryHex;
  const blue = colors.dark;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-64 sm:h-80" aria-label="Mini-Split Systems hero">
        <img src={HERO_IMG} alt="Ductless mini-split indoor unit" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-3">
              <Thermometer className="w-6 h-6 text-purple-300" />
              <span className="text-sm font-bold text-white/70 uppercase tracking-wider">HVAC Services</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white">Mini-Split Systems</h1>
            <p className="text-white/80 mt-2 text-base">Ductless Heating & Cooling — Mitsubishi Diamond Contractor</p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: red }}>Ductless Comfort</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-5">
            Comfort Without Ductwork
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Mini-split ductless systems are one of the most versatile HVAC solutions available today. Whether you're adding a room addition, converting a garage, finishing a basement, or simply want to add zoned comfort to a part of your home that's always too hot or too cold — mini-splits deliver.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            As a Mitsubishi Diamond Contractor, Central Air LLC is factory-authorized and certified to install the full range of Mitsubishi Electric ductless systems. These are among the quietest, most efficient, and most reliable mini-splits available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact-us" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-bold text-sm" style={{ backgroundColor: red }}>
              <Calendar className="w-4 h-4" /> Get a Free Mini-Split Estimate
            </Link>
            <a href={`tel:${phone}`} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-sm border-2" style={{ borderColor: red, color: red }}>
              <Phone className="w-4 h-4" /> {phoneFormatted}
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-10 sm:py-16 bg-slate-50" aria-labelledby="ms-benefits-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="ms-benefits-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center mb-10">
            Why Choose a Mini-Split?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map((b) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${red}15` }}>
                  <Zap className="w-5 h-5" style={{ color: red }} aria-hidden="true" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{b.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-10 sm:py-14 bg-white border-y border-slate-100" aria-labelledby="ms-how-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 id="ms-how-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900">How It Works</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Outdoor Compressor', desc: 'A compact outdoor unit houses the compressor, which handles the refrigeration cycle for the whole system.' },
              { step: '02', title: 'Refrigerant Line', desc: 'A small refrigerant line connects the outdoor and indoor units — only a 3-inch hole in the wall is needed.' },
              { step: '03', title: 'Indoor Air Handler', desc: 'Quiet wall-mounted or ceiling-recessed units distribute conditioned air exactly where you want it.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-extrabold text-lg mx-auto mb-4" style={{ backgroundColor: red }}>
                  {item.step}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-14 text-white text-center pb-24 lg:pb-16" style={{ backgroundColor: blue }}>
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <CheckCircle className="w-6 h-6 text-white/70" />
            <span className="text-white/70 text-sm font-semibold">Mitsubishi Diamond Contractor</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Ready for Ductless Comfort?</h2>
          <p className="text-white/70 mb-6 text-sm">Free estimates. Most installations completed in one day. Financing available.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-us" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-sm border-2 border-white text-white hover:bg-white transition-colors">
              Schedule Your Estimate
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
