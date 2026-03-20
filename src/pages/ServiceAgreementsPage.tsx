import { motion } from 'motion/react';
import { Phone, Calendar, CheckCircle, ClipboardList, Clock, Shield, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteConfig } from '../config/SiteConfigContext';

const HERO_IMG = 'https://www.centralairllc.com/app/uploads/2022/11/19-LNX-0617_D_1594-svc-agrmnt-808x606-1.jpeg';
const SECONDARY_IMG = 'https://www.centralairllc.com/app/uploads/2022/11/19LNX_0026_D_9704-670x500-1.jpeg';

const WHATS_INCLUDED = [
  'Full diagnostic inspection of heating and cooling systems',
  'Cleaning of indoor and outdoor units',
  'Lubrication of all moving parts',
  'Filter inspection and replacement recommendations',
  'Refrigerant level check and leak detection',
  'Electrical connections and contacts inspection',
  'Thermostat calibration and system controls check',
  'Condensate drain inspection and cleaning',
  'Carbon monoxide and safety controls test',
  'Priority scheduling — members always go first',
];

const PLAN_BENEFITS = [
  { icon: Shield, title: 'Prevent 90% of Breakdowns', desc: 'The large majority of HVAC failures are preventable with regular maintenance. Our agreement catches small issues before they become expensive emergencies.' },
  { icon: Clock, title: 'Priority Service', desc: 'Agreement holders go to the front of the line. When your system needs attention, you won\'t wait behind non-members.' },
  { icon: Star, title: '15% Discount on Repairs', desc: 'Members receive a 15% discount on any repair service needed beyond the tune-up — saving money whenever something comes up.' },
  { icon: ClipboardList, title: 'Monthly Payment Option', desc: 'Rather than paying for a full year upfront, our service agreements can be paid monthly — making preventive care easy and affordable.' },
];

export default function ServiceAgreementsPage() {
  const { phone, phoneFormatted, colors } = useSiteConfig();
  const red = colors.primaryHex;
  const blue = colors.dark;

  return (
    <div className="pt-20">
      <section className="relative h-72 sm:h-96" aria-label="Service Agreements hero">
        <img
          src={HERO_IMG}
          alt="HVAC maintenance technician — Central Air LLC service agreement Brookfield CT"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-3">Maintenance Plans</p>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-3">
              Our HVAC Service Agreements<br />Make Yearly Tune-Ups Easy
            </h1>
            <p className="text-white/80 text-base max-w-md">
              Priority scheduling · 15% repair discount · Monthly payment option · NATE-certified technicians.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: red }}>Enjoy Peace of Mind</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-5">
                Enjoy Peace of Mind with Our Annual Maintenance Program
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Your HVAC system is one of the biggest investments in your home. Like any major mechanical system, it requires regular care to run safely, efficiently, and reliably. Our maintenance agreement gives you scheduled professional service from NATE-certified technicians — plus priority scheduling and real savings on repairs.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The vast majority of HVAC breakdowns are preventable. An annual agreement with Central Air LLC is the most cost-effective way to protect your equipment, extend its life, and avoid the stress of unexpected failures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact-us" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-bold text-sm" style={{ backgroundColor: red }}>
                  <Calendar className="w-4 h-4" /> Enroll Today
                </Link>
                <a href={`tel:${phone}`} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-sm border-2" style={{ borderColor: red, color: red }}>
                  <Phone className="w-4 h-4" /> {phoneFormatted}
                </a>
              </div>
            </div>
            <div>
              <img src={SECONDARY_IMG} alt="HVAC technician performing maintenance service agreement" className="w-full rounded-2xl shadow-lg" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Plan Benefits */}
      <section className="py-10 sm:py-16 bg-slate-50" aria-labelledby="plan-benefits-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="plan-benefits-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center mb-10">Agreement Member Benefits</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {PLAN_BENEFITS.map((b) => (
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

      {/* What's Included */}
      <section className="py-10 sm:py-16 bg-white" aria-labelledby="included-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="included-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center mb-10">What's Included in Your Annual Tune-Up</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {WHATS_INCLUDED.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 border border-slate-200">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: red }} aria-hidden="true" />
                <p className="text-sm text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-14 text-white text-center pb-24 lg:pb-16" style={{ backgroundColor: blue }}>
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Sign Up for a Service Agreement</h2>
          <p className="text-white/70 mb-6 text-sm">Call us to enroll or ask about our service agreement at your next appointment. Monthly payment available.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-us" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-sm bg-white transition-colors" style={{ color: red }}>Enroll Online</Link>
            <a href={`tel:${phone}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-sm text-white border-2 border-white/40 hover:border-white transition-colors">
              <Phone className="w-4 h-4" /> {phoneFormatted}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
