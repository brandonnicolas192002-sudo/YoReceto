import { useEffect, useState } from 'react'
import { translateText } from '../services/translate'
import {
  useParams
} from 'react-router-dom'

import { getMealById } from '../api/mealdb'

function RecipeDetails() {

  const { id } = useParams()

  const [recipe, setRecipe] = useState(null)
  const [translatedInstructions, setTranslatedInstructions] =
  useState('')
  const [isTranslating, setIsTranslating] =
  useState(false)
  useEffect(() => {

    async function fetchRecipe() {

      setIsTranslating(true)

      const data = await getMealById(id)

      // traducir título
      data.strMeal =
        await translateText(data.strMeal)

      // traducir categoría
      data.strCategory =
        await translateText(data.strCategory)

      // traducir país
      data.strArea =
        await translateText(data.strArea)

      // traducir ingredientes
      for (let i = 1; i <= 20; i++) {

        const ingredient =
          data[`strIngredient${i}`]

        if (
          ingredient &&
          ingredient.trim() !== ''
        ) {

          data[`strIngredient${i}`] =
            await translateText(ingredient)
        }
      }

      // guardar receta
      setRecipe(data)

      // traducir instrucciones
      const translated =
        await translateText(
          data.strInstructions
        )

      setTranslatedInstructions(translated)

      setIsTranslating(false)
    }

    fetchRecipe()

  }, [id])

  if (!recipe) {

    return (
      <div className="min-h-screen flex items-center justify-center">
        Cargando receta...
      </div>
    )
  }

  // INGREDIENTES
  const ingredients = []

  for (let i = 1; i <= 20; i++) {

    const ingredient = recipe[`strIngredient${i}`]
    const measure = recipe[`strMeasure${i}`]

    if (ingredient && ingredient.trim() !== '') {

      ingredients.push(
        `${measure} ${ingredient}`
      )
    }
  }

  return (
    <section className="bg-[#f7f3ed] min-h-screen py-20">

      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-14">

          {/* IMAGEN */}
          <div>

            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="w-full rounded-[30px] shadow-xl"
            />

          </div>

          {/* INFO */}
          <div>

            <p className="uppercase tracking-[3px] text-red-400 mb-4">
              {recipe.strCategory}
            </p>

            <h1 className="text-5xl font-light mb-8">
              {recipe.strMeal}
            </h1>

            <div className="flex gap-6 mb-10 text-gray-500">

              <span>
                🌍 {recipe.strArea}
              </span>

              <span>
                🍽️ {recipe.strCategory}
              </span>

            </div>

            {/* INGREDIENTES */}
            <div className="mb-12">

              <h2 className="text-3xl mb-6">
                Ingredientes
              </h2>

              <ul className="space-y-3">

                {ingredients.map((item, index) => (

                  <li
                    key={index}
                    className="bg-white p-4 rounded-xl shadow-sm"
                  >
                    {item}
                  </li>

                ))}

              </ul>

            </div>

          </div>

        </div>

        {/* INSTRUCCIONES */}
        <div className="mt-20">

          <h2 className="text-4xl mb-8">
            Preparación
          </h2>

          <div className="bg-white p-8 rounded-[30px] shadow-lg leading-relaxed text-gray-700 whitespace-pre-line">

            {
              isTranslating
                ? 'Traduciendo receta...'
                : translatedInstructions || recipe.strInstructions
            }
          </div>

        </div>

        {/* VIDEO */}
        {recipe.strYoutube && (

          <div className="mt-20">

            <h2 className="text-4xl mb-8">
              Video
            </h2>

            <div className="aspect-video rounded-[30px] overflow-hidden shadow-xl">

              <iframe
                width="100%"
                height="100%"
                src={
                  recipe.strYoutube.replace(
                    'watch?v=',
                    'embed/'
                  )
                }
                title={recipe.strMeal}
                allowFullScreen
              />

            </div>

          </div>

        )}

      </div>

    </section>
  )
}

export default RecipeDetails