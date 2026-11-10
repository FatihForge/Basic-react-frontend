import { Link } from 'react-router-dom'

const highlights = [
  {
    number: '01',
    title: 'Find your focus',
    description: 'Get clear on what makes your business matter—and who needs to hear it.',
  },
  {
    number: '02',
    title: 'Make it memorable',
    description: 'Turn your point of view into a brand people recognize and remember.',
  },
  {
    number: '03',
    title: 'Move with purpose',
    description: 'Build a practical plan that gives your next chapter real momentum.',
  },
]

function Home() {
  return (
    <main>
      <section className="home-hero page-width">
        <div className="hero-copy">
          <span className="eyebrow"><span className="eyebrow-dot" /> Independent creative studio</span>
          <h1>Good ideas deserve <em>good direction.</em></h1>
          <p>We help ambitious teams find their story, shape their brand, and make their next move with confidence.</p>
          <div className="hero-actions">
            <Link className="button button-dark" to="/services">Explore what we do <span aria-hidden="true">↗</span></Link>
            <Link className="text-link" to="/about">Get to know us <span aria-hidden="true">→</span></Link>
          </div>
          <div className="hero-note"><span className="note-line" /> Strategy, identity &amp; digital experiences</div>
        </div>
        <div className="hero-art" aria-label="Abstract illustration representing thoughtful creative work" role="img">
          <div className="art-sun" />
          <div className="art-shape art-shape-back" />
          <div className="art-shape art-shape-front" />
          <div className="art-caption"><span>MAKE SPACE</span><span>FOR WHAT&apos;S NEXT.</span></div>
          <span className="art-stamp">F / S<br />EST. 2018</span>
        </div>
      </section>

      <section className="intro-section page-width">
        <p className="eyebrow">A little more clarity</p>
        <div className="intro-grid">
          <h2>We make the complex feel <em>clear.</em></h2>
          <div>
            <p>When the world moves fast, a clear point of view is your best advantage. Fieldnote is a small, senior team that turns big questions into useful ideas and brands built to last.</p>
            <Link className="text-link" to="/about">A bit about our approach <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="highlights-section">
        <div className="page-width">
          <div className="section-heading">
            <div><p className="eyebrow">What we bring</p><h2>Small team. <em>Big-picture thinking.</em></h2></div>
            <p>Good work starts with asking better questions.</p>
          </div>
          <div className="highlight-grid">
            {highlights.map((item) => (
              <article className="highlight-card" key={item.number}>
                <span className="card-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="card-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-cta page-width">
        <div>
          <p className="eyebrow">Your next chapter starts here</p>
          <h2>Have a good question? <em>Let&apos;s find the answer.</em></h2>
        </div>
        <Link className="button button-light" to="/contact">Start a conversation <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  )
}

export default Home
