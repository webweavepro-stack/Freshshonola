import React from 'react';
import { ShieldCheck, Lock, AlertCircle, ArrowLeft, MessageSquare } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

interface PrivacyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-10">
      {/* Return to Home link */}
      <div>
        <button
          type="button"
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-[#123B78] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Privacy & Data Transparency</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Privacy Policy & Data Handling
        </h1>
        <p className="text-sm text-slate-500">
          Last reviewed: October 2026 · Freshshonola Multiventures
        </p>
      </div>

      {/* Content Sections */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 space-y-8 text-sm text-slate-700 leading-relaxed shadow-xs">
        
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#1677FF]" />
            <span>1. Client-Side Only Architecture — No Server Database</span>
          </h2>
          <p>
            The website for <strong>Freshshonola Multiventures</strong> operates entirely on the client side (in your web browser). We do not operate a backend database, user accounts, password records, or cloud storage for form submissions.
          </p>
          <p>
            Any text you enter into our enquiry or customizer forms (such as your name, proposed business name, copy count, or location) is used solely within your browser to construct a formatted message link for WhatsApp. No personal data is transmitted to or saved on a web server when you interact with this website.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#1677FF]" />
            <span>2. What We Recommend You Avoid Disclosing Online</span>
          </h2>
          <p>
            To protect your personal and financial security, please observe the following guidelines:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
            <li>Never enter or upload sensitive banking credentials, ATM PINs, OTP codes, or passwords.</li>
            <li>Never submit physical national identity cards, BVN slips, or biometric certificates through public web forms.</li>
            <li>All official identity or CAC document reviews must take place through authorized, verified communication with our verified representative or directly in person.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>3. Transfer of Communication to WhatsApp</span>
          </h2>
          <p>
            When you click any enquiry button, the website opens WhatsApp via a standard web link with your prepared text prefilled. At that point:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
            <li>No message is sent automatically; you have the opportunity to review, amend, or discard the message text inside WhatsApp before choosing to send it.</li>
            <li>Once transmitted inside WhatsApp, your conversation is governed by WhatsApp&apos;s own end-to-end encryption and terms of service.</li>
            <li>Our team treats all customer discussions with strict confidentiality and uses your contact details only to answer your specific service requests.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            <span>4. Questions Regarding Your Privacy</span>
          </h2>
          <p>
            If you have questions about how Freshshonola Multiventures handles your communication, please feel free to reach out to our team directly via WhatsApp at +234 706 846 5334.
          </p>
        </section>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-semibold transition-colors"
          >
            Return to Homepage
          </button>
          <button
            type="button"
            onClick={() => openWhatsApp('Hello Freshshonola Multiventures, I have a question regarding privacy and data.')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Enquire on WhatsApp</span>
          </button>
        </div>

      </div>
    </div>
  );
};
