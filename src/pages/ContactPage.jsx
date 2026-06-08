import SectionTitle from '../components/SectionTitle'

const contacts = [
  {
    title: 'WhatsApp',
    value: '+00 000 000 0000',
    note: 'Replace with your official business number.',
  },
  {
    title: 'Instagram',
    value: 'Instagram',
    link: 'https://www.instagram.com/xenosystemsolution?igsh=MWFsdTMwYTM2eDB2Nw%3D%3D&utm_source=qr',
    note: 'Follow our official Instagram profile!',
  },
  {
    title: 'Telegram',
    value: 'Telegram',
    link: 'https://t.me/+akW2xvJttoM2Y2I0',
    note: 'Join our official Telegram channel!',
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
            <a
              className="contact-value"
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.value}
            </a>
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
