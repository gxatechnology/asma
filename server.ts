import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import fs from 'fs';
import multer from 'multer';
import { createServer as createViteServer } from 'vite';

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const DATA_DIR = path.resolve(process.cwd(), 'data');
const UPLOADS_DIR = path.resolve(DATA_DIR, 'uploads');
const DB_FILE = path.resolve(DATA_DIR, 'db.json');

// Ensure data directories exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

// Multer storage for secure client document uploads
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, UPLOADS_DIR);
  },
  filename: (_req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const cleanExt = path.extname(file.originalname).toLowerCase();
    cb(null, `doc-${uniqueSuffix}${cleanExt}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 25 * 1024 * 1024 }, // 25MB max
  fileFilter: (_req, file, cb) => {
    const allowed = ['.pdf', '.docx', '.doc', '.xlsx', '.xls', '.pptx', '.txt', '.xliff', '.json', '.zip'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowed.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Format not supported. Please upload PDF, Word, Excel, PowerPoint or XLIFF.'));
    }
  },
});

// Seed data
function getInitialDb() {
  return {
    enquiries: [
      {
        id: 'req-2025-001',
        type: 'quote',
        fullName: 'Dr. Arash Rafiee',
        email: 'a.rafiee@alborz-holdings.com',
        organization: 'Alborz Holdings P.J.S.C.',
        service: 'financial',
        sourceLanguage: 'English',
        targetLanguage: 'Persian',
        documentType: 'Audited Financial Statements & Notes',
        wordCount: 8400,
        deadline: '2026-11-05',
        urgency: 'urgent',
        message: 'Annual consolidated balance sheet, statement of comprehensive income, and statutory auditor footnotes for foreign investor consortium review.',
        consent: true,
        status: 'In Review',
        internalNotes: 'Initial terminology concordance check against IAS 1 and INAS complete. Awaiting signature on bilateral NDA.',
        quotedAmount: 1250,
        created_at: '2026-10-18T10:15:00Z',
        attachments: [
          {
            id: 'att-1',
            filename: 'alborz-audit-2025-summary.pdf',
            originalname: 'Alborz_Holdings_Audited_Draft.pdf',
            size: 1420000,
            mimetype: 'application/pdf',
            path: 'uploads/alborz-audit-2025-summary.pdf',
            uploaded_at: '2026-10-18T10:15:00Z',
          },
        ],
      },
      {
        id: 'req-2025-002',
        type: 'quote',
        fullName: 'Elena Rostova',
        email: 'e.rostova@eurasia-legal.org',
        organization: 'Eurasia Commercial Legal Advisory',
        service: 'business',
        sourceLanguage: 'English',
        targetLanguage: 'Persian',
        documentType: 'Cross-Border Supply Agreement & Bylaws',
        wordCount: 5200,
        deadline: '2026-11-12',
        urgency: 'standard',
        message: 'Joint venture agreement articles of association and limitation of liability clauses under commercial arbitration guidelines.',
        consent: true,
        status: 'Quoted',
        internalNotes: 'Quotation sent at standard academic rate. Followed up on delivery timeline.',
        quotedAmount: 650,
        created_at: '2026-10-19T14:30:00Z',
        attachments: [],
      },
      {
        id: 'enq-2025-003',
        type: 'general',
        fullName: 'Marcus Vance',
        email: 'marcus.v@global-localize.io',
        organization: 'Global Localize Hub (London)',
        subject: 'Partnership Inquiry for Persian Legal Translation Stream',
        message: 'We are expanding our Middle Eastern language provider network and were impressed by Asma Parnianfard’s background in IFRS financial statements and academic translation studies. We would like to discuss monthly volume allocations.',
        consent: true,
        status: 'New',
        internalNotes: 'Translation agency inquiry. High potential for recurring monthly retainers.',
        created_at: '2026-10-20T08:45:00Z',
        attachments: [],
      },
    ],
    portfolio_items: [
      {
        id: 'p-1',
        slug: 'alborz-holdings-financial-statements',
        title: 'Alborz Holdings Audited Financial Statements & Notes',
        title_fa: 'صورت‌های مالی حسابرسی‌شده و یادداشت‌های پیوست هلدینگ البرز',
        category: 'financial',
        categoryLabel: 'Financial & Accounting',
        description: 'Comprehensive English-to-Persian translation of consolidated statements of financial position, comprehensive income, and explanatory accounting policy disclosures.',
        description_fa: 'ترجمه دقیق و آکادمیک ترازنامه، صورت سود و زیان جامع و یادداشت‌های تفسیری رویه‌های حسابداری منطبق بر استانداردهای گزارشگری بین‌المللی IFRS.',
        clientIndustry: 'Corporate Conglomerate / Private Equity',
        sourceSample: 'Deferred tax assets are recognized for unused tax losses, tax credits, and deductible temporary differences to the extent that it is probable that future taxable profits will be available against which they can be utilized.',
        targetSample: '«دارایی‌های مالیات انتقالی بابت زیان‌های مالیاتی استفاده‌نشده، اعتبارات مالیاتی و تفاوت‌های موقت مشمول کسر تا میزانی شناسایی می‌شوند که احتمال دسترسی به سودهای مشمول مالیات آتی جهت استفاده از این اقلام وجود داشته باشد.»',
        terminologyNotes: [
          { source: 'Deferred tax assets', target: 'دارایی‌های مالیات انتقالی', note: 'Standardized under IAS 12 and Iranian Accounting Standard No. 20' },
          { source: 'Deductible temporary differences', target: 'تفاوت‌های موقت مشمول کسر', note: 'Prevents confusing tax accruals with standard accounts payable' },
          { source: 'Future taxable profits', target: 'سودهای مشمول مالیات آتی', note: 'Statutory corporate tax lexicon alignment' },
        ],
        turnaroundDays: '4 business days',
        wordCountApprox: 8400,
        image: '/assets/aistudio/Image_2_fe0de90b.jpeg',
        featured: true,
        published: true,
        date: '2025-12-15',
      },
      {
        id: 'p-2',
        slug: 'saas-portal-rtl-localization',
        title: 'Enterprise SaaS Dashboard & Right-to-Left (RTL) Localization',
        title_fa: 'بومی‌سازی پلتفرم نرم‌افزاری ابری و بهینه‌سازی رابط کاربری راست‌به‌چپ',
        category: 'localization',
        categoryLabel: 'Software & Web Localization',
        description: 'Localization of 3,500 UI strings, variable interpolation tokens, error modals, and navigation workflows with strict RTL character length optimization.',
        description_fa: 'بومی‌سازی جامع اصطلاحات کاربری، پیام‌های خطای سیستمی و تطبیق ساختار دیداری راست‌به‌چپ بدون شکستگی متنی یا وارونگی متغیرها.',
        clientIndustry: 'Enterprise Software & Cloud Platforms',
        sourceSample: 'Welcome to your analytics portfolio. Segment performance has exceeded the quarterly benchmark by 14.8% across active regions.',
        targetSample: '«به سامانه تحلیل عملکرد خوش آمدید. بازدهی بخش‌های عملیاتی در تمامی مناطق فعال، ۱۴.۸ درصد بالاتر از شاخص سه‌ماهه تعیین‌شده ثبت گردید.»',
        terminologyNotes: [
          { source: 'Segment performance', target: 'بازدهی بخش‌های عملیاتی', note: 'Natural business Persian avoiding literal segment calques' },
          { source: 'Quarterly benchmark', target: 'شاخص سه‌ماهه تعیین‌شده', note: 'Standard metric nomenclature' },
        ],
        turnaroundDays: '3 business days',
        wordCountApprox: 3500,
        image: '/assets/aistudio/Image_4_f7eef0ea.jpeg',
        featured: true,
        published: true,
        date: '2026-02-10',
      },
      {
        id: 'p-3',
        slug: 'bilateral-joint-venture-commercial-contract',
        title: 'Bilateral Commercial Supply & Joint Venture Accord',
        title_fa: 'قرارداد تأمین تجاری بین‌المللی و مشارکت سرمایه‌گذاری مشترک',
        category: 'business',
        categoryLabel: 'Business & Commercial',
        description: 'High-stakes translation of cross-border procurement agreement, indemnification schedules, and intellectual property escrow stipulations.',
        description_fa: 'ترجمه متون حقوقی و بندهای عدم مسئولیت، حل‌وفصل اختلافات در دیوان داوری بین‌المللی و انتقال دانش فنی.',
        clientIndustry: 'International Trade & Manufacturing',
        sourceSample: 'Each party shall defend, indemnify, and hold harmless the other party against any third-party claims arising from breaches of bilateral confidentiality undertakings.',
        targetSample: '«هر یک از طرفین متعهد می‌گردد طرف دیگر را در برابر هرگونه ادعای اشخاص ثالث ناشی از نقض تعهدات محرمانگی دوجانبه دفاع نموده، خسارات وارده را جبران و از هرگونه مسئولیت حقوقی مبرا دارد.»',
        terminologyNotes: [
          { source: 'Indemnify and hold harmless', target: 'جبران خسارت و رفع مسئولیت حقوقی', note: 'Accurately maps Anglo-American common law warranty to Iranian civil code' },
          { source: 'Confidentiality undertakings', target: 'تعهدات محرمانگی', note: 'Formal contractual weight' },
        ],
        turnaroundDays: '5 business days',
        wordCountApprox: 11200,
        image: '/assets/aistudio/Image_5_2032c408.jpeg',
        featured: true,
        published: true,
        date: '2026-04-20',
      },
      {
        id: 'p-4',
        slug: 'academic-monograph-proofreading',
        title: 'Academic Journal Paper & Comparative Linguistic Critique',
        title_fa: 'ویرایش ساختاری و مقابله‌ای مقاله پژوهشی علوم انسانی و ترجمه‌شناسی',
        category: 'proofreading',
        categoryLabel: 'Proofreading & Editing',
        description: 'Comprehensive academic proofreading of a scholarly manuscript prior to submission to a peer-reviewed international language journal.',
        description_fa: 'ویرایش علمی، یکدست‌سازی ارجاعات، رفع ابهامات نحوی و بازبینی لحن نگارش منطبق بر شیوه استناددهی APA.',
        clientIndustry: 'Higher Education & Academic Research',
        sourceSample: 'The subtle divergence in syntactic fronting observed between literary Persian and contemporary English administrative discourse requires a multi-layered pragmatic framework.',
        targetSample: '«واگرایی ظریف در پیش‌اندازی نحوی میان نثر ادبی فارسی و گفتمان اداری معاصر انگلیسی، نیازمند اتخاذ چارچوبی چندلایه و کاربردشناختی است.»',
        terminologyNotes: [
          { source: 'Syntactic fronting', target: 'پیش‌اندازی نحوی', note: 'Established Iranian linguistic society nomenclature' },
          { source: 'Pragmatic framework', target: 'چارچوب کاربردشناختی', note: 'Exact academic translation terminology' },
        ],
        turnaroundDays: '3 business days',
        wordCountApprox: 6800,
        image: '/assets/aistudio/Image_3_6dc99c9e.jpeg',
        featured: false,
        published: true,
        date: '2026-06-05',
      },
    ],
    blog_posts: [
      {
        id: 'b-1',
        slug: 'bridging-ifrs-and-iranian-national-accounting-standards',
        title: 'Harmonizing IFRS and Iranian National Standards: Precision in Dual-Currency Financial Disclosures',
        title_fa: 'تطبیق استانداردهای بین‌المللی IFRS با استانداردهای حسابداری ایران: چالش‌های ترجمه صورت‌های مالی',
        category: 'Financial Translation',
        excerpt: 'Why direct mechanical substitution of financial balance sheet line items creates severe legal ambiguity for international investors and corporate auditors.',
        excerpt_fa: 'بررسی ضرورت انطباق مفهومی اصطلاحات حسابداری به‌جای ترجمه لغوی و نقش آن در شفافیت گزارش‌های مالی برای سرمایه‌گذاران خارجی.',
        content: `Financial translation is fundamentally different from general literary or commercial translation. When translating an English audit report or financial disclosure prepared under International Financial Reporting Standards (IFRS) into Persian, the translator operates within two distinct legal and tax jurisdictions.

### 1. The Pitfall of Literal Substitution
A frequent error in amateur translation is rendering "Retained Earnings" simply as "سودهای نگه داشته شده". In official Iranian accounting standards (سازمان حسابرسی), the mandatory statutory equivalent is **«سود (زیان) انباشته»**. Translating it casually creates immediate compliance confusion during tax audit reviews.

### 2. Fair Value vs. Amortized Cost
Similarly, expressions like "Comprehensive Income" cannot be rendered with informal idioms; it is strictly **«سود و زیان جامع»**. The nuances between "Depreciation" (for tangible property, plant, and equipment / استهلاک دارایی مشهود) and "Amortization" (for intangible software, licenses, and patents / استهلاک دارایی نامشهود) must be rigorously separated throughout every table and disclosure note.

### 3. Dual Exchange Rate Considerations
In multi-currency consolidated filings involving Iranian operations, references to NIMA rates, Central Bank official exchange rates, and parallel market rates demand crystal-clear footnote annotations to prevent distorting shareholder equity values.

At our Mashhad atelier, every financial translation is built upon an IFRS-aligned terminology database to guarantee zero ambiguity for auditors, tax directors, and regional executives.`,
        content_fa: `ترجمه متون مالی و صورت‌های حسابرسی نیازمند درک عمیق ساختار گزارشگری مالی و تسلط بر استانداردهای دوگانه است. در برگردان اسناد مالی تهیه‌شده بر اساس IFRS به زبان فارسی، مترجم باید با ترمینولوژی مصوب سازمان حسابرسی جمهوری اسلامی ایران هماهنگ باشد.

۱. تفکیک دقیق اصطلاحات کلیدی مانند «سود انباشته» و «اندوخته‌های قانونی»
۲. تفاوت میان استهلاک دارایی‌های مشهود و نامشهود (Depreciation در برابر Amortization)
۳. دقت در بازتاب نرخ‌های تسعیر ارز و پانویس‌های مربوط به تعدیل تورمی

رویکرد ما در مشهد مقدس، اطمینان از مطابقت ۱۰۰ درصدی اصطلاحات با مقررات جاری حسابرسی و قانون تجارت است.`,
        readTime: '6 min read',
        author: {
          name: 'Asma Parnianfard',
          title: 'M.A. Translation Studies',
          avatar: '/assets/aistudio/Professional_Hijab_Headshot_in_Soft_Light_eb55cbe8.png',
        },
        published: true,
        publishedAt: '2026-09-14',
        coverImage: '/assets/aistudio/Image_2_fe0de90b.jpeg',
        tags: ['Financial Translation', 'IFRS', 'Accounting', 'Audit'],
      },
      {
        id: 'b-2',
        slug: 'rtl-software-localization-best-practices',
        title: 'The Architecture of Right-to-Left (RTL) Software Localization for Persian Interfaces',
        title_fa: 'اصول معماری بومی‌سازی نرم‌افزار و بهینه‌سازی رابط‌های کاربری راست‌به‌چپ (RTL)',
        category: 'Localization',
        excerpt: 'How to prevent text clipping, placeholder corruption, and inappropriate cultural idioms in enterprise digital applications.',
        excerpt_fa: 'راهنمای کاربردی برای توسعه‌دهندگان و مدیران محصول جهت ارائه تجربه کاربری روان و بی‌نقص در زبان فارسی.',
        content: `Localizing modern digital applications into Persian requires much more than simply running strings through translation software. It requires architectural understanding of Bidirectional (BiDi) text algorithms, UI layout flipping, and cultural nuances.

### Character Expansion & Truncation
English strings frequently expand by 15% to 25% when translated into idiomatic Persian. In compact mobile cards or data tables, unchecked expansion causes awkward ellipsis truncation or layout breaks. An expert localization consultant crafts concise, elegant Persian alternatives that respect strict pixel and character counts.

### Neutralizing Awkward Machine Calques
Automated engines frequently produce translations that feel robotic or unintentionally colloquial. Terms like "Sign Out" translated literally as "امضا به بیرون" sound absurd to Persian users; the correct, standard UX convention is **«خروج از حساب»**.

### Punctuation & Variable Placeholders
Preserving parameter tokens like \`{userName}\` and ensuring quotation marks and question marks align correctly with RTL reading direction requires specialized CAT tools and rigorous in-context QA.`,
        content_fa: `بومی‌سازی نرم‌افزار برای کاربران فارسی‌زبان فراتر از بازنویسی واژگان است؛ این فرآیند مستلزم درک عمیق رفتار المان‌های رابط کاربری در چیدمان راست‌به‌چپ و جلوگیری از به‌هم‌ریختگی متغیرهاست.

- مدیریت افزایش طول رشته‌های متنی (Text Expansion)
- انتخاب واژگان مأنوس و استاندارد در دنیای دیجیتال (مانند «ورود به حساب» به‌جای ترجمه‌های تحت‌اللفظی)
- تنظیم صحیح جهت علائم نگارشی و پایش در بستر واقعی نرم‌افزار`,
        readTime: '5 min read',
        author: {
          name: 'Asma Parnianfard',
          title: 'M.A. Translation Studies',
          avatar: '/assets/aistudio/Professional_Hijab_Headshot_in_Soft_Light_eb55cbe8.png',
        },
        published: true,
        publishedAt: '2026-08-28',
        coverImage: '/assets/aistudio/Image_4_f7eef0ea.jpeg',
        tags: ['Localization', 'UX Design', 'RTL', 'Software'],
      },
      {
        id: 'b-3',
        slug: 'contractual-weight-in-bilateral-agreements',
        title: 'Preserving Contractual Weight in Bilateral English-to-Persian Commercial Agreements',
        title_fa: 'حفظ اعتبار حقوقی و بار قراردادی در ترجمه اسناد و توافق‌نامه‌های تجاری بین‌الملل',
        category: 'Business Translation',
        excerpt: 'Analyzing standard common-law boilerplates and their exact legal transposition into the Iranian Civil and Commercial Codes.',
        excerpt_fa: 'بررسی نحوه معادل‌یابی اصطلاحات حقوقی بین‌الملل نظیر تحدید مسئولیت و جبران خسارت در بستر حقوق تجارت ایران.',
        content: `In international trade and joint ventures, contractual clauses are engineered to allocate legal risk between parties with surgical precision. When translating these clauses between English and Persian, the linguist must not dilute or distort this legal liability.

Key clauses that require specialized comparative legal scrutiny include:
- **Indemnification & Hold Harmless:** Differentiating between direct damages, consequential damages, and active legal defense costs.
- **Force Majeure:** Aligning unpredictable statutory force majeure provisions with Iranian Civil Code articles 227 and 229.
- **Arbitration & Governing Law:** Ensuring that clauses referencing venues like the ICC (International Chamber of Commerce) or regional arbitration bodies retain institutional enforceability.`,
        content_fa: `در قراردادهای تجاری بین‌المللی، هر واژه دارای بار حقوقی مشخصی در تعیین تعهدات و ریسک‌های طرفین است. مترجم متون حقوقی باید با نظام‌های حقوقی کامن‌لا و حقوق مدنی ایران آشنا باشد تا بتواند معادل‌هایی دقیق و از نظر قضایی قابل دفاع ارائه دهد.`,
        readTime: '7 min read',
        author: {
          name: 'Asma Parnianfard',
          title: 'M.A. Translation Studies',
          avatar: '/assets/aistudio/Professional_Hijab_Headshot_in_Soft_Light_eb55cbe8.png',
        },
        published: true,
        publishedAt: '2026-07-15',
        coverImage: '/assets/aistudio/Image_5_2032c408.jpeg',
        tags: ['Commercial', 'Legal', 'Contracts', 'Trade'],
      },
    ],
    site_settings: {
      contactEmail: 'contact@asmaparnianfard.com',
      linkedInUrl: 'https://www.linkedin.com/in/asma-parnianfard-a11b69433',
      location: 'Mashhad, Razavi Khorasan, Iran',
      workingHours: '08:30 – 18:30 (UTC+3:30) · Responsive Asynchronous Workflows for Global Timezones',
      turnaroundRateStandard: '2,000 – 2,500 words per business day',
      turnaroundRateUrgent: 'Priority 24 to 48 hours for expedited commercial filings',
      dailyCapacityWords: 2500,
      emergencyPhonePlaceholder: '+98 (51) 3760-XXXX (Available upon mutual NDA execution)',
      ndaGuaranteeActive: true,
      quoteResponseTimeHours: 4,
    },
  };
}

// Database helper functions
function readDb() {
  try {
    if (!fs.existsSync(DB_FILE)) {
      const initial = getInitialDb();
      fs.writeFileSync(DB_FILE, JSON.stringify(initial, null, 2), 'utf-8');
      return initial;
    }
    const raw = fs.readFileSync(DB_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading db.json:', err);
    return getInitialDb();
  }
}

function writeDb(data: any) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error writing db.json:', err);
  }
}

// Middleware
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true, limit: '20mb' }));

// Simple admin auth middleware
const ADMIN_TOKEN = 'asma-admin-secure-token-2025';

function requireAdminAuth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.includes(ADMIN_TOKEN)) {
    return res.status(401).json({ error: 'Unauthorized: Invalid administrative credentials.' });
  }
  next();
}

// ==========================================
// PUBLIC API ENDPOINTS
// ==========================================

// 1. Submit quotation request with optional file upload
app.post('/api/quotes', upload.array('attachments', 5), (req: Request, res: Response) => {
  try {
    const {
      fullName,
      email,
      organization,
      service,
      sourceLanguage,
      targetLanguage,
      documentType,
      wordCount,
      deadline,
      urgency,
      message,
      consent,
    } = req.body;

    if (!fullName || !email || !service) {
      return res.status(400).json({ error: 'Full name, email, and service discipline are required.' });
    }

    const files = req.files as Express.Multer.File[] | undefined;
    const attachments = (files || []).map((f) => ({
      id: 'att-' + Date.now() + '-' + Math.round(Math.random() * 1000),
      filename: f.filename,
      originalname: f.originalname,
      size: f.size,
      mimetype: f.mimetype,
      path: `uploads/${f.filename}`,
      uploaded_at: new Date().toISOString(),
    }));

    const db = readDb();
    const newQuote = {
      id: 'quote-' + Date.now().toString(36).toUpperCase(),
      type: 'quote',
      fullName,
      email,
      organization: organization || '',
      service: service || 'financial',
      sourceLanguage: sourceLanguage || 'English',
      targetLanguage: targetLanguage || 'Persian',
      documentType: documentType || 'Standard Document',
      wordCount: parseInt(wordCount) || 1000,
      deadline: deadline || '',
      urgency: urgency || 'standard',
      message: message || '',
      consent: Boolean(consent),
      status: 'New',
      internalNotes: 'Received via website quote request form.',
      quotedAmount: undefined,
      created_at: new Date().toISOString(),
      attachments,
    };

    db.enquiries.unshift(newQuote);
    writeDb(db);

    return res.status(201).json({
      success: true,
      message: 'Quotation request received successfully. Asma Parnianfard will evaluate your documents within 4 business hours.',
      quoteId: newQuote.id,
    });
  } catch (error: any) {
    console.error('Error handling quote submission:', error);
    return res.status(500).json({ error: error.message || 'Failed to submit quote request.' });
  }
});

// 2. Submit general contact enquiry
app.post('/api/enquiries', (req: Request, res: Response) => {
  try {
    const { fullName, email, organization, subject, message, consent } = req.body;
    if (!fullName || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    const db = readDb();
    const newEnquiry = {
      id: 'enq-' + Date.now().toString(36).toUpperCase(),
      type: 'general',
      fullName,
      email,
      organization: organization || '',
      subject: subject || 'General Consultation',
      message,
      consent: Boolean(consent),
      status: 'New',
      internalNotes: 'Received via contact page.',
      created_at: new Date().toISOString(),
      attachments: [],
    };

    db.enquiries.unshift(newEnquiry);
    writeDb(db);

    return res.status(201).json({
      success: true,
      message: 'Your inquiry has been submitted. Asma will review your request shortly.',
      enquiryId: newEnquiry.id,
    });
  } catch (error: any) {
    console.error('Error submitting enquiry:', error);
    return res.status(500).json({ error: 'Failed to submit inquiry.' });
  }
});

// 3. Get published portfolio items
app.get('/api/portfolio', (_req: Request, res: Response) => {
  const db = readDb();
  const items = (db.portfolio_items || []).filter((p: any) => p.published);
  return res.json(items);
});

// 4. Get single portfolio item by slug
app.get('/api/portfolio/:slug', (req: Request, res: Response) => {
  const db = readDb();
  const item = (db.portfolio_items || []).find((p: any) => p.slug === req.params.slug);
  if (!item) return res.status(404).json({ error: 'Portfolio item not found' });
  return res.json(item);
});

// 5. Get published blog posts
app.get('/api/blog', (_req: Request, res: Response) => {
  const db = readDb();
  const posts = (db.blog_posts || []).filter((b: any) => b.published);
  return res.json(posts);
});

// 6. Get single blog post by slug
app.get('/api/blog/:slug', (req: Request, res: Response) => {
  const db = readDb();
  const post = (db.blog_posts || []).find((b: any) => b.slug === req.params.slug);
  if (!post) return res.status(404).json({ error: 'Article not found' });
  return res.json(post);
});

// 7. Get public site settings
app.get('/api/settings', (_req: Request, res: Response) => {
  const db = readDb();
  return res.json(db.site_settings || {});
});

// ==========================================
// ADMIN AUTH & MANAGEMENT ENDPOINTS
// ==========================================

// Admin Login
app.post('/api/auth/login', (req: Request, res: Response) => {
  const { username, password } = req.body;
  // Secure login logic
  if (username === 'asma.admin' && password === 'Parnianfard@2025!') {
    return res.json({
      success: true,
      token: ADMIN_TOKEN,
      user: {
        username: 'asma.admin',
        name: 'Asma Parnianfard',
        role: 'Lead Translator & Administrator',
      },
    });
  }
  return res.status(401).json({ error: 'Invalid administrative credentials.' });
});

// Admin Metrics (Actual real records from db)
app.get('/api/admin/metrics', requireAdminAuth, (_req: Request, res: Response) => {
  const db = readDb();
  const enquiries = db.enquiries || [];
  const quotes = enquiries.filter((e: any) => e.type === 'quote');
  const general = enquiries.filter((e: any) => e.type === 'general');

  const totalWords = quotes.reduce((acc: number, curr: any) => acc + (curr.wordCount || 0), 0);
  const totalQuotedValue = quotes.reduce((acc: number, curr: any) => acc + (curr.quotedAmount || 0), 0);

  const statusCounts = enquiries.reduce((acc: any, curr: any) => {
    acc[curr.status] = (acc[curr.status] || 0) + 1;
    return acc;
  }, {});

  const fileCount = enquiries.reduce((acc: number, curr: any) => acc + (curr.attachments?.length || 0), 0);

  return res.json({
    totalEnquiries: enquiries.length,
    totalQuotes: quotes.length,
    totalGeneral: general.length,
    newRequests: statusCounts['New'] || 0,
    inReviewRequests: statusCounts['In Review'] || 0,
    acceptedRequests: statusCounts['Accepted'] || 0,
    totalWordsEstimated: totalWords,
    totalQuotedValueUSD: totalQuotedValue,
    totalSecuredFiles: fileCount,
    statusCounts,
    recentSubmissions: enquiries.slice(0, 5),
  });
});

// Admin Enquiries List
app.get('/api/admin/enquiries', requireAdminAuth, (req: Request, res: Response) => {
  const db = readDb();
  let list = db.enquiries || [];

  const { status, type, search } = req.query;
  if (status && status !== 'all') {
    list = list.filter((e: any) => e.status === status);
  }
  if (type && type !== 'all') {
    list = list.filter((e: any) => e.type === type);
  }
  if (search && typeof search === 'string') {
    const q = search.toLowerCase();
    list = list.filter(
      (e: any) =>
        e.fullName?.toLowerCase().includes(q) ||
        e.email?.toLowerCase().includes(q) ||
        e.organization?.toLowerCase().includes(q) ||
        e.message?.toLowerCase().includes(q) ||
        e.id?.toLowerCase().includes(q)
    );
  }

  return res.json(list);
});

// Admin Update Enquiry Status / Notes / Amount
app.patch('/api/admin/enquiries/:id', requireAdminAuth, (req: Request, res: Response) => {
  const db = readDb();
  const index = (db.enquiries || []).findIndex((e: any) => e.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Enquiry not found' });

  const { status, internalNotes, quotedAmount } = req.body;
  if (status) db.enquiries[index].status = status;
  if (internalNotes !== undefined) db.enquiries[index].internalNotes = internalNotes;
  if (quotedAmount !== undefined) db.enquiries[index].quotedAmount = quotedAmount;

  writeDb(db);
  return res.json({ success: true, item: db.enquiries[index] });
});

// Admin Delete Enquiry
app.delete('/api/admin/enquiries/:id', requireAdminAuth, (req: Request, res: Response) => {
  const db = readDb();
  db.enquiries = (db.enquiries || []).filter((e: any) => e.id !== req.params.id);
  writeDb(db);
  return res.json({ success: true, message: 'Enquiry deleted successfully.' });
});

// Admin Portfolio CRUD
app.post('/api/admin/portfolio', requireAdminAuth, (req: Request, res: Response) => {
  const db = readDb();
  const newItem = {
    ...req.body,
    id: 'p-' + Date.now(),
    slug: req.body.slug || 'portfolio-' + Date.now(),
    date: new Date().toISOString().split('T')[0],
  };
  db.portfolio_items.unshift(newItem);
  writeDb(db);
  return res.status(201).json(newItem);
});

app.put('/api/admin/portfolio/:id', requireAdminAuth, (req: Request, res: Response) => {
  const db = readDb();
  const index = (db.portfolio_items || []).findIndex((p: any) => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Item not found' });

  db.portfolio_items[index] = { ...db.portfolio_items[index], ...req.body };
  writeDb(db);
  return res.json(db.portfolio_items[index]);
});

app.delete('/api/admin/portfolio/:id', requireAdminAuth, (req: Request, res: Response) => {
  const db = readDb();
  db.portfolio_items = (db.portfolio_items || []).filter((p: any) => p.id !== req.params.id);
  writeDb(db);
  return res.json({ success: true });
});

// Admin Blog CRUD
app.post('/api/admin/blog', requireAdminAuth, (req: Request, res: Response) => {
  const db = readDb();
  const newPost = {
    ...req.body,
    id: 'b-' + Date.now(),
    slug: req.body.slug || 'post-' + Date.now(),
    publishedAt: new Date().toISOString().split('T')[0],
    author: {
      name: 'Asma Parnianfard',
      title: 'M.A. Translation Studies',
      avatar: '/assets/aistudio/Professional_Hijab_Headshot_in_Soft_Light_eb55cbe8.png',
    },
  };
  db.blog_posts.unshift(newPost);
  writeDb(db);
  return res.status(201).json(newPost);
});

app.put('/api/admin/blog/:id', requireAdminAuth, (req: Request, res: Response) => {
  const db = readDb();
  const index = (db.blog_posts || []).findIndex((b: any) => b.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Post not found' });

  db.blog_posts[index] = { ...db.blog_posts[index], ...req.body };
  writeDb(db);
  return res.json(db.blog_posts[index]);
});

app.delete('/api/admin/blog/:id', requireAdminAuth, (req: Request, res: Response) => {
  const db = readDb();
  db.blog_posts = (db.blog_posts || []).filter((b: any) => b.id !== req.params.id);
  writeDb(db);
  return res.json({ success: true });
});

// Admin Update Settings
app.put('/api/admin/settings', requireAdminAuth, (req: Request, res: Response) => {
  const db = readDb();
  db.site_settings = { ...db.site_settings, ...req.body };
  writeDb(db);
  return res.json(db.site_settings);
});

// Secure file access for admin
app.get('/api/admin/files', requireAdminAuth, (_req: Request, res: Response) => {
  const db = readDb();
  const files: any[] = [];
  (db.enquiries || []).forEach((e: any) => {
    (e.attachments || []).forEach((att: any) => {
      files.push({
        ...att,
        enquiryId: e.id,
        clientName: e.fullName,
        organization: e.organization,
        status: e.status,
      });
    });
  });
  return res.json(files);
});

// Download attachment securely with token
app.get('/api/admin/download/:filename', requireAdminAuth, (req: Request, res: Response) => {
  const filename = path.basename(req.params.filename);
  const filePath = path.resolve(UPLOADS_DIR, filename);
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'File not found on secure storage.' });
  }
  return res.download(filePath);
});

// ==========================================
// STATIC / VITE INTEGRATION
// ==========================================

async function startServer() {
  const isDev = process.env.NODE_ENV !== 'production';

  if (isDev) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Asma Parnianfard] Full-Stack server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
