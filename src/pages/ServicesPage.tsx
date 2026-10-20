import React, { useState } from 'react';
import { MessageSquare, ArrowRight, HelpCircle, CheckCircle, Search } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceCard } from '../components/ServiceCard';
import { openWhatsApp } from '../utils/whatsapp';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = SERVICES_DATA.filter((s) => {
    const q = searchQuery.toLowerCase();
    return (
      s.title.toLowerCase().includes(q) ||
      s.shortDescription.toLowerCase().includes(q) ||
      s.categoryTag.toLowerCase().includes(q)
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-bold text-[#1677FF] uppercase tracking-wider">Service Directory</div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          All Five Core Business Services
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Freshshonola Multiventures provides end-to-end guidance and practical execution for identity documents, printing, renewable energy, corporate business registration, and payment terminals.
        </p>
      </div>

      {/* Quick Search & Filter */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Search services (e.g. printing, solar, CAC, NIN, POS)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-[#1677FF] focus:bg-white transition-colors"
          />
        </div>

        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="text-xs text-slate-500 hover:text-slate-800 underline self-center whitespace-nowrap"
          >
            Clear Search
          </button>
        )}
      </div>

      {/* Services Grid */}
      {filteredServices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service, index) => (
            <ServiceCard
              key={service.slug}
              service={service}
              index={index}
              onSelectService={(slug) => onNavigate(`/services/${slug}`)}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-4">
          <p className="text-slate-600 text-sm">
            No service matching &quot;{searchQuery}&quot;. Please view our available services or chat with us.
          </p>
          <button
            onClick={() => setSearchQuery('')}
            className="px-4 py-2 bg-[#123B78] text-white text-xs font-semibold rounded-lg"
          >
            Show All Services
          </button>
        </div>
      )}

      {/* Unsure Which Service You Need Box */}
      <section className="bg-blue-50/60 rounded-2xl border border-blue-200/80 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left max-w-xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#123B78]">
            <HelpCircle className="w-4 h-4 text-[#1677FF]" />
            <span>Not Sure What You Need?</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Let Our Team Guide You to the Right Service
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            If your project involves combined tasks—such as registering a business and simultaneously setting up printing, POS, or solar—our team will review your situation and recommend the right sequence.
          </p>
        </div>

        <div className="shrink-0 w-full md:w-auto">
          <button
            type="button"
            onClick={() => openWhatsApp('Hello Freshshonola Multiventures. I am not completely sure which service is right for my situation. Can you please guide me?')}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#123B78] hover:bg-[#0e2f60] active:scale-[0.99] text-white font-semibold text-sm transition-all shadow-md cursor-pointer whitespace-nowrap"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Ask for Guidance on WhatsApp</span>
          </button>
        </div>
      </section>
    </div>
  );
};
