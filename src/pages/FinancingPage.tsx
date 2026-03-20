import { motion } from 'motion/react';
import { Phone, DollarSign, CreditCard, CheckCircle, Zap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteConfig } from '../config/SiteConfigContext';

const LENNOX_LOGO = 'https://www.centralairllc.com/app/uploads/sites/51/2023/03/LennoxLengthOfDealershipAward.png';

const BENEFITS = [
  { icon: DollarSign, text: 'Up to $1,800 in Lennox® Rebates on qualifying systems' },
  { icon: CreditCard, text: 'No payments, no interest for 12 months on qualifying Lennox® equipment' },
  { icon: CheckCircle, text: 'Flexible monthly payment options through Synchrony Financial' },
  { icon: Zap, text: 'High-efficiency systems may qualify for federal tax credits' },
  { icon: ShieldCheck, text: 'Industry-leading manufacturer warranties included' },
  { icon: CheckCircle, text: 'Free estimates on new system installations' },
];

export default function FinancingPage() {
  const { phone, phoneFormatted, colors } = useSiteConfig();
  const red = colors.primaryHex;
  const blue = colors.dark;

  return (
    <div className="pt-20">
      {/* ─── Header ─── */}
      <section
        className="py-16 sm:py-20 text-white text-center"
        style={{ background: `linear-gradient(135deg, ${blue} 0%, #1a3a70 100%)` }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-bold tracking-widest uppercase text-white/60 mb-3">Zero Stress</p>
            <h1 className="text-3xl sm:text-5xl font-extrabold mb-4">Financing Options</h1>
            <p className="text-lg text-white/80 max-w-xl mx-auto">
              Don't let upfront cost stop your family's comfort. We offer flexible financing to make new HVAC systems affordable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Featured Offer ─── */}
      <section className="py-10 sm:py-16 bg-white" aria-labelledby="offer-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: red }}>
                Current Promotion
              </p>
              <h2 id="offer-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-5">
                Receive up to $1,800 in Rebates
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                When you purchase the <strong>Lennox® Ultimate Comfort System™</strong>, qualified buyers can receive up to $1,800 in rebates paid in the form of a Lennox Prepaid Mastercard®.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                <strong>OR</strong> — qualified buyers make no payments and incur no interest for 12 months when financing a new Lennox® system through our financing partner.
              </p>
              <div className="space-y-3 mb-8">
                {BENEFITS.map((b) => (
                  <div key={b.text} className="flex items-start gap-3">
                    <b.icon className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: red }} aria-hidden="true" />
                    <span className="text-sm text-slate-700">{b.text}</span>
                  </div>
                ))}
              </div>
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-bold text-sm transition-colors shadow"
                style={{ backgroundColor: red }}
              >
                <Phone className="w-4 h-4" />
                Call {phoneFormatted} to Learn More
              </a>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <img
                src={LENNOX_LOGO}
                alt="Lennox Premier Dealer — Central Air LLC"
                className="w-full object-contain mb-6"
                loading="lazy"
              />
              <div
                className="rounded-xl p-5 text-white text-center"
                style={{ backgroundColor: red }}
              >
                <div className="text-3xl font-extrabold mb-1">$1,800</div>
                <div className="text-sm font-semibold opacity-90">Maximum Lennox® Rebate</div>
              </div>
              <p className="text-xs text-slate-400 mt-4 text-center">
                *Rebate paid as Lennox Prepaid Mastercard®. Terms and conditions apply. Contact us for details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── How Financing Works ─── */}
      <section className="py-10 sm:py-16 bg-slate-50" aria-labelledby="how-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 id="how-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              How Financing Works
            </h2>
            <p className="text-slate-500 mt-2 text-sm">Simple process, fast approval.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Call or Request a Quote', body: 'Contact us to schedule a free estimate. We\'ll assess your home and recommend the right system.' },
              { step: '02', title: 'Choose Your System', body: 'Select from our Lennox lineup or other top brands. We\'ll explain all financing options upfront with no surprises.' },
              { step: '03', title: 'Get Approved & Installed', body: 'Fast financing approval. We schedule your installation and handle everything — start to finish.' },
            ].map((item) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm text-center"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-extrabold text-lg mx-auto mb-4"
                  style={{ backgroundColor: red }}
                >
                  {item.step}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Tax Credit Note ─── */}
      <section className="py-10 sm:py-14 bg-white border-y border-slate-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
            style={{ backgroundColor: `${red}15` }}
            aria-hidden="true"
          >
            <DollarSign className="w-7 h-7" style={{ color: red }} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">Federal Tax Credits</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            High-efficiency HVAC equipment may qualify for significant federal tax credits. When you upgrade to a qualifying Lennox® or Mitsubishi system through Central Air LLC, you could save even more on top of existing rebates.
          </p>
          <p className="text-sm text-slate-500">
            Ask your tax professional for details. We're happy to provide documentation for your qualifying installation.
          </p>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        className="py-12 sm:py-16 text-white text-center pb-24 lg:pb-16"
        style={{ backgroundColor: blue }}
      >
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Get Your Free Estimate Today</h2>
          <p className="text-white/70 mb-6 text-sm">
            Speak with one of our comfort consultants about the best system and financing option for your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-sm border-2 border-white text-white hover:bg-white transition-colors"
            >
              Request Free Estimate
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
