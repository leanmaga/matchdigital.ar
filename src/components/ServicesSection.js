export default function ServicesSection() {
  const services = [
    {
      title: "Gestión de redes sociales",
      desc: "Planificación, calendarización, diseño de contenido, copies y publicación.",
    },
    {
      title: "Creación de contenido",
      desc: "Ideas, guiones, jornadas de grabación, reels, piezas gráficas y contenido UGC.",
    },
    {
      title: "Publicidad digital",
      desc: "Campañas en Meta Ads y Google Ads orientadas a objetivos comerciales.",
    },
    {
      title: "Asesorías y auditorías",
      desc: "Revisión de perfiles, estrategia, estética, comunicación y oportunidades de mejora.",
    },
    {
      title: "Marketing inmobiliario",
      desc: "Contenido estratégico para agentes, inmobiliarias y marcas del rubro real estate.",
    },
  ];

  return (
    <section id="services" className="services px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl space-y-4">
          <p className="label inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.35em] text-white/70">
            Servicios
          </p>
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
            Todo lo que tu marca necesita para{" "}
            <span className="text-accent">crecer en digital.</span>
          </h2>
          <p className="text-base leading-8 text-white/70 sm:text-lg">
            Servicios de marketing y comunicación diseñados para emprendedores,
            profesionales y marcas que quieren resultados reales.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={i}
              className="group rounded-[2rem] border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:border-fuchsia-500/30 hover:bg-white/[0.07]"
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-fuchsia-300/80">
                {s.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/60">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
