export default async function handler(req, res) {
  const apiKey = process.env.FINNHUB_API_KEY

  try {
    const response = await fetch(
      `https://finnhub.io/api/v1/quote?symbol=AAPL&token=${apiKey}`
    )

    const data = await response.json()

    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json({
      error: error.message
    })
  }
}
