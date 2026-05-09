import { FaFacebookF, FaGoogle, FaApple } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'

function LoginModal({ isOpen, setIsOpen }) {

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">

      <div className="relative bg-white rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl grid md:grid-cols-2">

        {/* BOTÓN CERRAR */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-3xl"
        >
          <IoClose />
        </button>

        {/* IZQUIERDA */}
        <div className="bg-[#ef8d84] p-10 text-white flex flex-col justify-center">

          <h2 className="text-3xl font-semibold mb-8">
            Iniciar Sesión
          </h2>

          <form className="space-y-5">

            <input
              type="email"
              placeholder="Usuario o Correo electrónico"
              className="w-full px-4 py-3 rounded-lg outline-none bg-white text-black"
            />

            <input
              type="password"
              placeholder="Contraseña"
              className="w-full px-4 py-3 rounded-lg outline-none bg-white text-black"
            />

            <div className="text-right">
              <button
                type="button"
                className="text-sm hover:underline"
              >
                Olvidé mi contraseña
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-[#ef8d84] py-3 rounded-full font-semibold hover:bg-gray-100 transition-all"
            >
              Ingresar
            </button>

          </form>

          <div className="mt-8 text-center">
            <p className="mb-4">
              o
            </p>

            <button className="hover:underline">
              Crear una cuenta
            </button>
          </div>

        </div>

        {/* DERECHA */}
        <div className="p-10 flex flex-col justify-center items-center">

          <div className="text-center mb-10">

            <div className="w-24 h-24 rounded-full bg-[#ef8d84] flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              LOGO
            </div>

            <p className="text-gray-500">
              Bienvenido de nuevo
            </p>

          </div>

          <div className="w-full space-y-4">

            <button className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-all">
              <FaFacebookF />
              Continuar con Facebook
            </button>

            <button className="w-full flex items-center justify-center gap-3 bg-white border hover:bg-gray-100 py-3 rounded-lg transition-all">
              <FaGoogle />
              Iniciar sesión con Google
            </button>

            <button className="w-full flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-white py-3 rounded-lg transition-all">
              <FaApple />
              Continuar con Apple
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default LoginModal