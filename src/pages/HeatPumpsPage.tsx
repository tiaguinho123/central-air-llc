import { motion } from 'motion/react';
import { Phone, Thermometer, CheckCircle, Calendar, ArrowLeftRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteConfig } from '../config/SiteConfigContext';

const HERO_IMG = 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop';

const BENEFITS = [
  { icon: ArrowLeftRight, title: 'Year-Round Comfort', desc: 'One system that heats in winter and cools in summer. No need for separate heating and cooling equipment.' },
  { icon: Zap, title: 'High Efficiency', desc: 'Heat pumps move heat rather than generate it, making them up to 300% more efficient than traditional heating methods.' },
  { icon: CheckCircle, title: 'Lower Operating Costs', desc: 'By replacing your old gas furnace or electric resistance heat with a heat pump, you can significantly reduce your monthly energy bill.' },
  { icon: Thermometer, title: 'More Comfortable', desc: 'Heat pumps deliver consistent, even heat — no cold spots, no blasts of hot air. Just steady, comfortable temperatures.' },
];

const SERVICES = [
  { title: 'Heat Pump Installation', desc: 'We help you choose the right heat pump system for your home and climate, then install it to manufacturer specifications with NATE-certified technicians.' },
  { title: 'Heat Pump Repair', desc: 'Fast, accurate diagnosis and repair of any heat pump system. We service all major makes and models — Lennox, Mitsubishi, Carrier, Trane, and more.' },
  { title: 'Heat Pump Maintenance', desc: 'Seasonal tune-ups keep your heat pump running at peak efficiency year-round. We recommend twice-yearly service for optimal performance.' },
  { title: 'Mitsubishi Diamond Service', desc: 'As a Mitsubishi Diamond Contractor, we\'re factory-trained to install, service, and repair Mitsubishi Electric heat pump systems.' },
];

export default function HeatPumpsPage() {
  const { phone, phoneFormatted, colors } = useSiteConfig();
  const red = colors.primaryHex;
  const blue = colors.dark;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-64 sm:h-80" aria-label="Heat Pumps hero">
        <img src={HERO_IMG} alt="Heat pump system outdoor unit" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-3">
              <Thermometer className="w-6 h-6" style={{ color: '#34d399' }} />
              <span className="text-sm font-bold text-white/70 uppercase tracking-wider">HVAC Services</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white">Heat Pumps</h1>
            <p className="text-white/80 mt-2 text-base">Year-Round Heating & Cooling — Installation, Repair & Maintenance</p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: red }}>Efficient Year-Round Comfort</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-5">
            One System. Heat & Cool Your Home All Year.
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            A heat pump is a highly efficient year-round climate system that works by moving heat — rather than generating it. In winter, it extracts heat from the outdoor air and transfers it inside. In summer, it reverses the process, removing heat from inside and releasing it outdoors, just like a traditional air conditioner.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            As a Mitsubishi Diamond Contractor and Lennox Premier Dealer, Central Air LLC has the factory training and equipment access to recommend and install the right heat pump system for your Connecticut home. We service all major brands and can help you take advantage of current rebate and financing offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact-us" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-bold text-sm" style={{ backgroundColor: red }}>
              <Calendar className="w-4 h-4" /> Get a Free Estimate
            </Link>
            <a href={`tel:${phone}`} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-sm border-2" style={{ borderColor: red, color: red }}>
              <Phone className="w-4 h-4" /> {phoneFormatted}
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-10 sm:py-16 bg-slate-50" aria-labelledby="hp-benefits-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="hp-benefits-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center mb-10">
            Why Homeowners Choose Heat Pumps
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {BENEFITS.map((b) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex gap-5"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${red}15` }}>
                  <b.icon className="w-6 h-6" style={{ color: red }} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{b.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-10 sm:py-16 bg-white" aria-labelledby="hp-svcs-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="hp-svcs-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center mb-10">
            Our Heat Pump Services
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {SERVICES.map((s) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm"
              >
                <h3 className="font-bold text-slate-900 mb-2" style={{ color: red }}>{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-14 text-white text-center pb-24 lg:pb-16" style={{ backgroundColor: blue }}>
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Interested in a Heat Pump?</h2>
          <p className="text-white/70 mb-6 text-sm">Free estimates on new heat pump installations. Rebates & financing available.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-us" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-sm border-2 border-white text-white hover:bg-white transition-colors">
              Request Free Estimate
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
