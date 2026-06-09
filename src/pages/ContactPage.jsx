import SectionTitle from '../components/SectionTitle'

const contacts = [
  {
    title: 'Facebook',
    value: '/icons/FacebookXenoLogo.png',
    link: 'https://www.facebook.com/profile.php?id=61589586211885&locale=it_IT',
    note: 'Follow our official Facebook profile!',
  },
  {
    title: 'Instagram',
    value: '/icons/InstagramXenoLogo.png',
    link: 'https://www.instagram.com/xenosystemsolution?igsh=MWFsdTMwYTM2eDB2Nw%3D%3D&utm_source=qr',
    note: 'Follow our official Instagram profile!',
  },
  {
    title: 'Telegram',
    value: '/icons/TelegramXenoLogo.png',
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
              <img
                src={contact.value}
                alt={contact.title}
                style={{ width: '64px', height: '64px' }}
              />
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
