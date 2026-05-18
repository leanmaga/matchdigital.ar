export default function ClientsSection() {
  return (
    <section className="clients px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl space-y-4">
          <p className="label inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.35em] text-white/70">Clientes</p>
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">Confían en nuestro diseño estratégico.</h2>
          <p className="text-base leading-8 text-white/70 sm:text-lg">Marcas que buscan un branding con personalidad, coherente con audiencias premium y creativas.</p>
        </div>

        <div className="client-card grid gap-6 rounded-[2.5rem] border border-white/10 bg-white/5 p-8 shadow-[0_40px_100px_rgba(114,74,255,0.12)] backdrop-blur-xl lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-black/60 p-6 text-center text-white/80">Client A</div>
              <div className="rounded-3xl border border-white/10 bg-black/60 p-6 text-center text-white/80">Client B</div>
              <div className="rounded-3xl border border-white/10 bg-black/60 p-6 text-center text-white/80">Client C</div>
              <div className="rounded-3xl border border-white/10 bg-black/60 p-6 text-center text-white/80">Client D</div>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-300/90">Testimonial</p>
            <blockquote className="rounded-[2rem] border border-white/10 bg-black/60 p-8 text-white/75 shadow-[0_30px_70px_rgba(0,0,0,0.2)]">
              “Match Digital elevó nuestra comunicación visual al siguiente nivel. La ejecución fue impecable, el resultado elegante y con una vibra moderna que nos representa.”
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
