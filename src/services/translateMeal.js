import { translateText } from './translate'

export async function translateMeal(meal) {

  const translatedMeal = {
    ...meal
  }

  translatedMeal.strMeal =
    await translateText(meal.strMeal)

  translatedMeal.strCategory =
    await translateText(meal.strCategory)

  translatedMeal.strArea =
    await translateText(meal.strArea)

  translatedMeal.strInstructions =
    await translateText(meal.strInstructions)

  // traducir ingredientes
  for (let i = 1; i <= 20; i++) {

    const ingredient =
      meal[`strIngredient${i}`]

    if (
      ingredient &&
      ingredient.trim() !== ''
    ) {

      translatedMeal[`strIngredient${i}`] =
        await translateText(ingredient)
    }
  }

  return translatedMeal
}