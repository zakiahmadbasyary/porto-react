import { useEffect, useState } from "react";

export default function Header() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = ["hero", "about", "experience", "skills", "certificates", "projects", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "-80px 0px -40% 0px",
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

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "certificates", label: "Certificates" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#030712]/80 backdrop-blur-md border-b border-[#1e293b]/70 transition-all">
      <div className="max-w-[1120px] mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        
        {/* BRAND / LOGO */}
        <a 
          href="#hero" 
          className="flex items-center gap-2 group text-sm font-semibold tracking-tight text-[#F5F5F5] hover:text-[#10B981] transition-colors"
        >
          <span className="font-mono text-xs text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded border border-[#10B981]/30">
            ZAKI
          </span>
          <span className="hidden sm:inline text-[#A1A1AA] group-hover:text-[#F5F5F5] transition-colors">
            AHMAD BASYARY
          </span>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-mono uppercase tracking-wider">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`transition-colors py-1 relative ${
                  isActive
                    ? "text-[#10B981]"
                    : "text-[#A1A1AA] hover:text-[#F5F5F5]"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#10B981]" />
                )}
              </a>
            );
          })}

          <a
            href="#contact"
            className="ml-2 bg-[#171717] hover:bg-[#1F1F23] text-[#F5F5F5] hover:text-[#10B981] px-3.5 py-1.5 rounded border border-[#27272A] hover:border-[#10B981]/40 transition-all font-mono text-xs normal-case tracking-normal"
          >
            Contact
          </a>
        </nav>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="md:hidden text-[#A1A1AA] hover:text-[#F5F5F5] p-2 rounded focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE NAV DROPDOWN */}
      {open && (
        <div className="md:hidden bg-[#030712]/95 backdrop-blur-lg border-b border-[#1e293b]/70 px-5 py-4 space-y-3 font-mono text-xs uppercase tracking-wider">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className={`block py-1.5 transition-colors ${
                active === item.id ? "text-[#10B981]" : "text-[#A1A1AA] hover:text-[#F5F5F5]"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block text-center bg-[#171717] text-[#10B981] py-2 rounded border border-[#27272A] normal-case tracking-normal"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}