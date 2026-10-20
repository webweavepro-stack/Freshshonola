import React, { useState } from 'react';
import { MessageSquare, X, ArrowUpRight } from 'lucide-react';
import { openWhatsApp, DISPLAY_PHONE_NUMBER } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2 pointer-events-none select-none">
      {/* Optional quick chat popover */}
      {showTooltip && (
        <div className="pointer-events-auto bg-white rounded-xl shadow-xl border border-slate-200 p-3.5 max-w-xs text-xs text-slate-700 space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="font-semibold text-slate-900">Need Quick Assistance?</p>
              <p className="text-slate-500 text-[11px] mt-0.5">We reply promptly on WhatsApp</p>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-slate-600 p-0.5"
              aria-label="Close tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-slate-600">
            Ask about NIN services, printing orders, solar quotes, CAC filings, or Moniepoint POS.
          </p>
          <button
            onClick={() => {
              setShowTooltip(false);
              openWhatsApp('Hello Freshshonola Multiventures, I have a quick enquiry.');
            }}
            className="w-full flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium text-xs transition-colors"
          >
            <span>Open WhatsApp</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="pointer-events-auto flex items-center gap-2">
        <button
          onClick={() => openWhatsApp('Hello Freshshonola Multiventures, I am contacting you from your website to enquire about your services.')}
          onMouseEnter={() => setShowTooltip(true)}
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200 cursor-pointer focus-visible:outline-hidden focus-visible:ring-4 focus-visible:ring-emerald-300"
          aria-label={`Chat with Freshshonola Multiventures on WhatsApp at ${DISPLAY_PHONE_NUMBER}`}
        >
          <MessageSquare className="w-7 h-7 fill-white/20 stroke-white transition-transform group-hover:scale-110" />
          <span className="sr-only">Chat on WhatsApp</span>
        </button>
      </div>
    </div>
  );
};
