import {
  Code2,
  Database,
  LineChart,
  Terminal,
  Layout,
  Server,
  Briefcase,
  GraduationCap,
  GitBranch,
  Cloud,
  FileSpreadsheet,
  MonitorCheck
} from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaJava, FaPython, FaPhp, FaReact, FaNodeJs, FaUbuntu, FaDatabase, FaChartBar, FaCode } from "react-icons/fa6";
import { SiLeetcode, SiTypescript, SiJavascript, SiMysql, SiPostgresql } from "react-icons/si";

export const PERSONAL_INFO = {
  name: "Nguyen Trieu Hoang",
  role: "Data Analyst",
  roles: [
    "Data Analyst",
    "Business Intelligence Analyst",
    "Data Specialist"
  ],
  email: "10102005nth@gmail.com",
  phone: "0975154400",
  location: "Ho Chi Minh City, Vietnam",
  hero: "I am a Data Analyst focused on turning complex datasets into clear, actionable business insights.",
  about: "I am Nguyen Trieu Hoang, an Information Systems student at the University of Information Technology (UIT) – VNU-HCM. My interest in data analytics stems from a desire to turn raw, complex datasets into actionable business insights that drive strategic decisions.\n\nI regularly work with Power BI, Excel (Pivot Tables and Power Query), DAX, and SQL to clean, model, and visualize data. I particularly enjoy exploratory data analysis (EDA) and building operational dashboards that identify performance bottlenecks and reveal growth opportunities. I am looking for a Data Analyst role where I can apply my analytical skills to solve real-world business problems."
};

export const SOCIAL_LINKS = [
  { name: "GitHub", url: "https://github.com/hoangdeptrai1010", icon: FaGithub },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/hoangdeptrai", icon: FaLinkedin },
  { name: "Facebook", url: "https://www.facebook.com/hoang.nguyentrieu.3705/", icon: FaFacebook },
  { name: "Instagram", url: "https://www.instagram.com/hoangngtr/", icon: FaInstagram },
  { name: "LeetCode", url: "https://leetcode.com/u/hoangdeptrai1010/", icon: SiLeetcode },
];

export const TECH_STACK = [
  {
    category: "Programming Languages",
    skills: [
      { name: "SQL", icon: Database },
      { name: "Python", icon: FaPython },
      { name: "Java", icon: FaJava },
      { name: "PHP", icon: FaPhp }
    ],
    description: "I have developed strong logical thinking and problem-solving skills through my experience with various programming languages. I utilize SQL for complex database querying and management, and Python for data manipulation, analysis, and task automation. Additionally, my background in Java and PHP from academic projects has provided me with a solid foundation in object-oriented programming and application development."
  },
  {
    category: "Data Visualization",
    skills: [
      { name: "Power BI", icon: FaChartBar },
      { name: "Excel", icon: FileSpreadsheet }
    ],
    description: "I specialize in transforming raw data into meaningful narratives. Using Power BI and Excel, I excel at data cleaning, modeling, and designing highly interactive dashboards. These tools allow me to uncover hidden trends, identify operational bottlenecks, and provide clear, actionable insights that drive data-informed business decisions."
  },
  {
    category: "Other Tools",
    skills: [
      { name: "Git", icon: GitBranch }
    ],
    description: "I use Git for version control to track changes and manage source code efficiently. It helps me maintain a clean project history, collaborate effectively, and ensure secure and organized deployment of my analytical projects."
  }
];

export const EXPERIENCE = [
  {
    id: 1,
    type: "work",
    title: "Intern Data Analyst",
    organization: "Nguyễn Tri Phương Hospital",
    location: "Ho Chi Minh City",
    period: "Feb 2026 - May 2026",
    description: [
      "Extracted and cleaned hospital operational data from the Hospital Information System (HIS) using SQL.",
      "Built operational dashboards in Power BI to track patient check-in times and department volume.",
      "Optimized SQL query performance to speed up daily operational report generation.",
      "Partnered with hospital staff to define KPIs for departmental efficiency reporting."
    ],
    icon: Briefcase
  },
  {
    id: 2,
    type: "education",
    title: "Bachelor of Information Systems",
    organization: "University of Information Technology (UIT) – VNU-HCM",
    location: "Ho Chi Minh City",
    period: "2023 - Present (Expected 2027)",
    description: [
      "Coursework: Database Systems, Business Intelligence, Data Warehousing, Systems Analysis and Design.",
      "Developed projects in Python, SQL, and Power BI focused on exploratory data analysis and data visualization."
    ],
    icon: GraduationCap
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: "Hospital Management Dashboard",
    category: "Data Visualization",
    paragraphs: [
      "Business Problem & Data: Hospital administrators lacked visibility into operational bottlenecks. I analyzed millions of operational healthcare records and financial transaction logs to pinpoint inefficiency.",
      "Methodology & Tools: Using Oracle SQL, Spring Boot, and React, I cleaned and aggregated the data. I standardized timestamps, resolved missing values, and created materialized views to speed up query performance by 80%.",
      "Insights & Decisions: The analysis revealed that patient check-in bottlenecks occurred mostly between 9 AM and 11 AM in outpatient clinics. These insights enabled management to optimize staff scheduling and reduce patient wait times by 20%."
    ],
    tech: ["Spring Boot", "React", "TypeScript", "Oracle", "SQL", "Tailwind CSS"],
    github: "https://github.com/hoangdeptrai1010",
    demo: "#"
  },
  {
    id: 2,
    title: "Amazon E-Commerce Analytics",
    category: "Data Analytics",
    paragraphs: [
      "Business Problem & Data: Raw product datasets are noisy, making it difficult for sellers to understand what factors drive positive customer reviews. I analyzed public Amazon product datasets containing prices, ratings, and categories.",
      "Methodology & Tools: Using Python, Pandas, and NumPy, I cleaned the dataset by imputing missing values and applying log-scaling to skewed price distributions. Matplotlib and Seaborn were used for exploratory analysis.",
      "Insights & Decisions: Products discounted between 30% and 50% achieved the highest rating-to-sales ratio, while larger discounts did not improve ratings. Sellers can use these insights to set optimal discount thresholds."
    ],
    tech: ["Python", "Pandas", "NumPy", "EDA", "Matplotlib", "Jupyter"],
    github: "https://github.com/hoangdeptrai1010",
    demo: "#"
  },
];

export const CERTIFICATES = [
  {
    id: 1,
    title: "Google Data Analytics Professional Certificate",
    issuer: "Coursera (Google)",
    date: "Jun 2026",
    skillsLearned: "Data Cleaning, Tableau, SQL, R Programming",
    file: "/assets/Coursera HAYYLO1K67RD.pdf"
  },
  {
    id: 2,
    title: "SQL (Advanced) Certificate",
    issuer: "HackerRank",
    date: "2026",
    skillsLearned: "Subqueries, Window Functions, Query Performance Tuning",
    file: "/assets/sql_advanced certificate.pdf"
  },
  {
    id: 3,
    title: "IELTS 6.0",
    issuer: "British Council / IDP",
    date: "2024",
    skillsLearned: "Professional Communication, Technical Writing",
    file: null
  }
];
