import Image from "next/image";

export default function InstagramProfile() {
  return (
    <section className="instagram-profile px-6 py-10 sm:px-10 lg:px-16">
      <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/60">
        <Image
          src="/miinstagram.png"
          alt="Perfil de Instagram de Match Digital"
          width={1200}
          height={400}
          className="h-auto w-full object-cover"
        />
      </div>
    </section>
  );
}
