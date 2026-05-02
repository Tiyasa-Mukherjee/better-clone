import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './About.css'

const timeline = [
  { year: '2014', text: 'Vishal Garg started Better after struggling through the mortgage process when buying his first home.' },
  { year: '2015', text: 'Better Mortgage funds its first mortgage entirely online.' },
  { year: '2016', text: 'Better Mortgage becomes a Fannie Mae approved seller in electronic submission.' },
  { year: '2017', text: 'Better acquires into the automated model with Better Real Estate.' },
  { year: '2018', text: 'Better Mortgage partners with Ally Bank to offer digital mortgages.' },
  { year: '2019', text: 'Better Mortgage launches its pilot program as the first lender to offer One Day Mortgage experience.' },
  { year: '2022', text: 'Better Mortgage becomes the first fintech to offer mortgage approval in as little as 3 minutes.' },
  { year: '2023', text: 'Better Mortgage launches One Day Mortgage — commitment letter in 24 hours.' },
  { year: 'Today', text: 'You become part of the story by joining our team. We are a better company because of you.' },
]

export default function About() {
  return (
    <div className="about">
      <Navbar dark={false} />
      <section className="about-mission">
        <p className="mission-label">Our mission</p>
        <h1>We're making homeownership simpler, faster — and most importantly, more accessible for all Americans.</h1>
      </section>
      <section className="about-status">
        <div className="status-content">
          <h2>The status quo is broken</h2>
          <p>Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion. Yet home finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests are misaligned with consumers.</p>
          <button className="read-btn">Read Vishal's story</button>
        </div>
        <div className="founder-placeholder"><span>Founder's Story</span></div>
      </section>
      <section className="about-changing">
        <h2>How we're changing things</h2>
        <p>That's why Better.ai is redefining the homeownership process from the ground up. We're using technology to make it faster and more efficient, and humans to help make it friendly and enjoyable.</p>
      </section>
      <section className="about-backers">
        <h3>Backed by</h3>
        <div className="backers-list">
          {['SoftBank','ally','citi','MUFG','Goldman Sachs','KPCB','American Express'].map(b => (
            <span key={b} className="backer">{b}</span>
          ))}
        </div>
      </section>
      <section className="about-timeline">
        <h2>Company timeline</h2>
        <div className="timeline">
          {timeline.map((item, i) => (
            <div key={i} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-text">{item.text}</div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}