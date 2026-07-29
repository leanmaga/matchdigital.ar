"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let isMounted = true;
    document.body.style.overflow = "hidden";

    function collectAssets() {
      const imgs = Array.from(document.images || []);
      const videos = Array.from(document.querySelectorAll("video"));
      return { imgs, videos };
    }

    function waitForAssets() {
      const { imgs, videos } = collectAssets();
      const total = imgs.length + videos.length;

      if (total === 0) {
        finish();
        return;
      }

      let loaded = 0;

      function tick() {
        loaded += 1;
        if (isMounted) {
          setProgress(Math.min(100, Math.round((loaded / total) * 100)));
        }
        if (loaded >= total) finish();
      }

      imgs.forEach((img) => {
        if (img.complete) {
          tick();
        } else {
          img.addEventListener("load", tick, { once: true });
          img.addEventListener("error", tick, { once: true });
        }
      });

      videos.forEach((video) => {
        if (video.readyState >= 3) {
          tick();
        } else {
          video.addEventListener("canplaythrough", tick, { once: true });
          video.addEventListener("error", tick, { once: true });
        }
      });
    }

    function finish() {
      if (!isMounted) return;
      setProgress(100);
      setDone(true);
      document.body.style.overflow = "";
      setTimeout(() => {
        if (isMounted) setHidden(true);
      }, 600);
    }

    // esperamos un frame para que el DOM ya haya montado imgs/videos
    const raf = requestAnimationFrame(waitForAssets);
    // fallback: nunca bloquear más de 6s (por si algo no dispara load/error)
    const fallback = setTimeout(finish, 6000);

    return () => {
      isMounted = false;
      document.body.style.overflow = "";
      cancelAnimationFrame(raf);
      clearTimeout(fallback);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#040305] transition-opacity duration-700 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-hidden={done}
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,rgba(192,132,252,0.16),transparent_60%)]" />

      <div className="relative flex flex-col items-center gap-6">
        <div className="relative flex h-20 w-20 items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-white/10" />
          <div
            className="absolute inset-0 rounded-full border-2 border-fuchsia-500 border-t-transparent animate-spin"
            style={{ animationDuration: "0.9s" }}
          />
          <span className="text-lg font-black uppercase tracking-tight text-white">
            MD
          </span>
        </div>

        <div className="flex flex-col items-center gap-3">
          <span className="label text-xs uppercase tracking-[0.35em] text-white/50">
            Match Digital
          </span>
          <div className="h-[2px] w-40 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 transition-[width] duration-200 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
