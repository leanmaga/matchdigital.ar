import Image from "next/image";

export default function FooterSection() {
  return (
    <footer className="footer border-t border-white/10 px-6 py-10 text-white/60 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white/50">
            Match Digital
          </p>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/60">
            Marketing, redes sociales, contenido y publicidad digital para
            marcas que quieren crecer con estrategia.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 items-center text-sm">
          <a
            href="https://www.instagram.com/matchdigital.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white"
          >
            <Image
              src="/instagramblack.svg"
              alt="Instagram"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/rocio-abbadessa/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white"
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
            className="inline-flex items-center gap-2 text-white/90 hover:text-white"
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
    </footer>
  );
}
