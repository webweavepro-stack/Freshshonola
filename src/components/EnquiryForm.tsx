import React, { useState } from 'react';
import { MessageSquare, ArrowRight, CheckCircle2, ShieldCheck, Database } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { buildWhatsAppUrl, openWhatsApp } from '../utils/whatsapp';
import { logEnquiryToSupabase } from '../lib/supabase';

export const EnquiryForm: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [selectedService, setSelectedService] = useState(SERVICES_DATA[0].title);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [details, setDetails] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);
  const [supabaseLogged, setSupabaseLogged] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const cleanName = fullName.trim().slice(0, 80);
    const cleanPhone = phoneNumber.trim().slice(0, 20);
    const cleanLoc = location.trim().slice(0, 100);
    const cleanDetails = details.trim().slice(0, 500);

    let message = `Hello Freshshonola Multiventures. I am submitting an enquiry through your website.`;
    if (cleanName) {
      message += ` Name: ${cleanName}.`;
    }
    message += ` Service requested: ${selectedService}.`;
    if (cleanPhone) {
      message += ` Phone: ${cleanPhone}.`;
    }
    if (cleanLoc) {
      message += ` Location: ${cleanLoc}.`;
    }
    if (cleanDetails) {
      message += ` Details: ${cleanDetails}.`;
    }
    message += ` Please guide me on the next steps, requirements, and available options.`;

    const matchedService = SERVICES_DATA.find((s) => s.title === selectedService);

    // Asynchronously log to Supabase
    logEnquiryToSupabase({
      fullName: cleanName,
      phoneNumber: cleanPhone,
      serviceTitle: selectedService,
      serviceSlug: matchedService?.slug,
      location: cleanLoc,
      details: cleanDetails,
      whatsappPrefillText: message
    }).then((res) => {
      if (res.success) {
        setSupabaseLogged(true);
      }
    });

    setSubmittedMessage(message);
    openWhatsApp(message);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
      <div className="space-y-2 mb-6">
        <h3 className="text-xl font-bold text-slate-900">Send an Enquiry via WhatsApp</h3>
        <p className="text-sm text-slate-600">
          Fill in your details below to assemble a clear enquiry message. When you click proceed, WhatsApp will open with your prefilled text ready for your review and send.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="contact-fullName" className="block text-xs font-semibold text-slate-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-fullName"
            type="text"
            required
            maxLength={80}
            placeholder="e.g. Oluwaseun Adeleke"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:bg-white focus:border-[#1677FF] focus:outline-hidden transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-service" className="block text-xs font-semibold text-slate-700 mb-1">
              Select Service <span className="text-red-500">*</span>
            </label>
            <select
              id="contact-service"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:bg-white focus:border-[#1677FF] focus:outline-hidden transition-colors"
            >
              {SERVICES_DATA.map((srv) => (
                <option key={srv.slug} value={srv.title}>
                  {srv.title}
                </option>
              ))}
              <option value="General Consultation / Other Services">General Consultation / Other Services</option>
            </select>
          </div>

          <div>
            <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-700 mb-1">
              Phone Number <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <input
              id="contact-phone"
              type="tel"
              maxLength={20}
              placeholder="e.g. 08012345678"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:bg-white focus:border-[#1677FF] focus:outline-hidden transition-colors"
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-location" className="block text-xs font-semibold text-slate-700 mb-1">
            Your Location / Area <span className="text-slate-400 font-normal">(Where relevant)</span>
          </label>
          <input
            id="contact-location"
            type="text"
            maxLength={100}
            placeholder="e.g. Lagos, Ibadan, Abuja, Ogun State"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:bg-white focus:border-[#1677FF] focus:outline-hidden transition-colors"
          />
        </div>

        <div>
          <label htmlFor="contact-details" className="block text-xs font-semibold text-slate-700 mb-1">
            Enquiry Details <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <textarea
            id="contact-details"
            rows={3}
            maxLength={500}
            placeholder="Give us a brief description of what you need (e.g. 'I need 20 copies of an A4 project report laminated' or 'Need a 3.5kVA solar system quote')."
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:bg-white focus:border-[#1677FF] focus:outline-hidden transition-colors resize-none"
          />
        </div>

        {/* Security & Privacy Notice */}
        <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-3 flex items-start gap-2.5 text-xs text-blue-900">
          <ShieldCheck className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
          <p>
            <strong>Privacy Protected:</strong> Your data is processed entirely in your web browser. Nothing is saved to a database or sent to third-party trackers.
          </p>
        </div>

        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-[0.99] text-white font-semibold text-sm transition-all shadow-md cursor-pointer whitespace-nowrap"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Open in WhatsApp & Review Message</span>
        </button>

        {submittedMessage && (
          <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
            <div className="flex flex-wrap items-center gap-2 font-semibold text-emerald-700">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>WhatsApp has been launched with your enquiry!</span>
              </div>
              {supabaseLogged && (
                <span className="inline-flex items-center gap-1 text-[11px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md border border-blue-200">
                  <Database className="w-3 h-3 text-[#1677FF]" />
                  <span>Logged in Supabase</span>
                </span>
              )}
            </div>
            <p className="text-slate-600">
              Please review the message inside WhatsApp and hit <strong>Send</strong>. If WhatsApp did not open automatically,{' '}
              <a
                href={buildWhatsAppUrl(submittedMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1677FF] font-medium underline"
              >
                click here to open manually
              </a>
              .
            </p>
          </div>
        )}
      </form>
    </div>
  );
};
