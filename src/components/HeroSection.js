export default function HeroSection() {
  return (
    <section className="hero relative isolate overflow-hidden px-6 py-24 sm:px-10 lg:px-16">
      <div className="absolute inset-x-0 top-0 -z-10 h-[620px] bg-[radial-gradient(circle_at_top,_rgba(166,85,255,0.18),_transparent_45%)]" />
      <div className="absolute -left-16 top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-fuchsia-500/15 blur-3xl" />

      <div className="mx-auto flex max-w-7xl flex-col gap-14">
        <div className="flex flex-col gap-6 md:max-w-3xl">
          <div className="flex items-center gap-6">
            <span className="label inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.35em] text-white/70">
              Match Digital
            </span>
            <div className="profile-badge hidden items-center gap-4 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-sm text-white/90 md:flex">
              <div className="avatar flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-400 text-black font-bold">R</div>
              <div className="leading-tight">
                <div className="font-semibold">Rocio Abbadessa</div>
                <div className="text-xs text-white/60">Community Manager • @matchdigital.ar</div>
              </div>
            </div>
          </div>
          <h1 className="hero-title text-5xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
            Branding <span className="text-accent">digital</span>
            <br /> que <span className="text-accent">impacta</span> con estilo.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
            Diseñamos experiencias visuales únicas para marcas que quieren destacarse con elegancia, movimiento y una identidad potente en cada punto de contacto.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="flex flex-col gap-5 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_rgba(86,79,255,0.12)] backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">Agencia boutique</p>
            <h2 className="text-3xl font-semibold text-white">Match entre creatividad y estrategia</h2>
            <p className="text-base leading-7 text-white/70">
              Tu identidad digital crece con un diseño pensado para redes, web y presentaciones de alto impacto. Cada detalle comunica confianza, sofisticación y estilo contemporáneo.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="feature-card rounded-[1.75rem] border border-white/10 bg-black/70 p-6 shadow-[0_24px_80px_rgba(114,74,255,0.16)]">
              <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-300/90">Estrategia</p>
              <p className="mt-4 text-white/80">Posicionamiento visual con mensajes claros, memorables y listos para generar conexión en Instagram, web y email.</p>
            </div>
            <div className="feature-card rounded-[1.75rem] border border-white/10 bg-black/70 p-6 shadow-[0_24px_80px_rgba(114,74,255,0.08)]">
              <p className="text-sm uppercase tracking-[0.3em] text-purple-300/90">Diseño</p>
              <p className="mt-4 text-white/80">Composiciones modernas, tipografía fuerte y manipulaciones visuales que resaltan el lujo accesible de tu marca.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
