import { useEffect, useRef } from "react";

export default function BackgroundGrid() {
  const canvasRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrameId = 0;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles = [];

    const handleResize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Scale number of particles based on screen size to keep performance high
      const particleCount = Math.min(90, Math.floor((width * height) / 22000));
      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.8 + 0.4,
        a: Math.random() * 0.5 + 0.2,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw and update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Wrap boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 77, 77, ${p.a})`;
        ctx.fill();

        // Connect particles within proximity
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];
          const dx = p.x - other.x;
          const dy = p.y - other.y;
          const distSq = dx * dx + dy * dy;

          // Connection threshold: 13000px^2 (approx 114px)
          if (distSq < 13000) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(229, 57, 53, ${0.09 * (1 - distSq / 13000)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animFrameId = requestAnimationFrame(draw);
    };

    handleResize();
    draw();

    window.addEventListener("resize", handleResize);

    // Mouse tracking background spotlight
    const handleMouseMove = (e) => {
      if (glowRef.current) {
        // Translate center of the 600px blur gradient to the mouse coordinates
        glowRef.current.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" data-id="element-29">
      {/* Static spotlight radial gradients */}
      <div 
        className="absolute inset-0" 
        style={{
          background: `
            radial-gradient(60% 50% at 15% 0%, rgba(198, 40, 40, 0.22), transparent 60%),
            radial-gradient(50% 40% at 100% 20%, rgba(255, 77, 77, 0.14), transparent 55%),
            radial-gradient(55% 55% at 50% 110%, rgba(229, 57, 53, 0.18), transparent 60%)
          `
        }} 
        data-id="element-30" 
      />
      {/* Interactive mouse-following background spotlight */}
      <div 
        ref={glowRef}
        className="absolute h-[600px] w-[600px] rounded-full opacity-60 blur-[120px] transition-transform duration-75 ease-out" 
        style={{
          background: "radial-gradient(circle, rgba(229, 57, 53, 0.35), transparent 70%)",
          left: 0,
          top: 0,
          willChange: "transform",
        }} 
        data-id="element-31" 
      />
      {/* Particle networks canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" data-id="element-32" />
      {/* Dark vignette overlay */}
      <div 
        className="absolute inset-0" 
        style={{
          background: "radial-gradient(120% 120% at 50% 50%, transparent 55%, rgba(13, 10, 10, 0.8) 100%)"
        }} 
        data-id="element-33" 
      />
    </div>
  );
}
