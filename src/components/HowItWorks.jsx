function HowItWorks() {
  return (
    <section className="bg-[#1d1d1d] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-5xl font-light mb-20 uppercase tracking-[6px]">
          Cómo funciona
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-center">

          <div>
            <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              1
            </div>

            <p>
              Explora nuestros kits de comida disponibles.
            </p>
          </div>

          <div>
            <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              2
            </div>

            <p>
              Selecciona el kit e ingresa los datos de entrega.
            </p>
          </div>

          <div>
            <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              3
            </div>

            <p>
              Recibe tu comida lista para cocinar.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HowItWorks