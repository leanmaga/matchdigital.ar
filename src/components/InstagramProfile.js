import Image from "next/image";

export default function InstagramProfile(){
  return (
    <section className="instagram-profile mx-auto max-w-7xl px-6 py-10 sm:px-10 lg:px-16">
      <div className="instagram-card rounded-[1.5rem] border border-white/10 bg-black/60 p-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="avatar-lg flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-400 text-black font-bold text-xl">R</div>
          <div>
            <div className="text-xl font-semibold">Rocio Abbadessa</div>
            <div className="text-sm text-white/60">@matchdigital.ar · Community Manager</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center text-sm">
          <div>
            <div className="text-2xl font-bold">158</div>
            <div className="text-white/60">publicaciones</div>
          </div>
          <div>
            <div className="text-2xl font-bold">1.8k</div>
            <div className="text-white/60">seguidores</div>
          </div>
          <div>
            <div className="text-2xl font-bold">3.0k</div>
            <div className="text-white/60">seguidos</div>
          </div>
        </div>

        <div className="hidden sm:block text-sm text-white/70">
          <div>🎯 Estrategias de Marketing</div>
          <div>👩🏻‍💻 Gestión de Redes • Formación</div>
          <div>💡 Asesoramiento • Auditoria</div>
          <div>📈 Publicidad</div>
          <div className="mt-3 flex flex-wrap gap-3">
            <a href="https://www.linkedin.com/in/rocio-abbadessa/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/90 hover:text-white">
              <Image src="/linkedinblack.svg" alt="LinkedIn" width={20} height={20} className="h-5 w-5" />
              LinkedIn
            </a>
            <a href="https://api.whatsapp.com/send?phone=541158465329" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/90 hover:text-white">
              <Image src="/whatsappblack.svg" alt="WhatsApp" width={20} height={20} className="h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
