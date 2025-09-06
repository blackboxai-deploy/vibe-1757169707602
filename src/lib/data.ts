// Mock data for the BusinessIntel Chemical Market Platform

export interface Company {
  id: string;
  name: string;
  type: 'supplier' | 'trader' | 'logistics';
  description: string;
  location: string;
  specialties: string[];
  certifications: string[];
  verified: boolean;
  contactEmail: string;
  phone: string;
  website: string;
  yearEstablished: number;
  employeeCount: string;
  image: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: 'market' | 'regulatory' | 'company' | 'technology';
  author: string;
  publishDate: string;
  readTime: number;
  image: string;
}

export interface TradeOpportunity {
  id: string;
  chemical: string;
  type: 'buy' | 'sell';
  quantity: string;
  price: string;
  location: string;
  company: string;
  description: string;
  validUntil: string;
  specifications: string[];
}

export interface LogisticsService {
  id: string;
  company: string;
  serviceType: 'transport' | 'storage' | 'handling' | 'documentation';
  description: string;
  coverage: string[];
  certifications: string[];
  contactEmail: string;
  image: string;
}

export const companies: Company[] = [
  {
    id: '1',
    name: 'ChemCore Solutions',
    type: 'supplier',
    description: 'Leading supplier of specialty chemicals and industrial compounds with over 30 years of experience serving global markets.',
    location: 'Houston, Texas, USA',
    specialties: ['Petrochemicals', 'Specialty Chemicals', 'Industrial Solvents'],
    certifications: ['ISO 9001', 'REACH', 'FDA Approved'],
    verified: true,
    contactEmail: 'info@chemcore.com',
    phone: '+1-713-555-0123',
    website: 'www.chemcore.com',
    yearEstablished: 1992,
    employeeCount: '500-1000',
    image: 'https://placehold.co/400x300?text=Modern+chemical+manufacturing+facility+with+safety+equipment'
  },
  {
    id: '2',
    name: 'Global Trade Chemicals',
    type: 'trader',
    description: 'International chemical trading company facilitating connections between suppliers and buyers across 40+ countries.',
    location: 'Singapore',
    specialties: ['Chemical Trading', 'Market Intelligence', 'Supply Chain Solutions'],
    certifications: ['ISO 14001', 'OHSAS 18001', 'Singapore Certified'],
    verified: true,
    contactEmail: 'trading@globalchem.sg',
    phone: '+65-6555-0199',
    website: 'www.globaltradechemicals.sg',
    yearEstablished: 2008,
    employeeCount: '100-250',
    image: 'https://placehold.co/400x300?text=International+chemical+trading+office+with+global+connections'
  },
  {
    id: '3',
    name: 'EuroLogistics Chemical Transport',
    type: 'logistics',
    description: 'Specialized logistics provider for chemical transportation, storage, and handling across Europe and Asia.',
    location: 'Rotterdam, Netherlands',
    specialties: ['Chemical Transport', 'Hazmat Handling', 'Port Services'],
    certifications: ['ADR Certified', 'ISO 28000', 'IMDG Code'],
    verified: true,
    contactEmail: 'logistics@eurochemtrans.nl',
    phone: '+31-10-555-0177',
    website: 'www.eurochemtrans.nl',
    yearEstablished: 2003,
    employeeCount: '250-500',
    image: 'https://placehold.co/400x300?text=Chemical+logistics+facility+with+specialized+transport+vehicles'
  },
  {
    id: '4',
    name: 'AsiaChem Industries',
    type: 'supplier',
    description: 'Major Asian chemical manufacturer specializing in fine chemicals, pharmaceuticals intermediates, and agrochemicals.',
    location: 'Mumbai, India',
    specialties: ['Fine Chemicals', 'Pharma Intermediates', 'Agrochemicals'],
    certifications: ['WHO-GMP', 'ISO 9001', 'REACH Registered'],
    verified: true,
    contactEmail: 'export@asiachem.in',
    phone: '+91-22-555-0145',
    website: 'www.asiachemindustries.com',
    yearEstablished: 1987,
    employeeCount: '1000+',
    image: 'https://placehold.co/400x300?text=Large+Asian+chemical+production+facility+with+quality+control+labs'
  },
  {
    id: '5',
    name: 'Nordic Chemical Trading',
    type: 'trader',
    description: 'Scandinavian chemical trading house with expertise in sustainable and bio-based chemicals.',
    location: 'Stockholm, Sweden',
    specialties: ['Sustainable Chemicals', 'Bio-based Products', 'Green Solutions'],
    certifications: ['Nordic Swan', 'ISCC Plus', 'Cradle to Cradle'],
    verified: false,
    contactEmail: 'contact@nordicchemtrade.se',
    phone: '+46-8-555-0132',
    website: 'www.nordicchemtrade.se',
    yearEstablished: 2015,
    employeeCount: '50-100',
    image: 'https://placehold.co/400x300?text=Scandinavian+sustainable+chemical+trading+office+with+green+technology'
  },
  {
    id: '6',
    name: 'MidEast Chemical Logistics',
    type: 'logistics',
    description: 'Premier chemical logistics provider serving the Middle East and North Africa with state-of-the-art facilities.',
    location: 'Dubai, UAE',
    specialties: ['Regional Distribution', 'Tank Storage', 'Customs Clearance'],
    certifications: ['IATA Dangerous Goods', 'SQAS Assessed', 'Free Zone Licensed'],
    verified: true,
    contactEmail: 'operations@mechlog.ae',
    phone: '+971-4-555-0198',
    website: 'www.mideastchemlog.ae',
    yearEstablished: 2010,
    employeeCount: '100-250',
    image: 'https://placehold.co/400x300?text=Modern+Middle+Eastern+chemical+storage+and+distribution+center'
  }
];

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Global Chemical Market Shows Strong Recovery in Q3 2024',
    summary: 'Chemical industry rebounds with 8.5% growth driven by increased demand in automotive and construction sectors.',
    content: 'The global chemical market has demonstrated remarkable resilience in the third quarter of 2024, posting an impressive 8.5% year-over-year growth. This recovery has been primarily driven by surging demand from the automotive and construction industries...',
    category: 'market',
    author: 'Sarah Chen',
    publishDate: '2024-10-15',
    readTime: 4,
    image: 'https://placehold.co/600x400?text=Chemical+market+growth+charts+and+industrial+production+data'
  },
  {
    id: '2',
    title: 'New EU REACH Regulations Impact Chemical Imports',
    summary: 'Updated REACH compliance requirements for chemical imports into EU markets take effect January 2025.',
    content: 'The European Union has announced significant updates to its REACH (Registration, Evaluation, Authorisation and restriction of CHemicals) regulations, which will take effect on January 1, 2025. These changes will particularly impact chemical importers...',
    category: 'regulatory',
    author: 'Dr. Michael Weber',
    publishDate: '2024-10-12',
    readTime: 6,
    image: 'https://placehold.co/600x400?text=EU+regulatory+documents+and+compliance+certification+process'
  },
  {
    id: '3',
    title: 'ChemCore Solutions Announces $500M Expansion in Asia',
    summary: 'Major chemical supplier invests heavily in Asian manufacturing capabilities to meet growing regional demand.',
    content: 'ChemCore Solutions, one of the leading specialty chemical suppliers, has announced a massive $500 million expansion program focused on enhancing its manufacturing capabilities across Asia...',
    category: 'company',
    author: 'James Liu',
    publishDate: '2024-10-10',
    readTime: 3,
    image: 'https://placehold.co/600x400?text=Chemical+manufacturing+facility+expansion+construction+site'
  },
  {
    id: '4',
    title: 'Revolutionary Green Chemistry Process Reduces Carbon Footprint by 70%',
    summary: 'New catalytic technology promises to transform chemical manufacturing with unprecedented environmental benefits.',
    content: 'Researchers at the International Chemical Innovation Institute have developed a groundbreaking catalytic process that can reduce carbon emissions in chemical manufacturing by up to 70%...',
    category: 'technology',
    author: 'Dr. Emma Rodriguez',
    publishDate: '2024-10-08',
    readTime: 5,
    image: 'https://placehold.co/600x400?text=Green+chemistry+laboratory+with+sustainable+technology+equipment'
  },
  {
    id: '5',
    title: 'Chemical Prices Stabilize After Volatile Summer Trading',
    summary: 'Market analysts report steady pricing trends for key industrial chemicals following months of volatility.',
    content: 'After experiencing significant price volatility throughout the summer months, the chemical commodities market has shown signs of stabilization in early October...',
    category: 'market',
    author: 'Robert Kim',
    publishDate: '2024-10-05',
    readTime: 4,
    image: 'https://placehold.co/600x400?text=Chemical+price+trading+charts+and+market+analysis+data'
  }
];

export const tradeOpportunities: TradeOpportunity[] = [
  {
    id: '1',
    chemical: 'Methanol',
    type: 'sell',
    quantity: '5,000 MT',
    price: '$425/MT',
    location: 'Houston, TX',
    company: 'ChemCore Solutions',
    description: 'High-purity methanol suitable for pharmaceutical and electronic applications. FOB Houston.',
    validUntil: '2024-11-15',
    specifications: ['Purity: 99.9%', 'Water content: <0.1%', 'Tank storage available']
  },
  {
    id: '2',
    chemical: 'Ethylene Glycol',
    type: 'buy',
    quantity: '2,000 MT',
    price: '$780/MT',
    location: 'Singapore',
    company: 'Global Trade Chemicals',
    description: 'Seeking reliable supplier for monthly ethylene glycol requirements. Long-term contract preferred.',
    validUntil: '2024-12-01',
    specifications: ['Grade: Technical', 'Monthly requirement', 'CFR Singapore']
  },
  {
    id: '3',
    chemical: 'Caustic Soda',
    type: 'sell',
    quantity: '1,500 MT',
    price: '$385/MT',
    location: 'Mumbai, India',
    company: 'AsiaChem Industries',
    description: 'Premium quality caustic soda flakes, 99% NaOH. Suitable for textile and pulp industries.',
    validUntil: '2024-11-30',
    specifications: ['Form: Flakes', 'NaOH: 99%', 'Low iron content']
  },
  {
    id: '4',
    chemical: 'Benzene',
    type: 'buy',
    quantity: '3,500 MT',
    price: '$920/MT',
    location: 'Rotterdam, Netherlands',
    company: 'Nordic Chemical Trading',
    description: 'Looking for spot cargo of benzene for European distribution. Quality certificates required.',
    validUntil: '2024-10-31',
    specifications: ['Purity: >99.5%', 'Spot cargo', 'European specs']
  }
];

export const logisticsServices: LogisticsService[] = [
  {
    id: '1',
    company: 'EuroLogistics Chemical Transport',
    serviceType: 'transport',
    description: 'Specialized road, rail, and sea transport for hazardous and non-hazardous chemicals across Europe.',
    coverage: ['Europe', 'Asia', 'Middle East'],
    certifications: ['ADR', 'IMDG', 'RID'],
    contactEmail: 'transport@eurochemtrans.nl',
    image: 'https://placehold.co/400x300?text=Chemical+transport+trucks+and+rail+tankers+in+logistics+facility'
  },
  {
    id: '2',
    company: 'MidEast Chemical Logistics',
    serviceType: 'storage',
    description: 'Temperature-controlled storage facilities with 50,000 MT capacity for liquid and solid chemicals.',
    coverage: ['Middle East', 'North Africa', 'India'],
    certifications: ['SQAS', 'ISO 28000', 'OHSAS 18001'],
    contactEmail: 'storage@mechlog.ae',
    image: 'https://placehold.co/400x300?text=Large+chemical+storage+tanks+and+temperature+controlled+warehouses'
  },
  {
    id: '3',
    company: 'Global Chem Handling Solutions',
    serviceType: 'handling',
    description: 'Expert chemical handling, blending, and packaging services with full traceability systems.',
    coverage: ['Global', 'Major Ports', 'Manufacturing Hubs'],
    certifications: ['GMP', 'HACCP', 'ISO 9001'],
    contactEmail: 'handling@globalchemsolutions.com',
    image: 'https://placehold.co/400x300?text=Chemical+handling+and+packaging+facility+with+automated+systems'
  }
];

export const chemicalCategories = [
  'Petrochemicals',
  'Specialty Chemicals',
  'Industrial Solvents',
  'Fine Chemicals',
  'Pharmaceutical Intermediates',
  'Agrochemicals',
  'Polymers & Plastics',
  'Catalysts',
  'Surfactants',
  'Additives & Colorants'
];

export const regions = [
  'North America',
  'Europe',
  'Asia Pacific',
  'Middle East',
  'Latin America',
  'Africa'
];