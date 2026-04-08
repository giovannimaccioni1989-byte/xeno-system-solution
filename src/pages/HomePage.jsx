import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import { advisors } from '../data/advisors'

const highlights = [
  'Corporate-grade presentation for automated trading systems',
  'Structured product pages for every Expert Advisor',
  'Performance section designed for trust and clarity',
  'Built to support premium positioning and client inquiries',
]

const values = [
  {
    title: 'Systematic Thinking',
    text: 'We position our trading solutions around structure, discipline, and repeatable logic instead of emotional decision-making.',
  },
  {
    title: 'Professional Communication',
    text: 'Every product is presented with clarity so visitors can understand the value, positioning, and operating profile of each system.',
  },
  {
    title: 'Scalable Brand Identity',
    text: 'The site layout is designed to grow with your business, allowing additional systems, results, or client areas later on.',
  },
]

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">AUTOMATED TRADING SOLUTIONS</span>
          <h1>Algorithmic systems presented with corporate clarity.</h1>
          <p>
            Xeno System Solution is a professional brand for Expert Advisors built to communicate structure,
            confidence, and long-term credibility in the automated trading space.
          </p>
          <div className="hero-actions">
            <Link className="button primary" to="/expert-advisors">
              Explore Expert Advisors
            </Link>
            <Link className="button secondary" to="/contacts">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="hero-card glass-card">
          <div className="mini-chart" />
          <div className="metrics-grid">
            <div>
              <span>Systems</span>
              <strong>8</strong>
            </div>
            <div>
              <span>Presentation</span>
              <strong>Corporate</strong>
            </div>
            <div>
              <span>Language</span>
              <strong>English</strong>
            </div>
            <div>
              <span>Performance</span>
              <strong>Included</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <SectionTitle
          eyebrow="ABOUT THE COMPANY"
          title="A serious digital presence for a serious trading brand."
          text="The website is designed to help potential clients understand who you are, what your systems do, and why your offer deserves attention."
        />

        <div className="grid four">
          {highlights.map((item) => (
            <div className="info-card" key={item}>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section alt">
        <SectionTitle
          eyebrow="WHY XENO"
          title="Built for trust, positioning, and expansion."
          text="This site structure gives you a premium base today, while leaving room for future additions like client dashboards, live verified accounts, or request forms."
        />

        <div className="grid three">
          {values.map((value) => (
            <article className="info-card" key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <SectionTitle
          eyebrow="EXPERT ADVISORS"
          title="An organized lineup of eight automated systems."
          text="Each system has its own dedicated page with overview, feature highlights, strategy summary, visual blocks, and performance metrics."
        />

        <div className="grid four">
          {advisors.map((advisor) => (
            <Link className="advisor-card" key={advisor.slug} to={`/expert-advisors/${advisor.slug}`}>
              <div className="advisor-visual" />
              <span className="tag">{advisor.category}</span>
              <h3>{advisor.name}</h3>
              <p>{advisor.shortDescription}</p>
              <span className="read-more">View system details</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="content-section alt disclaimer-box">
        <SectionTitle
          eyebrow="IMPORTANT"
          title="Risk communication should be part of your final published version."
          text="This demo already includes a basic risk disclaimer. For the live website, you should also add a Privacy Policy, Terms and Conditions, and any regulatory language appropriate to your business model and jurisdiction."
        />
      </section>
    </>
  )
}
