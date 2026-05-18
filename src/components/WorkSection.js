export default function WorkSection() {
  return (
    <section className="work relative overflow-hidden bg-[linear-gradient(180deg,#08070c_0%,#0f0816_100%)] px-6 py-24 sm:px-10 lg:px-16">
      <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_40%)]" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl space-y-4">
          <p className="label inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.35em] text-white/70">Trabajos</p>
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">Proyectos que cuentan historias <span className="text-accent">visuales</span> fuertes.</h2>
          <p className="text-base leading-8 text-white/70 sm:text-lg">Casos pensados para captar atención, seducir audiencias y proyectar una identidad premium.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-[2rem] border border-white/10 bg-black/60 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-300/90">01</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">Instagram para una marca de estilo</h3>
            <p className="mt-4 text-white/70">Contenido visual con paletas sofisticadas y composiciones que elevan la percepción de la marca.</p>
          </article>
          <article className="rounded-[2rem] border border-white/10 bg-black/60 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.2)] backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-300/90">02</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">Landing para servicio premium</h3>
            <p className="mt-4 text-white/70">Secciónes potentes, CTA clara y un recorrido que despierta confianza desde el primer scroll.</p>
          </article>
          <article className="rounded-[2rem] border border-white/10 bg-black/60 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-300/90">03</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">Identidad para marca creativa</h3>
            <p className="mt-4 text-white/70">Estrategia visual con tipografía y tonos que marcan presencia en entornos digitales premium.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
