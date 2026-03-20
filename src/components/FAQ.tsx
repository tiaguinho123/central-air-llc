import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useSiteConfig } from '../config/SiteConfigContext';

const FAQS = [
  {
    q: 'How quickly can you come out for a service call?',
    a: 'We respond as fast as possible for urgent calls. For routine service and maintenance, we typically schedule within 1–3 business days. We prioritize Service Agreement members and same-day calls based on availability.',
  },
  {
    q: 'Do you offer free estimates?',
    a: 'Yes — we provide free estimates on all new equipment installations and system replacements. Service and repair calls are subject to a diagnostic fee, which is waived if you proceed with the repair.',
  },
  {
    q: 'What brands do you service and install?',
    a: 'We service all major HVAC brands including Lennox, Mitsubishi, Carrier, Trane, Bryant, Rheem, and more. As a Lennox Premier Dealer and Mitsubishi Diamond Contractor, we specialize in these brands and offer the best available warranties.',
  },
  {
    q: 'What is a NATE-certified technician and why does it matter?',
    a: "NATE (North American Technician Excellence) is the HVAC industry's highest technical certification. NATE-certified technicians pass rigorous knowledge-based exams. All our technicians are NATE and ICE certified — meaning your system gets diagnosed correctly the first time, every time.",
  },
  {
    q: 'Do you offer financing for new systems?',
    a: 'Yes. We offer flexible financing through Synchrony Financial, with options including no payments and no interest for 12 months on qualifying Lennox equipment. We also have up to $1,800 in rebates available on select Lennox systems. Call us to learn what you qualify for.',
  },
  {
    q: 'How often should I have my HVAC system serviced?',
    a: 'We recommend at least once a year — ideally before each heating and cooling season (fall and spring). Regular maintenance extends equipment life, prevents 90% of breakdowns, and keeps your system running at peak efficiency.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve Brookfield, Danbury, Bethel, Newtown, Ridgefield, New Milford, New Fairfield, Monroe, Shelton, Oxford, Greenwich, Stamford, Darien, Westport, Wilton, New Canaan, Norwalk, Trumbull, and parts of Westchester County, NY including Bedford, Brewster, Chappaqua, and Pound Ridge.',
  },
  {
    q: 'Can you help with both heating AND cooling?',
    a: 'Absolutely. We are a full-service HVAC company specializing in heating (furnaces, boilers, heat pumps), cooling (central AC, ductless mini-splits), indoor air quality, and preventive maintenance — all under one roof.',
  },
];

export default function FAQ() {
  const { colors } = useSiteConfig();
  const red = colors.primaryHex;
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-10 sm:py-16 bg-white" aria-labelledby="faq-heading" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: red }}>
            Common Questions
          </p>
          <h2 id="faq-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Answers to Questions We Hear Every Day
          </h2>
          <p className="text-slate-500 mt-3 text-sm max-w-lg mx-auto">
            Not sure about something? Call us at (203) 403-6174 — we are happy to answer any questions before you book.
          </p>
        </div>

        <div className="space-y-2" role="list">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="border border-slate-200 rounded-xl overflow-hidden"
              role="listitem"
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-slate-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                <span className="font-semibold text-slate-900 text-sm sm:text-base pr-2">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                  style={{ color: red }}
                  aria-hidden="true"
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
