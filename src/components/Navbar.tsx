import React from 'react';
import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { useSiteConfig } from '../config/SiteConfigContext';

const CENTRAL_AIR_LOGO_URL = 'https://www.centralairllc.com/app/uploads/sites/51/2023/03/CentralAirLLC-1.png';

const serviceLinks = [
  { label: 'Heating', path: '/heating' },
  { label: 'Cooling', path: '/cooling' },
  { label: 'Heat Pumps', path: '/heat-pumps' },
  { label: 'Mini-Splits / Ductless', path: '/mini-splits' },
  { label: 'Indoor Air Quality', path: '/indoor-air-quality' },
  { label: 'Service Agreements', path: '/service-agreements' },
];

export default function Navbar() {
  const cfg = useSiteConfig();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-semibold transition-colors px-1 pb-1 border-b-2 ${
      isActive
        ? 'text-[#D12027] border-[#D12027]'
        : 'text-slate-700 border-transparent hover:text-[#D12027]'
    }`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'border-b border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* ─── Real NEAS Logo ─── */}
          <Link to="/" className="flex-shrink-0" aria-label="Central Air LLC — Home" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img
              src={CENTRAL_AIR_LOGO_URL}
              alt="Central Air, LLC. — Heating & Air Conditioning"
              className="h-14 w-auto object-contain"
              fetchPriority="high"
            />
          </Link>

          {/* ─── Desktop Nav ─── */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            <NavLink to="/" end className={navLinkClass} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>HOME</NavLink>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`text-sm font-semibold flex items-center gap-1 pb-1 border-b-2 transition-colors ${
                  location.pathname.includes('/heating') || location.pathname.includes('/cooling') || location.pathname.includes('/indoor') || location.pathname.includes('/comfort')
                    ? 'text-[#D12027] border-[#D12027]'
                    : 'text-slate-700 border-transparent hover:text-[#D12027]'
                }`}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                SERVICES <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-white border border-slate-100 rounded-xl shadow-xl py-2 z-50">
                  {serviceLinks.map((s) => (
                    <NavLink
                      key={s.path}
                      to={s.path}
                      className={({ isActive }) =>
                        `block px-4 py-2.5 text-sm font-medium transition-colors ${
                          isActive ? 'text-[#D12027] bg-red-50' : 'text-slate-700 hover:text-[#D12027] hover:bg-slate-50'
                        }`
                      }
                    >
                      {s.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/financing" className={navLinkClass}>FINANCING</NavLink>
            <NavLink to="/about-us" className={navLinkClass}>ABOUT US</NavLink>
            <NavLink to="/contact-us" className={navLinkClass}>CONTACT US</NavLink>
          </nav>

          {/* ─── Phone CTA ─── */}
          <a
            href={`tel:${cfg.phone}`}
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-white transition-colors shadow"
            style={{ backgroundColor: '#D12027' }}
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            {cfg.phoneFormatted}
          </a>

          {/* ─── Mobile Toggle ─── */}
          <button
            className="lg:hidden p-2 text-slate-700"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ─── Mobile Menu ─── */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 shadow-lg">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            <NavLink to="/" end className={navLinkClass}>HOME</NavLink>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-3 mb-1 px-1">Services</p>
            {serviceLinks.map((s) => (
              <NavLink key={s.path} to={s.path} className={navLinkClass} style={{ paddingLeft: '0.75rem' }}>
                {s.label}
              </NavLink>
            ))}
            <NavLink to="/financing" className={navLinkClass}>FINANCING</NavLink>
            <NavLink to="/about-us" className={navLinkClass}>ABOUT US</NavLink>
            <NavLink to="/contact-us" className={navLinkClass}>CONTACT US</NavLink>
            <a
              href={`tel:${cfg.phone}`}
              className="mt-3 flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-bold text-white"
              style={{ backgroundColor: '#D12027' }}
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              {cfg.phoneFormatted}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
