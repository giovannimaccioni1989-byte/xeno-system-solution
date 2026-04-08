import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import { advisors } from '../data/advisors'

export default function AdvisorsPage() {
  return (
    <section className="content-section advisors-page">
      <SectionTitle
        eyebrow="PRODUCT CATALOG"
        title="Explore the Xeno System Solution Expert Advisors"
        text="Select any system to view its overview, feature set, operating profile, and performance presentation."
      />

      <div className="grid four">
        {advisors.map((advisor) => (
          <Link className="advisor-card" key={advisor.slug} to={`/expert-advisors/${advisor.slug}`}>
            <div className="advisor-visual" />
            <span className="tag">{advisor.category}</span>
            <h3>{advisor.name}</h3>
            <p>{advisor.shortDescription}</p>
            <span className="read-more">Open advisor page</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
