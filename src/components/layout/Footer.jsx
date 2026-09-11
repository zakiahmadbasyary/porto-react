export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#27272A] py-12 text-[#71717A] font-mono text-xs">
      <div className="max-w-[1120px] mx-auto px-5 md:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-[#27272A]">
          
          {/* BRAND */}
          <div>
            <div className="text-[#F5F5F5] font-semibold text-sm tracking-tight flex items-center gap-2">
              <span className="text-[#10B981] bg-[#10B981]/10 px-1.5 py-0.5 rounded border border-[#10B981]/20">
                ZAKI
              </span>
              <span>ZAKI AHMAD BASYARY</span>
            </div>
            <p className="text-[#71717A] mt-1.5 text-xs font-sans">
              Software Developer &amp; Data Analyst — Built with React &amp; Tailwind CSS
            </p>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex flex-wrap gap-6 text-xs text-[#A1A1AA]">
            <a
              href="https://github.com/zakiahmadbasyary"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#10B981] transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href="https://linkedin.com/in/zaki-ahmad-basyary"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#10B981] transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href="mailto:zakiahmadbasyary@gmail.com"
              className="hover:text-[#10B981] transition-colors"
            >
              Email ↗
            </a>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            © {new Date().getFullYear()} Zaki Ahmad Basyary. All rights reserved.
          </div>
          <div className="text-[#71717A]">
            TERMINAL EDITORIAL SYSTEM v2.0
          </div>
        </div>

      </div>
    </footer>
  );
}