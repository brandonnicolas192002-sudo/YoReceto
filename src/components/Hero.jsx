function Hero() {

  return (
    <section
      className="h-screen bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop)'
      }}
    >

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center text-white px-6">

        <p className="uppercase tracking-[6px] mb-6">
          Cocina que inspira
        </p>

        <h1 className="text-6xl md:text-8xl font-light mb-8">
          Descubre recetas
        </h1>

        <p className="text-xl md:text-3xl font-light max-w-2xl mx-auto leading-relaxed">
          Encuentra comidas deliciosas, recetas del mundo y sugerencias personalizadas.
        </p>

      </div>

    </section>
  )
}

export default Hero