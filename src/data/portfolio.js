// ─────────────────────────────────────────────────────────────
// Single source of truth. Edit this file to update the whole site.
// Source: resume. Anything marked TODO needs your input.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Pavitra Pundaleek Rathod',
  shortName: 'Pavitra Rathod',
  initials: 'PR',
  headline: 'Aspiring Software Engineer building AI-powered, data-driven applications',
  roles: ['Python Developer', 'Backend & REST API Developer', 'AI/ML and NLP Enthusiast', 'RAG & LLM Application Builder'],
  intro:
    'AI & Data Science engineering student who builds with Python, LLMs and REST APIs. I like turning messy documents and raw data into software people can actually use.',
  location: 'Bengaluru, Karnataka, India',
  email: 'pavitraprathod7416@gmail.com',
  resumeUrl: '/resume.pdf',
  resumeFileName: 'Pavitra_Rathod_Resume.pdf',
}

export const socials = {
  github: 'https://github.com/pavitra-rathod',
  linkedin: 'https://www.linkedin.com/in/pavitra-rathod-work',
  leetcode: 'https://leetcode.com/u/Pavitra_P_Rathod/',
}

export const about = [
  'I am a third-year B.E. student in Artificial Intelligence and Data Science at CMR Institute of Technology, Bengaluru, graduating in 2027. My foundation is in Python, databases and REST API development, with a growing focus on NLP and large language models.',
  'Through my projects I have built a retrieval-augmented (RAG) document assistant and two machine learning systems that predict customer churn and forecast sales, each paired with a backend or dashboard layer. Working on them taught me to break a vague problem into data, model and interface.',
  'I practise problem solving on LeetCode, completed coursework in algorithm design and data structures, and I am looking for an entry-level Software Engineer, Software Developer or Backend Developer role where I can keep learning while shipping real software.',
]

export const aboutHighlights = [
  { label: 'Degree', value: 'B.E. AI & Data Science, 2027' },
  { label: 'Interests', value: 'RAG, NLP, backend APIs, analytics' },
  { label: 'Looking for', value: 'Entry-level Software / Backend roles' },
]

// icon names map to lucide icons in Skills.jsx
export const skillGroups = [
  { title: 'Programming Languages', icon: 'Code2', items: ['Python', 'Java (Basics)'] },
  { title: 'Web Technologies', icon: 'Globe', items: ['HTML', 'CSS', 'JavaScript'] },
  { title: 'Backend & APIs', icon: 'Server', items: ['REST APIs', 'Docker', 'CI/CD'] },
  { title: 'Databases', icon: 'Database', items: ['MySQL', 'MongoDB (NoSQL)'] },
  { title: 'AI/ML & Generative AI', icon: 'BrainCircuit', items: ['Scikit-learn', 'NLP', 'LLMs', 'Prompt Engineering', 'RAG', 'Agentic AI'] },
  { title: 'Data Analysis & Visualization', icon: 'BarChart3', items: ['Power BI', 'Tableau', 'Microsoft Excel'] },
  { title: 'Cloud Computing', icon: 'Cloud', items: ['Amazon Web Services (AWS)', 'Microsoft Azure'] },
  { title: 'Tools & Operating Systems', icon: 'Wrench', items: ['Visual Studio Code', 'Git', 'GitHub', 'Windows', 'Linux'] },
]

// github / demo: set to a URL string once available. null hides the button.
export const projects = [
  {
    id: 'rag-assistant',
    title: 'AI-Powered Document Intelligence & RAG Assistant',
    featured: true,
    summary:
      'A retrieval-augmented assistant that answers questions from your documents, with a backend for document processing and conversation management.',
    problem: 'Finding specific answers inside long documents is slow, and plain LLMs do not know your files.',
    features: [
      'Querying and retrieving information from documents',
      'Document chunking and embeddings to ground LLM answers in context',
      'REST APIs in Python for document processing and conversation management',
      'MongoDB storage for conversations',
    ],
    stack: ['Python', 'LLMs', 'NLP', 'RAG', 'MongoDB', 'REST APIs', 'JavaScript', 'HTML', 'CSS'],
    github: null, // TODO: add repo URL
    demo: null, // TODO: add live demo URL
  },
  {
    id: 'churn-prediction',
    title: 'Intelligent Customer Churn Prediction System',
    summary: 'A machine learning system that predicts which customers are likely to leave, with dashboards to explore churn trends and segments.',
    problem: 'Businesses need to spot high-risk customers before they leave.',
    features: [
      'Preprocessing, feature engineering and model evaluation with Scikit-learn',
      'Identification of high-risk customers',
      'Power BI / Tableau dashboards for churn trends and customer segments',
    ],
    stack: ['Python', 'Scikit-learn', 'MySQL', 'Power BI', 'Tableau', 'REST APIs', 'JavaScript'],
    github: null,
    demo: null,
  },
  {
    id: 'sales-forecasting',
    title: 'Intelligent Sales Forecasting & Analytics System',
    summary: 'A forecasting system that predicts revenue and product performance, with KPI dashboards built on MySQL and Excel data.',
    problem: 'Teams need a clear view of expected revenue and how products are performing.',
    features: [
      'Data processing, trend analysis and predictive modelling with Python and Scikit-learn',
      'Power BI / Tableau dashboards visualizing sales KPIs',
      'MySQL and Excel as data sources',
    ],
    stack: ['Python', 'Scikit-learn', 'MySQL', 'Excel', 'Power BI', 'Tableau', 'REST APIs', 'JavaScript'],
    github: null,
    demo: null,
  },
]

export const education = [
  {
    degree: 'Bachelor of Engineering – Artificial Intelligence and Data Science',
    school: 'CMR Institute of Technology, Bengaluru, Karnataka',
    period: 'Expected 2027',
    score: 'CGPA 7.83', // TODO: confirm this is CGPA (resume only says "7.83")
    status: 'Pursuing',
  },
  { degree: '12th Standard – Science', school: 'SCP PU College, Mahalingpur, Karnataka', period: '2023', score: '80.5%' },
  { degree: '10th Standard', school: 'KJ Somaiya English Medium School, Sameerwadi, Karnataka', period: '2021', score: '61%' },
]

export const certifications = [
  { title: 'Full Stack React Development', issuer: 'Infosys Springboard' },
  { title: 'Python for Data Science', issuer: 'NPTEL' },
  { title: 'Introduction to Algorithm Design', issuer: 'NPTEL' },
  { title: 'Fundamentals of Data Structures & Algorithms', issuer: 'CMR Institute of Technology' },
]

export const hackathons = ['Cognizant Technoverse Hackathon (2026)', 'Gappy AI Hackathon (2026)', 'Eureka 3.0 Hackathon (2026)']

export const achievements = [
  { title: 'Winner, State-Level Handball Championship', detail: 'Representing Bagalkot District', year: '2023' },
  { title: '1st Place, Abhinaya Chakravarthi', detail: 'CMRIT Cultura', year: '2026' },
  { title: '2nd Place, Abhinaya Chakravarthi', detail: 'CMRIT Cultura', year: '2024' },
  { title: '3rd Place, VTU Intercollegiate Division-Level Handball', detail: 'Tournament', year: '2024' },
  // TODO: resume lists 4th place for 2023 and "2023, 2025". Confirm the years.
  { title: '4th Place, VTU Intercollegiate Division-Level Handball', detail: 'Tournament', year: '2023, 2025' },
  { title: 'National-level participation', detail: '35th Sub-Junior Girls, 52nd and 54th Senior Women\'s National Handball Championships', year: '' },
]

export const leadership = [
  'Team Captain, CMRIT Handball Team',
  'Trained and mentored college-level boys and girls handball teams at CMRIT',
  'Member of Samskruthi Kannada Club since April 2023; organized and conducted multiple club events',
]

export const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Achievements', 'Contact']
