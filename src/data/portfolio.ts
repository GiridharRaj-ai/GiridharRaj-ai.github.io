export const profile = {
  name: "GiridharRaj Sonti",
  initials: "GS",
  role: "AI/ML Engineer & Software Developer",
  location: "Chennai, India",
  email: "giridharrajsonti@gmail.com",
  phone: "+91 9440436999",
  github: "https://github.com/GiridharRaj-ai",
  linkedin: "https://www.linkedin.com/in/giridharraj-sonti/",
  photo: `${import.meta.env.BASE_URL}dp.jpeg`,
  resume: `${import.meta.env.BASE_URL}resume.pdf`,
  university: "SRM Institute of Science and Technology, Ramapuram",
  degree: "B.Tech CSE (AI & ML)",
  gpa: "8.0 / 10",
  year: "Sep 2023 – Jun 2027",
  school: "Wisewoods International School",
  schoolDetail: "Class XII · 78.6% · 2023",
  objective:
    "Computer Science undergraduate specializing in AI & ML, with hands-on project experience in machine learning applications, time-series forecasting, data preprocessing, and automated API testing using Python. Interested in building reliable, maintainable AI solutions for enterprise applications.",
};

export const stats = [
  { value: "8.0", label: "CGPA out of 10" },
  { value: "03", label: "Shipped projects" },
  { value: "04", label: "Certifications" },
  { value: "2027", label: "Graduating" },
];

export const techMarquee = [
  "Python",
  "scikit-learn",
  "pandas",
  "NumPy",
  "ARIMA",
  "PySpark",
  "Streamlit",
  "Pytest",
  "REST APIs",
  "Django",
  "React",
  "SQL",
  "PostgreSQL",
  "AWS",
];

export type SkillIcon =
  | "Code2"
  | "Brain"
  | "BarChart3"
  | "Layers"
  | "ShieldCheck"
  | "Cpu"
  | "Database"
  | "Wrench";

export interface SkillGroup {
  category: string;
  icon: SkillIcon;
  summary: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming & Query",
    icon: "Code2",
    summary:
      "Python, SQL and JavaScript — the languages behind the models, queries and interfaces.",
    skills: ["Python", "SQL", "JavaScript"],
  },
  {
    category: "Machine Learning",
    icon: "Brain",
    summary:
      "Supervised learning, classification and forecasting, measured on the metrics that matter.",
    skills: [
      "Scikit-learn",
      "Supervised Learning",
      "Classification",
      "Feature Engineering",
      "Model Evaluation",
      "Statistical Modelling",
      "Time-Series Forecasting",
      "ARIMA",
    ],
  },
  {
    category: "Data Processing",
    icon: "BarChart3",
    summary:
      "Cleaning, transforming and exploring data before any of it reaches a model.",
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Data Cleaning",
      "Data Preprocessing",
      "Data Transformation",
      "ETL Concepts",
      "PySpark (Basic)",
    ],
  },
  {
    category: "AI Application Development",
    icon: "Layers",
    summary:
      "Turning a trained model into something a user can actually open and use.",
    skills: [
      "Streamlit",
      "REST APIs",
      "Django",
      "React",
      "JSON",
      "HTTP Methods & Status Codes",
    ],
  },
  {
    category: "Testing & Debugging",
    icon: "ShieldCheck",
    summary:
      "Automated checks that catch API and model regressions before release.",
    skills: [
      "Pytest",
      "API Testing",
      "Functional Testing",
      "Test Automation",
      "Negative Testing",
      "Debugging",
    ],
  },
  {
    category: "Core CS",
    icon: "Cpu",
    summary:
      "The fundamentals that keep implementations correct and maintainable.",
    skills: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "Exception Handling",
      "SDLC",
    ],
  },
  {
    category: "Databases",
    icon: "Database",
    summary:
      "Relational modelling and querying for structured application data.",
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    category: "Tools & Cloud",
    icon: "Wrench",
    summary:
      "Version control, editors and cloud basics for day-to-day delivery.",
    skills: ["Git", "GitHub", "VS Code", "AWS Fundamentals"],
  },
];

export interface Project {
  id: string;
  title: string;
  stack: string[];
  category: string;
  description: string;
  bullets: string[];
  pipeline: string[];
  highlight: string;
  github: string;
  demo: string | null;
}

export const projects: Project[] = [
  {
    id: "customer-churn-prediction",
    title: "Customer Churn Prediction System",
    stack: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
    category: "ML / Customer analytics",
    description:
      "An end-to-end churn prediction application that scores telecom customers by churn risk.",
    bullets: [
      "Processed 7,000+ telecom customer records through cleaning, preprocessing, feature engineering and transformation.",
      "Trained and compared Logistic Regression, Decision Tree and Random Forest models on accuracy, precision, recall, F1-score and ROC-AUC.",
      "Integrated preprocessing and model inference into an interactive Streamlit application for user-driven predictions.",
    ],
    pipeline: [
      "7,000+ telecom records",
      "Cleaning & feature engineering",
      "Logistic / decision tree / random forest",
      "Accuracy · precision · recall · F1 · ROC-AUC",
      "Streamlit prediction app",
    ],
    highlight: "ROC-AUC 0.82",
    github: "https://github.com/GiridharRaj-ai?tab=repositories",
    demo: null,
  },
  {
    id: "ev-battery-forecasting",
    title: "Electric Vehicle Battery Performance Forecasting",
    stack: ["Python", "Pandas", "ARIMA", "Matplotlib", "PySpark"],
    category: "Time-series / Forecasting",
    description:
      "A forecasting workflow that projects EV battery performance from historical observations.",
    bullets: [
      "Built a time-series workflow covering data preparation, model training, prediction and visualisation.",
      "Performed exploratory data analysis, cleaning and feature preparation with Pandas and Matplotlib.",
      "Implemented ARIMA forecasting, compared predictions with historical observations and used PySpark DataFrames for ETL exercises.",
    ],
    pipeline: [
      "EV battery telemetry",
      "EDA & cleaning",
      "ARIMA model training",
      "Prediction vs history",
      "Matplotlib visualisation",
    ],
    highlight: "ARIMA",
    github: "https://github.com/GiridharRaj-ai?tab=repositories",
    demo: null,
  },
  {
    id: "automated-api-testing",
    title: "Automated API Testing Framework",
    stack: ["Python", "Pytest", "REST APIs", "SQL"],
    category: "QA / API testing",
    description:
      "A reusable test framework that validates REST API behaviour and response data.",
    bullets: [
      "Built a reusable Python and Pytest framework to validate REST API responses, HTTP status codes and request-handling behaviour.",
      "Wrote positive, negative, boundary-value and edge-case tests to evaluate API reliability.",
      "Investigated failures, validated response data and kept the suite repeatable under Git and GitHub.",
    ],
    pipeline: [
      "REST endpoints",
      "Pytest test suite",
      "Positive · negative · boundary cases",
      "Status code & payload validation",
      "Repeatable Git-tracked run",
    ],
    highlight: "Pytest",
    github: "https://github.com/GiridharRaj-ai?tab=repositories",
    demo: null,
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Understand the data",
    description:
      "Frame the question, audit the dataset and find what is missing before a single model gets fitted.",
  },
  {
    number: "02",
    title: "Build and validate",
    description:
      "Start from a baseline, then engineer features, tune hyperparameters and validate on held-out data.",
  },
  {
    number: "03",
    title: "Explain and hand over",
    description:
      "Translate the metrics into a decision, document the trade-offs and leave reproducible code behind.",
  },
];

export const certifications = [
  {
    title: "Microsoft Data Engineer Career Path",
    issuer: "Microsoft Learn",
    description:
      "Pipelines, storage and transformation patterns for data engineering on Azure.",
  },
  {
    title: "Data Warehousing with Databricks",
    issuer: "Databricks Academy",
    description:
      "Warehouse design and lakehouse fundamentals for analytical workloads.",
  },
  {
    title: "Data Fundamentals",
    issuer: "IBM SkillsBuild",
    description:
      "Data collection, quality and governance — the groundwork every analysis depends on.",
  },
  {
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    description:
      "Network models, addressing and the protocols the APIs in my projects run on.",
  },
];

export const faqs = [
  {
    question: "What kind of roles are you looking for?",
    answer:
      "Machine learning engineer, data scientist, or an SDE role where models have to reach production. I am especially interested in reliable, maintainable AI for enterprise applications.",
  },
  {
    question: "Where are you based, and would you relocate?",
    answer:
      "I am based in Chennai, India. I am open to relocating within India and to remote-first teams that work across time zones.",
  },
  {
    question: "What does your day-to-day stack look like?",
    answer:
      "Python, scikit-learn, pandas and SQL, with Pytest and Streamlit for the application and testing side. I am currently going deeper on model deployment and cloud data tooling.",
  },
  {
    question: "How quickly do you reply?",
    answer:
      "Email is the fastest route — giridharrajsonti@gmail.com. I usually reply within a day, and my résumé has the full project and certification detail.",
  },
];
