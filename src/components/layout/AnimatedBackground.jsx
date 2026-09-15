export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#030712]">
      {/* MOVING BLUE GRADIENT ORB 1 */}
      <div className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-blue-600/35 via-cyan-500/25 to-indigo-700/30 blur-[130px] animate-blob1" />

      {/* MOVING BLUE GRADIENT ORB 2 */}
      <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-indigo-600/30 via-blue-500/35 to-sky-400/25 blur-[140px] animate-blob2" />

      {/* MOVING BLUE GRADIENT ORB 3 */}
      <div className="absolute top-2/3 -left-28 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-sky-600/25 via-blue-600/35 to-teal-500/20 blur-[150px] animate-blob3" />

      {/* MOVING BLUE GRADIENT ORB 4 */}
      <div className="absolute -bottom-32 right-1/4 w-[650px] h-[650px] rounded-full bg-gradient-to-tl from-blue-700/40 via-indigo-500/30 to-cyan-400/25 blur-[130px] animate-blob4" />

      {/* SUBTLE RADIAL GLOW PULSE OVERLAY */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent opacity-60" />

      {/* MODERN TECH MESH GRID OVERLAY */}
      <div 
        className="absolute inset-0 opacity-[0.15]" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #38bdf8 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />
    </div>
  );
}
