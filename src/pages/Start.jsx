import { Link } from 'react-router-dom'
import './Start.css'

export default function Start() {
  return (
    <div className="start">
      <div className="start-header">
        <Link to="/" className="start-logo">
          <span className="logo-text">Better</span>
          <span className="logo-sub">Mortgage</span>
        </Link>
        <span className="phone-btn">📞</span>
      </div>
      <div className="start-content">
        <div className="betsy-icon">🏠</div>
        <h1>Hi, I'm Betsy!<br />What can I help you with?</h1>
        <div className="start-options">
          <Link to="/" className="start-option"><span className="option-icon">💲</span><span>Buy a home</span></Link>
          <Link to="/" className="start-option"><span className="option-icon">🏡</span><span>Refinance my mortgage</span></Link>
          <Link to="/" className="start-option"><span className="option-icon">💰</span><span>Get cash from my home</span></Link>
        </div>
        <p className="already-link">Already have an application? <Link to="/" className="click-link">Click here →</Link></p>
        <div className="unlock-box">
          <p>After a few questions, you'll unlock:</p>
          <div className="unlock-items">
            <div className="unlock-item">✅ Custom mortgage rates</div>
            <div className="unlock-item">✅ Exclusive offers</div>
            <div className="unlock-item">✅ A personalized dashboard</div>
          </div>
        </div>
      </div>
      <footer className="start-footer">
        <div className="start-footer-content">
          <div>
            <strong>Better</strong>
            <p>Better Mortgage Corporation is a direct lender dedicated to providing a fast, transparent digital mortgage experience.</p>
          </div>
          <div className="start-footer-links">
            <div>
              <h4>Contact Us</h4>
              <a href="#">hello@better.com</a>
              <a href="#">415-523-8837</a>
              <a href="#">FAQ</a>
            </div>
            <div>
              <h4>Legal</h4>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
              <a href="#">Disclosures & Licensing</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}