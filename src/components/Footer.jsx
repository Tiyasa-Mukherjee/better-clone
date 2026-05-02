import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h3 className="footer-logo">Better</h3>
          <p>Better is a family of companies serving all your homeownership needs.</p>
          <div className="footer-sub">
            <p><strong>Better Mortgage</strong> — Apply 100% online, with expert customer support.</p>
            <p><strong>Better Real Estate</strong> — Connect with a local Partner Agent.</p>
            <p><strong>Better Cover</strong> — Shop, bundle, and save on insurance.</p>
          </div>
        </div>
        <div className="footer-col">
          <h4>Resources</h4>
          <a href="#">Home affordability calculator</a>
          <a href="#">Mortgage calculator</a>
          <a href="#">Rent vs buy calculator</a>
          <a href="#">Buy a home</a>
          <a href="#">Sell a home</a>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <Link to="/about-us">About Us</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/media">Media</Link>
          <Link to="/partner-with-us">Partner With Us</Link>
          <Link to="/faqs">FAQs</Link>
        </div>
        <div className="footer-col">
          <h4>Contact Us</h4>
          <a href="#">hello@better.com</a>
          <a href="#">415-523-8837</a>
          <a href="#">FAQ</a>
          <h4 style={{marginTop: '16px'}}>Legal</h4>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-use">Terms of Use</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Better Home & Finance Holding Company and/or its affiliates.</p>
      </div>
    </footer>
  )
}