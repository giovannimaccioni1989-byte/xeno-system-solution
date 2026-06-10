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
    title: 'Precision',
    text: 'Every Expert Advisor is designed to operate only when predefined market conditions are met, avoiding unnecessary exposure and low-quality opportunities.',
  },
  {
    title: 'Risk Control',
    text: 'Risk management is integrated into the architecture of every system, helping maintain consistency across changing market environments.',
  },
  {
    title: 'Transparency',
    text: 'Performance data, equity curves, and verified MyFxBook references are presented clearly to provide objective insight into each strategy.',
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
          eyebrow="OUR PHILOSOPHY"
          title="Built Around Precision, Risk Control and Transparency"
          text="Every system developed by Xeno System Solution follows a structured methodology focused on market discipline, controlled risk exposure, and transparent performance presentation."
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
