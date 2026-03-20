import { motion } from 'motion/react';
import { Phone, Calendar, CheckCircle, Star, Snowflake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteConfig } from '../config/SiteConfigContext';

const HERO_IMG = 'https://www.centralairllc.com/app/uploads/2022/12/46467146-ac-808x606-1.jpeg';
const SECONDARY_IMG = 'https://www.centralairllc.com/app/uploads/2022/12/ACNotBlowing.png';

const SYMPTOMS = [
  'AC blowing warm or room-temperature air',
  'Weak airflow from vents',
  'Frequent on/off cycling',
  'Ice forming on the unit',
  'Water pooling around the indoor unit',
  'Unusual sounds: grinding, rattling, or hissing',
  'Energy bills higher than normal',
  'Humidity feels high indoors even with AC running',
];

const SERVICES_LIST = [
  {
    title: 'AC Repair',
    desc: 'Accurate diagnosis of any central air conditioning problem. Our NATE-certified techs service all brands — Lennox, Carrier, Trane, Bryant, Rheem, and more.',
  },
  {
    title: 'AC Maintenance',
    desc: 'Annual tune-up to clean coils, check refrigerant levels, inspect electrical connections, and ensure your system is ready for summer. Extends life and lowers bills.',
  },
  {
    title: 'AC Installation',
    desc: 'As a Lennox Premier Dealer, we install the most efficient central air systems available. We size your system correctly so you stay comfortable — not just cold.',
  },
  {
    title: 'Ductwork Inspection',
    desc: 'Leaky or blocked ducts can reduce your system efficiency by up to 30%. We inspect and seal ductwork as part of our comprehensive AC service.',
  },
];

export default function CoolingPage() {
  const { phone, phoneFormatted, colors } = useSiteConfig();
  const red = colors.primaryHex;
  const blue = colors.dark;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-72 sm:h-96" aria-label="AC Repair hero">
        <img
          src={HERO_IMG}
          alt="Central Air LLC air conditioning repair technician in Brookfield CT"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-3">Cooling Services</p>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-3">
              The Community's Choice for<br />AC Repair in Brookfield, CT
            </h1>
            <p className="text-white/80 text-base max-w-md">
              Expert diagnosis on the first visit. All brands serviced. Free estimates on new systems.
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
                Expert Cooling Service
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-5">
                We Know It's a Bother to Go Without Air Conditioning
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                That's why our certified repair technicians will have your house feeling relaxing again in no time. We recognize the symptoms of a failing AC system — and we fix them right the first time.
              </p>
              <p className="text-slate-600 leading-relaxed mb-5">
                Central Air LLC has been the go-to air conditioning contractor in Fairfield County since 2003. As a Lennox Premier Dealer, we can install the latest high-SEER systems that cut cooling costs by up to 50%.
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
                alt="AC not blowing cold — signs your air conditioner needs repair"
                className="w-full rounded-2xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="py-10 sm:py-16 bg-slate-50" aria-labelledby="ac-symptoms-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="ac-symptoms-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center mb-10">
            8 Signs Your AC Needs Repair
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {SYMPTOMS.map((s) => (
              <div key={s} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-slate-200">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: red }} aria-hidden="true" />
                <p className="text-sm text-slate-700">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-10 sm:py-16 bg-white" aria-labelledby="cooling-svcs-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="cooling-svcs-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center mb-10">
            Our Cooling Services
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

      {/* Efficiency note */}
      <section className="py-10 sm:py-14 bg-slate-50 border-y border-slate-200" aria-labelledby="efficiency-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Snowflake className="w-10 h-10 mx-auto mb-4" style={{ color: red }} />
          <h2 id="efficiency-heading" className="text-2xl font-extrabold text-slate-900 mb-3">
            Could Your Old AC Be Costing You 50% More?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm leading-relaxed">
            Systems older than 10–12 years often run at a fraction of their rated efficiency. A new high-SEER Lennox® system can reduce your summer cooling costs by up to 50% compared to equipment from the early 2000s. We offer free estimates on new system installations and can help you take advantage of available rebates and 0% financing.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
            {['Free estimates', 'Lennox Premier Dealer', 'Up to $1,800 rebate', '0% financing available'].map(t => (
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
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">No AC? We Can Help Today.</h2>
          <p className="text-white/70 mb-6 text-sm">Call now or request service online. Free estimates on all new system installations.</p>
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
