export default function ServicesSection() {
  return (
    <section className="services px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl space-y-4">
          <p className="label inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.35em] text-white/70">Servicios</p>
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">Soluciones pensadas para marcas que <span className="text-accent">quieren</span> sobresalir.</h2>
          <p className="text-base leading-8 text-white/70 sm:text-lg">Desde identidad visual hasta creatividades para redes y páginas de impacto, todo con una dirección estética que inspire y convierta.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <article className="group rounded-[2rem] border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:bg-white/10">
            <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-300/90">Branding</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">Identidad con carácter</h3>
            <p className="mt-3 text-white/70">Logos, paletas y sistemas visuales diseñados para que tu marca sea reconocida al instante.</p>
          </article>
          <article className="group rounded-[2rem] border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:bg-white/10">
            <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-300/90">Contenido</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">Redes con estilo</h3>
            <p className="mt-3 text-white/70">Creatividades listas para Instagram que combinan elegancia, tendencia y performance visual.</p>
          </article>
          <article className="group rounded-[2rem] border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:bg-white/10">
            <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-300/90">Web</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">Página premium</h3>
            <p className="mt-3 text-white/70">Landings y sitios que comunican elegancia, claridad y una experiencia de navegación sofisticada.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
