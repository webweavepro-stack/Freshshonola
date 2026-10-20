/**
 * Central Configuration for Freshshonola Multiventures Services
 * Contains structured service definitions, requirements, disclaimers, FAQs, and WhatsApp templates.
 */

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceRequirementItem {
  title: string;
  description: string;
  isMandatory?: boolean;
}

export interface ServiceDefinition {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  categoryTag: string;
  ctaLabel: string;
  defaultWhatsAppMessage: string;
  potentialOfferings: string[];
  requirementsChecklist: ServiceRequirementItem[];
  importantNotes: string[];
  howItWorks: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: ServiceFAQ[];
  formFields: {
    id: string;
    label: string;
    type: 'text' | 'select' | 'number' | 'textarea';
    placeholder?: string;
    options?: string[];
    required?: boolean;
    helperText?: string;
  }[];
  formatCustomMessage: (formData: Record<string, string>) => string;
}

export const SERVICES_DATA: ServiceDefinition[] = [
  {
    slug: 'nin-services',
    title: 'NIN Services',
    shortDescription: 'Guidance and authorized assistance for National Identification Number enquiries, registration support, and updates.',
    fullDescription: 'Providing clear information and enquiry support for the NIN-related services that Freshshonola Multiventures is authorized and equipped to offer. We assist individuals in preparing the exact required documentation before visiting our office, saving you unnecessary queues and stress.',
    heroImage: '/src/assets/images/nin_identity_service_1792469794519.jpg',
    categoryTag: 'Identity & Documentation',
    ctaLabel: 'ENQUIRE ABOUT NIN SERVICES',
    defaultWhatsAppMessage: 'Hello Freshshonola Multiventures. I would like to enquire about your NIN services. Please send me the requirements, applicable fees, and next steps.',
    potentialOfferings: [
      'NIN registration assistance',
      'NIN modification or update assistance (where authorized)',
      'NIN-related enquiries and guidance',
      'Other confirmed NIN services offered by the business'
    ],
    requirementsChecklist: [
      {
        title: 'Valid Identification Document',
        description: 'A recognized government ID such as Voter Card, International Passport, or Birth Certificate/Age Declaration (where applicable).',
        isMandatory: false
      },
      {
        title: 'Existing NIN Details',
        description: 'Required if you are seeking a modification, reprint, or update to your existing identity profile.',
        isMandatory: false
      },
      {
        title: 'Accurate Personal Information',
        description: 'Full legal name, correct date of birth, state of origin, and residential details matching your records.',
        isMandatory: true
      },
      {
        title: 'Supporting Documents for Changes',
        description: 'For corrections or modifications, relevant documentation such as Newspaper Publication, Court Affidavit, or Marriage Certificate may be needed.',
        isMandatory: false
      }
    ],
    importantNotes: [
      'Requirements depend on the specific NIN service requested. Not all documents are required for every service.',
      'For your safety and data privacy, NEVER upload or disclose sensitive identity documents, NIN slips, or biometric details through this website.',
      'Freshshonola Multiventures provides verified guidance. Please contact our team via WhatsApp to confirm the exact requirements for your specific case before visiting.'
    ],
    howItWorks: [
      {
        step: '1',
        title: 'Select Specific Service',
        description: 'Identify whether you need new registration support, an update/correction, or general guidance.'
      },
      {
        step: '2',
        title: 'Chat with Us on WhatsApp',
        description: 'Reach out to confirm document prerequisites and current processing guidance.'
      },
      {
        step: '3',
        title: 'Visit with Prepared Documents',
        description: 'Visit our office with your verified documents ready for seamless and prompt assistance.'
      }
    ],
    faqs: [
      {
        question: 'What documents are required for a new NIN registration?',
        answer: 'Typically, an acceptable proof of identity such as a Birth Certificate, Declaration of Age, or Valid ID card is required. Requirements can vary depending on age and category, so we encourage messaging us on WhatsApp to verify your exact situation.'
      },
      {
        question: 'Can I do a date of birth or name modification?',
        answer: 'Modification availability depends on current regulatory directives and required supporting documentation (e.g. court affidavit, newspaper publication). Chat with us to verify eligibility and the required paperwork.'
      },
      {
        question: 'Should I send my NIN number through the website?',
        answer: 'No. To protect your personal data, we never collect sensitive identity numbers through online website forms. All consultations happen directly on WhatsApp or in person.'
      }
    ],
    formFields: [
      {
        id: 'serviceType',
        label: 'Specific NIN Service',
        type: 'select',
        options: [
          'NIN Registration Assistance',
          'NIN Modification / Update Assistance',
          'NIN Verification / Enquiry Guidance',
          'Other NIN Service'
        ],
        required: true
      },
      {
        id: 'fullName',
        label: 'Your Name (Optional)',
        type: 'text',
        placeholder: 'e.g. Adeola Johnson'
      },
      {
        id: 'notes',
        label: 'Additional Question or Note',
        type: 'textarea',
        placeholder: 'Briefly mention what you would like to know...'
      }
    ],
    formatCustomMessage: (data) => {
      let msg = 'Hello Freshshonola Multiventures. I would like to enquire about your NIN services.';
      if (data.serviceType) {
        msg += ` Service required: ${data.serviceType}.`;
      }
      if (data.fullName?.trim()) {
        msg += ` My name is ${data.fullName.trim()}.`;
      }
      if (data.notes?.trim()) {
        msg += ` Details: ${data.notes.trim()}.`;
      }
      msg += ' Please send me the requirements, applicable fees, and next steps.';
      return msg;
    }
  },
  {
    slug: 'computer-printing',
    title: 'Computer and General Printing',
    shortDescription: 'Professional document typing, black-and-white & colour printing, photocopying, scanning, and laminating.',
    fullDescription: 'Comprehensive document preparation and high-quality printing services tailored for students, professionals, business owners, and corporate teams. We ensure sharp clarity, accurate formatting, and prompt turnaround.',
    heroImage: '/src/assets/images/printing_stationery_service_1792469795889.jpg',
    categoryTag: 'Business & Office Support',
    ctaLabel: 'GET PRINTING ASSISTANCE',
    defaultWhatsAppMessage: 'Hello Freshshonola Multiventures. I need assistance with computer and general printing. Service required: Document Printing. Number of copies: 1. Please let me know the requirements and price.',
    potentialOfferings: [
      'Document typing and formatting',
      'Black-and-white and colour printing',
      'High-speed photocopying',
      'Digital document scanning',
      'Protective laminating (A4, ID card size, and custom)',
      'Document preparation and finishing',
      'Other confirmed general computer services'
    ],
    requirementsChecklist: [
      {
        title: 'Document or File to Process',
        description: 'Provide the file via flash drive, email, or WhatsApp (PDF, DOCX, JPG/PNG, or physical hardcopy).',
        isMandatory: true
      },
      {
        title: 'Number of Copies Needed',
        description: 'Specify the exact quantity of prints or photocopies required.',
        isMandatory: true
      },
      {
        title: 'Paper Size & Specifications',
        description: 'Select standard sizes such as A4, legal, or custom dimensions.',
        isMandatory: true
      },
      {
        title: 'Colour or Black-and-White Preference',
        description: 'Specify full colour or standard monochrome to determine appropriate machine setup.',
        isMandatory: true
      },
      {
        title: 'Finishing or Formatting Options',
        description: 'State whether you need spiral binding, laminating, staple-finishing, or margin alignment.',
        isMandatory: false
      },
      {
        title: 'Target Delivery Deadline',
        description: 'Let us know if your job is urgent or time-sensitive so we can schedule accordingly.',
        isMandatory: false
      }
    ],
    importantNotes: [
      'Final pricing depends directly on the chosen service, exact page count, colour coverage, paper weight, and finishing requirements.',
      'We do not publish fixed or invented prices online to ensure you always receive an accurate, fair quote based on current paper stock and job specifics.',
      'You can share your file on WhatsApp for quick review and price quotation.'
    ],
    howItWorks: [
      {
        step: '1',
        title: 'Specify Print Details',
        description: 'State the service type, number of copies, and whether you require colour or black & white.'
      },
      {
        step: '2',
        title: 'Send File or Details via WhatsApp',
        description: 'Send your file or brief directly to our WhatsApp channel for immediate review.'
      },
      {
        step: '3',
        title: 'Receive Confirmation & Collect',
        description: 'Confirm the pricing and pick up your neatly finished, high-quality prints.'
      }
    ],
    faqs: [
      {
        question: 'Can I send documents directly via WhatsApp for printing?',
        answer: 'Yes! You can send your PDF or Word documents directly to our WhatsApp number, confirm formatting and copy count, and have them prepared for pickup.'
      },
      {
        question: 'Do you offer bulk printing discounts for projects or events?',
        answer: 'Yes, volume pricing is available for high-page count jobs, manuals, brochures, and event programmes. Message us on WhatsApp with your exact page count for a tailored quote.'
      },
      {
        question: 'What file formats do you accept?',
        answer: 'We accept PDF, Microsoft Word (.docx), Excel, PowerPoint, and image formats (JPG, PNG). PDF is recommended for preserving font rendering and layouts.'
      }
    ],
    formFields: [
      {
        id: 'printService',
        label: 'Service Required',
        type: 'select',
        options: [
          'Black-and-White Printing',
          'Full Colour Printing',
          'Document Typing & Formatting',
          'Photocopying',
          'Document Scanning',
          'Laminating',
          'Bulk Printing & Finishing'
        ],
        required: true
      },
      {
        id: 'copies',
        label: 'Number of Copies / Pages',
        type: 'text',
        placeholder: 'e.g. 50 copies of a 4-page report'
      },
      {
        id: 'paperSize',
        label: 'Paper Size & Finishing',
        type: 'select',
        options: ['A4 Standard', 'A4 Laminated', 'Legal / Foolscap', 'A3', 'Custom / Other']
      },
      {
        id: 'deadline',
        label: 'Deadline / Need By (Optional)',
        type: 'text',
        placeholder: 'e.g. Today by 3pm, Tomorrow morning'
      }
    ],
    formatCustomMessage: (data) => {
      const service = data.printService || 'computer and general printing';
      const copies = data.copies?.trim() || 'to be specified';
      let msg = `Hello Freshshonola Multiventures. I need assistance with computer and general printing. Service required: ${service}. Number of copies: ${copies}.`;
      if (data.paperSize) {
        msg += ` Specification: ${data.paperSize}.`;
      }
      if (data.deadline?.trim()) {
        msg += ` Target deadline: ${data.deadline.trim()}.`;
      }
      msg += ' Please let me know the requirements and price.';
      return msg;
    }
  },
  {
    slug: 'solar-installation-maintenance',
    title: 'Solar Installation and Maintenance',
    shortDescription: 'Custom residential and commercial solar installations, hybrid inverters, battery setups, and system maintenance.',
    fullDescription: 'Providing reliable, clean, alternative power systems engineered for Nigerian homes, shops, and offices. From new turn-key installations to troubleshooting existing inverter/battery setups, we help you achieve dependable electricity.',
    heroImage: '/src/assets/images/solar_inverter_system_1792469796118.jpg',
    categoryTag: 'Energy & Power Systems',
    ctaLabel: 'REQUEST A SOLAR CONSULTATION',
    defaultWhatsAppMessage: 'Hello Freshshonola Multiventures. I am interested in your solar installation and maintenance services. Location: Nigeria. Service required: New Solar Installation. Please advise me on the requirements and next steps.',
    potentialOfferings: [
      'Solar installation consultation and load assessment',
      'Residential and commercial solar power systems',
      'Pure sine wave inverter and lithium/tubular battery setup',
      'Routine solar maintenance and panel cleaning',
      'System inspection, diagnostic testing, and troubleshooting',
      'Energy usage and appliance audit'
    ],
    requirementsChecklist: [
      {
        title: "Customer's Name & Contact",
        description: 'Your name and contact phone number for communication and follow-up.',
        isMandatory: true
      },
      {
        title: 'Installation Location',
        description: 'City, area, or neighbourhood where the property is situated.',
        isMandatory: true
      },
      {
        title: 'Type of Property',
        description: 'Residential flat, duplex, retail shop, small office, or warehouse.',
        isMandatory: true
      },
      {
        title: 'Appliances You Want to Power',
        description: 'Listing key loads such as lights, fans, TVs, refrigerators, pumps, or air conditioners.',
        isMandatory: true
      },
      {
        title: 'Approximate Power Consumption',
        description: 'If known, average daily wattage or your current electricity billing/generator runtime.',
        isMandatory: false
      },
      {
        title: 'Existing Equipment (if any)',
        description: 'Details on existing inverter capacity, battery count/type, or solar panels already in place.',
        isMandatory: false
      },
      {
        title: 'Preferred Budget Range',
        description: 'Helps us recommend the most practical component configuration for your targets.',
        isMandatory: false
      },
      {
        title: 'Requested Service Focus',
        description: 'Specify whether you need a new installation, system upgrade, maintenance, or repair.',
        isMandatory: true
      }
    ],
    importantNotes: [
      'Final equipment sizing and pricing require a detailed load assessment of your appliances and property conditions.',
      'We do not make unsupported claims regarding guaranteed backup duration or unrealistic savings without assessing your actual energy habits.',
      'Quality inverters and battery chemistry (Lithium LiFePO4 vs. Tubular Gel) are selected according to your load profile and budget.'
    ],
    howItWorks: [
      {
        step: '1',
        title: 'Share Your Power Needs',
        description: 'Tell us your location, property type, and the appliances you plan to run.'
      },
      {
        step: '2',
        title: 'Consultation & Load Audit',
        description: 'We calculate your peak wattage and daily kilowatt-hour demand via WhatsApp consultation.'
      },
      {
        step: '3',
        title: 'Transparent Recommendation',
        description: 'Receive a clear equipment breakdown (panels, inverter, battery capacity) and next steps.'
      }
    ],
    faqs: [
      {
        question: 'How do you determine what inverter and battery size I need?',
        answer: 'We calculate the combined wattage of the appliances you want to run simultaneously, along with the number of hours you need backup. This ensures you do not buy an undersized or unnecessarily oversized system.'
      },
      {
        question: 'Do you troubleshoot or repair existing inverter systems?',
        answer: 'Yes! If you already have an inverter, battery, or solar setup that is draining fast, not charging, or showing fault codes, we can inspect and troubleshoot the setup.'
      },
      {
        question: 'Can a solar system power my refrigerator or freezer?',
        answer: 'Yes, provided the inverter rating has adequate surge handling capacity and the battery bank can support the compressor startup load. We assess this during consultation.'
      }
    ],
    formFields: [
      {
        id: 'solarService',
        label: 'Requested Service',
        type: 'select',
        options: [
          'New Solar & Inverter Installation',
          'Inverter & Battery Setup (No Panels)',
          'System Upgrade / Expansion',
          'Maintenance & Panel Cleaning',
          'Troubleshooting / Fault Repair',
          'General Solar Consultation'
        ],
        required: true
      },
      {
        id: 'location',
        label: 'Location / Area',
        type: 'text',
        placeholder: 'e.g. Ikeja, Lagos / Ibadan / Abeokuta',
        required: true
      },
      {
        id: 'propertyType',
        label: 'Property Type',
        type: 'select',
        options: ['Residential Flat / Apartment', 'Duplex / Detached House', 'Retail Store / Shop', 'Office / Commercial', 'Other']
      },
      {
        id: 'appliances',
        label: 'Key Appliances to Power',
        type: 'textarea',
        placeholder: 'e.g. 5 lights, 3 fans, 1 TV, 1 small fridge, laptops'
      }
    ],
    formatCustomMessage: (data) => {
      const loc = data.location?.trim() || 'Nigeria';
      const service = data.solarService || 'Solar Installation and Maintenance';
      let msg = `Hello Freshshonola Multiventures. I am interested in your solar installation and maintenance services. Location: ${loc}. Service required: ${service}.`;
      if (data.propertyType) {
        msg += ` Property: ${data.propertyType}.`;
      }
      if (data.appliances?.trim()) {
        msg += ` Key appliances: ${data.appliances.trim()}.`;
      }
      msg += ' Please advise me on the requirements and next steps.';
      return msg;
    }
  },
  {
    slug: 'cac-registration',
    title: 'CAC Registration',
    shortDescription: 'Guidance and professional facilitation for Corporate Affairs Commission business name and company registrations.',
    fullDescription: 'Assisting Nigerian entrepreneurs and business owners through the Corporate Affairs Commission (CAC) registration process. We guide you through name availability checks, document collation, and proper filing to give your venture legal identity.',
    heroImage: '/src/assets/images/cac_business_registration_1792469795929.jpg',
    categoryTag: 'Corporate & Legal Documentation',
    ctaLabel: 'START CAC REGISTRATION ENQUIRY',
    defaultWhatsAppMessage: 'Hello Freshshonola Multiventures. I would like to enquire about CAC registration. Registration type: Business Name Registration. Proposed business name: Not yet submitted. Please provide the requirements and next steps.',
    potentialOfferings: [
      'Business name registration assistance (Enterprise / Venture)',
      'Company registration assistance (Private Limited Liability - Ltd)',
      'Registration process guidance and name availability checks',
      'Relevant post-registration services and filings (where offered)'
    ],
    requirementsChecklist: [
      {
        title: 'Proposed Business Name(s)',
        description: 'Provide two or three preferred business names in order of preference for the mandatory availability search.',
        isMandatory: true
      },
      {
        title: 'Registration Category',
        description: 'Specify whether you are registering a Business Name (Sole Proprietorship/Partnership) or Company (Limited by Shares).',
        isMandatory: true
      },
      {
        title: 'Applicant / Proprietor / Director Details',
        description: 'Full legal names, nationality, residential address, occupation, and date of birth.',
        isMandatory: true
      },
      {
        title: 'Contact Information',
        description: 'Active email address and phone number for CAC notification updates and official registration portal linking.',
        isMandatory: true
      },
      {
        title: 'Valid Identification & Signature',
        description: 'Recognized government ID (Voter Card, NIN, Passport, or Drivers License) and clear signature image.',
        isMandatory: true
      },
      {
        title: 'Nature of Business Description',
        description: 'A concise description of the goods or services your business aims to provide.',
        isMandatory: true
      }
    ],
    importantNotes: [
      'Freshshonola Multiventures is an accredited facilitation service that assists clients with CAC procedures. We do not represent the Corporate Affairs Commission itself.',
      'Exact requirements and statutory processing times depend on current CAC portal regulations and name availability status.',
      'We do not guarantee instant or unconditional approvals, as final authorization is solely determined by the Corporate Affairs Commission.'
    ],
    howItWorks: [
      {
        step: '1',
        title: 'Name Search & Consultation',
        description: 'Submit your preferred business names to verify availability on the CAC registry.'
      },
      {
        step: '2',
        title: 'Document & Details Verification',
        description: 'Review the required proprietor details, ID, and address information via WhatsApp.'
      },
      {
        step: '3',
        title: 'Filing & Certificate Tracking',
        description: 'Track the application until issuance of your official CAC certificate and Status Report.'
      }
    ],
    faqs: [
      {
        question: 'What is the difference between a Business Name and a Company (Ltd)?',
        answer: 'A Business Name (Enterprise) is simpler and ideal for small sole proprietorships or retail operations. A Limited Liability Company (Ltd) is a distinct corporate legal entity required by many corporate clients and tenders.'
      },
      {
        question: 'Why do I need to provide more than one business name?',
        answer: 'The CAC requires an availability search. If your first choice is already registered or closely resembles an existing brand, your alternative name can be checked immediately without starting over.'
      },
      {
        question: 'How long does a CAC business name registration typically take?',
        answer: 'Once name reservation is approved and required documents are lodged, processing typically takes a few working days, subject to CAC portal queue and query-free review.'
      }
    ],
    formFields: [
      {
        id: 'regType',
        label: 'Type of Registration',
        type: 'select',
        options: [
          'Business Name (Enterprise / Sole Proprietorship)',
          'Private Limited Liability Company (Ltd)',
          'Incorporated Trustees / NGO',
          'Name Reservation / Search Only',
          'Post-Registration Enquiry'
        ],
        required: true
      },
      {
        id: 'proposedName',
        label: 'Proposed Business Name (Option 1)',
        type: 'text',
        placeholder: 'e.g. Apex Green Farms'
      },
      {
        id: 'proposedName2',
        label: 'Alternative Name (Option 2)',
        type: 'text',
        placeholder: 'e.g. Apex Agro Ventures'
      },
      {
        id: 'businessNature',
        label: 'Nature of Business',
        type: 'text',
        placeholder: 'e.g. Retail fashion, IT services, Food catering'
      }
    ],
    formatCustomMessage: (data) => {
      const type = data.regType || 'Business Name Registration';
      const name = data.proposedName?.trim() || 'Not yet chosen';
      let msg = `Hello Freshshonola Multiventures. I would like to enquire about CAC registration. Registration type: ${type}. Proposed business name: ${name}.`;
      if (data.proposedName2?.trim()) {
        msg += ` Alternative name: ${data.proposedName2.trim()}.`;
      }
      if (data.businessNature?.trim()) {
        msg += ` Business nature: ${data.businessNature.trim()}.`;
      }
      msg += ' Please provide the requirements and next steps.';
      return msg;
    }
  },
  {
    slug: 'moniepoint-pos',
    title: 'Moniepoint POS Agent Services',
    shortDescription: 'Support for Moniepoint POS terminal onboarding, merchant enquiries, and agent support.',
    fullDescription: 'Facilitating reliable merchant solutions and agency banking for Nigerian retailers, shop owners, and agents. We guide you through the requirements for Moniepoint POS terminals to help you process card payments, transfers, and cash services with high network stability.',
    heroImage: '/src/assets/images/pos_terminal_merchant_1792469796587.jpg',
    categoryTag: 'Fintech & Agency Banking',
    ctaLabel: 'ENQUIRE ABOUT MONIEPOINT POS',
    defaultWhatsAppMessage: 'Hello Freshshonola Multiventures. I would like to enquire about your Moniepoint POS agent services. Service required: POS Terminal Application. Business location: Nigeria. Please explain the current requirements and application process.',
    potentialOfferings: [
      'POS onboarding enquiries and account guidance',
      'POS terminal application assistance',
      'Merchant service and card payment setup enquiries',
      'Existing agent guidance and terminal troubleshooting support',
      'Other confirmed POS-related facilitation services'
    ],
    requirementsChecklist: [
      {
        title: "Applicant's Full Name",
        description: 'Legal name matching your BVN and official identity documents.',
        isMandatory: true
      },
      {
        title: 'Active Phone Number',
        description: 'Phone number linked with your banking credentials and WhatsApp.',
        isMandatory: true
      },
      {
        title: 'Business Name & Trade Type',
        description: 'Name of your shop, store, kiosk, or enterprise.',
        isMandatory: true
      },
      {
        title: 'Physical Business Location',
        description: 'Specific street address, market area, or commercial centre where the terminal will operate.',
        isMandatory: true
      },
      {
        title: 'Requested POS Service',
        description: 'Specify whether you are applying for a new terminal, upgrading, or seeking agent support.',
        isMandatory: true
      },
      {
        title: 'Provider Onboarding Prerequisites',
        description: 'Any additional verification items required under the provider’s current onboarding policy (such as valid ID, utility bill, or passport photo).',
        isMandatory: false
      }
    ],
    importantNotes: [
      'Freshshonola Multiventures assists agents and merchants with the onboarding and inquiry process. We do not claim official corporate representation of Moniepoint Inc.',
      'Terminal availability, caution fees, eligibility criteria, and transaction charges are set directly by the provider and may change according to provider policies.',
      'Approval of POS terminal issuance is subject to the provider’s regulatory compliance and verification standards.'
    ],
    howItWorks: [
      {
        step: '1',
        title: 'Submit Basic Details',
        description: 'Let us know your business location and intended transaction volume via WhatsApp.'
      },
      {
        step: '2',
        title: 'Review Requirements & Terms',
        description: 'We clarify the current requirements, terminal caution fees, and onboarding steps.'
      },
      {
        step: '3',
        title: 'Terminal Setup & Activation',
        description: 'Complete registration on the agent portal and prepare your terminal for customer transactions.'
      }
    ],
    faqs: [
      {
        question: 'Who is eligible to get a Moniepoint POS terminal?',
        answer: 'Business owners, retailers, supermarket operators, fuel station attendants, and aspiring agency banking operators who have an active physical location and valid verification.'
      },
      {
        question: 'What are the benefits of Moniepoint POS for my business?',
        answer: 'Known across Nigeria for fast dispute resolution, reliable network uptime, dual SIM support, instant settlements, and ability to accept ATM card payments and bank transfers.'
      },
      {
        question: 'Do you charge extra hidden fees?',
        answer: 'No. All terminal costs and caution fees are transparently explained in line with current provider guidelines before you proceed.'
      }
    ],
    formFields: [
      {
        id: 'posService',
        label: 'Requested Service',
        type: 'select',
        options: [
          'New POS Terminal Application',
          'Merchant Account Onboarding',
          'Existing Agent Support / Guidance',
          'General POS Enquiry'
        ],
        required: true
      },
      {
        id: 'bizName',
        label: 'Business Name (Optional)',
        type: 'text',
        placeholder: 'e.g. Blessed Supermarket'
      },
      {
        id: 'bizLocation',
        label: 'Business Location',
        type: 'text',
        placeholder: 'e.g. Alaba Market, Lagos / Bodija, Ibadan',
        required: true
      },
      {
        id: 'bizType',
        label: 'Line of Business',
        type: 'select',
        options: ['Agency Banking / Cashier', 'Retail Shop / Supermarket', 'Pharmacy / Health', 'Food & Restaurant', 'Other']
      }
    ],
    formatCustomMessage: (data) => {
      const service = data.posService || 'POS Terminal Application';
      const loc = data.bizLocation?.trim() || 'Nigeria';
      let msg = `Hello Freshshonola Multiventures. I would like to enquire about your Moniepoint POS agent services. Service required: ${service}. Business location: ${loc}.`;
      if (data.bizName?.trim()) {
        msg += ` Business name: ${data.bizName.trim()}.`;
      }
      if (data.bizType) {
        msg += ` Line of business: ${data.bizType}.`;
      }
      msg += ' Please explain the current requirements and application process.';
      return msg;
    }
  }
];

export function getServiceBySlug(slug: string): ServiceDefinition | undefined {
  return SERVICES_DATA.find((s) => s.slug === slug);
}
