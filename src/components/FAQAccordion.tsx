import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ServiceFAQ } from '../data/servicesData';

interface FAQAccordionProps {
  faqs: ServiceFAQ[];
  title?: string;
  description?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  faqs,
  title,
  description
}) => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggle = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="space-y-4">
      {title && (
        <div className="space-y-1 mb-6">
          <h3 className="text-xl font-bold text-slate-900">{title}</h3>
          {description && <p className="text-sm text-slate-600">{description}</p>}
        </div>
      )}

      <div className="divide-y divide-slate-200/90 rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-xs">
        {faqs.map((faq, index) => {
          const isOpen = openIndices.includes(index);
          return (
            <div key={index} className="transition-colors">
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left text-sm font-semibold text-slate-900 hover:text-[#123B78] focus-visible:outline-hidden focus-visible:bg-slate-50 transition-colors cursor-pointer"
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#1677FF]' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
