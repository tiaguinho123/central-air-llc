import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteConfig } from '../config/SiteConfigContext';

const FOOTER_TOWNS = ['Brookfield', 'Danbury', 'Bethel', 'Newtown', 'Ridgefield', 'New Milford', 'Monroe', 'Shelton'];

export default function Footer() {
  const {
    businessName, colors, phone, phoneFormatted,
    email, address, hours, license, footerTagline, footerAwards,
  } = useSiteConfig();

  return (
    <footer className="border-t border-slate-800" id="footer" style={{ backgroundColor: colors.dark }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <a href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-block mb-5">
              <img
                src="https://www.centralairllc.com/app/uploads/sites/51/2023/03/CentralAirLLC-1.png"
                alt="Central Air, LLC. — Brookfield CT HVAC"
                className="h-12 object-contain"
                loading="lazy"
                decoding="async"
              />
            </a>
            <p className="text-slate-400 max-w-sm mb-4 leading-relaxed text-sm">{footerTagline}</p>
            <p className="text-xs text-slate-500 mb-1">{license}</p>
            <p className="text-xs text-slate-500">&copy; {new Date().getFullYear()} {businessName}, LLC. All rights reserved.</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 uppercase tracking-wider text-xs">Contact</h4>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: colors.primaryHex }} aria-hidden="true" />
                <span className="text-sm">{address.street}<br />{address.city}, {address.state} {address.zip}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0" style={{ color: colors.primaryHex }} aria-hidden="true" />
                <a href={`tel:${phone}`} className="hover:text-white transition-colors font-semibold text-sm">{phoneFormatted}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0" style={{ color: colors.primaryHex }} aria-hidden="true" />
                <a href={`mailto:${email}`} className="hover:text-white transition-colors text-sm">{email}</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 shrink-0 mt-0.5" style={{ color: colors.primaryHex }} aria-hidden="true" />
                <div className="text-sm">
                  <p>{hours.weekdays}</p>
                  <p>{hours.saturday}</p>
                  {hours.emergency && (
                    <p className="font-semibold mt-1" style={{ color: colors.primaryHex }}>Emergency: Always Available</p>
                  )}
                </div>
              </li>
            </ul>
          </div>

          {/* Service Area — compact: top 8 towns only */}
          <div>
            <h4 className="text-white font-semibold mb-5 uppercase tracking-wider text-xs">Service Area</h4>
            <ul className="space-y-1.5" aria-label="Towns we serve">
              {FOOTER_TOWNS.map((town) => (
                <li key={town}>
                  <span className="text-sm text-slate-400">{town}, CT</span>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/"
                  className="text-xs font-medium hover:opacity-80 transition-opacity"
                  style={{ color: colors.primaryHex }}
                >
                  + Fairfield County &amp; Westchester, NY
                </Link>
              </li>
            </ul>
            <p className="text-xs text-slate-500 mt-4">
              Don&apos;t see your town?{' '}
              <a href={`tel:${phone}`} className="hover:opacity-80" style={{ color: colors.primaryHex }}>
                Call us
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{footerAwards}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}