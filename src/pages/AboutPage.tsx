import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  MessageSquare,
  Users,
  Layers,
  Sparkles,
  ArrowRight,
  HeartHandshake,
  Target
} from 'lucide-react';
import { openWhatsApp, DISPLAY_PHONE_NUMBER } from '../utils/whatsapp';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16">
      {/* Hero Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-bold text-[#1677FF] uppercase tracking-wider">About Our Business</div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Convenience, Transparency, and Reliable Support
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Freshshonola Multiventures is a Nigerian multi-services enterprise dedicated to making essential business, document, energy, and commercial solutions accessible from a single, dependable provider.
        </p>
      </div>

      {/* Purpose & Approach Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl border border-slate-200/90 p-8 space-y-4 shadow-xs">
          <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#123B78] flex items-center justify-center">
            <Target className="w-5 h-5 text-[#1677FF]" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Our Purpose</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            In Nigeria, individuals and business owners frequently spend valuable hours visiting disparate vendors to handle identity paperwork, print company materials, find reliable solar power installations, file CAC business papers, or obtain a point-of-sale terminal.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            Freshshonola Multiventures simplifies this process by serving as a unified, organized multiventures centre. We give you a single reliable point of contact who explains the process clearly and helps you get your tasks completed without confusion.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/90 p-8 space-y-4 shadow-xs">
          <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#123B78] flex items-center justify-center">
            <HeartHandshake className="w-5 h-5 text-[#1677FF]" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Our Service Philosophy</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            We believe that good customer service starts with honest expectations. We do not make unsupported claims, impossible turnaround promises, or hidden charges.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            Before you spend your money or travel to our premises, our team verifies what documents you actually need, provides a clear cost estimate, and outlines the realistic steps required.
          </p>
        </div>
      </section>

      {/* Core Principles */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="text-xs font-bold text-[#1677FF] uppercase tracking-wider">What We Stand For</div>
          <h2 className="text-2xl font-bold text-slate-900">Guiding Operational Principles</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Customer Convenience',
              desc: 'Enquire from your phone via WhatsApp before travelling, ensuring you have everything ready in advance.'
            },
            {
              title: 'Data & Privacy Respect',
              desc: 'We never solicit sensitive identity documents or passwords on the web. Direct verification keeps your files safe.'
            },
            {
              title: 'Clear Communication',
              desc: 'Direct, human conversations without complicated robotic menus or automated dead ends.'
            },
            {
              title: 'Practical Value',
              desc: 'Delivering dependable printing, functional power setups, and verified registration assistance.'
            }
          ].map((principle, i) => (
            <div key={i} className="p-6 rounded-xl bg-white border border-slate-200 space-y-2 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#F4F7FB] border border-slate-200 text-[#123B78] font-bold text-xs flex items-center justify-center">
                0{i + 1}
              </div>
              <h3 className="font-bold text-slate-900 text-sm">{principle.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{principle.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Five Services Summary Banner */}
      <section className="bg-linear-to-br from-[#123B78] to-[#1677FF] rounded-2xl p-8 sm:p-12 text-white shadow-lg space-y-6">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Explore All Solutions Under One Roof
          </h2>
          <p className="text-blue-100 text-sm leading-relaxed">
            Whether you need identity documentation support, crisp digital printing, sustainable solar setups, CAC business names, or Moniepoint merchant terminals, we are ready to assist.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => onNavigate('/services')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#123B78] font-bold text-xs hover:bg-blue-50 transition-colors shadow-xs"
          >
            <span>Browse All Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => openWhatsApp('Hello Freshshonola Multiventures, I would like to learn more about your services.')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-xs"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>
      </section>
    </div>
  );
};
