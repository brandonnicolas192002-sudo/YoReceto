function Contact() {
  return (
    <footer className="relative py-28 text-white overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop)'
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <h2 className="text-5xl md:text-6xl font-light uppercase tracking-[4px] mb-20">
          Contáctanos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* REDES */}
          <div>

            <h3 className="uppercase text-lg tracking-[3px] mb-6">
              Redes Sociales
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li className="hover:text-white cursor-pointer transition-all">
                Instagram
              </li>

              <li className="hover:text-white cursor-pointer transition-all">
                X
              </li>

              <li className="hover:text-white cursor-pointer transition-all">
                Facebook
              </li>

              <li className="hover:text-white cursor-pointer transition-all">
                LinkedIn
              </li>

            </ul>

          </div>

          {/* UBICACIONES */}
          <div>

            <h3 className="uppercase text-lg tracking-[3px] mb-6">
              Ubicaciones
            </h3>

            <div className="space-y-4 text-gray-300 leading-relaxed">

              <p>
                Calle 123, Colombia<br />
                Ciudad, Estado CP 12345
              </p>

              <p>
                Calle 98, Bogotá<br />
                Ciudad, Estado CP 12345
              </p>

            </div>

          </div>

          {/* CONTACTO */}
          <div>

            <h3 className="uppercase text-lg tracking-[3px] mb-6">
              Contacto
            </h3>

            <div className="space-y-4 text-gray-300">

              <p>
                hola@recetario.com
              </p>

              <p>
                +57 300 000 0000
              </p>

            </div>

          </div>

          {/* HORARIO */}
          <div>

            <h3 className="uppercase text-lg tracking-[3px] mb-6">
              Horarios
            </h3>

            <div className="space-y-4 text-gray-300">

              <p>
                Lunes - Viernes
                <br />
                8:00 AM - 8:00 PM
              </p>

              <p>
                Sábado - Domingo
                <br />
                9:00 AM - 6:00 PM
              </p>

            </div>

          </div>

        </div>

        {/* FOOTER BOTTOM */}
        <div className="border-t border-white/20 mt-20 pt-8 flex flex-col md:flex-row justify-between gap-4 text-gray-400 text-sm">

          <p>
            © 2026 Recetario. Todos los derechos reservados.
          </p>

          <div className="flex gap-6">

            <button className="hover:text-white transition-all">
              Privacidad
            </button>

            <button className="hover:text-white transition-all">
              Términos
            </button>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Contact