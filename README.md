# Freshshonola Multiventures — Official Website

A modern, high-performance, mobile-responsive, sales-driven website built for **Freshshonola Multiventures**, a Nigerian multiventures service enterprise.

The website is engineered to generate qualified customer enquiries and convert website visitors into direct WhatsApp conversations via the verified number **`+234 706 846 5334`** (`https://wa.me/2347068465334`).

---

## 🌟 The Five Core Services

1. **NIN Services** (`/services/nin-services`): Information and authorized enquiry support for National Identification Number registration assistance, update/modification guidance, and document readiness.
2. **Computer and General Printing** (`/services/computer-printing`): Document typing, black-and-white & colour printing, photocopying, digital scanning, laminating, and finishing.
3. **Solar Installation and Maintenance** (`/services/solar-installation-maintenance`): Residential solar power systems, hybrid inverters, battery storage setups, panel maintenance, and troubleshooting.
4. **CAC Registration** (`/services/cac-registration`): Business name registration, company incorporation assistance, name availability searches, and filing guidance.
5. **Moniepoint POS Agent Services** (`/services/moniepoint-pos`): POS onboarding enquiries, terminal application guidance, and merchant support.

---

## 🔒 Architecture & Supabase Integration

- **Supabase Backend Connected**: Configured with your Supabase database (`https://qbokzgdiaanzqerjmxyv.supabase.co`).
- **Lead Capture & Storage**: All customer enquiries submitted via the website forms are logged into your Supabase `customer_enquiries` table using Row Level Security (RLS).
- **Direct WhatsApp Conversion**: Simultaneously launches WhatsApp with the customer's prefilled enquiry message.
- **Privacy & Security**: Anonymous users can insert their own enquiries, but cannot read other users' data. Only authenticated staff can view and manage leads.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

```bash
npm install
```

### Local Development

Start the development server:

```bash
npm run dev
```

The app will be accessible at `http://localhost:3000`.

### Production Build

Compile TypeScript and build the optimized static production bundle:

```bash
npm run build
```

The compiled assets will be located in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

---

## 🌐 Deployment Guidelines

### Deploying on Vercel

1. Push this repository to GitHub or GitLab.
2. Import the project into your Vercel Dashboard.
3. The included `vercel.json` automatically configures Vite SPA rewrites so direct navigation to deep links (such as `/services/solar-installation-maintenance` or `/about`) and browser refreshes resolve properly to `index.html`.
4. Build Command: `npm run build`
5. Output Directory: `dist`

### Deploying on Netlify

1. Connect your repository to Netlify.
2. The included `public/_redirects` rule (`/*  /index.html  200`) ensures client-side routing works seamlessly on all direct URLs and refreshes.
3. Build Command: `npm run build`
4. Publish Directory: `dist`

---

## 📋 Verified Business Information & Confirmation Checklist

- **Business Name**: Freshshonola Multiventures
- **Country**: Nigeria
- **Primary Conversion Channel**: WhatsApp (+234 706 846 5334)
- **Direct WhatsApp URL**: `https://wa.me/2347068465334`
- **Call-to-Phone**: `tel:+2347068465334`
- **Working Hours**: Monday – Saturday (8:00 AM – 6:00 PM WAT)
- **Physical Address**: To be updated by business owner if a specific storefront street address is confirmed.
