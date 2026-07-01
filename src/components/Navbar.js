"use client";

import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre mí", href: "#about" },
  { label: "Servicios", href: "#services" },
  { label: "Trabajos", href: "#work" },
  { label: "Clientes", href: "#clients" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const observerRef = useRef(null);

  /* ── Backdrop on scroll ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Active section via IntersectionObserver ── */
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    targets.forEach((el) => observerRef.current.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  /* ── Smooth scroll ── */
  function scrollTo(href) {
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/[0.07] bg-black/70 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
          {/* ── Logo ── */}
          <button
            onClick={() => scrollTo("#hero")}
            className="group flex items-center gap-2 focus:outline-none"
            aria-label="Volver al inicio"
          >
            <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-600 text-[10px] font-black text-white shadow-[0_0_12px_rgba(192,80,252,0.5)]">
              M
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/90 group-hover:text-white transition-colors">
              Match<span className="text-fuchsia-400">Digital</span>
            </span>
          </button>

          {/* ── Desktop links ── */}
          <nav
            className="hidden items-center gap-0.5 lg:flex"
            aria-label="Navegación principal"
          >
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`relative whitespace-nowrap rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/60 ${
                    isActive
                      ? "text-white"
                      : "text-white/50 hover:text-white/90"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-white/[0.07] border border-white/10" />
                  )}
                  <span className="relative">{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* ── Desktop CTA ── */}
          <a
            href="https://api.whatsapp.com/send?phone=541158465329"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 rounded-full bg-fuchsia-500 px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-fuchsia-400 shadow-[0_0_20px_rgba(192,80,252,0.3)]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-3.5 w-3.5"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            Escribinos
          </a>

          {/* ── Mobile burger ── */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10 lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/60"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            <span className="relative h-4 w-4 flex items-center justify-center">
              {/* top bar */}
              <span
                className={`absolute left-0 h-px w-full bg-current transition-all duration-300 ${
                  menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                }`}
              />
              {/* middle bar */}
              <span
                className={`absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current transition-all duration-300 ${
                  menuOpen ? "opacity-0 scale-x-0" : "opacity-100"
                }`}
              />
              {/* bottom bar */}
              <span
                className={`absolute left-0 h-px w-full bg-current transition-all duration-300 ${
                  menuOpen
                    ? "bottom-1/2 translate-y-1/2 -rotate-45"
                    : "bottom-0"
                }`}
              />
            </span>
          </button>
        </div>

        {/* ── Mobile menu panel ── */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
            menuOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav
            className="border-t border-white/[0.07] bg-black/80 backdrop-blur-xl px-6 pb-6 pt-4"
            aria-label="Navegación móvil"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = active === link.href.slice(1);
                return (
                  <li key={link.href}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className={`w-full rounded-2xl px-4 py-3 text-left text-sm uppercase tracking-[0.2em] transition-colors ${
                        isActive
                          ? "bg-white/[0.07] text-white border border-white/10"
                          : "text-white/50 hover:bg-white/5 hover:text-white/90"
                      }`}
                    >
                      {link.label}
                    </button>
                  </li>
                );
              })}
            </ul>

            <a
              href="https://api.whatsapp.com/send?phone=541158465329"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-fuchsia-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-400"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              Escribinos
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
