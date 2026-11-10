import { useState } from 'react'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <main>
      <section className="page-intro page-width">
        <p className="eyebrow"><span className="eyebrow-dot" /> Get in touch</p>
        <h1>Tell us what you&apos;re <em>thinking about.</em></h1>
        <p className="page-lede">A new idea, a tricky question, or just a hello—we would love to hear from you.</p>
      </section>

      <section className="contact-info-section page-width">
        <div className="section-heading">
          <div><p className="eyebrow">Reach the studio</p><h2>We&apos;re all <em>ears.</em></h2></div>
          <p>Prefer a direct line? Here are a few ways to find us.</p>
        </div>
        <div className="contact-details-grid">
          <article className="contact-detail"><span className="detail-icon" aria-hidden="true">@</span><p>Email</p><a href="mailto:hello@fieldnotestudio.com">hello@fieldnotestudio.com</a></article>
          <article className="contact-detail"><span className="detail-icon" aria-hidden="true">↗</span><p>Phone</p><a href="tel:+14155550184">+1 (415) 555-0184</a></article>
          <article className="contact-detail"><span className="detail-icon" aria-hidden="true">⌖</span><p>Studio</p><address>548 Market Street, Suite 320<br />San Francisco, CA 94104</address></article>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="page-width contact-form-layout">
          <div className="form-aside">
            <p className="eyebrow">Start a conversation</p>
            <h2>What would you like to <em>make possible?</em></h2>
            <p>Share a little about what you have in mind. We&apos;ll get back to you within two working days.</p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit} onChange={() => setSubmitted(false)}>
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" autoComplete="name" placeholder="Your name" required />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
            </div>
            <div className="form-field">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" type="text" placeholder="What can we help with?" required />
            </div>
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="A few details about your project..." required />
            </div>
            <div className="form-submit-row">
              <button className="button button-dark" type="submit">Send your message <span aria-hidden="true">↗</span></button>
              {submitted && <p className="success-message" role="status">Thanks for reaching out. We&apos;ll be in touch soon.</p>}
            </div>
          </form>
        </div>
      </section>

      <section className="office-section page-width">
        <div><p className="eyebrow">A note on timing</p><h2>Good things happen <em>during office hours.</em></h2></div>
        <div className="office-hours"><p>Monday – Friday</p><strong>9:00 am – 5:00 pm PT</strong><span>We typically reply within two working days.</span></div>
      </section>
    </main>
  )
}

export default Contact
