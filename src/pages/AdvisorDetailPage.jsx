import { Link, useParams } from 'react-router-dom'
import { advisors } from '../data/advisors'

export default function AdvisorDetailPage() {
  const { slug } = useParams()
  const advisor = advisors.find((item) => item.slug === slug)

  if (!advisor) {
    return (
      <section className="content-section">
        <h1>Advisor not found</h1>
        <p>The requested Expert Advisor page does not exist.</p>
        <Link className="button primary" to="/expert-advisors">
          Back to catalog
        </Link>
      </section>
    )
  }

  return (
    <section className="advisor-detail-page">
      <div className="advisor-hero glass-card">
        <div>
          <span className="eyebrow">EXPERT ADVISOR</span>
          <h1>{advisor.name}</h1>
          <p className="lead">{advisor.overview}</p>
          <span className="tag big">{advisor.category}</span>
        </div>
        <div className="advisor-detail-visual" />
      </div>

      <div className="detail-grid">
        <article className="detail-card">
          <h2>Key Features</h2>
          <ul>
            {advisor.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </article>

        <article className="detail-card">
          <h2>Operating Profile</h2>
          <ul>
            {advisor.strategy.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      </div>

      <section className="performance-section">
        <div className="section-title left">
          <span className="eyebrow">PERFORMANCE SECTION</span>
          <h2>Illustrative metrics presentation</h2>
          <p>
            These values are placeholder examples to show the visual structure of the website. Replace them with your
            real backtest or live account statistics before publishing.
          </p>
        </div>

        <div className="performance-grid">
          <div className="performance-card">
            <span>Return</span>
            <strong>{advisor.performance.returnRate}</strong>
          </div>
          <div className="performance-card">
            <span>Max Drawdown</span>
            <strong>{advisor.performance.maxDrawdown}</strong>
          </div>
          <div className="performance-card">
            <span>Win Rate</span>
            <strong>{advisor.performance.winRate}</strong>
          </div>
          <div className="performance-card">
            <span>Profit Factor</span>
            <strong>{advisor.performance.profitFactor}</strong>
          </div>
        </div>

        <div className="performance-chart glass-card">
          <div className="chart-caption">Performance chart placeholder</div>
          <div className="chart-area">
            <span className="chart-line" />
          </div>
        </div>
      </section>

      <section className="contact-cta glass-card">
        <div>
          <span className="eyebrow">NEXT STEP</span>
          <h2>Interested in {advisor.name}?</h2>
          <p>Use the contact page to add your WhatsApp, Instagram, and Telegram details for client inquiries.</p>
        </div>
        <Link className="button primary" to="/contacts">
          Go to Contacts
        </Link>
      </section>
    </section>
  )
}
