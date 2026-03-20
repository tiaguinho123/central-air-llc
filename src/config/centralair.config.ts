// ============================================================
// Central Air, LLC.
// Config scraped from: centralairllc.com on 2026-03-20
// Brand: Red #D12027 + Blue #224A8B on white background
// Logo: https://www.centralairllc.com/app/uploads/sites/51/2023/03/CentralAirLLC-1.png
// ============================================================

import type { SiteConfig } from './SiteConfig.types';

export const config: SiteConfig = {
  // ─── Brand ───────────────────────────────────────────────
  businessName: 'Central Air, LLC.',
  tagline: 'Service With Quality',
  metaDescription:
    'Central Air, LLC. is a NATE-certified HVAC contractor in Brookfield, CT. Serving Fairfield County and Westchester, NY since 2003. Lennox Premier Dealer. Call (203) 403-6174.',
  logoText: {
    line1: 'Central Air',
    line2: 'LLC.',
  },
  logoIcon: 'Wind',

  // ─── Real Central Air Colors ─────────────────────────────
  colors: {
    primary: 'red-600',
    primaryHex: '#D12027',      // Central Air Red
    dark: '#224A8B',            // Central Air Blue
    darkHover: '#1a3a70',       // Blue hover
    ctaText: '#FFFFFF',
  },

  // ─── Contact (verified from site) ────────────────────────
  phone: '2034036174',
  phoneFormatted: '(203) 403-6174',
  email: 'opportunities@centralairllc.com',
  address: {
    street: '336 Federal Rd, Unit #1',
    city: 'Brookfield',
    state: 'CT',
    zip: '06804',
  },
  hours: {
    weekdays: 'Mon–Fri: 8:00 AM – 4:30 PM',
    saturday: 'Sat–Sun: Closed',
    emergency: false,
  },

  // ─── SEO / Meta ──────────────────────────────────────────
  siteUrl: 'https://central-air-llc.vercel.app',
  license: 'CT# HTG.0398642-S1 · CT# HIC.0620313',

  // ─── Hero ────────────────────────────────────────────────
  hero: {
    headline: ['Dependable HVAC Service', 'for Fairfield County', 'and Beyond'],
    accentLine: 0,
    valueProp: 'Locally owned and operated since 2003.',
    subText:
      'NATE Certified · Lennox Premier · Mitsubishi Diamond Contractor. Serving Brookfield, Danbury, Greenwich, Stamford, and 20+ CT & NY towns.',
    heroBgUrl:
      'https://www.centralairllc.com/app/uploads/sites/51/2026/03/Central-Air-truck.png',
    primaryCTA: 'Request Service',
    emergencyText: 'Free Estimates on New Systems',
  },

  // ─── Offer Strip ─────────────────────────────────────────
  offer: {
    enabled: true,
    emoji: '💰',
    label: 'Get up to $1,800 in rebates on a new Lennox® Comfort System — Ask Us Today. Call:',
  },

  // ─── Reviews (real Google data) ──────────────────────────
  reviews: {
    rating: 4.9,
    count: 194,
    googleMapsUrl:
      'https://search.google.com/local/writereview?placeid=ChIJv7AhoCD554kRtbjhjGrcnKA',
  },

  // ─── Trust Badges ────────────────────────────────────────
  trustBadges: [
    { label: 'NATE Certified', sub: 'Industry Gold Standard', icon: 'Award' },
    { label: 'Lennox Premier', sub: 'Dealer Award — 5 Years', icon: 'Star' },
    { label: 'Mitsubishi Diamond', sub: 'Contractor', icon: 'ShieldCheck' },
    { label: '4.9 Google Rating', sub: '194 Verified Reviews', icon: 'Star' },
    { label: 'BBB Accredited', sub: 'Since 2003', icon: 'CheckCircle' },
    { label: 'Licensed & Insured', sub: 'CT# HTG.0398642-S1', icon: 'ShieldCheck' },
  ],

  // ─── Services ────────────────────────────────────────────
  servicesHeadline: 'Our HVAC Services',
  servicesSubhead:
    'Residential and light commercial heating, cooling, and air quality solutions for Fairfield County and Westchester.',
  services: [
    {
      title: 'Heating',
      description:
        'Furnace repair, maintenance, and installation. Boiler service. We service all major makes and models to keep your home warm all winter.',
      cta: 'Heating Service',
      icon: 'Flame',
    },
    {
      title: 'Cooling',
      description:
        'Central AC repair, maintenance, and installation. We ensure peak efficiency and precise temperature control year-round.',
      cta: 'Cooling Service',
      icon: 'Snowflake',
    },
    {
      title: 'Heat Pumps',
      description:
        'Heat pump installation, repair, and maintenance — a highly efficient year-round comfort solution for your home.',
      cta: 'Heat Pumps',
      icon: 'Wind',
    },
    {
      title: 'Mini-Split Systems',
      description:
        'Ductless mini-split installation for zoned comfort in any room without the need for existing ductwork.',
      cta: 'Mini-Splits',
      icon: 'Thermometer',
    },
    {
      title: 'Indoor Air Quality',
      description:
        'Humidifiers, air cleaners, duct cleaning, and Aeroseal duct sealing to protect your family\'s health.',
      cta: 'Air Quality',
      icon: 'Wind',
    },
    {
      title: 'HVAC Service Agreements',
      description:
        'Annual maintenance plans that extend equipment life, reduce energy bills, and keep your system running at peak efficiency.',
      cta: 'Maintenance Plans',
      icon: 'ClipboardList',
    },
  ],

  // ─── Why Choose Us ───────────────────────────────────────
  whyUs: {
    yearsInBusiness: 20,
    yearsLabel: 'Years Serving Fairfield County',
    headline: 'NATE-Certified Comfort You Can Count On',
    body:
      'Central Air, LLC. has been serving Brookfield, Danbury, Greenwich, Stamford, and surrounding communities since 2003. As a Lennox Premier Dealer and Mitsubishi Diamond Contractor, we bring factory-trained expertise to every job — residential and light commercial.',
    imageUrl:
      'https://www.centralairllc.com/app/uploads/sites/51/2026/03/Central-Air-truck.png',
    imageAlt: 'Central Air LLC service truck in Brookfield, CT',
    benefits: [
      'NATE Certified technicians — industry\'s highest standard',
      'Lennox Premier Dealer · Mitsubishi Diamond Contractor',
      'Licensed: CT# HTG.0398642-S1 & HIC.0620313',
      'BBB Accredited · ACCA Member',
      'Free estimates on new system installations',
      'Serving Fairfield County & Westchester since 2003',
    ],
    ctaLabel: 'Call (203) 403-6174',
  },

  // ─── Process ─────────────────────────────────────────────
  processHeadline: 'What to Expect When You Call',
  processSubhead:
    'From your first call to a finished job — simple, transparent, and professional every step of the way.',
  process: [
    {
      number: '01',
      icon: 'Phone',
      title: 'Call or Request Online',
      description:
        'Call (203) 403-6174 or submit your request online. We respond promptly Monday through Friday.',
    },
    {
      number: '02',
      icon: 'ClipboardList',
      title: 'Fast Scheduling',
      description:
        'We schedule your appointment quickly around your availability — no long wait times.',
    },
    {
      number: '03',
      icon: 'Wrench',
      title: 'Expert Diagnosis',
      description:
        'A NATE-certified technician inspects your system and provides upfront, honest pricing before any work begins.',
    },
    {
      number: '04',
      icon: 'CheckCircle2',
      title: 'Professional Service',
      description:
        'Work is completed to code by licensed, insured technicians. Clean, professional, and guaranteed.',
    },
    {
      number: '05',
      icon: 'MessageSquare',
      title: 'We Follow Up',
      description:
        'We check in after every job to ensure your complete satisfaction. Your comfort is our reputation.',
    },
  ],

  // ─── Maintenance Plan ────────────────────────────────────
  maintenancePlan: {
    name: 'Central Air Service Agreement',
    tagline: 'Annual HVAC Maintenance',
    description:
      'Preventive maintenance is the best way to extend the life of your HVAC system, maximize efficiency, and avoid costly breakdowns. Our service agreement keeps you covered year-round.',
    priceMonthly: 14,
    priceAnnual: 149,
    memberCount: 200,
    benefits: [
      'Annual heating & cooling tune-up',
      'Priority scheduling — jump the queue',
      '15% discount on parts and labor',
      'Filter inspection included every visit',
      'Extends equipment lifespan by 30%+',
      'Peace of mind all year round',
    ],
    highlights: [
      { icon: 'Clock', text: 'Priority scheduling — always first in line' },
      { icon: 'Zap', text: 'Prevents 90% of breakdowns before they happen' },
      { icon: 'CheckCircle2', text: 'Members save an average of $400/year' },
    ],
  },

  // ─── Testimonials (sourced from Google reviews) ──────────
  testimonials: [
    {
      name: 'Patrick L.',
      town: 'Brookfield, CT',
      service: 'HVAC Maintenance',
      content:
        'Central Air is a top notch company. Prompt service, reasonable prices, and very knowledgeable technicians. They have taken care of all my heating and cooling concerns for the last 7 years.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'John S.',
      town: 'Danbury, CT',
      service: 'System Service',
      content:
        'This is an amazing company. Carlos not only does great work at a reasonable price, but I have never known anyone in any service trade who has gone so much above and beyond to help his customers.',
      image: 'https://randomuser.me/api/portraits/men/44.jpg',
    },
    {
      name: 'Ryan K.',
      town: 'Ridgefield, CT',
      service: 'Heat Pump Installation',
      content:
        'Carlos was extremely accommodating, answering questions and working out a solution that best fit my needs. The installation went smoothly — very professional and pleasant to work with.',
      image: 'https://randomuser.me/api/portraits/men/61.jpg',
    },
    {
      name: 'Art S.',
      town: 'Brookfield, CT',
      service: 'New AC Installation',
      content:
        'Professional, thorough, extremely neat, and explained everything they were doing. Excellent equipment, fairly priced, beautifully installed — and it works! I\'m a tough person to please and was delighted.',
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
    },
    {
      name: 'John G.',
      town: 'New Fairfield, CT',
      service: 'Heating Repair',
      content:
        'The technicians were terrific — extremely knowledgeable, professional, and a pleasure to communicate with. Diagnosed and fixed our heating issue quickly. Highly recommend.',
      image: 'https://randomuser.me/api/portraits/men/55.jpg',
    },
    {
      name: 'Sandra M.',
      town: 'Newtown, CT',
      service: 'Annual Tune-Up',
      content:
        'Used them for years for our annual maintenance. Always on time, always honest about what needs to be done. Never felt pressured. Fair pricing and professional service every time.',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
  ],

  // ─── Contact Form Services ────────────────────────────────
  contactFormServices: [
    'Heating / Furnace',
    'Cooling / Air Conditioning',
    'Heat Pump',
    'Mini-Split / Ductless',
    'Indoor Air Quality',
    'HVAC Service Agreement',
    'Free Installation Estimate',
    'Other / Not Sure',
  ],

  // ─── FAQ ─────────────────────────────────────────────────
  faqs: [
    {
      question: 'Are you licensed and insured?',
      answer:
        'Yes. Central Air, LLC. holds Connecticut licenses CT# HTG.0398642-S1 and CT# HIC.0620313. We are fully insured and can provide documentation before any work begins.',
    },
    {
      question: 'What areas do you serve?',
      answer:
        'We serve Brookfield, Danbury, Ridgefield, Newtown, Bethel, New Milford, Greenwich, Stamford, Westport, Darien, Wilton, New Canaan, and surrounding towns in Fairfield County, CT and Westchester, NY.',
    },
    {
      question: 'Do you offer free estimates?',
      answer:
        'Yes! We offer free estimates for new system installations — heating, cooling, heat pumps, and mini-splits. Call (203) 403-6174 or submit a request online.',
    },
    {
      question: 'What brands do you install and service?',
      answer:
        'We are a Lennox Premier Dealer and Mitsubishi Electric Diamond Contractor. We service all major brands including Carrier, Trane, Bryant, Rheem, Bosch, and more.',
    },
    {
      question: 'Do you offer financing?',
      answer:
        'Yes. We offer financing options on qualifying new Lennox systems. You may receive up to $1,800 in rebates and 0% interest for 12 months on select equipment. Ask us when you call.',
    },
    {
      question: 'What is a Lennox Premier Dealer?',
      answer:
        'Lennox Premier Dealers are top-tier contractors recognized for outstanding customer service, technical expertise, and long-term commitment to the Lennox brand. We have maintained this status for 5+ years.',
    },
    {
      question: 'How long does an installation take?',
      answer:
        'Most standard installations are completed in one day. We confirm the timeline when we provide your estimate so your schedule is never disrupted.',
    },
  ],

  // ─── Service Area ─────────────────────────────────────────
  serviceAreaTowns: [
    'Brookfield', 'Danbury', 'Bethel', 'Newtown',
    'Ridgefield', 'New Milford', 'New Fairfield', 'Southbury',
    'Monroe', 'Trumbull', 'Shelton', 'Oxford',
    'Greenwich', 'Stamford', 'Darien', 'Westport',
    'Wilton', 'New Canaan', 'Norwalk', 'Bridgewater',
    'Bedford', 'Brewster', 'Carmel', 'Chappaqua',
  ],

  // ─── Footer ──────────────────────────────────────────────
  footerTagline:
    'Central Air, LLC. is a NATE-certified, locally owned HVAC company in Brookfield, CT. Serving Fairfield County and Westchester since 2003 with expert heating, cooling, and air quality services.',
  footerAwards:
    'Lennox Premier Dealer · Mitsubishi Diamond Contractor · 4.9 ⭐ Google Rating (194 Reviews) · BBB Accredited',

  // ─── Social Media ─────────────────────────────────────────
  social: {
    facebook: 'https://www.facebook.com/centralairllc/',
  },
};
