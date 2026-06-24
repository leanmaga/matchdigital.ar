"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactSection() {
  const [nombre, setNombre] = useState("");
  const [proyecto, setProyecto] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const mensaje = `Hola Rocío! Te escribo desde tu web 👋\n\nNombre: ${nombre}\n\nProyecto: ${proyecto}`;
    const url = `https://api.whatsapp.com/send?phone=541158465329&text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  }

  return (
    <section
      id="contact"
      className="contact relative overflow-hidden bg-[linear-gradient(180deg,#050105_0%,#0b0714_100%)] px-6 py-24 sm:px-10 lg:px-16"
    >
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
                WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 shadow-[0_40px_90px_rgba(114,74,255,0.14)] backdrop-blur-xl">
            <div className="grid gap-6">
              <label className="block text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
                Nombre
                <input
                  type="text"
                  required
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Tu nombre"
                  className="mt-3 w-full rounded-3xl border border-white/10 bg-black/70 px-5 py-4 text-white placeholder:text-white/40 outline-none transition focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-400/20"
                />
              </label>
              <label className="block text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
                Proyecto
                <textarea
                  rows={5}
                  required
                  value={proyecto}
                  onChange={(e) => setProyecto(e.target.value)}
                  placeholder="Contanos sobre tu marca o proyecto"
                  className="mt-3 w-full rounded-3xl border border-white/10 bg-black/70 px-5 py-4 text-white placeholder:text-white/40 outline-none transition focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-400/20"
                />
              </label>
            </div>
            <button
              type="button"
              onClick={handleSubmit}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-fuchsia-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-fuchsia-400"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              Enviar por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
