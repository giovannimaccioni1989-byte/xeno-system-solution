export default async function handler(req, res) {
  const apiKey = process.env.FINNHUB_API_KEY

  const fallbackData = [
    { symbol: 'AAPL', price: '300.21', change: 0.32 },
    { symbol: 'MSFT', price: '495.80', change: 0.21 },
    { symbol: 'NVDA', price: '182.45', change: 0.74 },
    { symbol: 'TSLA', price: '421.30', change: -0.18 },
    { symbol: 'AMZN', price: '232.10', change: 0.11 },
    { symbol: 'SPY', price: '612.40', change: 0.28 },
    { symbol: 'QQQ', price: '548.90', change: 0.35 },
    { symbol: 'DIA', price: '456.20', change: -0.07 },
  ]

  const symbols = ['AAPL', 'MSFT', 'NVDA', 'TSLA', 'AMZN', 'SPY', 'QQQ', 'DIA']

  if (!apiKey) {
    return res.status(200).json(fallbackData)
  }

  try {
    const results = await Promise.all(
      symbols.map(async (symbol) => {
        const response = await fetch(
          `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`
        )

        const data = await response.json()

        if (!data || !data.c || data.c === 0) {
          return null
        }

        return {
          symbol,
          price: formatPrice(data.c),
          change: Number(data.dp || 0).toFixed(2),
        }
      })
    )

    const cleanResults = results.filter(Boolean)

    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300')

    if (cleanResults.length === 0) {
      return res.status(200).json(fallbackData)
    }

    return res.status(200).json(cleanResults)
  } catch (error) {
    return res.status(200).json(fallbackData)
  }
}

function formatPrice(value) {
  if (!value) return '-'

  return Number(value).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}
