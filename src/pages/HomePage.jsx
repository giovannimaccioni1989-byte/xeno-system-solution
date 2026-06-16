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
      <div className="market-ticker">
        <div className="market-ticker-track">
          <span>EUR/USD <strong>1.0842</strong> <em className="up">▲ 0.18%</em></span>
          <span>XAU/USD <strong>2,345.80</strong> <em className="up">▲ 0.42%</em></span>
          <span>NASDAQ <strong>18,920</strong> <em className="up">▲ 0.31%</em></span>
          <span>US30 <strong>39,840</strong> <em className="down">▼ 0.12%</em></span>
          <span>DAX <strong>18,450</strong> <em className="up">▲ 0.22%</em></span>
          <span>GBP/USD <strong>1.2675</strong> <em className="down">▼ 0.08%</em></span>

          <span>EUR/USD <strong>1.0842</strong> <em className="up">▲ 0.18%</em></span>
          <span>XAU/USD <strong>2,345.80</strong> <em className="up">▲ 0.42%</em></span>
          <span>NASDAQ <strong>18,920</strong> <em className="up">▲ 0.31%</em></span>
          <span>US30 <strong>39,840</strong> <em className="down">▼ 0.12%</em></span>
          <span>DAX <strong>18,450</strong> <em className="up">▲ 0.22%</em></span>
          <span>GBP/USD <strong>1.2675</strong> <em className="down">▼ 0.08%</em></span>
        </div>
      </div> 
           
      <section className="home-hero-banner">
        <img
          src="/Logo.png"
          alt="Xeno System Solution"
          className="home-logo-banner"
        />

        <div className="home-hero-content">
          <div className="hero-eyebrow">
            QUANTITATIVE TRADING TECHNOLOGY
          </div>
          
          <h1>Intelligent Trading Systems Built for Long-Term Performance</h1>

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

        <div className="home-video-list">
          <article className="info-card media-card">
            <h3>Artificial Intelligence</h3>
            <p>
              Artificial intelligence is the analytical foundation behind Xeno System Solution. Our systems are designed to process market conditions with structured logic, helping identify higher-quality opportunities while reducing emotional and discretionary decision-making.
            </p>
            <video
              src="/videos/xeno-ai.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="home-media"
            />
            
          </article>

          <article className="info-card media-card">
            <h3>Algorithmic Trading</h3>
            <p>
              Algorithmic trading allows each Expert Advisor to operate through predefined rules, consistent execution, and objective market interpretation. Every system is built to follow its logic with discipline, adapting to market structure without emotional interference.
            </p>
            <video
              src="/videos/xeno-trading.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="home-media"
            />
            
          </article>

          <article className="info-card media-card">
            <h3>Quantitative Strategy Core</h3>
            <p>
              At the center of every Expert Advisor there is a quantitative strategy framework based on mathematical logic, performance validation, and risk-aware execution. This approach supports long-term consistency and transparent evaluation of each system.
            </p>
            <video
              src="/videos/xeno-quantum.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="home-media"
            />
            
          </article>
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
          eyebrow="WHAT WE BUILD"
          title="Automated Trading Systems Designed for Professional Use"
          text="Xeno System Solution develops algorithmic trading systems focused on structured execution, verified performance presentation, and long-term portfolio compatibility."
        />

        <div className="grid three">
          <article className="info-card">
            <h3>Forex Expert Advisors</h3>
            <p>
              Automated systems designed to operate across multiple currency pairs with disciplined execution logic.
            </p>
          </article>

          <article className="info-card">
            <h3>Gold Trading Systems</h3>
            <p>
              Dedicated strategies built for high-value markets such as XAUUSD, with precision, timing, and risk awareness.
            </p>
          </article>

          <article className="info-card">
            <h3>Verified Performance Reports</h3>
            <p>
              Each system can be presented with equity curves, strategy statistics, and verified MyFxBook references.
            </p>
          </article>
        </div>

  <div className="hero-actions">
    <Link className="button primary" to="/expert-advisors">
      View Expert Advisors
    </Link>
  </div>
</section>

      <section className="content-section alt">
        <SectionTitle
          eyebrow="CONTACT"
          title="Interested in Our Trading Systems?"
          text="Contact Xeno System Solution through our official channels to receive more information about our Expert Advisors, verified performance data, and available solutions."
        />

        <div className="hero-actions">
          <Link className="button primary" to="/contacts">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
