import isyarat from "../assets/proyek/SLR.png";
import resto from "../assets/proyek/resto.png";
import analisa from "../assets/proyek/analisa.png";
import djpb from "../assets/proyek/djpb.png";
import desa from "../assets/proyek/desa.png";
import sipedas from "../assets/proyek/sipedas.png";
import sentiment from "../assets/proyek/sentiment.png";
import ar from "../assets/proyek/ar.png";


export const projects = [
  {
    id: "isyarat",
    title: "SIBI Sign Language Translator System",
    description:
      "Undergraduate thesis project to assist deaf individuals in communicating and practicing SIBI sign language gestures by implementing YOLO11 and MediaPipe computer vision models.",
    image: isyarat,
    tech: ["Python", "YOLO11", "Mediapipe"],
    github: "https://github.com/zakiahmadbasyary/PengenalanBahasaIsyarat",
    demo: "https://github.com/zakiahmadbasyary/PengenalanBahasaIsyarat",
    defaultFeatured: true,
    category: "AI & ML",
  },
  {
    id: "fintrack",
    title: "FinTrack - Aplikasi Pencatat Keuangan Sederhana",
    description:
      "A simple financial tracking application that uses a spreadsheet as a database, featuring a simple interface and customizable categories.",
    image: fintrack,
    tech: ["Next.js", "Spreadsheet", "appsheet"],
    github: "https://github.com/zakiahmadbasyary/PengenalanBahasaIsyarat",
    demo: "https://github.com/zakiahmadbasyary/PengenalanBahasaIsyarat",
    defaultFeatured: true,
    category: "AI & ML",
  },
  {
    id: "resto",
    title: "Restaurant Reservation Web Application",
    description:
      "A web-based restaurant booking application built with Python Flask and MySQL. Features user reservation workflows and an admin dashboard for managing tables, orders, and restaurant analytics.",
    image: resto,
    tech: ["HTML", "Bootstrap", "Python", "Flask", "MySQL"],
    github: "https://github.com/zakiahmadbasyary/ProyekResto",
    demo: "https://github.com/zakiahmadbasyary/ProyekResto",
    defaultFeatured: true,
    category: "Web Dev",
  },
  {
    id: "analisa",
    title: "Data Analytics: Trend Analysis & Visualization",
    description:
      "A collection of data-driven trend analyses. Conducted exploratory data analysis, data visualization, and key insight extractions regarding socio-economic developments in Indonesia.",
    image: analisa,
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/zakiahmadbasyary/DataAnalyst-Analisa_Trend",
    demo: "https://github.com/zakiahmadbasyary/DataAnalyst-Analisa_Trend",
    defaultFeatured: true,
    category: "Data Analytics",
  },
  {
    id: "djpb",
    title: "Lampung Province Macroeconomic Dashboard",
    description:
      "An interactive dashboard designed to present critical macroeconomic indicators such as economic growth, inflation, poverty rate, and unemployment for DJPb Regional Office Lampung Province.",
    image: djpb,
    tech: ["Tableau", "Data Visualization", "Excel"],
    github: "-",
    demo: "-",
    defaultFeatured: true,
    category: "Data Analytics",
  },
  {
    id: "desa",
    title: "Belambangan Village Official Website",
    description:
      "Designed and developed an official web portal for Belambangan Village, presenting village news, public services, and community events to enhance communication between local government and residents.",
    image: desa,
    tech: ["HTML", "Bootstrap", "JavaScript"],
    github: "https://github.com/zakiahmadbasyary/Web_Desa_Belambangan",
    demo: "https://belambangan-web.vercel.app/",
    defaultFeatured: false,
    category: "Web Dev",
  },
  {
    id: "sipedas",
    title: "Chili Plant Disease Expert System (Bayesian Theorem)",
    description:
      "Web-based expert system application for detecting and diagnosing chili plant diseases using Bayesian Theorem probability algorithms.",
    image: sipedas,
    tech: ["HTML", "Bootstrap", "JavaScript"],
    github: "https://github.com/zakiahmadbasyary/Sistem-Pakar-Penyakit-Cabai",
    demo: "https://sistem-pakar-penyakit-cabai.vercel.app/",
    defaultFeatured: false,
    category: "Web Dev",
  },
  {
    id: "sentiment",
    title: "IKN Sentiment Analysis (Twitter/X Data)",
    description:
      "Capstone project evaluating public sentiment regarding Indonesia's new capital city (IKN) based on Twitter dataset analysis using NLP techniques and Streamlit interactive UI.",
    image: sentiment,
    tech: ["Python", "Pandas", "NLP", "Streamlit"],
    github: "https://github.com/zakiahmadbasyary/Capstone_Mikti",
    demo: "https://capstonemikti-u83cyzv4n3afgmzegz8g9q.streamlit.app/",
    defaultFeatured: false,
    category: "AI & ML",
  },
  {
    id: "ar",
    title: "Sembahyang App: AR Interactive Prayer Learning",
    description:
      "An Augmented Reality (AR) mobile application developed using Unity and C# to teach prayer movements and recitations through interactive 3D visualizations.",
    image: ar,
    tech: ["Unity", "C#", "AR Foundation"],
    github: "https://github.com/zakiahmadbasyary/Aplikasi-AR-Sembahyang",
    demo: "https://drive.google.com/drive/folders/1y8DftJLi0xjOprZ1eWMwo8D8AGWc7thT",
    defaultFeatured: false,
    category: "AR & Mobile",
  },
];