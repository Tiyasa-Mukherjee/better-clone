import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './MortgageCalculator.css'

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(200000)
const [downPayment, setDownPayment] = useState(40000)
  const [zip, setZip] = useState('421005')
  const [term, setTerm] = useState(30)
  const rate = 6.5

  const principal = homePrice - downPayment
  const monthlyRate = rate / 100 / 12
  const numPayments = term * 12
  const monthly = principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1)
  const monthlyDisplay = isNaN(monthly) ? 0 : Math.round(monthly)
  const tax = Math.round(homePrice * 0.0125 / 12)
  const insurance = 132
  const hoa = 132
  const total = monthlyDisplay + tax + insurance + hoa

  return (
    <div className="calculator">
      <Navbar dark={false} />
      <div className="calc-header"><h1>Estimate your monthly mortgage payments</h1></div>
      <div className="calc-main">
        <div className="calc-inputs">
          <div className="input-group">
            <label>Home price</label>
            <div className="input-wrap"><span>$</span><input type="number" value={homePrice} onChange={e => setHomePrice(Number(e.target.value))} /></div>
            <input type="range" min="50000" max="2000000" step="5000" value={homePrice} onChange={e => setHomePrice(Number(e.target.value))} className="slider" />
          </div>
          <div className="input-row">
            <div className="input-group">
              <label>Down payment</label>
              <div className="input-wrap"><span>$</span><input type="number" value={downPayment} onChange={e => setDownPayment(Number(e.target.value))} /></div>
            </div>
            <div className="input-group">
              <label>ZIP code</label>
              <div className="input-wrap"><input type="text" value={zip} onChange={e => setZip(e.target.value)} /></div>
            </div>
            <div className="input-group">
              <label>Loan term</label>
              <select value={term} onChange={e => setTerm(Number(e.target.value))} className="select-input">
                <option value={30}>30 years</option>
                <option value={20}>20 years</option>
                <option value={15}>15 years</option>
                <option value={10}>10 years</option>
              </select>
            </div>
          </div>
          <button className="get-preapproved">Get pre-approved</button>
        </div>
        <div className="calc-result">
          <span className="monthly-amount">${total.toLocaleString()}/mo</span>
          <div className="breakdown">
            <div className="breakdown-item"><span>Principal & interest</span><span>${monthlyDisplay.toLocaleString()}</span></div>
            <div className="breakdown-item"><span>Property taxes</span><span>${tax.toLocaleString()}</span></div>
            <div className="breakdown-item"><span>Homeowners insurance</span><span>${insurance}</span></div>
            <div className="breakdown-item"><span>HOA fees</span><span>${hoa}</span></div>
          </div>
        </div>
      </div>
      <div className="calc-steps">
        <h2>Simple steps to get pre-approved</h2>
        <div className="steps-grid">
          <div className="step"><span className="step-num">1</span><h3>Enter a few details</h3><p>Tell us about yourself, the home, and your finances.</p></div>
          <div className="step"><span className="step-num">2</span><h3>Share your homebuying budget</h3><p>We use your info to show you the loan options available to you.</p></div>
          <div className="step"><span className="step-num">3</span><h3>Get your pre-approval letter</h3><p>After a few questions, you'll receive your pre-approval letter in minutes.</p></div>
        </div>
      </div>
      <Footer />
    </div>
  )
}