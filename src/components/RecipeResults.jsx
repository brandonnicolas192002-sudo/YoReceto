import { Link } from 'react-router-dom'
function RecipeResults({
  recipes,
  title = 'Resultados'
}) {

  return (
    <section className="py-20 bg-[#f7f3ed]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between mb-12">

          <h2 className="text-5xl font-light">
            {title}
          </h2>

          <p className="text-gray-500">
            {recipes.length} recetas encontradas
          </p>

        </div>

        {recipes.length === 0 ? (

          <div className="text-center py-20 text-gray-500">

            <p className="text-2xl">
              Busca una receta deliciosa 🍜
            </p>

          </div>

        ) : (

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {recipes.map((meal, index) => (

              <div
                key={`${meal.idMeal}-${index}`}
                className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:-translate-y-2 transition-all duration-300"
              >

                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-full h-72 object-cover"
                />

                <div className="p-6">

                  <div className="flex justify-between items-center mb-4">

                    <span className="text-sm text-red-400 uppercase tracking-[2px]">
                      {meal.strCategory}
                    </span>

                    <span className="text-sm text-gray-400">
                      {meal.strArea}
                    </span>

                  </div>

                  <h3 className="text-2xl mb-6 leading-snug">
                    {meal.strMeal}
                  </h3>

                  <Link
                        to={`/recipe/${meal.idMeal}`}
                        className="bg-red-400 hover:bg-red-500 text-white px-6 py-3 rounded-full inline-block transition-all"
                        >
                        Ver receta
                    </Link>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </section>
  )
}

export default RecipeResults