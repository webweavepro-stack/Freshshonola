import React, { useState } from 'react';
import { MessageSquare, ArrowRight, ShieldCheck, Check, Copy, Database } from 'lucide-react';
import { ServiceDefinition } from '../data/servicesData';
import { buildWhatsAppUrl, openWhatsApp } from '../utils/whatsapp';
import { logEnquiryToSupabase } from '../lib/supabase';

interface ServiceEnquiryBuilderProps {
  service: ServiceDefinition;
}

export const ServiceEnquiryBuilder: React.FC<ServiceEnquiryBuilderProps> = ({ service }) => {
  const [formData, setFormData] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    service.formFields.forEach((field) => {
      if (field.type === 'select' && field.options && field.options.length > 0) {
        initial[field.id] = field.options[0];
      } else {
        initial[field.id] = '';
      }
    });
    return initial;
  });

  const [copied, setCopied] = useState(false);
  const [supabaseSaved, setSupabaseSaved] = useState(false);

  const handleChange = (id: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const previewMessage = service.formatCustomMessage(formData);
  const waUrl = buildWhatsAppUrl(previewMessage);

  const handleLaunchWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    // Log to Supabase in the background
    logEnquiryToSupabase({
      fullName: formData.fullName || 'Website Visitor',
      serviceTitle: service.title,
      serviceSlug: service.slug,
      location: formData.location || formData.bizLocation,
      details: formData.notes || formData.appliances || formData.businessNature,
      customFields: formData,
      whatsappPrefillText: previewMessage
    }).then((res) => {
      if (res.success) {
        setSupabaseSaved(true);
      }
    });

    openWhatsApp(previewMessage);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(previewMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-6">
      <div className="space-y-1">
        <h3 className="text-xl font-bold text-slate-900">Customise Your WhatsApp Enquiry</h3>
        <p className="text-sm text-slate-600">
          Tailor your enquiry details below. We will format a clean, ready-to-send message for WhatsApp so our team can answer you with accurate information immediately.
        </p>
      </div>

      <form onSubmit={handleLaunchWhatsApp} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {service.formFields.map((field) => (
            <div
              key={field.id}
              className={field.type === 'textarea' ? 'sm:col-span-2' : undefined}
            >
              <label
                htmlFor={field.id}
                className="block text-xs font-semibold text-slate-700 mb-1"
              >
                {field.label} {field.required && <span className="text-red-500">*</span>}
              </label>

              {field.type === 'select' ? (
                <select
                  id={field.id}
                  value={formData[field.id] || ''}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:bg-white focus:border-[#1677FF] focus:outline-hidden transition-colors"
                >
                  {field.options?.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : field.type === 'textarea' ? (
                <textarea
                  id={field.id}
                  rows={3}
                  value={formData[field.id] || ''}
                  placeholder={field.placeholder}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:bg-white focus:border-[#1677FF] focus:outline-hidden transition-colors resize-none"
                />
              ) : (
                <input
                  id={field.id}
                  type={field.type}
                  value={formData[field.id] || ''}
                  placeholder={field.placeholder}
                  required={field.required}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:bg-white focus:border-[#1677FF] focus:outline-hidden transition-colors"
                />
              )}
            </div>
          ))}
        </div>

        {/* Live Message Preview */}
        <div className="pt-2">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-1.5">
            <span>Live Message Preview (Will open in WhatsApp):</span>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1 text-[#1677FF] hover:underline"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>
          </div>
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-3.5 text-xs text-slate-700 font-mono leading-relaxed whitespace-pre-wrap">
            {previewMessage}
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-500 mt-1">
            <span>The message will open inside WhatsApp for your review and send.</span>
            {supabaseSaved && (
              <span className="inline-flex items-center gap-1 text-emerald-700 font-medium font-sans">
                <Database className="w-3 h-3 text-[#1677FF]" />
                <span>Recorded in Supabase</span>
              </span>
            )}
          </div>
        </div>

        {/* Submit CTA */}
        <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
          <button
            type="submit"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-[0.99] text-white font-semibold text-sm transition-all shadow-md cursor-pointer whitespace-nowrap shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{service.ctaLabel}</span>
          </button>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-500 hover:text-slate-800 underline transition-colors whitespace-nowrap"
          >
            Or open direct WhatsApp link
          </a>
        </div>
      </form>
    </div>
  );
};
