export default function WorkSection() {
  const videos = [
    { src: "/video1.mp4", url: "https://www.instagram.com/p/DY2v5v1vbFt/" },
    { src: "/video2.mp4", url: "https://www.instagram.com/p/DZDv4asBka2/" },
    { src: "/video3.mp4", url: "https://www.instagram.com/p/DYiXNoYRX8k/" },
  ];

  return (
    <section
      id="work"
      className="work relative overflow-hidden bg-[linear-gradient(180deg,#08070c_0%,#0f0816_100%)] px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_40%)]" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl space-y-4">
          <p className="label inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.35em] text-white/70">
            Trabajos
          </p>
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
            Proyectos que cuentan historias{" "}
            <span className="text-accent">visuales</span> fuertes.
          </h2>
          <p className="text-base leading-8 text-white/70 sm:text-lg">
            Casos pensados para captar atención, seducir audiencias y proyectar
            una identidad.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((v, i) => (
            <a
              key={i}
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-[2rem] border border-white/10 bg-black/60 shadow-[0_30px_80px_rgba(0,0,0,0.25)] transition hover:border-fuchsia-500/40"
            >
              <video
                src={v.src}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover transition group-hover:scale-[1.02]"
                style={{ aspectRatio: "9/16" }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
