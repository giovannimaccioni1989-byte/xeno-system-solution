import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import { advisors } from '../data/advisors'

const highlights = [
  'Professional Expert Advisors for automated trading',
  'Quantitative logic and structured market execution',
  'Risk-aware systems designed for long-term consistency',
  'Transparent performance presentation through verified data',
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
      <section className="home-hero-banner">
        <img
          src="/Logo.png"
          alt="Xeno System Solution"
          className="home-logo-banner"
        />

        <div className="home-hero-content">
          <h1>Automated Trading Systems Built for Stability, Precision and Long-Term Vision</h1>

          <p>
            Professional Expert Advisors developed with structured logic, disciplined risk management,
            and transparent performance presentation.
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
      </section>

      <section className="content-section">
        <SectionTitle
          eyebrow="WHO WE ARE"
          title="Professional Algorithmic Trading Solutions"
          text="Xeno System Solution develops professional automated trading systems designed for traders who seek structure, discipline, and long-term consistency. Our Expert Advisors are built around quantitative logic, risk awareness, and transparent performance presentation."
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
