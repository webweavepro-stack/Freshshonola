import React from 'react';
import { MessageSquare, Phone, MapPin, ArrowUpRight, ShieldCheck, Mail } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { DISPLAY_PHONE_NUMBER, openWhatsApp } from '../utils/whatsapp';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLink = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <footer className="bg-[#123B78] text-slate-200 border-t border-blue-950">
      {/* Top Banner / Callout in Footer */}
      <div className="border-b border-blue-900/60 bg-[#0e2f60]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-white text-lg font-bold">Have a question or need instant support?</h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Connect directly with our team on WhatsApp to confirm requirements, service details, and pricing.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => openWhatsApp('Hello Freshshonola Multiventures, I would like to speak with someone regarding your services.')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-md cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Message Us on WhatsApp</span>
            </button>
            <a
              href="tel:+2347068465334"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium text-sm transition-all border border-white/20"
            >
              <Phone className="w-4 h-4 text-slate-300" />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand & Purpose */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 text-white font-bold text-xl tracking-tight">
              <div className="w-8 h-8 rounded-lg bg-[#1677FF] flex items-center justify-center text-white font-black text-sm">
                FM
              </div>
              <span>Freshshonola Multiventures</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Your trusted Nigerian multiventures service partner. Bringing together identity guidance, high-clarity document printing, solar energy installations, CAC registrations, and Moniepoint POS solutions under one roof.
            </p>
            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{DISPLAY_PHONE_NUMBER}</span>
              </div>
            </div>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-2 text-sm">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.slug}>
                  <a
                    href={`/services/${srv.slug}`}
                    onClick={(e) => handleLink(`/services/${srv.slug}`, e)}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {srv.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/"
                  onClick={(e) => handleLink('/', e)}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  onClick={(e) => handleLink('/services', e)}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  All Services
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => handleLink('/about', e)}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  About Our Business
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => handleLink('/contact', e)}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Contact & Enquiries
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  onClick={(e) => handleLink('/privacy', e)}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Verified Information */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider">How We Work</h4>
            <div className="bg-blue-900/40 border border-blue-800/60 rounded-xl p-4 space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Zero online document uploads. Your sensitive identity files stay safe in your hands.</span>
              </div>
              <p className="text-slate-400 pt-1">
                All consultations and file verifications are conducted directly via WhatsApp or in person.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 mt-10 border-t border-blue-900/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Freshshonola Multiventures. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              onClick={(e) => handleLink('/privacy', e)}
              className="hover:text-slate-200 transition-colors"
            >
              Privacy Policy
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://wa.me/2347068465334"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-200 transition-colors inline-flex items-center gap-1"
            >
              <span>WhatsApp Direct</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
