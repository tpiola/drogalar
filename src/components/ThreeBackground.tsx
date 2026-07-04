"use client";

import { useEffect, useRef } from "react";

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let running = true;
    let w = 0, h = 0;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas!.width = w;
      canvas!.height = h;
    };
    resize();
    window.addEventListener("resize", resize);

    // Particles
    const particles: { x: number; y: number; vx: number; vy: number; r: number; a: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: 1 + Math.random() * 2,
        a: 0.1 + Math.random() * 0.3,
      });
    }

    // Geometric shapes
    const shapes: { x: number; y: number; rot: number; size: number; sides: number; speed: number }[] = [];
    for (let i = 0; i < 8; i++) {
      shapes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        rot: Math.random() * Math.PI * 2,
        size: 15 + Math.random() * 30,
        sides: Math.random() > 0.5 ? 3 : Math.random() > 0.5 ? 4 : 6,
        speed: 0.002 + Math.random() * 0.005,
      });
    }

    let mouseX = w / 2, mouseY = h / 2;
    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", onMove);

    const gold = "rgba(201, 168, 76,";
    const goldLight = "rgba(226, 201, 110,";

    const animate = () => {
      if (!running) return;
      ctx!.clearRect(0, 0, w, h);

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx + (mouseX - w / 2) * 0.0003;
        p.y += p.vy + (mouseY - h / 2) * 0.0003;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = gold + p.a + ")";
        ctx!.fill();
      });

      // Draw shapes
      shapes.forEach((s) => {
        s.rot += s.speed;
        s.x += (mouseX - w / 2) * 0.0001;
        s.y += (mouseY - h / 2) * 0.0001;

        ctx!.save();
        ctx!.translate(s.x, s.y);
        ctx!.rotate(s.rot);
        ctx!.strokeStyle = goldLight + "0.15)";
        ctx!.lineWidth = 1;
        ctx!.beginPath();
        for (let i = 0; i <= s.sides; i++) {
          const angle = (i / s.sides) * Math.PI * 2;
          const px = Math.cos(angle) * s.size;
          const py = Math.sin(angle) * s.size;
          if (i === 0) ctx!.moveTo(px, py);
          else ctx!.lineTo(px, py);
        }
        ctx!.closePath();
        ctx!.stroke();
        ctx!.restore();
      });

      requestAnimationFrame(animate);
    };

    const animId = requestAnimationFrame(animate);

    return () => {
      running = false;
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.5 }}
    />
  );
}