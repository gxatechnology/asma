export type ServiceCategory = 
  | 'translation'
  | 'financial'
  | 'accounting'
  | 'business'
  | 'proofreading'
  | 'localization';

export type EnquiryStatus = 
  | 'New'
  | 'In Review'
  | 'Quoted'
  | 'Accepted'
  | 'Completed'
  | 'Closed';

export interface FileAttachment {
  id: string;
  filename: string;
  originalname: string;
  size: number;
  mimetype: string;
  path: string;
  uploaded_at: string;
}

export interface QuoteRequest {
  id: string;
  type: 'quote';
  fullName: string;
  email: string;
  organization?: string;
  service: ServiceCategory;
  sourceLanguage: string;
  targetLanguage: string;
  documentType: string;
  wordCount: number;
  deadline?: string;
  urgency: 'standard' | 'urgent' | 'enterprise';
  message: string;
  consent: boolean;
  status: EnquiryStatus;
  internalNotes?: string;
  quotedAmount?: number;
  created_at: string;
  attachments: FileAttachment[];
}

export interface GeneralEnquiry {
  id: string;
  type: 'general';
  fullName: string;
  email: string;
  organization?: string;
  subject: string;
  message: string;
  consent: boolean;
  status: EnquiryStatus;
  internalNotes?: string;
  created_at: string;
  attachments?: FileAttachment[];
}

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  title_fa: string;
  category: ServiceCategory;
  categoryLabel: string;
  description: string;
  description_fa: string;
  clientIndustry: string;
  sourceSample: string;
  targetSample: string;
  terminologyNotes: {
    source: string;
    target: string;
    note: string;
  }[];
  turnaroundDays: string;
  wordCountApprox: number;
  image?: string;
  featured: boolean;
  published: boolean;
  date: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  title_fa: string;
  category: string;
  excerpt: string;
  excerpt_fa: string;
  content: string;
  content_fa: string;
  readTime: string;
  author: {
    name: string;
    title?: string;
    role?: string;
    avatar: string;
  };
  published?: boolean;
  publishedAt: string;
  coverImage?: string;
  tags: string[];
  featured?: boolean;
}

export interface SiteSettings {
  contactEmail: string;
  linkedInUrl: string;
  location: string;
  workingHours: string;
  turnaroundRateStandard: string;
  turnaroundRateUrgent: string;
  dailyCapacityWords: number;
  emergencyPhonePlaceholder: string;
  ndaGuaranteeActive: boolean;
  quoteResponseTimeHours: number;
}
