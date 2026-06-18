export default function AboutSection() {
  const services = [
    {
      title: "Gestión de redes sociales",
      desc: "Planificación, calendarización, diseño de contenido y publicación en Instagram, Facebook, TikTok y LinkedIn.",
    },
    {
      title: "Estrategia de contenido",
      desc: "Definición de tono, estética y mensajes clave para que tu marca comunique con claridad y constancia.",
    },
    {
      title: "Copywriting y guiones",
      desc: "Textos para redes, captions, stories, reels y campañas que conectan y convierten.",
    },
    {
      title: "Publicidad digital",
      desc: "Campañas en Meta Ads y otras plataformas orientadas a resultados medibles y conversión real.",
    },
    {
      title: "Asesoramiento personalizado",
      desc: "Acompañamiento estratégico para ordenar, potenciar y profesionalizar tu comunicación digital.",
    },
  ];

  return (
    <section className="about px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl space-y-14">
        {/* ── Fila superior: bio izquierda, info cards derecha ── */}
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.9fr] lg:items-start">
          {/* Columna izquierda */}
          <div className="space-y-8">
            <div>
              <p className="label inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.35em] text-white/70">
                Sobre mí
              </p>
              <h2 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
                Soy Rocío Abbadessa, directora de Match Digital
              </h2>
            </div>

            <div className="space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_90px_rgba(114,74,255,0.12)] backdrop-blur-xl">
              <p className="text-base leading-8 text-white/75 sm:text-lg">
                Acompaño a marcas, emprendedores y profesionales a ordenar,
                potenciar y profesionalizar su comunicación digital.
              </p>

              <p className="text-base leading-8 text-white/75 sm:text-lg">
                Trabajo con estrategia de contenido, gestión de redes sociales,
                copies, guiones, diseño de piezas, campañas publicitarias y
                asesoramiento personalizado.
              </p>

              <p className="text-base leading-8 text-white/75 sm:text-lg">
                Mi diferencial está en combinar creatividad, mirada comercial y
                acompañamiento cercano para que cada marca comunique con
                claridad, constancia y personalidad.
              </p>
            </div>
          </div>

          {/* Columna derecha: info cards */}
          <div className="grid gap-5 rounded-[2rem] border border-white/10 bg-black/60 p-6 shadow-[0_24px_80px_rgba(124,58,237,0.18)]">
            <article className="rounded-3xl bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                Resumen
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                Estrategia, contenido y publicidad digital para tu marca o
                emprendimiento.
              </p>
              <p className="mt-2 text-sm leading-6 text-white/70">
                +10 años de experiencia en ventas, atención al cliente y
                marketing digital.
              </p>
            </article>

            <article className="rounded-3xl bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                Disponibilidad
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                En remoto o en persona
              </p>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Buenos Aires, Argentina
              </p>
            </article>

            <article className="rounded-3xl bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                Precios
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                Consultar precios
              </p>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Planes personalizados según tu proyecto y presupuesto.
              </p>
            </article>
          </div>
        </div>

        {/* ── Franja completa: Servicios ── */}
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-[0_24px_80px_rgba(114,74,255,0.10)] backdrop-blur-xl sm:p-10">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-300/90">
                Servicios prestados
              </p>
              <p className="mt-2 text-2xl font-semibold text-white">
                ¿En qué te puedo ayudar?
              </p>
            </div>
            <a
              href="https://www.linkedin.com/in/rocio-abbadessa/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-fuchsia-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-fuchsia-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Ver perfil en LinkedIn
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {services.map((s, i) => (
              <div
                key={i}
                className="group flex flex-col gap-3 rounded-2xl border border-white/10 bg-black/50 p-5 transition-all duration-300 hover:border-fuchsia-500/40 hover:bg-fuchsia-500/5 hover:shadow-[0_8px_32px_rgba(192,80,255,0.15)]"
              >
                <p className="text-sm font-semibold leading-snug text-white">
                  {s.title}
                </p>
                <p className="text-xs leading-5 text-white/55">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
