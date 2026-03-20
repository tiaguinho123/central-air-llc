import { motion } from 'motion/react';
import { Phone, ClipboardList, CheckCircle, Calendar, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteConfig } from '../config/SiteConfigContext';

const WHAT_IS_INCLUDED = [
  'Full diagnostic inspection of heating and cooling systems',
  'Cleaning of indoor and outdoor units',
  'Lubrication of all moving parts',
  'Filter inspection and replacement recommendations',
  'Refrigerant level check and leak detection',
  'Electrical connections and contacts inspection',
  'Thermostat calibration and testing',
  'System safety controls and controls check',
  'Condensate drain inspection and cleaning',
  'Priority scheduling for members — always first in line',
];

const PLAN_BENEFITS = [
  { icon: Shield, title: 'Prevent Breakdowns', desc: '90% of HVAC system failures are preventable with regular maintenance. Service agreements catch small issues before they become expensive problems.' },
  { icon: Clock, title: 'Priority Service', desc: 'Agreement holders go to the front of the line. When you need us, we\'re there — you won\'t wait behind non-members.' },
  { icon: CheckCircle, title: 'Lower Energy Bills', desc: 'A well-maintained system runs at peak efficiency. Our members typically save on their energy bills compared to systems that haven\'t been serviced.' },
  { icon: ClipboardList, title: 'Extended Equipment Life', desc: 'Regular tune-ups can extend the life of your HVAC system by years. Protect your investment and delay the cost of replacement.' },
];

export default function ServiceAgreementsPage() {
  const { phone, phoneFormatted, colors } = useSiteConfig();
  const red = colors.primaryHex;
  const blue = colors.dark;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-64 sm:h-80 bg-slate-900 flex items-center" aria-label="Service Agreements hero">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop"
            alt="HVAC service technician"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <ClipboardList className="w-6 h-6" style={{ color: red }} />
            <span className="text-sm font-bold text-white/70 uppercase tracking-wider">HVAC Services</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">HVAC Service Agreements</h1>
          <p className="text-white/80 mt-2 text-base">Annual Maintenance Plans for Year-Round Peace of Mind</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: red }}>Protect Your Investment</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-5">
            Maintenance Today Prevents Emergencies Tomorrow
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Your heating and cooling system is one of the largest investments in your home. Like any major mechanical system, it requires regular maintenance to perform efficiently, reliably, and safely. Our HVAC Service Agreements give you scheduled preventive maintenance from NATE-certified technicians — along with priority scheduling and exclusive member benefits.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            Studies show that 90% of HVAC breakdowns are preventable with regular maintenance. An annual agreement with Central Air LLC is the most cost-effective way to protect your system, extend its life, and avoid the stress of unexpected failures.
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
      </section>

      {/* Plan Benefits */}
      <section className="py-10 sm:py-16 bg-slate-50" aria-labelledby="plan-benefits-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="plan-benefits-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center mb-10">
            Why Enroll in a Service Agreement?
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {PLAN_BENEFITS.map((b) => (
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

      {/* What's Included */}
      <section className="py-10 sm:py-16 bg-white" aria-labelledby="included-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 id="included-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              What's Included in Your Annual Tune-Up
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {WHAT_IS_INCLUDED.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 border border-slate-200">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: red }} />
                <p className="text-sm text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-14 text-white text-center pb-24 lg:pb-16" style={{ backgroundColor: blue }}>
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Sign Up for a Service Agreement</h2>
          <p className="text-white/70 mb-6 text-sm">Call us to enroll or ask about our service agreement during your next appointment.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-us" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-sm border-2 border-white text-white hover:bg-white transition-colors">
              Enroll Online
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
