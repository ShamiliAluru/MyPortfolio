export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  subCategory: string;
  codeSnippetName: string;
  badgeAnnotation: string;
  description: string;
  noteLabel?: string;
  noteContent?: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  demoType?: 'price-simulator' | 'sales-waterfall' | 'rfm-cluster';
}

export interface MoreProject {
  id: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  dateRange: string;
  dateSubtext?: string;
  isCurrent?: boolean;
  tagLabel?: string;
  description: string;
  techStack?: string[];
  certificates?: {
    label: string;
    type: 'cert' | 'lor' | 'badge';
    title: string;
    subtitle: string;
    imageUrl: string;
  }[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  type: 'modal' | 'external' | 'badge';
  externalUrl?: string;
  imageUrl?: string;
  badgeUrl?: string;
  badgeText?: string;
  badgeColor?: string;
}

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'hyderabad-home-price',
    title: 'Hyderabad Home Price Studio',
    tagline: 'Regression Pipeline',
    category: 'Predictive Modeling',
    subCategory: 'Regression Pipeline',
    codeSnippetName: 'PREDICTION_PIPELINE.PY',
    badgeAnnotation: 'Nested CV',
    description:
      'An interactive app that estimates Hyderabad home prices using built-up area, locality, bedroom count, resale status, and selected amenities. It uses a scikit-learn pipeline, evaluates model performance with nested cross-validation, and compares it with a median-price baseline. Users can explore the dataset and how an estimate is produced.',
    noteLabel: 'Data Note:',
    noteContent:
      'The ₹ display is inferred from the Hyderabad context. The source data has no explicit currency or collection date, so estimates are not live-market valuations.',
    techStack: ['Python', 'Streamlit', 'pandas', 'scikit-learn', 'NumPy', 'Plotly', 'joblib'],
    liveUrl: 'https://house-price-prediction-model-mt3arlqnihcsa3cdcrmatc.streamlit.app/',
    githubUrl: 'https://github.com/ShamiliAluru/House-Price-Prediction-Model',
    demoType: 'price-simulator',
  },
  {
    id: 'sales-analytics-retail',
    title: 'Sales Analytics — Retail Profitability Analysis',
    tagline: 'SQL & Relational Analytics',
    category: 'Business Intelligence',
    subCategory: 'SQL & Relational Analytics',
    codeSnippetName: 'RETAIL_PROFITABILITY.SQL',
    badgeAnnotation: 'CTEs & Windows',
    description:
      'Cleaned and audited retail sales data in Excel, modeled it in MySQL, analyzed sales and discount patterns using SQL CTEs and window functions, and built an interactive Power BI dashboard.',
    noteLabel: 'Opportunity Note:',
    noteContent:
      'Pricing and discounting recommendations associated with an estimated $135,000 in potential margin recovery (presented strictly as an estimated opportunity, not realized savings).',
    techStack: ['Excel', 'MySQL', 'SQL CTEs', 'Power BI'],
    githubUrl: 'https://github.com/ShamiliAluru/Sales-Analytics',
    demoType: 'sales-waterfall',
  },
  {
    id: 'customer-segmentation-workbench',
    title: 'Customer Segmentation Workbench',
    tagline: 'RFM Feature Clustering',
    category: 'Unsupervised ML',
    subCategory: 'RFM Feature Clustering',
    codeSnippetName: 'RFM_SEGMENTATION.PY',
    badgeAnnotation: 'K-Means',
    description:
      'An interactive app for exploring customer purchasing patterns from transaction data. Users can upload a CSV, review data-quality checks, and segment customers using Recency, Frequency, and Monetary (RFM) features with K-Means clustering. Compares candidate cluster counts using silhouette scores, visualizes segment profiles, and exports customer assignments and report.',
    noteLabel: 'Analytical Scope:',
    noteContent:
      'Includes UCI Online Retail dataset and CSV template. Segments describe historical purchasing patterns; they do not predict future behavior.',
    techStack: ['Python', 'Streamlit', 'pandas', 'scikit-learn', 'Plotly', 'openpyxl'],
    liveUrl: 'https://ljwofspnfytzokucq3d637.streamlit.app/',
    githubUrl: 'https://github.com/ShamiliAluru/Customer-Segmentation-Model',
    demoType: 'rfm-cluster',
  },
];

export const MORE_PROJECTS: MoreProject[] = [
  {
    id: 'curio',
    title: 'Curio — Personalized Recommendation Platform',
    category: 'MERN STACK',
    badge: 'Recommendation',
    description:
      'Full-stack MERN app using views and likes for rule-based recommendations with search, category filters, and saved items.',
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Vite', 'CSS'],
    liveUrl: 'https://curio-recomendation-system-1.onrender.com/',
    githubUrl: 'https://github.com/ShamiliAluru/Curio-Recomendation-System',
  },
  {
    id: 'wastewise',
    title: 'WasteWise — AI Waste Classification Assistant',
    category: 'COMPUTER VISION',
    badge: '12 Classes',
    description:
      'Classifies waste into 12 dataset classes using MobileNetV2 transfer learning with disposal/reuse hints.',
    techStack: ['Python', 'TensorFlow/Keras', 'MobileNetV2', 'Streamlit', 'Pillow'],
    liveUrl: 'https://wastewiseimagecollectionandclassification.streamlit.app/',
    githubUrl: 'https://github.com/ShamiliAluru/Wastewise-Classification-',
  },
  {
    id: 'signly',
    title: 'Signly — ISL Learning Studio',
    category: 'EDGE AI & ACCESSIBILITY',
    badge: 'ISL Studio',
    description:
      'Educational prototype Indian Sign Language app with visual vocabulary, example signs, quiz, and classification for 20 word-signs and 35 fingerspelled characters.',
    techStack: ['Python', 'Streamlit', 'PyTorch', 'torchvision', 'Pillow', 'NumPy'],
    liveUrl: 'https://hand-gesture-recognition-fb54encd9sarrvcjbjubaf.streamlit.app/',
    githubUrl: 'https://github.com/ShamiliAluru/Hand-Gesture-Recognition',
  },
  {
    id: 'pomodoro-pro',
    title: 'Pomodoro Pro — Productivity App',
    category: 'DESKTOP SOFTWARE',
    badge: 'Tkinter GUI',
    description:
      'Python/Tkinter desktop app with 25m focus/5m break timer, task checklist, and calendar notes.',
    techStack: ['Python', 'Tkinter', 'ttkbootstrap'],
    liveUrl: 'https://pomodoro-app-mvd3dy3hjtdcaqyzzuxpmk.streamlit.app/',
    githubUrl: 'https://github.com/ShamiliAluru/Pomodoro-App',
  },
  {
    id: 'balance-buddy',
    title: 'Balance Buddy — Student Support App',
    category: 'WEB APPLICATION',
    badge: 'Student Support',
    description:
      'Student-focused app for B.Tech learners navigating academic pressure, habits, and direction.',
    techStack: ['HTML', 'JavaScript', 'Tailwind CSS', 'Responsive UI'],
    liveUrl: 'https://lucent-rolypoly-b57ff9.netlify.app/',
    githubUrl: 'https://github.com/ShamiliAluru/Balance-Buddy',
  },
];

export const TOOLKIT_CATEGORIES = [
  {
    number: '01',
    category: 'Languages',
    accentColor: 'navy',
    skills: ['Java', 'Python', 'JavaScript', 'SQL'],
    description: 'Application logic, object orientation & relational querying',
  },
  {
    number: '02',
    category: 'Web',
    accentColor: 'blue',
    skills: ['HTML', 'CSS', 'React', 'Node.js', 'Express.js'],
    description: 'Full-stack web architecture, component UI & RESTful APIs',
  },
  {
    number: '03',
    category: 'Data & Machine Learning',
    accentColor: 'orange',
    skills: ['pandas', 'NumPy', 'scikit-learn', 'TensorFlow/Keras', 'PyTorch', 'Plotly'],
    description: 'Feature wrangling, statistical modeling & neural networks',
  },
  {
    number: '04',
    category: 'Databases & Platforms',
    accentColor: 'navy',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Streamlit'],
    description: 'Relational schemes, NoSQL document stores & app hosting',
  },
  {
    number: '05',
    category: 'Tools',
    accentColor: 'blue',
    skills: ['Power BI', 'Excel', 'Git'],
    description: 'Executive visualization, spreadsheet audits & version control',
  },
];

export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    id: 'exp-student-kare',
    title: 'R&D Intern',
    organization: 'Student Kare',
    dateRange: 'PRESENT',
    isCurrent: true,
    tagLabel: 'Research & Development',
    description:
      'Contribute to R&D involving data management and data privacy. Research responsible data handling, privacy requirements, and applicable government rules.',
  },
  {
    id: 'exp-eduskills-mern',
    title: 'MERN Stack Intern',
    organization: 'EduSkills',
    dateRange: 'SUMMER 2026',
    dateSubtext: 'Project: Curio — Recommendation Platform',
    tagLabel: 'Full-Stack Development',
    description:
      'Completed an 8-week internship program building Curio — a full-stack personalized recommendation platform using views and likes for rule-based recommendations with search, category filters, and saved items.',
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Vite', 'CSS'],
    certificates: [
      {
        label: 'View Certificate',
        type: 'cert',
        title: 'EduSkills — MERN Stack Internship Certificate',
        subtitle: 'EduSkills Academy • Oct 11, 2026 • ID: 2026-C6D1D8EBD0',
        imageUrl: '/assets/aistudio/EduSkills_MERN_Stack_Internship_Certificate.png',
      },
    ],
  },
  {
    id: 'exp-cdc-snist',
    title: 'Documentation & Placements Coordinator',
    organization: 'Career Development Centre (CDC), SNIST',
    dateRange: 'MAY 2026 – PRESENT',
    dateSubtext: 'Campus Placement Operations',
    isCurrent: true,
    tagLabel: 'Institutional Operations',
    description:
      'Lead documentation and coordination efforts, maintain structured records, support reporting and communication, and contribute to placement activities, training programs, workshops, and student engagement.',
  },
  {
    id: 'exp-skillcraft',
    title: 'Machine Learning Intern',
    organization: 'SkillCraft Technology',
    dateRange: 'NOVEMBER 1 – 30, 2025',
    dateSubtext: 'ID: SCT/NOV25/1239',
    description:
      'Completed a one-month internship with practical exposure to machine learning concepts and applied technical work.',
    certificates: [
      {
        label: 'View Certificate',
        type: 'cert',
        title: 'SkillCraft Technology — Machine Learning Internship',
        subtitle: 'SkillCraft Technology • Nov 30, 2025',
        imageUrl: '/assets/aistudio/SkillCraft_Machine_Learning_Internship_Certificate_Clarity_9af9bc2c.png',
      },
      {
        label: 'View Recommendation',
        type: 'lor',
        title: 'SkillCraft Technology — Letter of Recommendation',
        subtitle: 'Pranav Bansal, Tech Lead • Nov 30, 2025',
        imageUrl: '/assets/aistudio/SkillCraft_Letter_of_Recommendation_Clarity_87f9535b.png',
      },
    ],
  },
  {
    id: 'exp-eduskills-aws',
    title: 'AWS Cloud Virtual Intern',
    organization: 'EduSkills',
    dateRange: 'SUMMER 2025',
    dateSubtext: 'Cloud & Weather Data Project',
    description:
      'Worked on a weather-data visualization project, exploring ways to process and present weather data using Python and AWS Cloud Functions only.',
  },
  {
    id: 'exp-student-tribe',
    title: 'AI Annotation Intern',
    organization: 'Student Tribe',
    dateRange: 'MAY – JULY 2025',
    dateSubtext: 'Data Operations',
    description: 'Participated in data annotation activities.',
    certificates: [
      {
        label: 'View Certificate',
        type: 'cert',
        title: 'Student Tribe — AI Annotation Internship Certificate',
        subtitle: 'Tenure: May to July 2025 • Student Tribe',
        imageUrl: '/assets/aistudio/Student_Tribe_AI_Annotation_Internship_Certificate_Clarity_3edb9dcb.png',
      },
    ],
  },
  {
    id: 'exp-bachpan-prayas',
    title: 'Documentation Lead',
    organization: 'Bachpan Prayas',
    dateRange: 'MARCH 2025 – APRIL 2026',
    dateSubtext: 'Organizational Communications',
    description:
      'Managed official records and written communication, drafted letters, managed permissions, maintained event summaries and meeting notes, and managed the organization’s official email account.',
  },
  {
    id: 'exp-marpu',
    title: 'Writing Intern, Social Awareness Wing',
    organization: 'Marpu Foundation',
    dateRange: 'APRIL 30 – MAY 9, 2024',
    dateSubtext: 'Social Wing',
    description: 'Completed a writing internship focusing on social awareness communication.',
    certificates: [
      {
        label: 'View Certificate',
        type: 'cert',
        title: 'Marpu Foundation — Writing Intern Certificate of Internship',
        subtitle: 'Marpu Foundation • May 10, 2024 • Regd No: 619/2019',
        imageUrl: '/assets/aistudio/Marpu_f040d6a8.jpeg',
      },
    ],
  },
];

export const CERTIFICATES_REGISTRY: CertificateItem[] = [
  {
    id: 'cert-aws-academy',
    title: 'AWS Academy Graduate — Cloud Foundations',
    issuer: 'AWS Academy',
    date: 'Sept 29, 2025',
    description: 'Accredited 20-hour cloud architecture curriculum',
    type: 'external',
    externalUrl: 'https://www.credly.com/go/uxEHIGIi',
  },
  {
    id: 'cert-eduskills-mern',
    title: 'MERN Full Stack Development With Project',
    issuer: 'EduSkills Academy',
    date: 'Oct 11, 2026',
    description: '8-week internship credential & Capstone Rule-Based Recommendation System (Curio)',
    type: 'modal',
    imageUrl: '/assets/aistudio/EduSkills_MERN_Stack_Internship_Certificate.png',
  },
  {
    id: 'cert-ai-agents',
    title: 'AI Agents Workshop — Certificate of Participation',
    issuer: 'SDC–SNIST Chapter',
    date: 'Aug 7, 2025',
    description: 'Hands-on participation, autonomous workflows and agentic LLM architecture',
    type: 'modal',
    imageUrl: '/assets/aistudio/ai_agents_workshop_certificate.png',
  },
  {
    id: 'cert-aleph-zero',
    title: 'Blockchain & Web3 Workshop — Certificate of Participation',
    issuer: 'SDC SNIST × Aleph Zero India',
    date: 'March 24, 2025',
    description: 'Blockchain principles, decentralized protocols, smart contracts, and Web3 privacy frameworks',
    type: 'modal',
    imageUrl: '/assets/aistudio/Aleph_Zero_Blockchain_Web3_Workshop_Certificate.jpeg',
  },
  {
    id: 'cert-hackwave-distinction',
    title: 'HackWave 3.0 — Five Star Performer (Certificate of Distinction)',
    issuer: 'SNIST CDC × StudentAlumni.ai',
    date: 'Sept 4–5, 2026',
    description: 'Distinction award & Five Star Performer recognition in Python, SQL, Java, Data Analytics, Gen AI & ML (ID: SA-5ST-SNIST-0021)',
    type: 'modal',
    imageUrl: '/assets/aistudio/HackWave_3_Distinction_Five_Star_Performer_Certificate.jpeg',
  },
  {
    id: 'cert-hackwave-appreciation',
    title: 'HackWave 3.0 — Certificate of Appreciation',
    issuer: 'SNIST CDC × StudentAlumni.ai',
    date: 'Sept 4–5, 2026',
    description: 'Official appreciation for core execution of national-level AI fest and Cyber Security Conclave (ID: SA-APP-SNIST-0033)',
    type: 'modal',
    imageUrl: '/assets/aistudio/HackWave_3_Appreciation_Certificate.jpeg',
  },
  {
    id: 'cert-invictus-quiz-star',
    title: 'Quiz Star of Day 03 — Predictive AI vs Generative AI',
    issuer: 'Invictus Engineers',
    date: 'Technical Assessment',
    description: 'Recognized for top performance in technical evaluation covering Predictive vs Generative AI models',
    type: 'modal',
    imageUrl: '/assets/aistudio/Quiz_Star_Day_03_Invictus_Engineers_Badge.jpeg',
  },
  {
    id: 'cert-marpu',
    title: 'Writing Intern, Social Awareness Wing',
    issuer: 'Marpu Foundation',
    date: 'Apr–May 2024',
    description: 'Editorial documentation, social awareness and outreach communications',
    type: 'modal',
    imageUrl: '/assets/aistudio/Marpu_f040d6a8.jpeg',
  },
  {
    id: 'cert-cisco-python',
    title: 'Python Essentials 1 — Statement of Achievement',
    issuer: 'Cisco Networking Academy & OpenEDG Python Institute (SNIST)',
    date: 'May 26, 2025',
    description: 'Algorithmic logic, core structures and standard modules',
    type: 'modal',
    imageUrl: '/assets/aistudio/Cisco_Python_Essentials_1_Statement_of_Achievement_Clarity_ed005a16.png',
    badgeUrl: '/assets/aistudio/Cisco_Python_Essentials_1_Verified_Badge.png',
  },
  {
    id: 'cert-cisco-cybersecurity',
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy (SNIST)',
    date: 'May 24, 2025',
    description: 'Network protection principles, confidentiality, and threat mitigation',
    type: 'modal',
    imageUrl: '/assets/aistudio/Cisco_Introduction_to_Cybersecurity_Certificate_Clarity_c400f4d9.png',
    badgeUrl: '/assets/aistudio/Cisco_Introduction_to_Cybersecurity_Verified_Badge_Clarity_198b05c3.png',
  },
  {
    id: 'cert-cisco-entrepreneurship',
    title: 'Discovering Entrepreneurship',
    issuer: 'Cisco Networking Academy (SNIST)',
    date: 'May 26, 2025',
    description: 'Technology commercialization and venture modeling',
    type: 'modal',
    imageUrl: '/assets/aistudio/Cisco_Discovering_Entrepreneurship_Certificate_Clarity_66c4b95d.png',
    badgeUrl: '/assets/aistudio/Cisco_Discovering_Entrepreneurship_Verified_Badge_Clarity_0397b180.png',
  },
  {
    id: 'cert-skillcraft-ml',
    title: 'Machine Learning Internship',
    issuer: 'SkillCraft Technology',
    date: 'Nov 30, 2025',
    description: 'Practical machine learning modeling and data pipeline exercises',
    type: 'modal',
    imageUrl: '/assets/aistudio/SkillCraft_Machine_Learning_Internship_Certificate_Clarity_9af9bc2c.png',
  },
  {
    id: 'cert-skillcraft-lor',
    title: 'Letter of Recommendation',
    issuer: 'SkillCraft Technology',
    date: 'Nov 30, 2025',
    description: 'Formal commendation by Tech Lead Pranav Bansal',
    type: 'modal',
    imageUrl: '/assets/aistudio/SkillCraft_Letter_of_Recommendation_Clarity_87f9535b.png',
  },
  {
    id: 'cert-student-tribe',
    title: 'AI Annotation Internship Certificate',
    issuer: 'Student Tribe',
    date: 'May–July 2025',
    description: 'Dataset tagging, annotation workflows and quality validation',
    type: 'modal',
    imageUrl: '/assets/aistudio/Student_Tribe_AI_Annotation_Internship_Certificate_Clarity_3edb9dcb.png',
  },
  {
    id: 'cert-cambridge',
    title: 'Cambridge English Empower B1+',
    issuer: 'Cambridge University Press & Assessment',
    date: 'Hyderabad',
    description: 'Certified professional English communication and technical discourse',
    type: 'modal',
    imageUrl: '/assets/aistudio/Cambridge_English_Empower_B1plus_Certificate_Clarity_bf902c7d.png',
  },
];
