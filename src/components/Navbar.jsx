import { FaSearch } from 'react-icons/fa'

function Navbar() {

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <div className="text-3xl font-bold text-red-400">
          RECETARIO
        </div>

        <ul className="hidden md:flex gap-10 text-gray-700">

          <li className="hover:text-red-400 cursor-pointer transition-all">
            Inicio
          </li>

          <li className="hover:text-red-400 cursor-pointer transition-all">
            Categorías
          </li>

          <li className="hover:text-red-400 cursor-pointer transition-all">
            Recetas
          </li>

          <li className="hover:text-red-400 cursor-pointer transition-all">
            Favoritos
          </li>

        </ul>

        <div className="flex items-center gap-5">

          <button className="bg-red-400 hover:bg-red-500 text-white px-5 py-2 rounded-full transition-all">
            Ingresar
          </button>

          <FaSearch className="text-gray-700" />

        </div>

      </div>

    </nav>
  )
}

export default Navbar