"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const COLORS = [
  "rgba(192,80,255,",
  "rgba(236,72,153,",
  "rgba(148,0,255,",
  "rgba(255,60,200,",
];

function makeLine(w, h) {
  const angle = (Math.random() * Math.PI) / 1.5 - Math.PI / 4;
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    angle,
    speed: 0.2 + Math.random() * 0.5,
    length: 120 + Math.random() * 300,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    alpha: Math.random() * 0.5 + 0.1,
    alphaDir: Math.random() > 0.5 ? 0.003 : -0.003,
  };
}

function LaserGrid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let lines = [];

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    function init() {
      const w = canvas.width;
      const h = canvas.height;
      const count = Math.floor((w * h) / 14000);
      lines = Array.from({ length: count }, () => makeLine(w, h));
    }

    function draw() {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      for (const ln of lines) {
        ln.x += Math.cos(ln.angle) * ln.speed;
        ln.y += Math.sin(ln.angle) * ln.speed;
        ln.alpha += ln.alphaDir;
        if (ln.alpha > 0.65 || ln.alpha < 0.05) ln.alphaDir *= -1;

        if (ln.x < -ln.length) ln.x = w + ln.length;
        if (ln.x > w + ln.length) ln.x = -ln.length;
        if (ln.y < -ln.length) ln.y = h + ln.length;
        if (ln.y > h + ln.length) ln.y = -ln.length;

        const x2 = ln.x - Math.cos(ln.angle) * ln.length;
        const y2 = ln.y - Math.sin(ln.angle) * ln.length;

        ctx.beginPath();
        ctx.moveTo(ln.x, ln.y);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = `${ln.color}${(ln.alpha * 0.25).toFixed(3)})`;
        ctx.lineWidth = 6;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(ln.x, ln.y);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = `${ln.color}${ln.alpha.toFixed(3)})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(ln.x, ln.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `${ln.color}${Math.min(ln.alpha * 1.8, 1).toFixed(3)})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    resize();
    init();
    draw();

    window.addEventListener("resize", () => { resize(); init(); });
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      style={{ zIndex: 0 }}
    />
  );
}

const PARTICLES = [
  { top: "20%", left: "38%", size: 3, opacity: 0.8, color: "#ff40e0" },
  { top: "10%", left: "45%", size: 2, opacity: 0.6, color: "#e040fb" },
  { top: "35%", left: "55%", size: 4, opacity: 0.5, color: "#ff00cc" },
  { top: "60%", left: "42%", size: 2, opacity: 0.7, color: "#cc00ff" },
  { top: "50%", left: "60%", size: 3, opacity: 0.4, color: "#ff60e8" },
  { top: "15%", left: "30%", size: 2, opacity: 0.5, color: "#d040fb" },
  { top: "70%", left: "50%", size: 2, opacity: 0.6, color: "#ff00aa" },
];

/* Watermark reutilizable — recibe el fontSize como prop */
function BrandWatermark({ fontSize, opacity = "0.10" }) {
  const style = { fontSize, lineHeight: 0.88 };
  const cls = `pointer-events-none select-none font-black uppercase tracking-[-0.04em]`;
  const color = `rgba(255,255,255,${opacity})`;
  return (
    <div
      className="pointer-events-none select-none absolute inset-0 flex flex-col items-center justify-center leading-none"
      style={{ zIndex: 1 }}
    >
      <span className={cls} style={{ ...style, color }}> MATCH </span>
      <span className={cls} style={{ ...style, color }}> DIGITAL </span>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="hero relative isolate overflow-hidden px-6 py-0 lg:py-24 sm:px-10 lg:px-16">
      <div className="absolute inset-0 -z-10 bg-[#0a0010]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(120,20,180,0.55),transparent_70%)]" />

      <LaserGrid />

      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 -translate-y-1/2 rounded-full bg-fuchsia-600/20 blur-[100px]" style={{ zIndex: 1 }} />
      <div className="pointer-events-none absolute -left-20 top-10 h-60 w-60 rounded-full bg-purple-700/20 blur-[80px]" style={{ zIndex: 1 }} />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-14" style={{ zIndex: 2 }}>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-6">

          {/* ── Watermark + imagen ── */}
          <div
            className="order-1 lg:order-2 w-full lg:w-[44%] lg:flex-shrink-0 h-screen lg:h-auto flex items-center justify-center relative "
          >
            {/*
              MOBILE: texto muy grande (~42vw), sin cap máximo ajustado
              — en 390px → 42vw ≈ 163px por línea, las letras se salen
                del borde y dan efecto de poster, igual al mockup
            */}
            <div className="block lg:hidden">
              <BrandWatermark fontSize="clamp(5rem, 10vw, 9rem)" opacity="0.12" className="mb-4" />
            </div>

            {/*
              DESKTOP: tamaño relativo al contenedor (44% del viewport)
              — en 1440px → 10vw ≈ 144px, proporcionado con la columna
            */}
            <div className="hidden lg:block">
              <BrandWatermark fontSize="clamp(5rem, 10vw, 9rem)" opacity="0.07"className="mt-4" />
            </div>

            {/* Imagen */}
            <div className="relative h-56 w-56 sm:h-64 sm:w-64 xl:h-72 xl:w-72" style={{ zIndex: 2 }}>
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(192,80,255,0.5),rgba(124,0,237,0.2),transparent_65%)] blur-2xl" />
              <div className="relative h-full w-full overflow-hidden rounded-full border border-purple-400/30 bg-slate-950/40 shadow-[0_0_60px_rgba(192,80,255,0.45),0_0_120px_rgba(192,80,255,0.2)]">
                <Image
                  src="/ro.png"
                  alt="Rocio Abbadessa"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex flex-col items-center pb-5 text-center">
                  <span className="text-sm font-semibold leading-tight text-white drop-shadow-md">
                    Rocio Abbadessa
                  </span>
                  <span className="text-[11px] text-white/70 drop-shadow-md">
                    Community Manager
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Contenido textual ── */}
          <div className="order-2 lg:order-1 flex flex-col gap-6 flex-1 min-w-0 py-16 lg:py-0">

            <span className="label inline-flex w-fit items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.35em] text-white/70 backdrop-blur-sm">
              Match Digital
            </span>

            <div className="relative">
              <div
                className="pointer-events-none absolute"
                style={{
                  left: "10%",
                  top: "30%",
                  width: "420px",
                  height: "320px",
                  transform: "translate(-20%, -40%)",
                  background:
                    "radial-gradient(ellipse at center, rgba(255,20,180,0.55) 0%, rgba(200,40,255,0.35) 30%, rgba(140,0,200,0.15) 55%, transparent 70%)",
                  filter: "blur(18px)",
                  zIndex: -1,
                }}
              />
              {PARTICLES.map((p, i) => (
                <span
                  key={i}
                  className="pointer-events-none absolute rounded-full"
                  style={{
                    top: p.top,
                    left: p.left,
                    width: p.size,
                    height: p.size,
                    background: p.color,
                    opacity: p.opacity,
                    boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
                    zIndex: -1,
                  }}
                />
              ))}

              <h1 className="hero-title text-5xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                Branding <span className="text-accent">digital</span>
                <br /> que <span className="text-accent">impacta</span> con estilo.
              </h1>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              Diseñamos experiencias visuales únicas para marcas que quieren
              destacarse con elegancia, movimiento y una identidad potente en
              cada punto de contacto.
            </p>
          </div>
        </div>

        {/* ── Cards inferiores ── */}
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end pb-16 lg:pb-0">
          <div className="flex flex-col gap-5 rounded-[2rem] border border-white/10 bg-black/40 p-8 shadow-[0_40px_120px_rgba(86,0,255,0.15)] backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">Agencia boutique</p>
            <h2 className="text-3xl font-semibold text-white">Match entre creatividad y estrategia</h2>
            <p className="text-base leading-7 text-white/70">
              Tu identidad digital crece con un diseño pensado para redes, web y
              presentaciones de alto impacto. Cada detalle comunica confianza,
              sofisticación y estilo contemporáneo.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="feature-card rounded-[1.75rem] border border-white/10 bg-black/60 p-6 shadow-[0_24px_80px_rgba(114,74,255,0.16)] backdrop-blur-md">
              <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-300/90">Estrategia</p>
              <p className="mt-4 text-white/80">
                Posicionamiento visual con mensajes claros, memorables y listos
                para generar conexión en Instagram, web y email.
              </p>
            </div>
            <div className="feature-card rounded-[1.75rem] border border-white/10 bg-black/60 p-6 shadow-[0_24px_80px_rgba(114,74,255,0.08)] backdrop-blur-md">
              <p className="text-sm uppercase tracking-[0.3em] text-purple-300/90">Diseño</p>
              <p className="mt-4 text-white/80">
                Composiciones modernas, tipografía fuerte y manipulaciones
                visuales que resaltan el lujo accesible de tu marca.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}