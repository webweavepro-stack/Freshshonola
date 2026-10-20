import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { getServiceBySlug } from './data/servicesData';

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update page title and scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const path = currentPath.replace(/\/$/, '') || '/';
    let title = 'Freshshonola Multiventures – Essential Business, Printing & Solar Services';

    if (path === '/services') {
      title = 'Our Services – Freshshonola Multiventures';
    } else if (path.startsWith('/services/')) {
      const slug = path.replace('/services/', '');
      const srv = getServiceBySlug(slug);
      if (srv) {
        title = `${srv.title} – Freshshonola Multiventures`;
      } else {
        title = 'Service Details – Freshshonola Multiventures';
      }
    } else if (path === '/about') {
      title = 'About Us – Freshshonola Multiventures';
    } else if (path === '/contact') {
      title = 'Contact Us & Inquiries – Freshshonola Multiventures';
    } else if (path === '/privacy') {
      title = 'Privacy Policy – Freshshonola Multiventures';
    } else if (path !== '/') {
      title = 'Page Not Found – Freshshonola Multiventures';
    }

    document.title = title;
  }, [currentPath]);

  const navigate = (path: string) => {
    if (path === currentPath) return;
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  // Route resolver
  const renderCurrentRoute = () => {
    const normalized = currentPath.replace(/\/$/, '') || '/';

    if (normalized === '/') {
      return <HomePage onNavigate={navigate} />;
    }

    if (normalized === '/services') {
      return <ServicesPage onNavigate={navigate} />;
    }

    if (normalized.startsWith('/services/')) {
      const slug = normalized.replace('/services/', '');
      const service = getServiceBySlug(slug);
      if (service) {
        return <ServiceDetailPage slug={slug} onNavigate={navigate} />;
      }
      return <NotFoundPage onNavigate={navigate} attemptedPath={normalized} />;
    }

    if (normalized === '/about') {
      return <AboutPage onNavigate={navigate} />;
    }

    if (normalized === '/contact') {
      return <ContactPage />;
    }

    if (normalized === '/privacy') {
      return <PrivacyPage onNavigate={navigate} />;
    }

    return <NotFoundPage onNavigate={navigate} attemptedPath={normalized} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FB] text-[#172033] font-sans">
      <Header currentPath={currentPath} onNavigate={navigate} />
      <main className="flex-1 pb-16">
        {renderCurrentRoute()}
      </main>
      <Footer onNavigate={navigate} />
      <FloatingWhatsApp />
    </div>
  );
}
