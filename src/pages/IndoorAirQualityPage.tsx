import { motion } from 'motion/react';
import { Phone, Wind, CheckCircle, Calendar, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteConfig } from '../config/SiteConfigContext';

const HERO_IMG = 'https://images.unsplash.com/photo-1586105449897-20b5efeb3233?q=80&w=1200&auto=format&fit=crop';

const IAQ_SOLUTIONS = [
  {
    title: 'HEPA Filtration',
    desc: 'Hospital-grade HEPA filtration removes airborne particles as small as 0.3 microns — including dust, mold spores, pet dander, and pollen.',
  },
  {
    title: 'Germicidal UV Lights',
    desc: 'UV-C light systems installed in your ductwork neutralize bacteria, viruses, and mold before they can circulate through your home.',
  },
  {
    title: 'Humidity Control',
    desc: 'The ideal indoor humidity is 30–50%. We install whole-home humidifiers and dehumidifiers to keep your air comfortable and protect your home.',
  },
  {
    title: 'Ventilation Systems',
    desc: 'Bring fresh outdoor air in while pushing stale air out — without wasting energy. Energy Recovery Ventilators (ERVs) maintain air quality year-round.',
  },
  {
    title: 'Duct Cleaning & Sealing',
    desc: 'Dirty or leaking ducts spread allergens and waste energy. We offer professional duct cleaning and Aeroseal duct sealing for measurable improvement.',
  },
  {
    title: 'Air Quality Audit',
    desc: 'Not sure where to start? We perform a full indoor air quality assessment and recommend the right solutions for your home and family.',
  },
];

const SYMPTOMS = [
  'Frequent sneezing, coughing, or allergy-like symptoms at home',
  'Musty or stale odors throughout the house',
  'Visible mold or excess moisture on walls and windows',
  'Excessive dust buildup despite regular cleaning',
  'Family members with asthma, respiratory issues, or allergies',
  'Dry skin, static electricity, or cracked wood furniture in winter',
];

export default function IndoorAirQualityPage() {
  const { phone, phoneFormatted, colors } = useSiteConfig();
  const red = colors.primaryHex;
  const blue = colors.dark;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-64 sm:h-80" aria-label="Indoor Air Quality hero">
        <img src={HERO_IMG} alt="Clean indoor air quality" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-3">
              <Wind className="w-6 h-6 text-blue-300" />
              <span className="text-sm font-bold text-white/70 uppercase tracking-wider">HVAC Services</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white">Indoor Air Quality</h1>
            <p className="text-white/80 mt-2 text-base">Filtration · UV · Humidity Control · Duct Sealing</p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: red }}>Breathe Better</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-5">
            Your Home Should Be Your Healthiest Place
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Did you know that indoor air can be 2–5x more polluted than outdoor air? Between pet dander, dust mites, mold spores, volatile organic compounds (VOCs), and seasonal allergens, what you're breathing at home matters more than most people realize.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            At Central Air LLC, we start with a thorough indoor air quality audit to understand your home's specific needs. Then we recommend and install the right combination of filtration, UV purification, humidity control, and ventilation solutions to create genuinely healthier air for your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact-us" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-bold text-sm" style={{ backgroundColor: red }}>
              <Calendar className="w-4 h-4" /> Schedule an Air Quality Audit
            </Link>
            <a href={`tel:${phone}`} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-sm border-2" style={{ borderColor: red, color: red }}>
              <Phone className="w-4 h-4" /> {phoneFormatted}
            </a>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-10 sm:py-14 bg-slate-50" aria-labelledby="symptoms-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 id="symptoms-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Signs Your Indoor Air Quality Needs Attention
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {SYMPTOMS.map((s) => (
              <div key={s} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: red }} />
                <p className="text-sm text-slate-700 leading-relaxed">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-10 sm:py-16 bg-white" aria-labelledby="iaq-solutions-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 id="iaq-solutions-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Our IAQ Solutions
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {IAQ_SOLUTIONS.map((s) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${red}15` }}>
                  <Zap className="w-5 h-5" style={{ color: red }} aria-hidden="true" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Humidity Info */}
      <section className="py-10 sm:py-14 bg-slate-50 border-y border-slate-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="text-5xl font-extrabold mb-2" style={{ color: red }}>30–50%</div>
          <p className="text-slate-700 font-semibold text-lg mb-3">Ideal Indoor Humidity</p>
          <p className="text-slate-500 text-sm leading-relaxed">
            Too dry and you'll experience respiratory discomfort, static electricity, and cracked wood surfaces. Too humid and you risk mold growth, dust mite proliferation, and structural damage. Central Air LLC installs whole-home humidifiers and dehumidifiers that maintain the ideal balance automatically.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-14 text-white text-center pb-24 lg:pb-16" style={{ backgroundColor: blue }}>
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Ready to Breathe Cleaner Air?</h2>
          <p className="text-white/70 mb-6 text-sm">Start with a free consultation. We'll assess your home and recommend the right IAQ solution.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-us" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-sm border-2 border-white text-white hover:bg-white transition-colors">
              Schedule Air Quality Audit
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
