import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Layout({ children }) {
  const fallbackTicker = [
    { symbol: 'AAPL', price: '300.21', change: 0.32 },
    { symbol: 'MSFT', price: '495.80', change: 0.21 },
    { symbol: 'NVDA', price: '182.45', change: 0.74 },
    { symbol: 'TSLA', price: '421.30', change: -0.18 },
    { symbol: 'AMZN', price: '232.10', change: 0.11 },
    { symbol: 'SPY', price: '612.40', change: 0.28 },
    { symbol: 'QQQ', price: '548.90', change: 0.35 },
    { symbol: 'DIA', price: '456.20', change: -0.07 },
  ]

  const [tickerData, setTickerData] = useState(fallbackTicker)

  useEffect(() => {
    async function loadTicker() {
      try {
        const response = await fetch('/api/market-ticker')
        const data = await response.json()

        if (Array.isArray(data) && data.length > 0) {
          setTickerData(data)
        }
      } catch (error) {
        setTickerData(fallbackTicker)
      }
    }

    loadTicker()
    const interval = setInterval(loadTicker, 60000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="site-shell">
      <header className="topbar">
        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/expert-advisors">Expert Advisors</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
        </nav>
      </header>

      <div className="market-ticker">
        <div className="market-ticker-track">
          {[...tickerData, ...tickerData].map((item, index) => (
            <span key={`${item.symbol}-${index}`}>
              {item.symbol} <strong>{item.price}</strong>{' '}
              <em className={Number(item.change) >= 0 ? 'up' : 'down'}>
                {Number(item.change) >= 0 ? '▲' : '▼'}{' '}
                {Math.abs(Number(item.change)).toFixed(2)}%
              </em>
            </span>
          ))}
        </div>
      </div>

      <main>{children}</main>

      <footer className="footer">
        <div>
          <strong>Xeno System Solution</strong>
          <p>
            Automated trading systems designed for structure, discipline, and professional presentation.
          </p>
        </div>

        <div className="footer-note">
          <p>
            <Link to="/risk-disclaimer">
              Risk Disclaimer
            </Link>
          </p>

          <p>
            <Link to="/privacy-policy">
              Privacy Policy
            </Link>
          </p>

          <p>
            <Link to="/terms-conditions">
              Terms & Conditions
            </Link>
          </p>

          <p>
            © 2026 Xeno System Solution. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
