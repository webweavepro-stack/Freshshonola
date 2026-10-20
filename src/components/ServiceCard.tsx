import React, { useState } from 'react';
import { MessageSquare, ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react';
import { ServiceDefinition } from '../data/servicesData';
import { openWhatsApp } from '../utils/whatsapp';

interface ServiceCardProps {
  service: ServiceDefinition;
  onSelectService: (slug: string) => void;
  index?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onSelectService,
  index
}) => {
  const [imageError, setImageError] = useState(false);

  const handleCardClick = () => {
    onSelectService(service.slug);
  };

  return (
    <article className="group bg-white rounded-2xl border border-slate-200/90 hover:border-blue-300 transition-all duration-300 hover:shadow-xl flex flex-col overflow-hidden">
      {/* Visual Asset Container */}
      <div
        onClick={handleCardClick}
        className="relative aspect-4/3 w-full bg-slate-100 overflow-hidden cursor-pointer"
      >
        {!imageError ? (
          <img
            src={service.heroImage}
            alt={`${service.title} by Freshshonola Multiventures`}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-linear-to-br from-[#123B78] to-[#1677FF] text-white p-6 text-center">
            <span className="font-bold text-lg">{service.title}</span>
            <span className="text-xs text-blue-200 mt-1">{service.categoryTag}</span>
          </div>
        )}

        {/* Subtle Category Label - Quiet text style without garish pill badges */}
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-semibold text-[#123B78] shadow-xs">
          {service.categoryTag}
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        <div className="space-y-3">
          <h3
            onClick={handleCardClick}
            className="text-xl font-bold text-slate-900 group-hover:text-[#123B78] transition-colors cursor-pointer"
          >
            {service.title}
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
            {service.shortDescription}
          </p>

          {/* Quick Requirements Sneak Peek */}
          <div className="pt-2 border-t border-slate-100 space-y-1.5">
            <p className="text-xs font-semibold text-slate-700">Key Preparation Items:</p>
            <ul className="space-y-1 text-xs text-slate-600">
              {service.requirementsChecklist.slice(0, 3).map((item, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-2.5">
          <button
            type="button"
            onClick={() => openWhatsApp(service.defaultWhatsAppMessage)}
            className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs transition-colors shadow-xs cursor-pointer whitespace-nowrap shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="truncate">{service.ctaLabel}</span>
          </button>

          <button
            type="button"
            onClick={handleCardClick}
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 font-medium text-xs transition-colors border border-slate-200 cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Details</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </article>
  );
};
