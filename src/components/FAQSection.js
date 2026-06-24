"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿Con qué tipo de marcas trabajan?",
    a: "Trabajamos con emprendedores, profesionales independientes, pequeñas y medianas empresas, y marcas de rubros como moda, gastronomía, real estate, salud, deporte y servicios. Si tenés una marca y querés crecer en digital, podemos ayudarte.",
  },
  {
    q: "¿Cuánto cuesta la gestión de redes sociales?",
    a: "Las propuestas son personalizadas según la cantidad de plataformas, frecuencia de publicación y servicios incluidos. Escribinos por WhatsApp y armamos un presupuesto a medida sin compromiso.",
  },
  {
    q: "¿Hacen publicidad en Meta y Google Ads?",
    a: "Sí. Gestionamos campañas en Meta Ads (Instagram y Facebook) y Google Ads con objetivos claros: tráfico, conversiones, generación de leads o reconocimiento de marca. Siempre con seguimiento de resultados y reportes mensuales.",
  },
  {
    q: "¿Qué incluye la creación de contenido?",
    a: "Desde la idea hasta la pieza final: guiones, diseño gráfico, reels, stories, carruseles, contenido UGC y jornadas de grabación si el proyecto lo requiere. Todo alineado a la identidad de tu marca.",
  },
  {
    q: "¿Hacen auditorías de perfiles existentes?",
    a: "Sí. Analizamos tu perfil, tu estrategia actual, la estética visual, los textos y las oportunidades de mejora. Es un buen punto de partida si ya tenés presencia digital pero sentís que no está rindiendo lo que debería.",
  },
  {
    q: "¿Cómo es el proceso para empezar a trabajar juntos?",
    a: "Primero charlamos para entender tu marca, tu público y tus objetivos. Después te enviamos una propuesta concreta con servicios, alcance y presupuesto. Una vez que acordamos, arrancamos con el onboarding y la planificación del primer mes.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section
      id="faq"
      className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16"
    >
      {/* Glow decorativo superior */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(139,92,246,0.13),transparent_70%)]" />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <p className="label inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.35em] text-white/70">
            FAQ
          </p>
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
            Preguntas <span className="text-accent">frecuentes.</span>
          </h2>
          <p className="text-base leading-8 text-white/70 sm:text-lg">
            Todo lo que necesitás saber antes de dar el siguiente paso con tu
            marca.
          </p>
        </div>

        {/* Acordeón */}
        <div className="divide-y divide-white/[0.08]">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group flex w-full items-start justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-base font-medium leading-7 transition-colors sm:text-lg ${
                      isOpen
                        ? "text-white"
                        : "text-white/80 group-hover:text-white"
                    }`}
                  >
                    {faq.q}
                  </span>

                  {/* Icono + / × */}
                  <span
                    className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "border-fuchsia-500/60 bg-fuchsia-500/15 text-fuchsia-300"
                        : "border-white/10 bg-white/5 text-white/50 group-hover:border-white/20 group-hover:text-white/80"
                    }`}
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    >
                      <path
                        d="M8 2v12M2 8h12"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>

                {/* Respuesta con animación CSS */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 text-base leading-8 text-white/60 sm:text-[0.95rem]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA final */}
        <div className="mt-14 flex flex-col items-start gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base text-white/70 sm:text-lg">
            ¿Tenés alguna otra consulta?{" "}
            <span className="text-white">Escribinos directamente.</span>
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=541158465329"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-fuchsia-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-400"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            Hablar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
