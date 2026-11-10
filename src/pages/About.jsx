const values = [
  { number: '01', title: 'Curiosity', description: 'We listen closely, ask thoughtful questions, and stay open to a better answer.' },
  { number: '02', title: 'Clarity', description: 'We make the complicated feel simple without losing the important details.' },
  { number: '03', title: 'Care', description: 'We bring good energy, honest advice, and attention to every part of the work.' },
]

function About() {
  return (
    <main>
      <section className="page-intro page-width">
        <p className="eyebrow"><span className="eyebrow-dot" /> About Fieldnote</p>
        <h1>Good work begins with <em>good questions.</em></h1>
        <p className="page-lede">We are an independent creative studio for people building something that matters.</p>
      </section>

      <section className="story-section page-width two-column-section">
        <div className="section-label"><span>01</span><p>Our story</p></div>
        <div className="story-content">
          <h2>A small studio for <em>big turning points.</em></h2>
          <p>Fieldnote began in 2018 with a simple idea: thoughtful creative work should be a close collaboration, not a complicated process. We brought together strategists, designers, and writers who care as much about the why as the what.</p>
          <p>Today, we partner with growing businesses and purpose-led teams at the moments that matter—when it is time to find a sharper story, build a stronger identity, or make a confident change.</p>
        </div>
      </section>

      <section className="mission-section">
        <div className="page-width mission-grid">
          <div><p className="eyebrow">Our mission</p><h2>Make good ideas easier to <em>see and share.</em></h2></div>
          <div><p className="eyebrow">Our vision</p><h2>A world where thoughtful brands make a more <em>meaningful mark.</em></h2></div>
        </div>
      </section>

      <section className="values-section page-width">
        <div className="section-heading">
          <div><p className="eyebrow">What guides us</p><h2>Our values, <em>in practice.</em></h2></div>
          <p>The principles behind every good partnership.</p>
        </div>
        <div className="values-list">
          {values.map((value) => (
            <article className="value-row" key={value.number}>
              <span className="card-number">{value.number}</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
              <span className="value-mark" aria-hidden="true">+</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default About
