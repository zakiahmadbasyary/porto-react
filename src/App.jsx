import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Certificates from "./components/sections/Certificates";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import WaterRippleBackground from "./components/layout/WaterRippleBackground";

function App() {
  return (
    <div className="relative min-h-screen bg-[#020617] text-[#F5F5F5] font-sans selection:bg-[#0284c7]/30 selection:text-[#38bdf8] overflow-x-hidden">
      <WaterRippleBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certificates />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;