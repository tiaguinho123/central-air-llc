import { motion } from 'motion/react';
import { Phone, Calendar, CheckCircle, ArrowLeftRight, Zap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteConfig } from '../config/SiteConfigContext';

const HERO_IMG = 'https://www.centralairllc.com/app/uploads/2022/11/19-LNX-0617_D_7439-808x606-1.jpeg';
const SECONDARY_IMG = 'https://www.centralairllc.com/app/uploads/2022/11/IceOnHP.png';

const BENEFITS = [
  { icon: ArrowLeftRight, title: 'Heats AND Cools', desc: 'One system replaces both your furnace and AC. Heat pumps work year-round — moving heat in winter, removing it in summer.' },
  { icon: Zap, title: 'Up to 300% Efficiency', desc: 'Heat pumps move heat rather than generate it, making them up to 3x more efficient than electric resistance heating.' },
  { icon: CheckCircle, title: 'Lower Monthly Bills', desc: 'Replace costly gas or electric resistance heating with a heat pump and see a real reduction in your energy costs.' },
  { icon: Star, title: 'Mitsubishi Diamond', desc: 'As a Mitsubishi Diamond Contractor, we are factory-authorized to install and service the most efficient heat pumps available.' },
];

export default function HeatPumpsPage() {
  const { phone, phoneFormatted, colors } = useSiteConfig();
  const red = colors.primaryHex;
  const blue = colors.dark;

  return (
    <div className="pt-20">
      <section className="relative h-72 sm:h-96" aria-label="Heat Pump Repair hero">
        <img
          src={HERO_IMG}
          alt="Heat pump installation and repair — Central Air LLC Brookfield CT"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-3">Heat Pump Services</p>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-3">
              Heat Pump Repair in<br />Brookfield, Connecticut
            </h1>
            <p className="text-white/80 text-base max-w-md">
              Year-round comfort from a single efficient system. Mitsubishi Diamond Contractor.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: red }}>Year-Round Comfort</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-5">
                One System. Heating and Cooling All Year.
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Heat pumps are highly efficient year-round climate systems that heat in winter and cool in summer. Modern cold-climate heat pumps work effectively even in Connecticut winters. As a Mitsubishi Diamond Contractor and Lennox Premier Dealer, Central Air LLC has the factory training and access to install and service the industry's best heat pump systems.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                We service all brands and can repair any heat pump system — from a simple refrigerant recharge to a full compressor replacement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact-us" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-bold text-sm" style={{ backgroundColor: red }}>
                  <Calendar className="w-4 h-4" /> Free Estimate
                </Link>
                <a href={`tel:${phone}`} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-sm border-2" style={{ borderColor: red, color: red }}>
                  <Phone className="w-4 h-4" /> {phoneFormatted}
                </a>
              </div>
            </div>
            <div>
              <img src={SECONDARY_IMG} alt="Ice forming on heat pump — sign of a problem" className="w-full rounded-2xl shadow-lg" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-slate-50" aria-labelledby="hp-benefits-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="hp-benefits-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center mb-10">Why Choose a Heat Pump?</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {BENEFITS.map((b) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex gap-5"
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

      <section className="py-12 sm:py-14 text-white text-center pb-24 lg:pb-16" style={{ backgroundColor: blue }}>
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Interested in a Heat Pump?</h2>
          <p className="text-white/70 mb-6 text-sm">Free estimates. Rebates and 0% financing available on Lennox systems.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-us" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-sm bg-white transition-colors" style={{ color: red }}>
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
