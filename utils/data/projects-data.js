export const projectsData = [
  {
    id: 1,
    name: 'Real-Time Stock Market Scanner',
    category: 'Production System',
    timeline: 'May 2025 - July 2025',
    company: 'TradeVed Pvt Ltd',
    tools: ['Next.js', 'TypeScript', 'WebSocket', 'Python', 'MongoDB', 'REST API'],
    role: "Full Stack Developer",
    code: '',
    demo: 'https://www.tradeved.com/dashboard/trader/scanner',
    youtube: '',
    image: '/projects/scanner.png',
    problem: 'Traders needed real-time analysis of 2,000+ stocks from NSE with technical indicators (SMA, RSI) to make split-second trading decisions, but existing solutions had high latency and limited customization.',
    solution: 'Engineered a real-time market scanner with WebSocket connections for sub-second data updates, backend query parsing engine for complex technical indicators, and optimized MongoDB storage handling 100K+ records.',
    impact: [
      '99.8% uptime across 2,000+ securities',
      'Sub-second data updates via WebSocket',
      '99.5% accuracy in technical analysis',
      '100K+ records efficiently queried'
    ],
    highlights: [
      'Built custom query interpreter for complex trading rules',
      'Implemented WebSocket architecture for live NSE data feeds',
      'Optimized MongoDB queries for real-time performance'
    ]
  },

  {
    id: 2,
    name: 'HR Analytics Dashboard',
    category: 'Production System',
    timeline: 'November 2025 - Present',
    company: 'Valise IT Groups',
    tools: ['React Native', 'TypeScript', 'Supabase', 'PostgreSQL', 'Firebase Realtime DB'],
    role: "Project Lead",
    code: '',
    demo: 'https://dashboardanaltical.netlify.app/',
    youtube: '',
    image: '/projects/analytics.png',
    problem: 'HR teams struggled with monitoring user interaction patterns and updating product data across multiple platforms, leading to slow decision-making and operational inefficiency.',
    solution: 'Architected real-time analytics dashboard with role-based workflows, instant data synchronization, and optimized REST APIs enabling HR teams to monitor patterns and update data from a single interface. Note: Demo uses preview data; production contains confidential company information protected by NDA.',
    impact: [
      '50% faster task execution for HR teams',
      'Real-time data updates across platforms',
      '30-40% system performance improvement',
      '25% delivery timeline improvement through automation'
    ],
    highlights: [
      'End-to-end ownership from architecture to deployment',
      'Built scalable backend with PostgreSQL and Firebase',
      'Implemented role-based access control for multi-team usage',
      'Demo showcases architecture with sample data (production under NDA)'
    ]
  },

  {
    id: 3,
    name: 'Keptel Enterprise Website',
    category: 'Web Application',
    timeline: 'September 2025 - Present',
    company: 'Valise IT Groups',
    tools: ['Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'REST API', 'SEO Optimization'],
    role: "Full Stack Developer",
    code: '',
    demo: 'https://kepteltech.com',
    youtube: '',
    image: '/projects/keptel.png',
    problem: 'Enterprise telecommunications company needed high-performance, SEO-optimized website to showcase products and services while maintaining fast load times and search engine visibility in competitive B2B market.',
    solution: 'Built production-grade full-stack website using Next.js (frontend) and Node.js (backend) with comprehensive SEO optimization, server-side rendering for performance, and fully responsive design across all devices.',
    impact: [
      '108 total impressions with 9.3% CTR (Google Search Console)',
      '4.1 average search position for target keywords',
      'Fully optimized Core Web Vitals',
      'Production deployment with zero downtime'
    ],
    highlights: [
      'Implemented SSR/ISR for optimal SEO performance',
      'Built complete frontend and backend architecture',
      'Achieved top 5 search rankings for industry keywords',
      'Integrated analytics and performance monitoring'
    ]
  },

  {
    id: 4,
    name: 'Cross-Platform Mobile App (Nurdd)',
    category: 'Mobile Application',
    timeline: 'July 2025 - September 2025',
    company: 'Nurdd Club Pvt Ltd',
    tools: ['React Native', 'TypeScript', 'Expo Bare Workflow', 'Redux', 'React Navigation'],
    role: "MERN Stack Developer",
    code: '',
    demo: 'https://play.google.com/store/apps/details?id=com.nurdd.test',
    youtube: '',
    image: '/projects/nurdd.png',
    problem: 'Need for a scalable, cross-platform mobile application with consistent UI/UX across Android and iOS while maintaining rapid development cycles and code reusability.',
    solution: 'Built production-grade mobile app using React Native (Expo Bare) with TypeScript, implementing 4-5 complete user flows (authentication, onboarding, profile) and a modular component architecture.',
    impact: [
      '1,000+ downloads on Google Play Store',
      '70% component reuse across screens',
      '40+ modular, reusable components',
      'Eliminated UI inconsistencies on both platforms'
    ],
    highlights: [
      'Published production app with 1K+ active installs',
      'Architected component-based design system',
      'Implemented Redux for state management',
      'Delivered complete authentication & onboarding flows'
    ]
  },

  {
    id: 5,
    name: 'Solana DEX Order Execution Engine',
    category: 'Backend System',
    timeline: 'December 2024',
    company: 'Personal Project',
    tools: ['TypeScript', 'BullMQ', 'Redis', 'WebSocket', 'Solana Web3.js', 'Fastify', 'PostgreSQL'],
    role: "Backend Developer",
    code: 'https://github.com/KunalRaj9835/Order_Execution_Engine',
    demo: 'https://order-execution-engine-3-5pts.onrender.com',
    youtube: 'https://youtu.be/1LVC7IKlNag',
    image: '/projects/order-engine.png',
    problem: 'Cryptocurrency traders needed automated order execution that intelligently routes between multiple DEXs (Raydium, Meteora) to get the best price, with real-time status updates and high-throughput concurrent processing.',
    solution: 'Built production-grade order execution engine with BullMQ job queue processing 100 orders/minute across 10 concurrent workers, intelligent DEX routing comparing fees and slippage, WebSocket real-time updates, and complete transaction audit trail in PostgreSQL.',
    impact: [
      'Processes 100 orders per minute with 10 workers',
      'Smart routing saves 2-5% on trade execution',
      'Real-time WebSocket updates for order lifecycle',
      'Verified on Solana devnet blockchain'
    ],
    highlights: [
      'Implemented retry logic with exponential backoff (3 attempts)',
      'Built complete REST API with comprehensive testing (10 tests passing)',
      'Deployed production system on Render with Redis queue',
      '12-minute architecture walkthrough video demonstrating full system'
    ]
  },

  {
    id: 6,
    name: 'OfferUnlock - Mobile Assessment App',
    category: 'Mobile Application',
    timeline: 'November 2025',
    company: 'Personal Project',
    tools: ['React Native', 'Expo', 'TypeScript', 'Redux Toolkit', 'Supabase', 'React Hook Form', 'Yup'],
    role: 'Mobile Developer',
    code: 'https://github.com/KunalRaj9835/OfferApp',
    demo: 'https://expo.dev/artifacts/eas/38jomCkkpSzSZoijPjBAcd.apk',
    youtube: '',
    image: '/projects/offer-app.png',
    problem: 'Mobile apps need engaging multi-step onboarding flows with persistent state, form validation, and custom animations to maximize conversion rates while maintaining security and offline-first capabilities.',
    solution: 'Built conversion-focused mobile app with multi-step wizard (authentication, personal info, preferences, goals), custom fluid progress bar animation using react-native-reanimated, draft state persistence with AsyncStorage, and secure credential storage with Expo SecureStore.',
    impact: [
      'Custom animated progress bar (no libraries)',
      'Multi-step wizard with persistent draft state',
      'Comprehensive test suite (23 tests passing)',
      'Session management with encrypted storage'
    ],
    highlights: [
      'Built custom UI components from scratch (no pre-built libraries)',
      'Implemented form validation with React Hook Form + Yup',
      'Created FOMO ticker with smooth animations for engagement',
      'Integrated Supabase for PostgreSQL backend with RLS'
    ]
  },

  {
    id: 7,
    name: 'AI Video Atomizer',
    category: 'Full Stack Application',
    timeline: 'December 2024',
    company: 'Personal Project',
    tools: ['Next.js', 'TypeScript', 'PostgreSQL', 'FFmpeg', 'Gemini AI', 'Speechmatics', 'Prisma'],
    role: "Full Stack Developer",
    code: 'https://github.com/KunalRaj9835/Video-Atomizer',
    demo: '',
    youtube: 'https://youtu.be/uWeAvkBH0CY',
    image: '/projects/video-atomizer.png',
    problem: 'Content creators spend hours manually editing long-form videos into short clips for social media, requiring transcription, moment detection, and format conversion (16:9 to 9:16) for each platform.',
    solution: 'Built AI-powered video processing pipeline using Next.js with FFmpeg for video manipulation, Speechmatics for word-level transcription, Gemini 2.5 Flash for intelligent moment detection, and multi-layer caching system for 60x performance improvement on duplicate videos.',
    impact: [
      '60x faster processing with smart caching',
      'AI generates 3-8 clips per video automatically',
      'Dual-format export (horizontal + vertical)',
      'Word-level caption synchronization'
    ],
    highlights: [
      'Implemented file hash deduplication to avoid reprocessing',
      'Built complete video pipeline (upload → transcript → moments → clips)',
      'Created multi-layer caching (audio, transcript, moments, clips)',
      'Optimized for 10-30 minute videos with dynamic clip distribution'
    ]
  }
];