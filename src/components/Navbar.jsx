import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar({ dark = false }) {
  return (
    <nav className={`navbar ${dark ? 'navbar-dark' : 'navbar-light'}`}>
      <Link to="/" className="navbar-logo">Better</Link>
      <div className="navbar-links">
        <Link to="/">Buy</Link>
        <Link to="/">Refinance</Link>
        <Link to="/">Home Equity</Link>
        <Link to="/mortgage-calculator">Rates</Link>
        <Link to="/">Better+</Link>
      </div>
      <div className="navbar-actions">
        <span className="phone-icon">📞</span>
        <Link to="/" className="signin">Sign in</Link>
        <Link to="/start" className="btn-started">Get started</Link>
      </div>
    </nav>
  )
}