import { useEffect, useRef } from "react";

export default function WaterRippleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Downscaled buffer resolution for smooth 60fps performance
    const scale = 2; // 1/2 size of screen
    let bufferWidth = Math.floor(width / scale);
    let bufferHeight = Math.floor(height / scale);
    let bufferSize = bufferWidth * bufferHeight;

    let buffer1 = new Float32Array(bufferSize);
    let buffer2 = new Float32Array(bufferSize);

    // Damping factor controls how long ripples last (0.95 = crisp, 0.985 = fluid ocean)
    const damping = 0.965;

    // Offscreen canvas for rendering displaced image data
    const offscreen = document.createElement("canvas");
    offscreen.width = bufferWidth;
    offscreen.height = bufferHeight;
    const offscreenCtx = offscreen.getContext("2d");
    let imgData = offscreenCtx.createImageData(bufferWidth, bufferHeight);
    let data = imgData.data;

    // Track mouse speed & positions
    let prevMouseX = -1;
    let prevMouseY = -1;
    let isMouseActive = false;
    let mouseTimeout;

    // Add a ripple drop at (x, y) with radius & strength
    function addDrop(x, y, radius, strength) {
      const bx = Math.floor(x / scale);
      const by = Math.floor(y / scale);

      if (bx < radius || bx >= bufferWidth - radius || by < radius || by >= bufferHeight - radius) {
        return;
      }

      const radiusSq = radius * radius;
      for (let dy = -radius; dy <= radius; dy++) {
        for (let dx = -radius; dx <= radius; dx++) {
          const distSq = dx * dx + dy * dy;
          if (distSq <= radiusSq) {
            const index = (by + dy) * bufferWidth + (bx + dx);
            // Smooth cosine falloff from center of drop
            const factor = Math.cos((Math.sqrt(distSq) / radius) * (Math.PI / 2));
            buffer1[index] += strength * factor;
          }
        }
      }
    }

    // Handle mouse movement
    function handlePointerMove(e) {
      const x = e.clientX;
      const y = e.clientY;

      isMouseActive = true;
      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => {
        isMouseActive = false;
      }, 1000);

      if (prevMouseX >= 0 && prevMouseY >= 0) {
        const dx = x - prevMouseX;
        const dy = y - prevMouseY;
        const speed = Math.sqrt(dx * dx + dy * dy);

        // Ripple strength proportional to cursor speed
        const radius = Math.min(Math.max(Math.floor(speed * 0.15) + 2, 3), 9);
        const strength = Math.min(Math.max(speed * 0.8, 15), 90);

        addDrop(x, y, radius, strength);
      }

      prevMouseX = x;
      prevMouseY = y;
    }

    // Handle click (drop splash)
    function handlePointerDown(e) {
      addDrop(e.clientX, e.clientY, 12, 280);
    }

    // Random gentle ambient water drops to keep water alive
    let dropInterval = setInterval(() => {
      if (!isMouseActive && Math.random() < 0.6) {
        const rx = Math.random() * width;
        const ry = Math.random() * height;
        addDrop(rx, ry, Math.floor(Math.random() * 3) + 3, Math.random() * 40 + 20);
      }
    }, 1800);

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });

    // Handle Resize
    function handleResize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;

      bufferWidth = Math.floor(width / scale);
      bufferHeight = Math.floor(height / scale);
      bufferSize = bufferWidth * bufferHeight;

      buffer1 = new Float32Array(bufferSize);
      buffer2 = new Float32Array(bufferSize);

      offscreen.width = bufferWidth;
      offscreen.height = bufferHeight;
      imgData = offscreenCtx.createImageData(bufferWidth, bufferHeight);
      data = imgData.data;
    }

    window.addEventListener("resize", handleResize);

    // Animation Loop
    function processRipples() {
      // Step 1: Calculate wave equation & update heightmap
      for (let y = 1; y < bufferHeight - 1; y++) {
        let row = y * bufferWidth;
        for (let x = 1; x < bufferWidth - 1; x++) {
          let i = row + x;

          // Wave algorithm formula:
          // new_height = (neighbor_sum / 2) - previous_height
          let wave =
            ((buffer1[i - 1] +
              buffer1[i + 1] +
              buffer1[i - bufferWidth] +
              buffer1[i + bufferWidth]) /
              2) -
            buffer2[i];

          wave *= damping;
          buffer2[i] = wave;
        }
      }

      // Swap buffers
      let temp = buffer1;
      buffer1 = buffer2;
      buffer2 = temp;

      // Step 2: Render deep glossy dark blue water with caustics and highlights
      let p = 0;
      for (let y = 0; y < bufferHeight; y++) {
        let row = y * bufferWidth;
        for (let x = 0; x < bufferWidth; x++) {
          let i = row + x;

          // Calculate surface normal slopes (dx, dy)
          let dx = 0;
          let dy = 0;

          if (x > 0 && x < bufferWidth - 1 && y > 0 && y < bufferHeight - 1) {
            dx = buffer1[i + 1] - buffer1[i - 1];
            dy = buffer1[i + bufferWidth] - buffer1[i - bufferWidth];
          }

          // Specular light direction vector (from top-left light source)
          let shading = dx * 1.5 + dy * 1.5;
          let heightVal = buffer1[i];

          // Base water gradient colors (Deep Navy to Ocean Cyan/Blue)
          // Gradient Y factor for smooth natural depth
          let normalizedY = y / bufferHeight;
          
          let baseR = 3 + Math.floor(normalizedY * 5);
          let baseG = 8 + Math.floor(normalizedY * 12);
          let baseB = 22 + Math.floor(normalizedY * 25);

          // Water ripple refraction & highlight calculation
          // Light highlight along crests
          let highlight = Math.max(0, shading);
          let shadow = Math.max(0, -shading);

          // Emerald / Cyan caustic tint when water ripples
          let r = Math.min(255, Math.max(0, baseR + Math.floor(highlight * 1.8) - Math.floor(shadow * 0.5)));
          let g = Math.min(255, Math.max(0, baseG + Math.floor(highlight * 3.5) + Math.floor(Math.abs(heightVal) * 0.4)));
          let b = Math.min(255, Math.max(0, baseB + Math.floor(highlight * 5.0) + Math.floor(Math.abs(heightVal) * 0.8)));

          data[p] = r;         // Red
          data[p + 1] = g;     // Green
          data[p + 2] = b;     // Blue
          data[p + 3] = 255;   // Alpha

          p += 4;
        }
      }

      // Draw offscreen image to main canvas (scaled up with smooth bilinear interpolation)
      offscreenCtx.putImageData(imgData, 0, 0);

      ctx.clearRect(0, 0, width, height);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(offscreen, 0, 0, width, height);

      animationFrameId = requestAnimationFrame(processRipples);
    }

    processRipples();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(dropInterval);
      clearTimeout(mouseTimeout);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#020617]">
      {/* 2D CANVAS WATER RIPPLE ENGINE */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* GLOSSY WATER REFLECTION & LIGHT GRADIENT ACCENT OVERLAYS */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/20 via-transparent to-transparent opacity-80" />
      
      {/* SUBTLE DIGITAL CAUSTIC GRID OVERLAY */}
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(circle at 1.5px 1.5px, #38bdf8 1px, transparent 0)`,
          backgroundSize: '28px 28px'
        }}
      />
    </div>
  );
}
