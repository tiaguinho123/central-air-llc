import { motion } from 'motion/react';
import { Phone, Award, ShieldCheck, Star, Clock, Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteConfig } from '../config/SiteConfigContext';

const TRUCK_IMAGE = 'https://www.centralairllc.com/app/uploads/sites/51/2026/03/Central-Air-truck.png';
const LENNOX_BADGE = 'https://www.centralairllc.com/app/uploads/sites/51/2022/10/Milestone-Award-5-1.jpg';

const CERTIFICATIONS = [
  { icon: Award, title: 'NATE & ICE Certified', sub: 'Industry\'s Highest Technical Standard' },
  { icon: Star, title: 'Lennox Premier Dealer', sub: '5+ Years Lennox Excellence Award' },
  { icon: ShieldCheck, title: 'Mitsubishi Diamond', sub: 'Elite Ductless Contractor' },
  { icon: CheckCircle, title: 'BBB Accredited', sub: 'A+ Rating — Since 2003' },
  { icon: Users, title: 'ACCA Member', sub: 'Air Conditioning Contractors of America' },
  { icon: Clock, title: '20+ Years Serving', sub: 'Fairfield County & Westchester, NY' },
];

const TIMELINE = [
  { year: '2003', text: 'Central Air, LLC. founded in Brookfield, CT' },
  { year: '2010', text: 'Became a certified Mitsubishi Diamond Contractor' },
  { year: '2015', text: 'Achieved Lennox Premier Dealer status' },
  { year: '2020', text: 'Lennox Length of Dealership Award — 5 Years' },
  { year: '2023', text: '4.9★ Google rating across 194+ customer reviews' },
];

export default function AboutPage() {
  const { phone, phoneFormatted, colors } = useSiteConfig();
  const red = colors.primaryHex;
  const blue = colors.dark;

  return (
    <div className="pt-20">

      {/* ─── Page Header ─── */}
      <section
        className="py-16 sm:py-20 text-white text-center"
        style={{ background: `linear-gradient(135deg, ${blue} 0%, #1a3a70 100%)` }}
        aria-label="About Us page header"
      >
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold tracking-widest uppercase text-white/60 mb-3">Est. 2003</p>
            <h1 className="text-3xl sm:text-5xl font-extrabold mb-4">About Central Air, LLC.</h1>
            <p className="text-lg text-white/80 max-w-xl mx-auto">
              Brookfield's trusted, locally owned HVAC company — serving Fairfield County and Westchester with integrity since 2003.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Our Story ─── */}
      <section className="py-10 sm:py-16 bg-white" aria-labelledby="story-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: red }}>
                Our Story
              </p>
              <h2 id="story-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-5">
                Service With Quality — That's Our Promise
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                At Central Air LLC, heating and cooling isn't solely our job — it's our passion. Founded in 2003 and based in Brookfield, CT, we have built our reputation on honest pricing, expert craftsmanship, and genuine care for every customer we serve.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                We strive to provide you with the top HVAC service in Fairfield County. No matter the time, day, or the problem, you can rely on us to get the job done correctly.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Our team of NATE and ICE certified technicians — including Rich, Kristopher, and Ian — bring factory-trained expertise to every job, residential or light commercial. We're proud to be a Lennox Premier Dealer and a Mitsubishi Diamond Contractor, ensuring you get the best equipment backed by the best service.
              </p>
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-bold text-sm transition-colors shadow"
                style={{ backgroundColor: red }}
              >
                <Phone className="w-4 h-4" />
                Call {phoneFormatted}
              </a>
            </div>
            <div className="space-y-4">
              <img
                src={TRUCK_IMAGE}
                alt="Central Air LLC branded service truck in Brookfield, CT"
                className="w-full rounded-2xl shadow-lg object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <div className="text-2xl font-extrabold" style={{ color: red }}>20+</div>
                  <div className="text-xs text-slate-500 font-medium">Years Serving</div>
                </div>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <div className="text-2xl font-extrabold" style={{ color: red }}>4.9★</div>
                  <div className="text-xs text-slate-500 font-medium">Google Rating</div>
                </div>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <div className="text-2xl font-extrabold" style={{ color: red }}>194+</div>
                  <div className="text-xs text-slate-500 font-medium">Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Certifications ─── */}
      <section className="py-10 sm:py-16 bg-slate-50" aria-labelledby="cert-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: red }}>
              Why Choose Us
            </p>
            <h2 id="cert-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Certified, Awarded & Trusted
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CERTIFICATIONS.map((cert) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${red}15` }}
                >
                  <cert.icon className="w-6 h-6" style={{ color: red }} aria-hidden="true" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{cert.title}</h3>
                <p className="text-sm text-slate-500">{cert.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Lennox Award ─── */}
      <section className="py-10 sm:py-16 bg-white border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img
              src={LENNOX_BADGE}
              alt="Lennox Length of Dealership Award — Central Air LLC — Celebrating 5 Years with Lennox"
              className="w-full max-w-sm mx-auto rounded-2xl shadow-lg bg-slate-50 p-6 object-contain"
              loading="lazy"
              decoding="async"
            />
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: red }}>
                Lennox Premier Dealer
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                Length of Dealership Award
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We're proud to be the recipient of the Lennox Industries Length of Dealership Award, which honors Lennox dealers who have demonstrated long-term commitment to the Lennox brand, as well as to strengthening the value of their own, whose success, growth, and endurance are a testament to the drive to serve their community.
              </p>
              <p className="text-slate-600 leading-relaxed">
                As Lennox brand ambassadors, we give meaning and dimension to the Lennox brand promise — and we thank our customers for the support that has made this award possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Timeline ─── */}
      <section className="py-10 sm:py-16 bg-slate-50" aria-labelledby="timeline-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 id="timeline-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Our Journey
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200" aria-hidden="true" />
            <div className="space-y-6">
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex gap-6 items-start pl-20"
                >
                  <div
                    className="absolute left-0 w-16 h-16 rounded-full flex items-center justify-center text-white font-extrabold text-sm shadow-md"
                    style={{ backgroundColor: red }}
                  >
                    {item.year}
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm flex-1">
                    <p className="text-slate-700 font-medium text-sm">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section
        className="py-12 sm:py-16 text-white text-center pb-24 lg:pb-16"
        style={{ backgroundColor: blue }}
        aria-label="Contact CTA"
      >
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Ready to Experience the Difference?
          </h2>
          <p className="text-white/70 mb-6 text-sm">
            Call us Mon–Fri 8am–4:30pm or request service online. Free estimates on new installations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-sm text-white border-2 border-white hover:bg-white transition-colors"
              style={{ ['--tw-text-opacity' as string]: '1' }}
            >
              Request Service
            </Link>
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-sm text-white border-2 border-white/40 hover:border-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              {phoneFormatted}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
