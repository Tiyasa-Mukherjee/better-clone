import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <div className="home-hero">
        <Navbar dark={true} />
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="betsy-text">Ask Betsy</span>™ AI
          </h1>
          <p className="hero-subtitle">The industry's first AI mortgage advisor</p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">$110B+</span>
              <span className="stat-label">funded loans</span>
            </div>
            <div className="stat">
              <span className="stat-value">600k</span>
              <span className="stat-label">customers served</span>
            </div>
          </div>
          <div className="hero-search">
            <div className="search-bar">
              <span className="search-icon">🏠</span>
              <input type="text" placeholder="I want to lower my monthly payment, should I refinance my mortgage?" />
              <button className="mic-btn">🎤</button>
            </div>
            <div className="quick-actions">
              <Link to="/start" className="quick-btn">→ Start my pre-approval</Link>
              <Link to="/start" className="quick-btn">↓ Lower my rate</Link>
              <Link to="/start" className="quick-btn">↑ Start saving</Link>
              <Link to="/start" className="quick-btn">💵 Get cash</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="home-services">
        <div className="services-grid">
          <div className="service-card"><h3><span className="better-green">Better</span> Mortgage</h3><p>We can't wait to say "Welcome home." Apply 100% online, with expert customer support.</p></div>
          <div className="service-card"><h3><span className="better-green">Better</span> Real Estate</h3><p>Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.</p></div>
          <div className="service-card"><h3><span className="better-green">Better</span> Cover</h3><p>Shop, bundle, and save on insurance coverage for home, auto, life, and more.</p></div>
          <div className="service-card"><h3><span className="better-green">Better</span> Inspect</h3><p>Get free repair estimates, 24-hour turnarounds on reports, and our 100-day inspection guarantee.</p></div>
          <div className="service-card"><h3><span className="better-green">Better</span> Settlement Services</h3><p>Get transparent rates when you shop for title insurance all in one convenient place.</p></div>
        </div>
      </div>
      <Footer />
    </div>
  )
}