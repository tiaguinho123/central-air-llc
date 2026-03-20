import { motion } from 'motion/react';
import { Phone, Calendar, CheckCircle, Wind, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteConfig } from '../config/SiteConfigContext';

const HERO_IMG = 'https://www.centralairllc.com/app/uploads/2022/11/19-LNX-0617_D_6624-808x606-1.jpeg';
const SECONDARY_IMG = 'https://www.centralairllc.com/app/uploads/2022/11/HealthProbs.png';

const SOLUTIONS = [
  { title: 'Air Audits', desc: 'A comprehensive inspection of your home\'s air quality — measuring pollutants, humidity, CO2 levels, and ventilation to identify problem areas.' },
  { title: 'HEPA Filtration', desc: 'Whole-home HEPA media filters capture 99.97% of particles including dust mites, pet dander, pollen, mold spores, and bacteria.' },
  { title: 'UV Germicidal Lights', desc: 'UV lights installed in your air handler kill bacteria, viruses, and mold before they circulate through your home.' },
  { title: 'Humidity Control', desc: 'Whole-home humidifiers and dehumidifiers maintain the optimal 30-50% humidity range — protecting health, furniture, and your home\'s structure.' },
  { title: 'ERV Ventilation Systems', desc: 'Energy Recovery Ventilators bring in fresh outdoor air while recovering heat energy — improving air quality without increasing bills.' },
  { title: 'Duct Cleaning & Sealing', desc: 'Leaky or dirty ducts can spread allergens and reduce efficiency by up to 30%. We clean, seal and improve your duct system for better air quality and performance.' },
];

const SYMPTOMS = [
  'Frequent sneezing, coughing, or allergic reactions indoors',
  'Musty or stale odors throughout the home',
  'Visible mold in bathrooms, basement, or around vents',
  'Excessive dust buildup on furniture and surfaces',
  'Dry skin, static electricity, or nose bleeds (low humidity)',
  'Condensation on windows (high humidity)',
  'Family members with asthma or respiratory conditions',
];

export default function IndoorAirQualityPage() {
  const { phone, phoneFormatted, colors } = useSiteConfig();
  const red = colors.primaryHex;
  const blue = colors.dark;

  return (
    <div className="pt-20">
      <section className="relative h-72 sm:h-96" aria-label="Indoor Air Quality hero">
        <img
          src={HERO_IMG}
          alt="Indoor air quality improvement — Central Air LLC Brookfield CT"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-3">Indoor Air Quality</p>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-3">
              Enhance Your Home's Indoor<br />Air Quality in Brookfield, CT
            </h1>
            <p className="text-white/80 text-base max-w-md">
              Air audits, HEPA filtration, UV germicidal lights, and humidity control for a healthier home.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: red }}>Breathe Easier</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-5">
                The Air Inside Your Home Can Be More Polluted Than Outside
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                According to the EPA, indoor air can be 2-5x more polluted than outdoor air. Modern homes are tightly sealed for energy efficiency — which means pollutants, allergens, and moisture have nowhere to go. Central Air LLC provides comprehensive indoor air quality solutions to give you clean, comfortable air year-round.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                From HEPA filtration and UV germicidal lights to whole-home humidifiers and ERV ventilation — we improve your air quality while working with your existing HVAC system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact-us" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-bold text-sm" style={{ backgroundColor: red }}>
                  <Calendar className="w-4 h-4" /> Request an Air Audit
                </Link>
                <a href={`tel:${phone}`} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-sm border-2" style={{ borderColor: red, color: red }}>
                  <Phone className="w-4 h-4" /> {phoneFormatted}
                </a>
              </div>
            </div>
            <div>
              <img src={SECONDARY_IMG} alt="Health problems caused by poor indoor air quality" className="w-full rounded-2xl shadow-lg" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="py-10 sm:py-14 bg-slate-50 border-y border-slate-200" aria-labelledby="iaq-symptoms-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="iaq-symptoms-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center mb-8">
            Signs Your Air Quality Needs Attention
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {SYMPTOMS.map((s) => (
              <div key={s} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-slate-200">
                <Wind className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: red }} aria-hidden="true" />
                <p className="text-sm text-slate-700">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-10 sm:py-16 bg-white" aria-labelledby="iaq-solutions-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="iaq-solutions-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center mb-10">Our IAQ Solutions</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SOLUTIONS.map((s) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200"
              >
                <h3 className="font-bold mb-2" style={{ color: red }}>{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-14 text-white text-center pb-24 lg:pb-16" style={{ backgroundColor: blue }}>
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Ready to Breathe Easier?</h2>
          <p className="text-white/70 mb-6 text-sm">Start with a free air quality consultation. We'll identify the problems and give you options.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-us" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-sm bg-white transition-colors" style={{ color: red }}>Schedule Air Audit</Link>
            <a href={`tel:${phone}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-sm text-white border-2 border-white/40 hover:border-white transition-colors">
              <Phone className="w-4 h-4" /> {phoneFormatted}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
