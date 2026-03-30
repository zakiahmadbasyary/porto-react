export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* BRAND */}
          <div>
            <h2 className="text-xl font-bold text-blue-600">
              Portfolio.
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Dibuat dengan React & Tailwind CSS
            </p>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-6 text-gray-600 text-sm">
            
            <a
              href="https://github.com/zakiahmadbasyary"
              target="_blank"
              className="hover:text-blue-600"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/zaki-ahmad-basyary"
              target="_blank"
              className="hover:text-blue-600"
            >
              LinkedIn
            </a>

            <a
              href="mailto:zakiahmadbasyary@gmail.com"
              className="hover:text-blue-600"
            >
              Email
            </a>

          </div>

        </div>

        {/* LINE */}
        <div className="border-t mt-8 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Zaki Portfolio. All rights reserved.
        </div>

      </div>
    </footer>
  );
}