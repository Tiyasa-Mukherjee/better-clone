import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import MortgageCalculator from './pages/MortgageCalculator'
import Start from './pages/Start'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/mortgage-calculator" element={<MortgageCalculator />} />
        <Route path="/start" element={<Start />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App