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
            <Link to="/risk-disclaimer">
              Risk Disclaimer
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
