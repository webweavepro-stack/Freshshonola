import React, { useState } from 'react';
import {
  ArrowLeft,
  MessageSquare,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Clock,
  Layers,
  HelpCircle,
  FileCheck
} from 'lucide-react';
import { getServiceBySlug, SERVICES_DATA } from '../data/servicesData';
import { ServiceEnquiryBuilder } from '../components/ServiceEnquiryBuilder';
import { FAQAccordion } from '../components/FAQAccordion';
import { openWhatsApp } from '../utils/whatsapp';

interface ServiceDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  slug,
  onNavigate
}) => {
  const service = getServiceBySlug(slug);
  const [imgError, setImgError] = useState(false);

  if (!service) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="text-2xl font-bold text-slate-900">Service Not Found</h1>
        <p className="text-slate-600 text-sm">
          The requested service could not be found or may have been updated.
        </p>
        <button
          onClick={() => onNavigate('/services')}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#123B78] text-white rounded-lg text-sm font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to All Services</span>
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Top Breadcrumb & Return Button */}
      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => onNavigate('/services')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-[#123B78] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Services</span>
        </button>

        <span className="text-xs font-medium text-slate-400">
          Services / <span className="text-slate-700 font-semibold">{service.title}</span>
        </span>
      </div>

      {/* Hero Header Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#123B78] bg-blue-50 px-3 py-1.5 rounded-md border border-blue-100">
            <span>{service.categoryTag}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {service.title}
          </h1>

          <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
            {service.fullDescription}
          </p>

          {/* Offerings list */}
          <div className="space-y-2 pt-2">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Covered Scope & Options:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              {service.potentialOfferings.map((offering, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-slate-200/80">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>{offering}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Direct CTA */}
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="button"
              onClick={() => openWhatsApp(service.defaultWhatsAppMessage)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-[0.99] text-white font-semibold text-sm transition-all shadow-md cursor-pointer whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{service.ctaLabel}</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('/services')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-medium text-sm transition-all border border-slate-200 whitespace-nowrap"
            >
              <span>View Other Services</span>
            </button>
          </div>
        </div>

        {/* Hero Image Container */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100 aspect-4/3 relative">
            {!imgError ? (
              <img
                src={service.heroImage}
                alt={`${service.title} illustration`}
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-slate-800 text-white p-6">
                <FileCheck className="w-12 h-12 text-blue-400 mb-2" />
                <span className="font-bold text-center">{service.title}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Requirements Checklist Section */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 space-y-6 shadow-xs">
        <div className="space-y-1">
          <div className="text-xs font-bold text-[#1677FF] uppercase tracking-wider">Preparation Checklist</div>
          <h2 className="text-2xl font-bold text-slate-900">What to Prepare Before Contacting Us</h2>
          <p className="text-sm text-slate-600">
            Having the following details or documents ready will help our team assist you quickly and accurately.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {service.requirementsChecklist.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-slate-200/90 bg-[#F4F7FB] space-y-1.5"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item.title}</span>
                </h3>
                {item.isMandatory ? (
                  <span className="text-[10px] font-semibold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-sm">
                    Required
                  </span>
                ) : (
                  <span className="text-[10px] text-slate-500 font-medium">
                    Where applicable
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-6">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Important Notes & Disclaimers */}
      <section className="bg-amber-50/70 border border-amber-200/90 rounded-2xl p-6 sm:p-8 space-y-3">
        <div className="flex items-center gap-2 text-amber-900 font-bold text-base">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
          <h3>Important Guidance & Transparent Policies</h3>
        </div>
        <ul className="space-y-2 text-xs sm:text-sm text-amber-950/90 leading-relaxed pl-7 list-disc">
          {service.importantNotes.map((note, idx) => (
            <li key={idx}>{note}</li>
          ))}
        </ul>
      </section>

      {/* How It Works - 3 Simple Steps */}
      <section className="space-y-6">
        <div className="space-y-1">
          <div className="text-xs font-bold text-[#1677FF] uppercase tracking-wider">Step-by-Step Flow</div>
          <h2 className="text-2xl font-bold text-slate-900">How It Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.howItWorks.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-xl border border-slate-200 p-6 space-y-3 shadow-xs"
            >
              <div className="w-8 h-8 rounded-lg bg-[#123B78] text-white font-bold text-sm flex items-center justify-center">
                {step.step}
              </div>
              <h3 className="font-bold text-slate-900 text-sm">{step.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive WhatsApp Enquiry Builder */}
      <section>
        <ServiceEnquiryBuilder service={service} />
      </section>

      {/* Service-Specific FAQs */}
      {service.faqs.length > 0 && (
        <section className="space-y-4">
          <FAQAccordion
            faqs={service.faqs}
            title={`${service.title} FAQs`}
            description="Answers to common questions regarding this service."
          />
        </section>
      )}

      {/* Return to All Services Navigation Bar */}
      <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => onNavigate('/services')}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-50 text-xs font-semibold transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to All Five Services</span>
        </button>

        <button
          type="button"
          onClick={() => openWhatsApp(service.defaultWhatsAppMessage)}
          className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 hover:text-emerald-800"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Send Quick WhatsApp Message</span>
        </button>
      </div>
    </div>
  );
};
