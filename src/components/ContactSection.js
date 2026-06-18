import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="contact relative overflow-hidden bg-[linear-gradient(180deg,#050105_0%,#0b0714_100%)] px-6 py-24 sm:px-10 lg:px-16">
      <div className="absolute inset-x-0 top-0 -z-10 h-52 bg-[radial-gradient(circle_at_top,_rgba(192,132,252,0.16),_transparent_40%)]" />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-6">
            <p className="label inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.35em] text-white/70">
              Contacto
            </p>
            <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              ¿Querés potenciar tus <span className="text-accent">redes</span>?
            </h2>
            <p className="text-base leading-8 text-white/70 sm:text-lg">
              Escribinos y armamos una propuesta a medida. Estrategia, contenido
              y publicidad digital pensados para tu marca y tu público ideal.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="https://www.linkedin.com/in/rocio-abbadessa/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/90 hover:bg-white/5"
              >
                <Image
                  src="/linkedinblack.svg"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
                LinkedIn
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=541158465329"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/90 hover:bg-white/5"
              >
                <Image
                  src="/whatsappblack.svg"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
                Contactar por WhatsApp
              </a>
            </div>
          </div>

          <form className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 shadow-[0_40px_90px_rgba(114,74,255,0.14)] backdrop-blur-xl">
            <div className="grid gap-6">
              <label className="block text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
                Nombre
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="mt-3 w-full rounded-3xl border border-white/10 bg-black/70 px-5 py-4 text-white placeholder:text-white/40 outline-none transition focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-400/20"
                />
              </label>
              <label className="block text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
                Email
                <input
                  type="email"
                  placeholder="hola@tumarca.com"
                  className="mt-3 w-full rounded-3xl border border-white/10 bg-black/70 px-5 py-4 text-white placeholder:text-white/40 outline-none transition focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-400/20"
                />
              </label>
              <label className="block text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
                Proyecto
                <textarea
                  rows="5"
                  placeholder="Contanos sobre tu marca o proyecto"
                  className="mt-3 w-full rounded-3xl border border-white/10 bg-black/70 px-5 py-4 text-white placeholder:text-white/40 outline-none transition focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-400/20"
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-fuchsia-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-fuchsia-400"
            >
              Enviar consulta
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
