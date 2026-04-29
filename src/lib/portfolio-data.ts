import lpucure from "@/assets/proj-lpucure.jpg";
import chatbot from "@/assets/proj-chatbot.jpg";
import maintenance from "@/assets/proj-maintenance.jpg";
import fraud from "@/assets/proj-fraud.jpg";

export const profile = {
  name: "A Ramcharan",
  role: "Full Stack Developer & AI Enthusiast",
  tagline:
    "I build MERN stack applications with smooth user flows, secure backends, and intelligent data systems.",
  email: "ramcharan@example.com",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
  location: "India",
};

export const skills = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"] },
  { group: "Backend", items: ["Node.js", "Express", "REST APIs", "JWT Auth", "WebSockets"] },
  { group: "Database", items: ["MongoDB", "PostgreSQL", "Mongoose", "Prisma"] },
  { group: "AI / ML", items: ["Python", "TensorFlow", "scikit-learn", "Pandas", "OpenAI API"] },
  { group: "Tools", items: ["Git", "Docker", "Postman", "Vercel", "Automation"] },
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
      "A full-stack healthcare platform connecting students with on-campus medical support, appointments and live consultations.",
    description:
      "LPUCure is a MERN-stack healthcare web app designed to streamline medical support for university students. It features secure authentication, role-based dashboards for students and doctors, real-time appointment booking, and a digital health records system. Built with a focus on accessibility, smooth UX, and reliable data flow.",
    highlights: [
      "Role-based JWT authentication for students, doctors and admins",
      "Real-time appointment scheduling with conflict detection",
      "Digital prescription & medical history records",
      "Responsive dashboard with appointment analytics",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind", "JWT"],
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
