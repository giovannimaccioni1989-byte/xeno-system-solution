import SectionTitle from '../components/SectionTitle'

const contacts = [
  {
    title: 'WhatsApp',
    value: '+00 000 000 0000',
    note: 'Replace with your official business number.',
  },
  {
    title: 'Instagram',
    value: '@xenosystemsolution',
    note: 'Replace with your public brand profile.',
  },
  {
    title: 'Telegram',
    value: '@xenosystemsolution',
    note: 'Replace with your contact username or channel.',
  },
]

export default function ContactPage() {
  return (
    <section className="content-section">
      <SectionTitle
        eyebrow="CONTACTS"
        title="Let potential clients reach your brand directly"
        text="This page is ready for your business contact details. Replace the placeholders with your real WhatsApp, Instagram, and Telegram information."
      />

      <div className="grid three">
        {contacts.map((contact) => (
          <article className="info-card contact-card" key={contact.title}>
            <h3>{contact.title}</h3>
            <p className="contact-value">{contact.value}</p>
            <p>{contact.note}</p>
          </article>
        ))}
      </div>

      <div className="glass-card legal-note">
        <h3>Recommended additions before launch</h3>
        <p>
          Add a Privacy Policy, Terms and Conditions, and a detailed risk disclaimer suitable for algorithmic trading
          products. If you later want, the website can also include a request form, live account proof section, FAQ,
          and a downloadable brochure.
        </p>
      </div>
    </section>
  )
}
