import { motion } from 'motion/react';
import { Phone, Calendar, CheckCircle, Zap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteConfig } from '../config/SiteConfigContext';

const HERO_IMG = 'https://www.centralairllc.com/app/uploads/2025/02/Living-Area-Male-Female-Dealer-MiniSplit-808x606-1.jpg';
const SECONDARY_IMG = 'https://www.centralairllc.com/app/uploads/2025/02/Outside-MiniSplit-DealerMaleHomeOwner-670x500-1.jpg';

const BENEFITS = [
  { title: 'No Ductwork Required', desc: 'Perfect for home additions, garages, finished basements, and older homes without existing duct systems.' },
  { title: 'Zoned Comfort', desc: 'Each room gets its own temperature control — no more fighting over the thermostat.' },
  { title: 'Ultra-Quiet Operation', desc: 'Mitsubishi mini-splits are among the quietest HVAC systems available. You will barely know it is running.' },
  { title: 'High Efficiency', desc: 'No energy lost in ductwork. All heating or cooling goes directly where you need it — maximizing every dollar spent.' },
  { title: 'Fast Installation', desc: 'Most single-zone systems are fully installed in one day with minimal disruption to your home or walls.' },
  { title: 'Mitsubishi Diamond Authorized', desc: 'We are factory-trained and authorized to install the full Mitsubishi Electric ductless lineup — with full manufacturer warranty.' },
];

export default function MiniSplitsPage() {
  const { phone, phoneFormatted, colors } = useSiteConfig();
  const red = colors.primaryHex;
  const blue = colors.dark;

  return (
    <div className="pt-20">
      <section className="relative h-72 sm:h-96" aria-label="Mini-Split Systems hero">
        <img
          src={HERO_IMG}
          alt="Mitsubishi mini-split installation in living area — Central Air LLC Brookfield CT"
          className="w-full h-full object-cover object-top"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-3">Ductless Mini-Splits</p>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-3">
              Brookfield, CT Mini-Split<br />Installation to Upgrade Your Comfort
            </h1>
            <p className="text-white/80 text-base max-w-md">
              Precise control. Ultra-quiet. Energy efficient. Mitsubishi Diamond Contractor.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: red }}>Ductless Comfort</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-5">
                Comfort Without Compromising Your Walls
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Ductless mini-split systems are one of the most versatile heating and cooling solutions available. Whether you're adding a room, finishing a basement, converting a garage, or just want to eliminate hot and cold spots in your home — mini-splits deliver precise, whisper-quiet comfort.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                As a Mitsubishi Diamond Contractor, Central Air LLC is factory-authorized to install and service the complete Mitsubishi Electric ductless lineup — the quietest, most efficient mini-splits available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact-us" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-bold text-sm" style={{ backgroundColor: red }}>
                  <Calendar className="w-4 h-4" /> Free Mini-Split Estimate
                </Link>
                <a href={`tel:${phone}`} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-sm border-2" style={{ borderColor: red, color: red }}>
                  <Phone className="w-4 h-4" /> {phoneFormatted}
                </a>
              </div>
            </div>
            <div>
              <img src={SECONDARY_IMG} alt="Mitsubishi mini-split outdoor unit with homeowner and technician" className="w-full rounded-2xl shadow-lg" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-slate-50" aria-labelledby="ms-benefits-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="ms-benefits-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center mb-10">Why Choose a Mini-Split?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map((b) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
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

      <section className="py-12 sm:py-14 text-white text-center pb-24 lg:pb-16" style={{ backgroundColor: blue }}>
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <CheckCircle className="w-6 h-6 text-white/70" />
            <span className="text-white/70 text-sm font-semibold">Mitsubishi Diamond Contractor</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Ready for Ductless Comfort?</h2>
          <p className="text-white/70 mb-6 text-sm">Free estimates. Most installations done in one day. Mitsubishi warranty with every install.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-us" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-sm bg-white transition-colors" style={{ color: red }}>Schedule Your Estimate</Link>
            <a href={`tel:${phone}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-sm text-white border-2 border-white/40 hover:border-white transition-colors">
              <Phone className="w-4 h-4" /> {phoneFormatted}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
