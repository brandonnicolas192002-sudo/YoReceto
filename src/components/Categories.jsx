import { useEffect, useState } from 'react'
import { getCategories } from '../api/mealdb'

function Categories() {

  const [categories, setCategories] = useState([])

  useEffect(() => {

    async function fetchCategories() {

      const data = await getCategories()

      setCategories(data)
    }

    fetchCategories()

  }, [])

  return (
    <section className="bg-white py-16">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-light text-center mb-14">
          Categorías
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">

          {categories.slice(0, 6).map((category) => (

            <div
              key={category.idCategory}
              className="flex flex-col items-center text-center group cursor-pointer"
            >

              <img
                src={category.strCategoryThumb}
                alt={category.strCategory}
                className="w-28 h-28 rounded-full object-cover shadow-lg group-hover:scale-110 transition-all duration-300"
              />

              <p className="mt-4 text-gray-700">
                {category.strCategory}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Categories