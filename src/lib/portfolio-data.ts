import lpucure from "@/assets/proj-lpucure.jpg";
import chatbot from "@/assets/proj-chatbot.jpg";
import maintenance from "@/assets/proj-maintenance.jpg";
import fraud from "@/assets/proj-fraud.jpg";

export const profile = {
  name: "A Ramcharan",
  role: "Full Stack Developer & ML Engineer",
  tagline:
    "B.Tech CSE student at LPU and ML Engineer Intern — building MERN applications and intelligent ML systems that solve real problems.",
  email: "ramcharan8206@gmail.com",
  phone: "+91 8688661171",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
  location: "Punjab, India",
};

export const experience = [
  {
    role: "Machine Learning Engineer Intern",
    company: "Pratinik Infotech",
    period: "Mar 2026 — Present",
    description:
      "Developing and deploying advanced ML models. Owning data preprocessing, feature engineering, and algorithm selection to ship production-ready AI solutions.",
  },
];

export const education = [
  {
    school: "Lovely Professional University (LPU)",
    degree: "B.Tech — Computer Science and Engineering",
    period: "2024 — 2028",
    location: "Punjab, India",
  },
  {
    school: "Brahmarshi EM High School",
    degree: "High School",
    period: "2021 — 2022",
    location: "India",
  },
];

export const certificates = [
  "Microsoft Azure AI Fundamentals",
  "Microsoft Azure Data Fundamentals",
  "Microsoft Azure Fundamentals",
];

export const skills = [
  { group: "Languages", items: ["C", "C++", "Python", "Java", "JavaScript"] },
  { group: "Web / MERN", items: ["React", "Node.js", "Express", "MongoDB", "REST APIs"] },
  { group: "AI / ML", items: ["Azure ML", "scikit-learn", "TensorFlow", "Pandas", "Feature Engineering"] },
  { group: "Cloud", items: ["AWS", "Microsoft Azure", "Azure AI Services"] },
  { group: "Core CS", items: ["Data Structures", "Algorithms", "Automation Tools", "Problem Solving"] },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  short: string;
  description: string;
  highlights: string[];
  stack: string[];
  image: string;
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "lpucure",
    title: "LPUCure",
    category: "Healthcare Platform",
    short:
      "A comprehensive MERN-stack medical service ecosystem for LPU students and staff, combining AI and advanced DSA.",
    description:
      "LPUCure is a MERN-stack medical service ecosystem built for the students and staff of Lovely Professional University. It integrates Artificial Intelligence and advanced Data Structures & Algorithms to solve real-world healthcare and logistical challenges across a massive campus — from triage and appointments to medicine logistics and emergency routing.",
    highlights: [
      "AI-assisted symptom triage and doctor recommendation",
      "Graph & queue-based DSA for emergency routing on campus",
      "Role-based dashboards for students, doctors and admins",
      "Real-time appointment scheduling with conflict detection",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Python", "AI"],
    image: lpucure,
    accent: "from-cyan-400 to-violet-500",
  },
  {
    slug: "ai-chatbot",
    title: "AI Chatbot",
    category: "Conversational AI",
    short:
      "Context-aware chatbot with streaming responses, conversation memory and a clean glassmorphic UI.",
    description:
      "An intelligent chatbot built on the OpenAI API with full conversation memory, markdown rendering and streaming responses. The interface supports multiple chats, message history persistence, and a polished dark UI optimized for long conversations.",
    highlights: [
      "Streaming token-by-token responses",
      "Persistent multi-conversation history",
      "Markdown + code block rendering",
      "Tool-calling architecture for image and search",
    ],
    stack: ["React", "Node.js", "OpenAI API", "Express", "MongoDB"],
    image: chatbot,
    accent: "from-blue-400 to-purple-500",
  },
  {
    slug: "predictive-maintenance",
    title: "Predictive Maintenance",
    category: "Industrial ML",
    short:
      "Machine learning system that predicts equipment failure from sensor telemetry before downtime occurs.",
    description:
      "An ML pipeline that ingests time-series sensor data from industrial machines, engineers features, and predicts the remaining useful life (RUL) of equipment. A live dashboard surfaces failure risk so maintenance teams can act before breakdowns.",
    highlights: [
      "Time-series feature engineering on multivariate sensor data",
      "Random Forest & LSTM models compared, ~94% accuracy",
      "Live risk-score dashboard with threshold alerts",
      "REST API serving predictions to the frontend",
    ],
    stack: ["Python", "scikit-learn", "TensorFlow", "Flask", "React", "Recharts"],
    image: maintenance,
    accent: "from-orange-400 to-cyan-400",
  },
  {
    slug: "fraud-detection",
    title: "Fraud Detection",
    category: "Financial ML",
    short:
      "Real-time credit card fraud detection using ensemble models on highly imbalanced transaction data.",
    description:
      "An end-to-end fraud detection system that classifies transactions as legitimate or fraudulent in real time. Handles severe class imbalance with SMOTE, uses ensemble models, and exposes predictions through an API consumed by an analyst dashboard.",
    highlights: [
      "SMOTE oversampling for imbalanced class handling",
      "XGBoost + Logistic Regression ensemble, ~99% AUC",
      "Real-time scoring endpoint under 100ms latency",
      "Analyst dashboard with transaction drill-down",
    ],
    stack: ["Python", "XGBoost", "Pandas", "FastAPI", "React", "PostgreSQL"],
    image: fraud,
    accent: "from-pink-500 to-cyan-400",
  },
];
