import React from 'react';
import { Home, Layers, MessageSquare, ArrowLeft } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
  attemptedPath?: string;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate, attemptedPath }) => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-8">
      <div className="space-y-3">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 text-[#123B78] font-black text-2xl flex items-center justify-center mx-auto shadow-xs">
          404
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          The page you requested {attemptedPath ? <span className="font-mono text-slate-800">({attemptedPath})</span> : null} does not exist or has been moved.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <button
          type="button"
          onClick={() => onNavigate('/')}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#123B78] hover:bg-[#0e2f60] text-white font-semibold text-xs transition-colors shadow-xs"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </button>

        <button
          type="button"
          onClick={() => onNavigate('/services')}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-xs transition-colors shadow-xs"
        >
          <Layers className="w-4 h-4 text-blue-600" />
          <span>View All Services</span>
        </button>

        <button
          type="button"
          onClick={() => openWhatsApp('Hello Freshshonola Multiventures, I was looking for a page on your website that seems to be missing.')}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors shadow-xs"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Ask on WhatsApp</span>
        </button>
      </div>
    </div>
  );
};
