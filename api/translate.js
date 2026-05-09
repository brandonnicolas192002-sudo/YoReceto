/* export default async function handler(req, res) {

  try {

    const { text } = req.body

    const response = await fetch(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=es&dt=t&q=${encodeURIComponent(text)}`
    )

    const data = await response.json()

    const translatedText =
      data[0]
        .map(item => item[0])
        .join("")

    res.status(200).json({
      translatedText
    })

  } catch (error) {

    res.status(500).json({
      error: error.message
    })

  }
} */