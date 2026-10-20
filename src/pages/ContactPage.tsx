import React from 'react';
import {
  MessageSquare,
  Phone,
  Clock,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  HelpCircle
} from 'lucide-react';
import { EnquiryForm } from '../components/EnquiryForm';
import { openWhatsApp, DISPLAY_PHONE_NUMBER, WHATSAPP_PHONE_NUMBER } from '../utils/whatsapp';

export const ContactPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="text-xs font-bold text-[#1677FF] uppercase tracking-wider">Contact & Inquiries</div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Connect With Freshshonola Multiventures
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          The fastest and most reliable way to enquire about any of our services is directly through WhatsApp. Our team will review your requirements and provide verified next steps.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Contact Channels & Verified Details */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Main Direct WhatsApp Box */}
          <div className="bg-[#123B78] rounded-2xl p-6 sm:p-8 text-white space-y-5 shadow-lg">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
              <MessageSquare className="w-4 h-4" />
              <span>Primary Support Channel</span>
            </div>
            
            <div className="space-y-1">
              <h2 className="text-2xl font-bold">WhatsApp Direct</h2>
              <p className="text-blue-200 text-xs leading-relaxed">
                Send a quick text or voice note. We reply promptly during operational hours.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/10 border border-white/20 font-mono text-base font-semibold tracking-wide flex items-center justify-between">
              <span>{DISPLAY_PHONE_NUMBER}</span>
              <span className="text-[10px] text-emerald-400 font-sans font-medium">WhatsApp Active</span>
            </div>

            <button
              type="button"
              onClick={() => openWhatsApp('Hello Freshshonola Multiventures, I am reaching out to enquire about your services.')}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.99] text-white font-bold text-sm transition-all shadow-md cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Start WhatsApp Conversation</span>
              <ArrowUpRight className="w-4 h-4 text-white/80" />
            </button>
          </div>

          {/* Phone Call Box */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#123B78] flex items-center justify-center">
                <Phone className="w-5 h-5 text-[#1677FF]" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Direct Telephone Call</h3>
                <p className="text-xs text-slate-500">For direct verbal enquiries</p>
              </div>
            </div>

            <a
              href={`tel:+${WHATSAPP_PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 font-semibold text-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>Call {DISPLAY_PHONE_NUMBER}</span>
            </a>
          </div>

          {/* Operational Hours & Country */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-xs text-xs text-slate-600">
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-slate-900 text-sm">Working Hours</p>
                <p className="mt-0.5">Monday – Saturday: 8:00 AM – 6:00 PM (WAT)</p>
                <p className="text-slate-400 text-[11px]">Enquiries sent outside hours are addressed next morning.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
              <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-slate-900 text-sm">Country & Coverage</p>
                <p className="mt-0.5">Nigeria</p>
                <p className="text-slate-400 text-[11px]">Services offered on-site and remotely across Nigerian states.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-slate-900 text-sm">Important Note on Security</p>
                <p className="mt-0.5">Do not share sensitive passwords, PINs, or confidential identity copies on public forms.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Interactive Browser Enquiry Form */}
        <div className="lg:col-span-7">
          <EnquiryForm />
        </div>
      </div>
    </div>
  );
};
