import { Phone, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteConfig } from '../config/SiteConfigContext';

/**
 * MobileStickyFooter — shown only on mobile (lg:hidden)
 * Gives quick access to call and request service from any page.
 * Uses safe-area-inset-bottom for iPhone home bar spacing.
 */
export default function MobileStickyFooter() {
  const { phone, phoneFormatted, colors } = useSiteConfig();
  const red = colors.primaryHex;

  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex border-t border-slate-200 bg-white shadow-[0_-2px_12px_rgba(0,0,0,0.10)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      role="complementary"
      aria-label="Quick contact bar"
    >
      {/* Call button */}
      <a
        href={`tel:${phone}`}
        className="flex-1 flex flex-col items-center justify-center gap-0.5 py-3 text-white font-bold text-xs transition-opacity active:opacity-80"
        style={{ backgroundColor: red }}
        aria-label={`Call ${phoneFormatted}`}
      >
        <Phone className="w-5 h-5" aria-hidden="true" />
        <span>{phoneFormatted}</span>
      </a>

      {/* Divider */}
      <div className="w-px bg-white/30" aria-hidden="true" />

      {/* Request Service button */}
      <Link
        to="/contact-us"
        className="flex-1 flex flex-col items-center justify-center gap-0.5 py-3 font-bold text-xs transition-colors"
        style={{ color: red }}
        aria-label="Request service online"
      >
        <MessageSquare className="w-5 h-5" aria-hidden="true" />
        <span>Request Service</span>
      </Link>
    </div>
  );
}
