import isyarat from "../assets/proyek/isyarat.png";
import resto from "../assets/proyek/resto.png";
import analisa from "../assets/proyek/analisa.png";
import djpb from "../assets/proyek/djpb.jpg";
import desa from "../assets/proyek/desa.png";
import sipedas from "../assets/proyek/sipedas.png";
import sentiment from "../assets/proyek/sentiment.png";
import ar from "../assets/proyek/ar.png";


export const projects = [
  {
    title: "Sistem Penerjamah Bahasa Isyarat SIBI ",
    description:
      "Proyek skripsi untuk membantu tunarungu berkomunikasi dan berlatih gerakan bahasa isyarat SIBI dengan mengimplementasikan model YOLO11 dengan mediapipe untuk membuat sistem penerjemah bahasa isyarat SIBI",
    image: isyarat,
    tech: ["Python", "YOLO11", "Mediapipe"],
    github: "https://github.com/zakiahmadbasyary/PengenalanBahasaIsyarat",
    demo: "https://github.com/zakiahmadbasyary/PengenalanBahasaIsyarat",
  },
  {
    title: "Website Sederhana Reservasi Restoran",
    description:
      "Proyek Resto adalah aplikasi pemesanan restoran sederhana berbasis web menggunakan Python Flask dan MySQL. Aplikasi ini menyediakan fitur pemesanan oleh pengguna, serta dashboard bagi admin untuk mengelola meja, pesanan, dan memonitor aktivitas restoran.",
    image: resto,
    tech: ["html", "bootstrap", "python", "flask", "mysql"],
    github: "https://github.com/zakiahmadbasyary/ProyekResto",
    demo: "https://github.com/zakiahmadbasyary/ProyekResto",
  },
  {
    title: "Data Analyst : Analisa & Visualisasi Trend",
    description:
      "Kumpulan analisis tren berbasis data.  Analisis dilakukan dengan pendekatan Data Analytics mulai dari eksplorasi data, visualisasi, hingga penarikan insight penting terkait perkembangan sosial dan ekonomi di Indonesia.",
    image: analisa,
    tech: ["python", "pandas", "matplotlib", "seaborn"],
    github: "https://github.com/zakiahmadbasyary/DataAnalyst-Analisa_Trend",
    demo: "https://github.com/zakiahmadbasyary/DataAnalyst-Analisa_Trend",
  },
  {
    title: "Dashboard Indikator Ekonomi Makro Provinsi Lampung",
    description:
      "Dashboard ini dirancang untuk menyajikan data penting seperti pertumbuhan ekonomi, inflasi, kemiskinan, pengangguran, dan indikator lainnya dalam bentuk visual yang interaktif dan mudah dipahami. Tujuannya adalah membantu pengambil kebijakan, stakeholder, maupun masyarakat dalam memahami kondisi ekonomi daerah secara lebih cepat dan informatif. Dashboard ini dibuat dalam studi kasus Kanwil DJPb Provinsi Lampung",
    image: djpb,
    tech: ["tableau", "data visualization", "excel"],
    github: "-",
    demo: "-",
  },
  {
    title: "Projek Pembuatan Website Desa Belambangan Lampung Selatan",
    description:
      "Website ini dirancang untuk menyajikan informasi penting tentang desa Belambangan, termasuk berita terkini, kegiatan, dan layanan yang tersedia. Tujuannya adalah untuk memperkuat komunikasi antara pemerintah desa dan masyarakat serta meningkatkan partisipasi warga dalam pembangunan desa.",
    image: desa,
    tech: ["html", "bootstrap", "javascript"],
    github: "https://github.com/zakiahmadbasyary/Web_Desa_Belambangan",
    demo: "https://belambangan-web.vercel.app/",
  },
  {
    title: "Website Sistem Pakar Penyakit Tanaman Cabai Dengan Teorema Bayes",
    description:
      "Pembuatan website sistem pakar untuk mendeteksi penyakit pada tanaman cabai dengan menerapkan algoritma teorema bayes",
    image: sipedas,
    tech: ["html", "bootstrap", "javascript"],
    github: "https://github.com/zakiahmadbasyary/Sistem-Pakar-Penyakit-Cabai",
    demo: "https://sistem-pakar-penyakit-cabai.vercel.app/",
  },
  {
    title: "Sentiment Analysis Tentang IKN tweet tanyarlfes",
    description:
      "capstone project pada studi independen di MIKTI dengan melakukan sentiment analysis IKN pada tweet akun tanyarlfes",
    image: sentiment,
    tech: ["python", "pandas", "NLP", "streamlit"],
    github: "https://github.com/zakiahmadbasyary/Capstone_Mikti",
    demo: "https://capstonemikti-u83cyzv4n3afgmzegz8g9q.streamlit.app/",
  },
  {
    title: "Aplikasi Sembahyang : Media Interaktif Pembelajaran Sholat Berbasis AR",
    description:
      "Aplikasi “Sembahyang” merupakan aplikasi berbasis Augmented Reality (AR) yang  dikembangkan untuk membantu proses pembelajaran gerakan dan bacaan sholat secara interaktif. ",
    image: ar,
    tech: ["Unity", "C#", "AR Foundation"],
    github: "https://github.com/zakiahmadbasyary/Aplikasi-AR-Sembahyang",
    demo: "https://drive.google.com/drive/folders/1y8DftJLi0xjOprZ1eWMwo8D8AGWc7thT",
  },
];