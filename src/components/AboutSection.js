export default function AboutSection() {
  return (
    <section className="about px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="relative">
          {/* Círculos decorativos animados */}
          <div className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-violet-600/20 blur-3xl animate-pulse" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-fuchsia-500/15 blur-3xl animate-pulse [animation-delay:1.2s]" />
          <div className="pointer-events-none absolute top-1/2 left-1/3 h-48 w-48 -translate-y-1/2 rounded-full bg-purple-500/10 blur-2xl animate-pulse [animation-delay:0.6s]" />

          {/* Contenido */}
          <div className="relative space-y-6">
            <p className="label inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.35em] text-white/70">
              Sobre mí
            </p>
            <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              Soy Rocío Abbadessa,{" "}
              <span className="text-accent">directora de Match Digital</span>
            </h2>
            <p className="max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Acompaño a marcas, emprendedores y profesionales a ordenar,
              potenciar y profesionalizar su comunicación digital.
            </p>
            <p className="max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Trabajo con estrategia de contenido, gestión de redes sociales,
              copies, guiones, diseño de piezas, campañas publicitarias y
              asesoramiento personalizado.
            </p>
            <p className="max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Mi diferencial está en combinar creatividad, mirada comercial y
              acompañamiento cercano para que cada marca comunique con claridad,
              constancia y personalidad.
            </p>
            <p className="max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              ¿Querés saber más sobre mí?{" "}
              <a
                href="https://www.instagram.com/rocioabba.ok/"
                target="_blank"
                rel="noopener noreferrer"
                className="max-w-2xl text-base leading-8  sm:text-lg text-fuchsia-300/80 hover:text-fuchsia-300 transition"
              >
                Seguime en @rocioabba.ok
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
