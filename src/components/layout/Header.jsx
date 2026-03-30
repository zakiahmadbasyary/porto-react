import { useEffect, useState } from "react";

export default function Header() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = ["hero", "experience", "skills", "certificates", "projects"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-80px 0px -50% 0px",
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const linkClass = (id) =>
    `block py-2 transition ${
      active === id ? "text-blue-600 font-semibold" : "text-gray-600"
    }`;

  return (
    <header className="w-full fixed top-0 left-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-600">
          Portfolio. Zaki
        </h1>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-6 font-medium">
          <a href="#hero" className={linkClass("hero")}>About</a>
          <a href="#experience" className={linkClass("experience")}>Experience</a>
          <a href="#skills" className={linkClass("skills")}>Skills</a>
          <a href="#certificates" className={linkClass("certificates")}>Certificates</a>
          <a href="#projects" className={linkClass("projects")}>Projects</a>
          
        </nav>

        {/* HAMBURGER BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-6 pb-4">
          <nav className="flex flex-col gap-2 font-medium">
            <a href="#hero" onClick={() => setOpen(false)} className={linkClass("hero")}>About</a>
            <a href="#experience" onClick={() => setOpen(false)} className={linkClass("experience")}>Experience</a>
            <a href="#skills" onClick={() => setOpen(false)} className={linkClass("skills")}>Skills</a>
            <a href="#certificates" onClick={() => setOpen(false)} className={linkClass("certificates")}>Certificates</a>
            <a href="#projects" onClick={() => setOpen(false)} className={linkClass("projects")}>Projects</a>
            
          </nav>
        </div>
      )}
    </header>
  );
}