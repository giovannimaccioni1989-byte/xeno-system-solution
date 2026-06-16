import { NavLink, Link } from 'react-router-dom'

export default function Layout({ children }) {
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
          <span>EUR/USD <strong>1.0842</strong> <em className="up">▲ 0.18%</em></span>
          <span>XAU/USD <strong>2,345.80</strong> <em className="up">▲ 0.42%</em></span>
          <span>NASDAQ <strong>18,920</strong> <em className="up">▲ 0.31%</em></span>
          <span>US30 <strong>39,840</strong> <em className="down">▼ 0.12%</em></span>
          <span>DAX <strong>18,450</strong> <em className="up">▲ 0.22%</em></span>
          <span>GBP/USD <strong>1.2675</strong> <em className="down">▼ 0.08%</em></span>

          <span>EUR/USD <strong>1.0842</strong> <em className="up">▲ 0.18%</em></span>
          <span>XAU/USD <strong>2,345.80</strong> <em className="up">▲ 0.42%</em></span>
          <span>NASDAQ <strong>18,920</strong> <em className="up">▲ 0.31%</em></span>
          <span>US30 <strong>39,840</strong> <em className="down">▼ 0.12%</em></span>
          <span>DAX <strong>18,450</strong> <em className="up">▲ 0.22%</em></span>
          <span>GBP/USD <strong>1.2675</strong> <em className="down">▼ 0.08%</em></span>
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
