"use client";

const clients = [
  {
    name: "Big Day Company",
    handle: "@bigday.company",
    url: "https://www.instagram.com/bigday.company/",
    img: "/cliente1.jpg",
  },
  {
    name: "Jolie Buenos Aires",
    handle: "@joliebuenosaires",
    url: "https://www.instagram.com/joliebuenosaires/",
    img: "/cliente2.jpg",
  },
  {
    name: "Deportivo Luro FC",
    handle: "@deportivolurofc",
    url: "https://www.instagram.com/deportivolurofc/",
    img: "/cliente3.jpg",
  },
  {
    name: "DAS CAR Automóviles",
    handle: "@dascar.automoviles",
    url: "https://www.instagram.com/dascar.automoviles/",
    img: "/cliente4.jpg",
  },
];

const track = [...clients, ...clients, ...clients];

export default function ClientsSection() {
  return (
    <section
      id="clients"
      className="clients py-24"
      style={{ position: "relative" }}
    >
      {/* Header con padding */}
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="mb-12 max-w-3xl space-y-4">
          <p className="label inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.35em] text-white/70">
            Clientes
          </p>
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
            Confían en nuestro trabajo.
          </h2>
          <p className="text-base leading-8 text-white/70 sm:text-lg">
            Algunas de las marcas y emprendimientos que eligieron crecer con
            estrategia, contenido y presencia digital profesional.
          </p>
        </div>
      </div>

      {/* Slider full-width */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* fades anclados a los bordes del viewport con position fixed no funciona bien en scroll,
            usamos un wrapper con overflow hidden y los fades absolute dentro pero con height explícito */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: "180px",
            background:
              "linear-gradient(to right, #040305 0%, #040305 30%, transparent 100%)",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            width: "180px",
            background:
              "linear-gradient(to left, #040305 0%, #040305 30%, transparent 100%)",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />

        <div className="flex gap-10 w-max animate-marquee">
          {track.map((c, i) => (
            <a
              key={i}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 shrink-0"
            >
              <div className="h-24 w-24 overflow-hidden rounded-full border border-white/10 bg-black/60 transition duration-300 group-hover:border-fuchsia-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] sm:h-28 sm:w-28">
                <img
                  src={c.img}
                  alt={c.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <span className="max-w-[7rem] text-center text-xs text-white/50 transition group-hover:text-white/80">
                {c.name}
              </span>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
