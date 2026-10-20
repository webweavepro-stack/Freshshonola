import React, { useState } from 'react';
import {
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Zap,
  Printer,
  CreditCard,
  Building2,
  CheckCircle2,
  Clock,
  Layers,
  HelpCircle,
  PhoneCall
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceCard } from '../components/ServiceCard';
import { FAQAccordion } from '../components/FAQAccordion';
import { openWhatsApp, DISPLAY_PHONE_NUMBER } from '../utils/whatsapp';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [heroImageLoaded, setHeroImageLoaded] = useState(true);

  const homeFaqs = [
    {
      question: 'How do I start an enquiry with Freshshonola Multiventures?',
      answer: 'Simply browse our services, choose the specific service you need, review the requirements, and click any WhatsApp button. WhatsApp will open with a ready-to-send message so our team can answer your questions immediately.'
    },
    {
      question: 'Do I need to create an account or upload documents on this website?',
      answer: 'No. This website requires no registration, password, or document uploads. For your security and peace of mind, all specific consultations and document exchanges happen directly via WhatsApp or during your in-person visit.'
    },
    {
      question: 'Are prices fixed or negotiable?',
      answer: 'Pricing depends directly on the specifics of the service (e.g. number of copies for printing, kilowatt capacity for solar setups, or CAC registration classification). We provide transparent quotes via WhatsApp before you proceed.'
    },
    {
      question: 'Can you help if I am outside Lagos or in another state?',
      answer: 'Yes! Remote services such as CAC registration consultations, POS agent guidance, and digital printing preparation are accessible to customers across Nigeria via WhatsApp.'
    }
  ];

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* 1. Hero Section */}
      <section className="relative pt-6 sm:pt-10 lg:pt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#123B78] bg-blue-50/80 px-3 py-1.5 rounded-md border border-blue-100">
                <span>Nigeria Multiventures Service Hub</span>
                <span aria-hidden="true">·</span>
                <span>Direct WhatsApp Support</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] text-balance">
                Essential Business Services, Made Easier.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                From NIN and CAC registration enquiries to printing, solar solutions, and POS services, Freshshonola Multiventures helps you find the service you need and connect with us easily.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('/services')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#123B78] hover:bg-[#0e2f60] active:scale-[0.99] text-white font-semibold text-sm transition-all shadow-md cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => openWhatsApp('Hello Freshshonola Multiventures, I would like to enquire about your services.')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-[0.99] text-white font-semibold text-sm transition-all shadow-md cursor-pointer whitespace-nowrap shrink-0"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat With Us on WhatsApp</span>
                </button>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#1677FF] shrink-0" />
                  <span>Zero Online File Uploads</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#1677FF] shrink-0" />
                  <span>Prompt WhatsApp Replies</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#1677FF] shrink-0" />
                  <span>5 Essential Services</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Anchor */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 aspect-16/10 lg:aspect-4/3">
                {heroImageLoaded ? (
                  <img
                    src="/src/assets/images/freshshonola_hero_banner_1792469794295.jpg"
                    alt="Freshshonola Multiventures Office and Business Center"
                    referrerPolicy="no-referrer"
                    onError={() => setHeroImageLoaded(false)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col justify-center items-center bg-[#123B78] text-white p-6 text-center">
                    <span className="text-xl font-bold">Freshshonola Multiventures</span>
                    <span className="text-xs text-blue-200 mt-2">Essential Business & Digital Services</span>
                  </div>
                )}
                
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="font-semibold">One Stop for Multiple Needs</p>
                    <p className="text-[11px] text-slate-300">Identity · Documents · Power · Business</p>
                  </div>
                  <span className="font-mono text-[11px] text-emerald-400 font-medium">Verified Active</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Four-Step Simple Process Strip */}
      <section className="bg-white border-y border-slate-200/90 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="text-xs font-bold text-[#1677FF] uppercase tracking-wider">Simple Interaction</h2>
            <p className="text-2xl font-bold text-slate-900">How to Access Any Service</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: '1',
                title: 'Choose the service you need',
                desc: 'Browse our 5 core services and pick the one matching your requirement.'
              },
              {
                num: '2',
                title: 'Review the requirements',
                desc: 'Check what paperwork, device specs, or details to prepare beforehand.'
              },
              {
                num: '3',
                title: 'Contact us through WhatsApp',
                desc: 'Click the button to open a pre-filled message with your request.'
              },
              {
                num: '4',
                title: 'Confirm next steps with our team',
                desc: 'Receive tailored pricing, verification, and clear execution steps.'
              }
            ].map((step) => (
              <div
                key={step.num}
                className="p-6 rounded-xl bg-[#F4F7FB] border border-slate-200/80 space-y-3 relative"
              >
                <div className="w-8 h-8 rounded-lg bg-[#123B78] text-white font-bold text-sm flex items-center justify-center">
                  {step.num}
                </div>
                <h3 className="font-bold text-slate-900 text-sm">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Five Core Services Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="text-xs font-bold text-[#1677FF] uppercase tracking-wider">Five Core Offerings</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Explore Our Main Services</h2>
            <p className="text-slate-600 text-sm max-w-xl">
              Each category is structured with clear requirements, honest guidance, and prefilled WhatsApp channels.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('/services')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#123B78] hover:text-[#1677FF] transition-colors"
          >
            <span>View All Service Details</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard
              key={service.slug}
              service={service}
              index={index}
              onSelectService={(slug) => onNavigate(`/services/${slug}`)}
            />
          ))}
        </div>
      </section>

      {/* 4. Why Choose Freshshonola Multiventures */}
      <section className="bg-white border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold text-[#1677FF] uppercase tracking-wider">Why Work With Us</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                A Unified, Dependable Partner for Daily Business Tasks
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Rather than coordinating with separate unknown vendors for identity paperwork, printing, power backup, CAC registration, and POS machines, Freshshonola Multiventures gives you one responsive point of contact.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('/about')}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#123B78] hover:text-[#1677FF] transition-colors"
                >
                  <span>Learn more about our approach</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <ShieldCheck className="w-5 h-5 text-[#1677FF]" />,
                  title: 'Data Safety & Transparency',
                  desc: 'We never ask you to upload sensitive documents to web forms. Clear verification happens directly with you.'
                },
                {
                  icon: <MessageSquare className="w-5 h-5 text-emerald-600" />,
                  title: 'Direct WhatsApp Conversation',
                  desc: 'No confusing ticket numbers or robotic auto-replies. Discuss your exact requirements directly.'
                },
                {
                  icon: <Zap className="w-5 h-5 text-amber-500" />,
                  title: 'Realistic, Honest Guidance',
                  desc: 'We do not make unsupported claims, impossible timelines, or exaggerated energy promises.'
                },
                {
                  icon: <Layers className="w-5 h-5 text-[#123B78]" />,
                  title: 'Unified Multiventures Hub',
                  desc: 'Access essential commercial, identity, and tech infrastructure through one dependable local business.'
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-slate-200/90 bg-[#F4F7FB] space-y-2.5"
                >
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 5. Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <FAQAccordion
          faqs={homeFaqs}
          title="Frequently Asked Questions"
          description="Everything you need to know about contacting Freshshonola Multiventures and accessing our services."
        />
      </section>

      {/* 6. Strong Final WhatsApp CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-linear-to-r from-[#123B78] to-[#1677FF] rounded-2xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to Discuss Your Service Needs?
            </h2>
            <p className="text-blue-100 text-sm leading-relaxed">
              Connect directly with our team on WhatsApp for prompt guidance, accurate requirements, and reliable service execution.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => openWhatsApp('Hello Freshshonola Multiventures, I would like to get started with an enquiry.')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-[0.99] text-white font-semibold text-sm transition-all shadow-md cursor-pointer whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Message on WhatsApp</span>
            </button>
            <a
              href="tel:+2347068465334"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-all border border-white/20 whitespace-nowrap"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Us Direct</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
