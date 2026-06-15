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
        title="Official Contact Channels"
        text="Connect with us through our official channels for Expert Advisor information, performance updates, and support requests."
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

      <div className="glass-card trial-offer">
        <h3>Exclusive Trial Program</h3>

        <p>
          Experience our automated trading systems with no upfront commitment.
          We offer a <strong>6-month free trial period</strong>, allowing you
          to evaluate performance, stability, and operational consistency under
          real market conditions.
        </p>

        <p>
          For additional information and access details, please contact us
          through our official Telegram channel.
        </p>
      </div>
      
      <div className="glass-card legal-note contact-note">
        
        <p>
          Need more information?
          For details about Expert Advisors, performance data, or collaboration opportunities, contact us through one of the official channels above.
        </p>
      </div>
    </section>
  )
}
