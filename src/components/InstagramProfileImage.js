import Image from "next/image";

export default function InstagramProfileImage() {
  return (
    <section className="instagram-profile mx-auto w-full max-w-7xl px-6 py-10 sm:px-10 lg:px-16">
      {/* Mobile */}
      <div className="instagram-card relative block w-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/60 sm:hidden">
        <Image
          src="/profileInstagramMobile.png"
          alt="Perfil de Instagram"
          width={747}
          height={305}
          sizes="100vw"
          className="h-auto w-full object-cover"
          priority
        />
      </div>

      {/* Desktop / tablet */}
      <div className="instagram-card relative hidden w-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/60 sm:block">
        <Image
          src="/profileInstagram.png"
          alt="Perfil de Instagram"
          width={1377}
          height={366}
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="h-auto w-full object-cover"
          priority
        />
      </div>
    </section>
  );
}
