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
        <div className="grid gap-12 lg:items-start">
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
        </div>
      </div>
    </section>
  );
}
