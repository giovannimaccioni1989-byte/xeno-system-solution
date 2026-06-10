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

        <div className="advisor-detail-visual">
          <img src={advisor.detailImage} alt={advisor.name} />
        </div>
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
          <h2>Strategy Statistics</h2>
          
        </div>

        <div className="performance-grid">
          <div className="performance-card">
            <span>Annual Return</span>
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
          <div className="chart-caption">Equity Curve</div>
          <img
            className="equity-chart-image"
            src={advisor.equityImage}
            alt={`${advisor.name} equity curve`}
          />
        </div>
      </section>

      {advisor.myfxbookLink && (
        <section className="detail-card">
          <h2 className="myfxbook-title">
            <img src="/icons/MyFxBook Logo.png" alt="MyFxBook" />
            Live Signal
          </h2>

          <p>
            View the live verified trading account statistics directly on MyFxBook.
          </p>

          <a
            href={advisor.myfxbookLink}
            target="_blank"
            rel="noopener noreferrer"
            className="button primary"
          >
            MyFxBook
          </a>
        </section>
      )}
      
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
