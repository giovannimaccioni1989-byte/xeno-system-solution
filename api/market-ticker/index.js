export default async function handler(req, res) {
  const apiKey = process.env.FINNHUB_API_KEY

  return res.status(200).json({
    apiKeyExists: !!apiKey,
    apiKeyLength: apiKey ? apiKey.length : 0
  })
}
