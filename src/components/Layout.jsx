import { NavLink } from 'react-router-dom'

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
           <strong>Risk Disclaimer:</strong> Trading foreign exchange,
           commodities, indices, and other financial instruments involves
           substantial risk and may not be suitable for all investors.
         </p>

         <p>
           Past performance, whether verified or simulated, does not guarantee
           future results.
         </p>

         <p>
           Xeno System Solution does not provide financial advice,
           investment recommendations, or guarantees of profitability.
           All information, statistics, equity curves, and performance data
           displayed on this website are provided for informational purposes only.
         </p>

         <p>
           Users are solely responsible for their trading decisions and should
           carefully evaluate their financial situation and risk tolerance before
           using any automated trading system.
         </p>

         <p>© 2026 Xeno System Solution. All rights reserved.</p>
       </div>
      </footer>
    </div>
  )
}
