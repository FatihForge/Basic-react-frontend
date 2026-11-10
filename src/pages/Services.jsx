import { Link } from 'react-router-dom'

const services = [
  {
    number: '01',
    title: 'Brand strategy',
    description: 'Get clear on your audience, your difference, and the story only you can tell.',
    details: ['Positioning & messaging', 'Audience research', 'Brand architecture'],
  },
  {
    number: '02',
    title: 'Visual identity',
    description: 'Create a distinctive visual world that feels like you and works everywhere.',
    details: ['Logo & identity systems', 'Art direction', 'Brand guidelines'],
  },
  {
    number: '03',
    title: 'Digital experiences',
    description: 'Bring your brand to life online with useful, considered digital touchpoints.',
    details: ['Website design', 'Content direction', 'Digital strategy'],
  },
]

const process = [
  { number: '01', title: 'Listen', description: 'We get to know your goals, your people, and what is getting in the way.' },
  { number: '02', title: 'Find the thread', description: 'Together, we turn what we learn into a clear direction and shared plan.' },
  { number: '03', title: 'Make it real', description: 'We create, refine, and launch the work—with your team at every step.' },
]

function Services() {
  return (
    <main>
      <section className="page-intro page-width">
        <p className="eyebrow"><span className="eyebrow-dot" /> How we can help</p>
        <h1>Clear thinking. <em>Considered making.</em></h1>
        <p className="page-lede">The right mix of strategy and creative to help you take your next step.</p>
      </section>

      <section className="services-section page-width">
        <div className="section-heading">
          <div><p className="eyebrow">Our services</p><h2>Built around <em>what you need.</em></h2></div>
          <p>Bring us a question, a challenge, or the start of an idea.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="card-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section">
        <div className="page-width">
          <div className="section-heading">
            <div><p className="eyebrow">A good way to work</p><h2>Clear steps, <em>good company.</em></h2></div>
            <p>Collaborative from the first conversation to the final details.</p>
          </div>
          <div className="process-grid">
            {process.map((step) => (
              <article className="process-step" key={step.number}>
                <span className="process-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-cta page-width">
        <div>
          <p className="eyebrow">Ready when you are</p>
          <h2>Let&apos;s make your next move <em>a good one.</em></h2>
        </div>
        <Link className="button button-light" to="/contact">Tell us what you need <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  )
}

export default Services
