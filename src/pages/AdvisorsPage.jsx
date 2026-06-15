import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import { advisors } from '../data/advisors'

export default function AdvisorsPage() {
  return (
    <section className="content-section advisors-page">
      <div className="elite-title">
      
      </div>
      <div className="grid four">
        {advisors.map((advisor) => (
          <Link className="advisor-card" key={advisor.slug} to={`/expert-advisors/${advisor.slug}`}>
            <div className="advisor-visual">
              <img src={advisor.cardImage} alt={advisor.name} />
            </div>
            <span className="platform-tag">{advisor.platform}</span>
            <span className="tag">{advisor.category}</span>
            <h3>{advisor.name}</h3>
            <p>{advisor.shortDescription}</p>
            <span className="read-more">Details</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
